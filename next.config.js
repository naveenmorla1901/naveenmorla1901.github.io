/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove assetPrefix and basePath for local development
  assetPrefix: '',
  basePath: '',
}

module.exports = nextConfig