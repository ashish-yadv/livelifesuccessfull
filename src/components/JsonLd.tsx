/**
 * JsonLd.tsx
 *
 * Structured data (JSON-LD) components for Google rich results.
 * These help Google understand:
 *  - What your homepage is about (WebSite + Organization)
 *  - What each blog post is about (BlogPosting)
 *
 * Usage:
 *   Homepage:   <HomeJsonLd />
 *   Blog post:  <BlogPostJsonLd post={post} />
 */

import type { Post } from "@/src/lib/posts";

const BASE_URL = "https://livelifesuccessfull.vercel.app";

// ─── Homepage ─────────────────────────────────────────────────────────────────

export function HomeJsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "@id": `${BASE_URL}/#website`,
                url: BASE_URL,
                name: "LiveLifeSuccessfull",
                description: "Habit and discipline systems to help you stop restarting and start building.",
                potentialAction: {
                    "@type": "SearchAction",
                    target: `${BASE_URL}/blog?q={search_term_string}`,
                    "query-input": "required name=search_term_string",
                },
            },
            {
                "@type": "Organization",
                "@id": `${BASE_URL}/#organization`,
                name: "LiveLifeSuccessfull",
                url: BASE_URL,
                logo: `${BASE_URL}/icon.png`,
                sameAs: [
                    "https://instagram.com/livelifesuccessfull",
                    "https://x.com/livelikesuccess",
                    "https://substack.com/@livelifesuccessfull",
                    "https://www.linkedin.com/in/livelifesuccessfull/",
                ],
            },
            {
                "@type": "Product",
                name: "Habit Mastery System",
                description: "Science-backed habit and discipline system. Includes PDF guides and a Notion OS dashboard.",
                url: BASE_URL,
                brand: {
                    "@type": "Brand",
                    name: "LiveLifeSuccessfull",
                },
                aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.9",
                    reviewCount: "1000",
                    bestRating: "5",
                    worstRating: "1",
                },
                offers: {
                    "@type": "AggregateOffer",
                    lowPrice: "17",
                    highPrice: "97",
                    priceCurrency: "USD",
                    offerCount: "3",
                    availability: "https://schema.org/InStock",
                },
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

// ─── Blog Post ────────────────────────────────────────────────────────────────

interface BlogPostJsonLdProps {
    post: Pick<Post, "title" | "excerpt" | "rawDate" | "slug" | "coverImage">;
}

export function BlogPostJsonLd({ post }: BlogPostJsonLdProps) {
    const postUrl = `${BASE_URL}/blog/${post.slug}`;

    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        url: postUrl,
        datePublished: post.rawDate,
        dateModified: post.rawDate,
        author: {
            "@type": "Person",
            name: "LiveLifeSuccessfull",
            url: BASE_URL,
        },
        publisher: {
            "@type": "Organization",
            name: "LiveLifeSuccessfull",
            url: BASE_URL,
            logo: {
                "@type": "ImageObject",
                url: `${BASE_URL}/icon.png`,
            },
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": postUrl,
        },
        ...(post.coverImage
            ? {
                image: {
                    "@type": "ImageObject",
                    url: `${BASE_URL}${post.coverImage}`,
                },
            }
            : {}),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}