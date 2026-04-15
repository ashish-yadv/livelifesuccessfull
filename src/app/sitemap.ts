import type { MetadataRoute } from "next";
import { getAllPosts } from "@/src/lib/posts";

const BASE_URL = "https://livelifesuccessfull.vercel.app";

/**
 * sitemap.ts
 *
 * Next.js generates /sitemap.xml automatically from this file.
 * It includes:
 *  - Homepage
 *  - /blog listing page
 *  - Every individual blog post (auto-discovered from content/blog/)
 *
 * When you push a new .mdx file, it appears in the sitemap
 * on the next deploy — zero extra work required.
 *
 * Submit the sitemap URL to Google Search Console once:
 *   https://livelifesuccessfull.vercel.app/sitemap.xml
 */
export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getAllPosts();

    const blogPostEntries: MetadataRoute.Sitemap = posts.map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.rawDate),
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${BASE_URL}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        ...blogPostEntries,
    ];
}