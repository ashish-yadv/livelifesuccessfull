import { getAllPosts } from "@/src/lib/posts";
import { BlogHeader } from "@/src/components/blog/BlogHeader";
import { BlogHero } from "@/src/components/blog/BlogHero";
import { BlogGrid } from "@/src/components/blog/BlogGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog – LiveLifeSuccessfull",
    description:
        "Practical frameworks on discipline, habit systems, and building a focused life — one system at a time.",
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <>
            <BlogHeader />
            <main className="min-h-screen bg-white dark:bg-gray-950 pt-16">
                <BlogHero />
                <section className="py-24 sm:py-32">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <BlogGrid posts={posts} />
                    </div>
                </section>
            </main>
        </>
    );
}