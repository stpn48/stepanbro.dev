/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enables static export
  assetPrefix: './', // Ensures correct path resolution for assets
  images: {
    unoptimized: true, // Disables Next.js image optimization (needed for GitHub Pages)
  },
};

export default nextConfig;
