// Custom image loader for GitHub Pages with basePath
export default function imageLoader({ src, width, quality }) {
  // Get BASE_PATH from environment variable (works in both build and runtime)
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  // If src already has the basePath, return as is
  if (basePath && src.startsWith(basePath + '/')) {
    return src;
  }
  
  // If src is absolute URL (http/https), return as is
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }
  
  // If src is relative (starts with /), add basePath
  if (src.startsWith('/')) {
    return basePath ? `${basePath}${src}` : src;
  }
  
  // Otherwise, return src as is
  return src;
}
