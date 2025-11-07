import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["picsum.photos"], // ✅ allow external images
  },
};

export default nextConfig;
