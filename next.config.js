/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true,
  },
  // Disable directory tracing during build
  experimental: {
    outputFileTracingRoot: undefined,
  },
  // Add basePath if deploying to GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-new' : '',
}

module.exports = nextConfig