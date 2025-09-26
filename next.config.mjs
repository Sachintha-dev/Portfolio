/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/Portfolio" : "",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/Portfolio/" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
