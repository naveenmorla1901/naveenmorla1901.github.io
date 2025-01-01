/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-new' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio-new/' : '',
  images: {
    unoptimized: true,
  },
  // This will enable css files to be loaded properly in production
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true
  },
}

module.exports = nextConfig