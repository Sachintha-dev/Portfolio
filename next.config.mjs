/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
  basePath:
    process.env.NODE_ENV === "production" ? "/Sachintha-dev-portfolio" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
