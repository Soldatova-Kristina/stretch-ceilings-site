export function assetPath(path) {
  // Get BASE_PATH from environment variable (works in both build and runtime)
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return basePath ? `${basePath}/${cleanPath}` : `/${cleanPath}`;
}
