import { readdir, stat } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const DEFAULT_INPUT_DIR = join(__dirname, '../public/images');

// Color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
};

// Validation results tracker
class ValidationResults {
  constructor() {
    this.total = 0;
    this.passed = 0;
    this.warnings = 0;
    this.failed = 0;
    this.issues = [];
  }

  addPass(webpPath) {
    this.total++;
    this.passed++;
  }

  addWarning(webpPath, message) {
    this.total++;
    this.warnings++;
    this.issues.push({ file: basename(webpPath), type: 'warning', message });
  }

  addFailure(webpPath, message) {
    this.total++;
    this.failed++;
    this.issues.push({ file: basename(webpPath), type: 'error', message });
  }

  print() {
    console.log(`\n${colors.bright}=== Validation Report ===${colors.reset}`);
    console.log(`Total WebP files validated: ${this.total}`);
    console.log(`${colors.green}✓ Passed: ${this.passed}${colors.reset}`);
    console.log(`${colors.yellow}⚠ Warnings: ${this.warnings}${colors.reset}`);
    console.log(`${colors.red}✗ Failed: ${this.failed}${colors.reset}`);

    if (this.issues.length > 0) {
      console.log(`\n${colors.bright}Issues Found:${colors.reset}`);
      this.issues.forEach(issue => {
        const icon = issue.type === 'error' ? '✗' : '⚠';
        const color = issue.type === 'error' ? colors.red : colors.yellow;
        console.log(`  ${color}${icon} ${issue.file}: ${issue.message}${colors.reset}`);
      });
    }
  }

  hasFailures() {
    return this.failed > 0;
  }
}

// Format bytes helper
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Get corresponding source file path
function getSourcePath(webpPath) {
  const possibleExtensions = ['.jpg', '.jpeg', '.png'];
  const basePath = webpPath.replace('.webp', '');
  
  for (const ext of possibleExtensions) {
    const sourcePath = basePath + ext;
    return sourcePath; // Return first possible source
  }
  
  return null;
}

// Validate a single WebP file
async function validateWebP(webpPath, results) {
  try {
    // Get WebP metadata
    const webpMetadata = await sharp(webpPath).metadata();
    const webpStats = await stat(webpPath);
    const webpSize = webpStats.size;

    // Try to find source file
    const sourcePath = getSourcePath(webpPath);
    let sourceExists = false;
    let sourceMetadata = null;
    let sourceSize = 0;

    try {
      const sourceStats = await stat(sourcePath);
      sourceExists = true;
      sourceSize = sourceStats.size;
      sourceMetadata = await sharp(sourcePath).metadata();
    } catch {
      // Source file might have been removed after conversion
      sourceExists = false;
    }

    // Validation checks
    let hasIssues = false;

    // 1. Check dimensions are valid
    if (!webpMetadata.width || !webpMetadata.height) {
      results.addFailure(webpPath, 'Invalid dimensions');
      return;
    }

    // 2. Compare dimensions with source if available
    if (sourceExists && sourceMetadata) {
      if (webpMetadata.width !== sourceMetadata.width || webpMetadata.height !== sourceMetadata.height) {
        results.addFailure(
          webpPath,
          `Dimension mismatch: WebP ${webpMetadata.width}x${webpMetadata.height} vs Source ${sourceMetadata.width}x${sourceMetadata.height}`
        );
        hasIssues = true;
      }

      // 3. Check file size comparison
      if (webpSize >= sourceSize) {
        results.addWarning(
          webpPath,
          `WebP not smaller than source: ${formatBytes(webpSize)} vs ${formatBytes(sourceSize)}`
        );
        hasIssues = true;
      }

      // 4. Check if alpha channel preserved for PNG sources
      if (sourceMetadata.format === 'png' && sourceMetadata.hasAlpha) {
        if (!webpMetadata.hasAlpha) {
          results.addFailure(webpPath, 'Alpha channel not preserved from PNG source');
          hasIssues = true;
        }
      }
    }

    // 5. Check WebP quality (warn if file is too large relative to dimensions)
    const pixelCount = webpMetadata.width * webpMetadata.height;
    const bytesPerPixel = webpSize / pixelCount;
    
    if (bytesPerPixel > 2) {
      results.addWarning(
        webpPath,
        `File may be too large for its dimensions (${bytesPerPixel.toFixed(2)} bytes/pixel)`
      );
      hasIssues = true;
    }

    if (!hasIssues) {
      results.addPass(webpPath);
      console.log(`${colors.green}✓ ${basename(webpPath)}: ${webpMetadata.width}x${webpMetadata.height}, ${formatBytes(webpSize)}${colors.reset}`);
    }

  } catch (error) {
    results.addFailure(webpPath, `Validation error: ${error.message}`);
  }
}

// Walk directory recursively looking for WebP files
async function walkDirectory(dir, results) {
  try {
    const entries = await readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = join(dir, entry.name);

      if (entry.isDirectory()) {
        await walkDirectory(fullPath, results);
      } else if (entry.isFile() && extname(entry.name).toLowerCase() === '.webp') {
        await validateWebP(fullPath, results);
      }
    }
  } catch (error) {
    console.error(`${colors.red}Error reading directory ${dir}: ${error.message}${colors.reset}`);
  }
}

// Main execution
async function main() {
  const inputDir = process.argv[2] || DEFAULT_INPUT_DIR;
  const results = new ValidationResults();

  console.log(`${colors.bright}WebP Validation Tool${colors.reset}`);
  console.log(`Scanning directory: ${inputDir}\n`);

  // Verify input directory exists
  try {
    await stat(inputDir);
  } catch {
    console.error(`${colors.red}Error: Input directory does not exist: ${inputDir}${colors.reset}`);
    process.exit(1);
  }

  // Scan directory for WebP files
  await walkDirectory(inputDir, results);

  // Print results
  results.print();

  // Exit with appropriate code
  process.exit(results.hasFailures() ? 1 : 0);
}

main();
