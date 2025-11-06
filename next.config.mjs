import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
export const BASE_PATH = basePath;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  
  compress: true,
  poweredByHeader: false,
  
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['react-icons'],
  },

  // Modern browser target for smaller bundles
  swcMinify: true,

  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000, 
    unoptimized: true,
    loader: 'custom',
    loaderFile: './utils/imageLoader.js',
  },
  
  // HTTP headers for performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
        ],
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);