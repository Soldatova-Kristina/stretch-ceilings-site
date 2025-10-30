// Utility to add basePath to static assets
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function assetPath(path) {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return basePath ? `${basePath}/${cleanPath}` : `/${cleanPath}`;
}
