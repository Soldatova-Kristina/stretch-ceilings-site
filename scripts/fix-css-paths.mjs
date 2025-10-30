import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const basePath = '/stretch-ceilings-site';
const outDir = join(__dirname, '../out');

function processCSSFile(filePath) {
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
    console.log(`✓ Fixed CSS paths in: ${filePath.replace(outDir, '')}`);
  }
}

function processHTMLFile(filePath) {
  let content = readFileSync(filePath, 'utf-8');
  let modified = false;

  // Fix img src: src="/images/..." -> src="/stretch-ceilings-site/images/..."
  const imgSrcRegex = /src="(\/(?:images|icons|fonts)\/[^"]+)"/g;
  if (imgSrcRegex.test(content)) {
    content = content.replace(imgSrcRegex, (match, path) => {
      modified = true;
      return `src="${basePath}${path}"`;
    });
  }

  // Fix srcset: srcset="/images/..." -> srcset="/stretch-ceilings-site/images/..."
  const srcsetRegex = /srcset="([^"]*\/(?:images|icons)\/[^"]*)"/g;
  if (srcsetRegex.test(content)) {
    content = content.replace(srcsetRegex, (match, srcsetValue) => {
      modified = true;
      const fixedSrcset = srcsetValue.replace(/(\/(?:images|icons)\/[^\s,]+)/g, (m, path) => {
        return `${basePath}${path}`;
      });
      return `srcset="${fixedSrcset}"`;
    });
  }

  // Fix href for icons/logos: href="/icons/..." -> href="/stretch-ceilings-site/icons/..."
  const hrefIconRegex = /href="(\/icons\/[^"]+)"/g;
  if (hrefIconRegex.test(content)) {
    content = content.replace(hrefIconRegex, (match, path) => {
      modified = true;
      return `href="${basePath}${path}"`;
    });
  }

  // Fix inline styles: style="background-image:url(/images/...)" -> style="background-image:url(/stretch-ceilings-site/images/...)"
  const inlineStyleRegex = /style="([^"]*url\((\/(?:images|icons|fonts)\/[^)]+)\)[^"]*)"/g;
  if (inlineStyleRegex.test(content)) {
    content = content.replace(inlineStyleRegex, (match, styleContent, path) => {
      modified = true;
      const fixedStyle = styleContent.replace(path, `${basePath}${path}`);
      return `style="${fixedStyle}"`;
    });
  }

  if (modified) {
    writeFileSync(filePath, content, 'utf-8');
    console.log(`✓ Fixed HTML paths in: ${filePath.replace(outDir, '')}`);
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
      processCSSFile(filePath);
    } else if (file.endsWith('.html')) {
      processHTMLFile(filePath);
    }
  });
}

console.log('🔧 Fixing paths for GitHub Pages...');
walkDir(outDir);
console.log('Done!');
