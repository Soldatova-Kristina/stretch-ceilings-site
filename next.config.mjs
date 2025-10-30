/** @type {import('next').NextConfig} */

// GitHub Pages requires basePath for project repos
const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? '/stretch-ceilings-site' : '';

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
  },
};

export default nextConfig;
