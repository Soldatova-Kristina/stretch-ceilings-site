// utils/assetPath.js
import { BASE_PATH } from '@/next.config.mjs';

export function assetPath(path) {
  const basePath = BASE_PATH || '';
  if (!path) return '';

  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  return `${basePath}${cleanPath}`;
}