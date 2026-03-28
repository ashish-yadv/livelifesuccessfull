import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['192.168.1.*'],
  images: {
    /**
     * localPatterns allows next/image to optimise images
     * served from your own /public directory.
     *
     * If you ever use external image URLs (e.g. from a CMS or CDN),
     * add them to remotePatterns instead:
     *
     * remotePatterns: [
     *   { protocol: "https", hostname: "your-cdn.com" },
     * ],
     */
    localPatterns: [
      {
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
