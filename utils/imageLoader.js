// Import BASE_PATH from config - this will be inlined at build time
import { BASE_PATH } from '../next.config.mjs';

// Custom image loader for GitHub Pages with basePath
export default function imageLoader({ src, width, quality }) {
  // If src already has the BASE_PATH, return as is
  if (BASE_PATH && src.startsWith(BASE_PATH + '/')) {
    return src;
  }
  
  // If src is absolute URL (http/https), return as is
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }
  
  // If src is relative (starts with /), add BASE_PATH
  if (src.startsWith('/')) {
    return BASE_PATH ? `${BASE_PATH}${src}` : src;
  }
  
  // Otherwise, return src as is
  return src;
}
