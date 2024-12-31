/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static HTML export for GitHub Pages deployment
  output: 'export',
  
  // Configure the base path to match your repository name
  // This ensures assets are loaded correctly on GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-new' : '',
  
  // Disable image optimization since we're using static export
  images: {
    unoptimized: true,
  },
  
  // Configure asset prefix for GitHub Pages
  // This ensures all assets are loaded from the correct URL
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? 'https://naveenmorla1901.github.io/portfolio-new'
    : '',

  // Any experimental features would go here
  experimental: {
    // Remove appDir as it's no longer needed in Next.js 14
    // The App Router is now stable and enabled by default
  },

  // Enable React strict mode for better development experience
  reactStrictMode: true,
}

module.exports = nextConfig