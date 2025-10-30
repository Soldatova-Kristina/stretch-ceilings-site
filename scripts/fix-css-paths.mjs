import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const basePath = '/stretch-ceilings-site';
const outDir = join(__dirname, '../out');

function processFile(filePath) {
  let content = readFileSync(filePath, 'utf-8');
  let modified = false;

  // Fix font paths: url('/fonts/...') -> url('/stretch-ceilings-site/fonts/...')
  const fontRegex = /url\(['"]?(\/fonts\/[^'")\s]+)['"]?\)/g;
  if (fontRegex.test(content)) {
    content = content.replace(fontRegex, (match, path) => {
      modified = true;
      return match.replace(path, `${basePath}${path}`);
    });
  }

  // Fix image paths: url('/images/...') -> url('/stretch-ceilings-site/images/...')
  const imageRegex = /url\(['"]?(\/images\/[^'")\s]+)['"]?\)/g;
  if (imageRegex.test(content)) {
    content = content.replace(imageRegex, (match, path) => {
      modified = true;
      return match.replace(path, `${basePath}${path}`);
    });
  }

  // Fix icon paths: url('/icons/...') -> url('/stretch-ceilings-site/icons/...')
  const iconRegex = /url\(['"]?(\/icons\/[^'")\s]+)['"]?\)/g;
  if (iconRegex.test(content)) {
    content = content.replace(iconRegex, (match, path) => {
      modified = true;
      return match.replace(path, `${basePath}${path}`);
    });
  }

  if (modified) {
    writeFileSync(filePath, content, 'utf-8');
    console.log(`✓ Fixed paths in: ${filePath.replace(outDir, '')}`);
  }
}

function walkDir(dir) {
  const files = readdirSync(dir);
  
  files.forEach(file => {
    const filePath = join(dir, file);
    const stat = statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.css')) {
      processFile(filePath);
    }
  });
}

console.log('🔧 Fixing CSS paths for GitHub Pages...');
walkDir(outDir);
console.log('✅ Done!');
