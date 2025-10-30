// utils/imageLoader.js
import { BASE_PATH } from '@/next.config.mjs';

export default function imageLoader({ src }) {
  const basePath = BASE_PATH || '';

  if (!src) return '';

  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }

  if (basePath && src.startsWith(basePath + '/')) {
    return src;
  }

  return `${basePath}${src.startsWith('/') ? src : '/' + src}`;
}