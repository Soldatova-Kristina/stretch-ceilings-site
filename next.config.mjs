/** @type {import('next').NextConfig} */

// Get basePath from environment variable
// This supports different deployment targets:
// - GitHub Pages: NEXT_PUBLIC_BASE_PATH=/stretch-ceilings-site (from .env.production)
// - TimeWeb root: NEXT_PUBLIC_BASE_PATH not set (from .env.timeweb)
// - TimeWeb subfolder: NEXT_PUBLIC_BASE_PATH=/custom-path (from .env.timeweb-subfolder)
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

// Export BASE_PATH as a named constant for use in utility functions
export const BASE_PATH = basePath;

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  basePath: basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: true,
    loader: 'custom',
    loaderFile: './utils/imageLoader.js',
  },
};

export default nextConfig;