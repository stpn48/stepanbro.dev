/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enables static export
  distDir: 'dist',
  images: {
    unoptimized: true, // Disables Next.js image optimization
  },
};

export default nextConfig;
