// utils/assetPath.js

export function assetPath(path) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (!path) return '';

  // если абсолютный URL, вернуть как есть
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  // нормализуем ведущий слэш
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  return `${basePath}${cleanPath}`;
}