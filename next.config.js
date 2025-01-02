/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-new' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio-new/' : '',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  // Disable server-specific features
  trailingSlash: true,
  // Configure static file handling
  distDir: 'out',
}

module.exports = nextConfig