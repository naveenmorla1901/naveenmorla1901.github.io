/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages configuration for user/organization site (username.github.io)
  // For user/organization sites, leave basePath empty
  assetPrefix: '',
  basePath: '',
  // This ensures proper URL handling
  trailingSlash: true,
}

module.exports = nextConfig