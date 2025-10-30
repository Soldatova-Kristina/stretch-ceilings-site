import { readdir, stat, readFile, writeFile } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const DEFAULT_INPUT_DIR = join(__dirname, '../public/images');
const DEFAULT_QUALITY = 80;
const LOSSLESS_QUALITY = 100;

// Supported formats for conversion
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png'];

// Color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
};

// Parse command line arguments
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    input: DEFAULT_INPUT_DIR,
    quality: DEFAULT_QUALITY,
    lossless: false,
    dryRun: false,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--input' && args[i + 1]) {
      options.input = args[++i];
    } else if (arg === '--quality' && args[i + 1]) {
      options.quality = parseInt(args[++i], 10);
    } else if (arg === '--lossless') {
      options.lossless = true;
    } else if (arg === '--dry-run') {
      options.dryRun = true;
    }
  }

  return options;
}

// Statistics tracker
class ConversionStats {
  constructor() {
    this.total = 0;
    this.converted = 0;
    this.skipped = 0;
    this.failed = 0;
    this.sizeSavings = 0;
    this.originalSize = 0;
    this.newSize = 0;
    this.files = [];
  }

  addConversion(originalPath, webpPath, originalSize, webpSize) {
    this.total++;
    this.converted++;
    this.sizeSavings += (originalSize - webpSize);
    this.originalSize += originalSize;
    this.newSize += webpSize;
    
    const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(2);
    this.files.push({
      original: basename(originalPath),
      webp: basename(webpPath),
      originalSize: this.formatBytes(originalSize),
      webpSize: this.formatBytes(webpSize),
      savings: `${savings}%`,
    });
  }

  addSkipped() {
    this.total++;
    this.skipped++;
  }

  addFailed() {
    this.total++;
    this.failed++;
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  print() {
    console.log(`\n${colors.bright}=== Conversion Report ===${colors.reset}`);
    console.log(`Total files processed: ${this.total}`);
    console.log(`${colors.green}✓ Converted: ${this.converted}${colors.reset}`);
    console.log(`${colors.yellow}○ Skipped: ${this.skipped}${colors.reset}`);
    console.log(`${colors.red}✗ Failed: ${this.failed}${colors.reset}`);
    
    if (this.converted > 0) {
      const totalSavings = ((this.sizeSavings / this.originalSize) * 100).toFixed(2);
      console.log(`\nOriginal total size: ${this.formatBytes(this.originalSize)}`);
      console.log(`New total size: ${this.formatBytes(this.newSize)}`);
      console.log(`${colors.green}Total savings: ${this.formatBytes(this.sizeSavings)} (${totalSavings}%)${colors.reset}`);
    }

    if (this.files.length > 0 && this.files.length <= 20) {
      console.log(`\n${colors.bright}Converted Files:${colors.reset}`);
      this.files.forEach(file => {
        console.log(`  ${file.original} → ${file.webp}`);
        console.log(`    ${file.originalSize} → ${file.webpSize} (saved ${file.savings})`);
      });
    }
  }
}

// Check if WebP already exists
async function webpExists(sourcePath) {
  const webpPath = sourcePath.replace(extname(sourcePath), '.webp');
  try {
    await stat(webpPath);
    return true;
  } catch {
    return false;
  }
}

// Get image metadata
async function getImageMetadata(imagePath) {
  try {
    const metadata = await sharp(imagePath).metadata();
    return {
      width: metadata.width,
      height: metadata.height,
      format: metadata.format,
      hasAlpha: metadata.hasAlpha,
    };
  } catch (error) {
    throw new Error(`Failed to read metadata: ${error.message}`);
  }
}

// Convert image to WebP
async function convertToWebP(sourcePath, options, stats) {
  const ext = extname(sourcePath).toLowerCase();
  
  // Skip if not a supported format
  if (!SUPPORTED_FORMATS.includes(ext)) {
    return;
  }

  // Skip if WebP already exists
  if (await webpExists(sourcePath)) {
    console.log(`${colors.yellow}○ Skipped (WebP exists): ${basename(sourcePath)}${colors.reset}`);
    stats.addSkipped();
    return;
  }

  try {
    // Get source metadata
    const sourceMetadata = await getImageMetadata(sourcePath);
    const sourceStats = await stat(sourcePath);
    const sourceSize = sourceStats.size;

    // Determine conversion settings
    let quality = options.quality;
    let lossless = options.lossless;

    // Force lossless for PNG with alpha
    if (sourceMetadata.hasAlpha && sourceMetadata.format === 'png') {
      lossless = true;
      quality = LOSSLESS_QUALITY;
    }

    // Skip very small files (likely icons)
    if (sourceSize < 10 * 1024) { // 10KB
      console.log(`${colors.yellow}○ Skipped (too small): ${basename(sourcePath)} (${stats.formatBytes(sourceSize)})${colors.reset}`);
      stats.addSkipped();
      return;
    }

    const webpPath = sourcePath.replace(ext, '.webp');

    if (options.dryRun) {
      console.log(`${colors.blue}[DRY RUN] Would convert: ${basename(sourcePath)} → ${basename(webpPath)}${colors.reset}`);
      return;
    }

    // Convert to WebP
    let sharpInstance = sharp(sourcePath);
    
    if (lossless) {
      sharpInstance = sharpInstance.webp({ lossless: true, quality: LOSSLESS_QUALITY });
    } else {
      sharpInstance = sharpInstance.webp({ quality });
    }

    const webpBuffer = await sharpInstance.toBuffer();

    // Validate dimensions match
    const webpMetadata = await sharp(webpBuffer).metadata();
    if (webpMetadata.width !== sourceMetadata.width || webpMetadata.height !== sourceMetadata.height) {
      throw new Error(`Dimension mismatch: source ${sourceMetadata.width}x${sourceMetadata.height} vs WebP ${webpMetadata.width}x${webpMetadata.height}`);
    }

    const webpSize = webpBuffer.length;

    // Check if WebP is larger than source
    if (webpSize >= sourceSize * 0.95) {
      console.log(`${colors.yellow}○ Skipped (WebP not smaller): ${basename(sourcePath)} (WebP: ${stats.formatBytes(webpSize)} vs Original: ${stats.formatBytes(sourceSize)})${colors.reset}`);
      stats.addSkipped();
      return;
    }

    // Write WebP file
    await writeFile(webpPath, webpBuffer);

    console.log(`${colors.green}✓ Converted: ${basename(sourcePath)} → ${basename(webpPath)}${colors.reset}`);
    console.log(`  ${sourceMetadata.width}x${sourceMetadata.height} | ${stats.formatBytes(sourceSize)} → ${stats.formatBytes(webpSize)}`);
    
    stats.addConversion(sourcePath, webpPath, sourceSize, webpSize);

  } catch (error) {
    console.error(`${colors.red}✗ Failed to convert ${basename(sourcePath)}: ${error.message}${colors.reset}`);
    stats.addFailed();
  }
}

// Walk directory recursively
async function walkDirectory(dir, options, stats) {
  try {
    const entries = await readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = join(dir, entry.name);

      if (entry.isDirectory()) {
        await walkDirectory(fullPath, options, stats);
      } else if (entry.isFile()) {
        await convertToWebP(fullPath, options, stats);
      }
    }
  } catch (error) {
    console.error(`${colors.red}Error reading directory ${dir}: ${error.message}${colors.reset}`);
  }
}

// Main execution
async function main() {
  const options = parseArgs();
  const stats = new ConversionStats();

  console.log(`${colors.bright}WebP Image Converter${colors.reset}`);
  console.log(`Input directory: ${options.input}`);
  console.log(`Quality: ${options.quality}`);
  console.log(`Lossless: ${options.lossless}`);
  console.log(`Dry run: ${options.dryRun}\n`);

  // Verify input directory exists
  try {
    await stat(options.input);
  } catch {
    console.error(`${colors.red}Error: Input directory does not exist: ${options.input}${colors.reset}`);
    process.exit(1);
  }

  // Process directory
  await walkDirectory(options.input, options, stats);

  // Print statistics
  stats.print();

  // Exit with appropriate code
  process.exit(stats.failed > 0 ? 1 : 0);
}

main();
