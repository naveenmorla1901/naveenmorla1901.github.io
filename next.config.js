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
}

module.exports = nextConfig