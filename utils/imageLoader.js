// utils/imageLoader.js

export default function imageLoader({ src }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  if (!src) return '';

  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }

  if (basePath && src.startsWith(basePath + '/')) {
    return src;
  }

  return `${basePath}${src.startsWith('/') ? src : '/' + src}`;
}