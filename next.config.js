/** @type {import('next').NextConfig} */
const nextConfig = {
  // Set output mode based on environment
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  
  // Configure image handling
  images: {
    unoptimized: process.env.NODE_ENV === 'production',
  },

  // Configure experimental features
  experimental: {
    // Only set outputFileTracingRoot in production to avoid development warnings
    ...(process.env.NODE_ENV === 'production' && {
      outputFileTracingRoot: undefined
    })
  },

  // Set base path for GitHub Pages deployment
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-new' : '',

  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Add trailing slashes for consistent routing
  trailingSlash: true,

  // Customize webpack configuration if needed
  webpack: (config) => {
    return config;
  }
};

module.exports = nextConfig;