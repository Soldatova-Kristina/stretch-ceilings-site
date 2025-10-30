// Custom image loader for GitHub Pages with basePath
export default function imageLoader({ src, width, quality }) {
  // If src already has the basePath, return as is
  if (src.startsWith('/stretch-ceilings-site/')) {
    return src;
  }
  
  // In production, add basePath
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  // If src is relative (starts with /), add basePath
  if (src.startsWith('/')) {
    return `${basePath}${src}`;
  }
  
  // If src is absolute URL, return as is
  return src;
}
