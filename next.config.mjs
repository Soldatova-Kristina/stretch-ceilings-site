/** @type {import('next').NextConfig} */

// Conditional basePath for different deployment environments
// - GitHub Pages: Set DEPLOY_TARGET=gh (uses /stretch-ceilings-site)
// - Timeweb with custom subpath: Set BASE_PATH=/custom-path
// - Timeweb root deployment: No environment variables (empty basePath)
const isGitHubPages = process.env.DEPLOY_TARGET === 'gh';
const customBasePath = process.env.BASE_PATH || '';

let basePath = '';
if (isGitHubPages) {
  basePath = '/stretch-ceilings-site';
} else if (customBasePath) {
  basePath = customBasePath;
}

// Export BASE_PATH as a named constant for use in utility functions
// This allows the bundler to inline the value at build time, making it available in both server and client code
export const BASE_PATH = basePath;

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  basePath: basePath,
  assetPrefix: basePath,
  trailingSlash: true, // Better compatibility with static hosting
  
  // Make basePath available to components
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  
  // Оптимизация изображений для лучшей производительности и SEO
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: true, // Required for static export
    loader: 'custom',
    loaderFile: './utils/imageLoader.js',
  },
};

export default nextConfig;
