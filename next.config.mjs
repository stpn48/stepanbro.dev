/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/stepanbro.dev" : "",
  output: 'export',  // Enables static export
  distDir: 'dist',
  images: {
    unoptimized: true, // Disables Next.js image optimization
  },
};

export default nextConfig;
