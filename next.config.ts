import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/photography",
        destination: "/portfolio",
        permanent: true,
      },
    ];
  },
  images: {
    // Prefer modern formats; Next serves the best the browser accepts.
    formats: ["image/avif", "image/webp"],
    // Photography: allow mid/high qualities used across the site.
    qualities: [60, 75, 80],
    // Match common viewport widths so we don't over-fetch.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2560],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
