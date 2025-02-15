/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "export",
    basePath: "", // If hosting in a subdirectory, update this
    images: {
      unoptimized: true, // Fixes next/image export issues
    },
    assetPrefix: "/Acumen/", // ✅ Fix: Must start with a leading slash
  };
  
  module.exports = nextConfig;
  