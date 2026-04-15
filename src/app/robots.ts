import type { MetadataRoute } from "next";

const BASE_URL = "https://livelifesuccessfull.vercel.app";

/**
 * robots.ts
 * Next.js generates /robots.txt automatically from this file.
 */
export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: `${BASE_URL}/sitemap.xml`,
    };
}