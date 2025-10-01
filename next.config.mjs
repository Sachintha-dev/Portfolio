/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: "export",
  // Ensure static export works under a repository subpath like /Portfolio
  basePath: process.env.NODE_ENV === "production" ? "/Portfolio" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/Portfolio/" : "",
  trailingSlash: true,
  images: {
    // Using next/image with static export
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH:
      process.env.NODE_ENV === "production" ? "/Portfolio" : "",
  },
};

export default nextConfig;
