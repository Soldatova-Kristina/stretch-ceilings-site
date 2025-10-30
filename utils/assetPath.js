// Import BASE_PATH from config - this will be inlined at build time
import { BASE_PATH } from '../next.config.mjs';

export function assetPath(path) {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return BASE_PATH ? `${BASE_PATH}/${cleanPath}` : `/${cleanPath}`;
}
