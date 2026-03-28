import { getPostBySlug, getAllPostSlugs, getAllPosts } from "@/src/lib/posts";
import { BlogHeader } from "@/src/components/blog/BlogHeader";
import { PostHeader } from "@/src/components/blog/PostHeader";
import { PostBody } from "@/src/components/blog/PostBody";
import { PostSidebar } from "@/src/components/blog/PostSidebar";
import { PostCTA } from "@/src/components/blog/PostCTA";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

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

    return {
        title: `${post.title} – LiveLifeSuccessfull`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.rawDate,
            ...(post.coverImage ? { images: [{ url: post.coverImage }] } : {}),
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            ...(post.coverImage ? { images: [post.coverImage] } : {}),
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
            <BlogHeader />
            <main className="min-h-screen bg-white dark:bg-gray-950 pt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 xl:gap-20 items-start">

                        {/* Article */}
                        <div className="min-w-0">
                            <PostHeader
                                title={post.title}
                                rawDate={post.rawDate}
                                readTime={post.readTime}
                                tags={post.tags}
                            />
                            <PostBody content={post.content} />
                            <PostCTA />
                        </div>

                        {/* Sidebar */}
                        <PostSidebar relatedPosts={relatedPosts} />

                    </div>
                </div>
            </main>
        </>
    );
}