// utils/imageLoader.js

export default function imageLoader({ src }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  if (!src) return '';

  // если абсолютный URL (например, https://site.com/img.jpg) — вернуть как есть
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }

  // нормализуем: всегда начинаем с /
  if (!src.startsWith('/')) {
    src = '/' + src;
  }

  return `${basePath}${src}`;
}