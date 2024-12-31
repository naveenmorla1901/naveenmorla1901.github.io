/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static HTML export
  distDir: 'dist',   // Change build output directory
  basePath: '/portfolio-new', // Match your repository name
  images: {
    unoptimized: true,
  },
  // Ensure assets are properly referenced
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? 'https://naveenmorla1901.github.io/portfolio-new'
    : '',
  
  // Disable server-side features since we're doing static export
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig