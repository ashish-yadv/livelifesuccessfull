import { getPostBySlug, getAllPostSlugs, getAllPosts } from "@/src/lib/posts";
import { BlogHeader } from "@/src/components/blog/BlogHeader";
import { PostHeader } from "@/src/components/blog/PostHeader";
import { PostBody } from "@/src/components/blog/PostBody";
import { PostSidebar } from "@/src/components/blog/PostSidebar";
// import { PostCTA } from "@/src/components/blog/PostCTA";
import { BlogPostJsonLd } from "@/src/components/JsonLd";
import { ProductFooter } from "@/src/components/blog/ProductFooter";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const BASE_URL = "https://livelifesuccessfull.vercel.app";

// ─── Static Params ────────────────────────────────────────────────────────────

export function generateStaticParams(): { slug: string }[] {
    return getAllPostSlugs().map((slug) => ({ slug }));
}

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return {};

    const postUrl = `${BASE_URL}/blog/${slug}`;

    return {
        title: post.title,   // template in layout.tsx appends "– LiveLifeSuccessfull"
        description: post.excerpt,

        // Canonical — critical for cross-posted Substack content
        alternates: {
            canonical: postUrl,
        },

        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            url: postUrl,
            publishedTime: post.rawDate,
            authors: ["LiveLifeSuccessfull"],
            tags: post.tags ?? [],
            ...(post.coverImage
                ? { images: [{ url: `${BASE_URL}${post.coverImage}`, width: 1200, height: 630 }] }
                : {}),
        },

        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            creator: "@livelikesuccess",
            ...(post.coverImage ? { images: [`${BASE_URL}${post.coverImage}`] } : {}),
        },
    };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) notFound();

    const relatedPosts = getAllPosts()
        .filter((p) => p.slug !== slug)
        .slice(0, 3);

    return (
        <>
            {/* JSON-LD structured data for Google */}
            <BlogPostJsonLd post={post} />

            <BlogHeader />
            <main className="min-h-screen bg-white dark:bg-gray-950 pt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 xl:gap-20 items-start">
                        <div className="min-w-0">
                            <PostHeader
                                title={post.title}
                                rawDate={post.rawDate}
                                readTime={post.readTime}
                                tags={post.tags}
                            />
                            <PostBody content={post.content} />
                            {/* <PostCTA /> */}
                        </div>
                        <PostSidebar relatedPosts={relatedPosts} />
                    </div>
                </div>
                <ProductFooter />
            </main>
        </>
    );
}