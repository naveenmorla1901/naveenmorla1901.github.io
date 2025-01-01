/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const basePath = '/portfolio-new';

const nextConfig = {
  output: 'export',
  basePath: isProduction ? basePath : '',
  assetPrefix: isProduction ? basePath : '',
  images: {
    unoptimized: true,
  },
  // Handle static file serving
  webpack: (config) => {
    return config;
  },
  // This will enable css files to be loaded properly in production
  compiler: {
    styledComponents: true,
  },
  // Ensure trailing slashes for consistent routing
  trailingSlash: true,
  // Disable server-side features for static export
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
}

module.exports = nextConfig