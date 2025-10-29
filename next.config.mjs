/** @type {import('next').NextConfig} */

// Only use basePath in production (GitHub Pages)
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  basePath: isProduction ? '/stretch-ceilings-site' : '',
  assetPrefix: isProduction ? '/stretch-ceilings-site' : '',
  
  // Оптимизация изображений для лучшей производительности и SEO
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
