import { ArrowRight } from "lucide-react";
import { BlogCard } from "@/src/components/blog/BlogCard";
import { SectionLabel } from "@/src/components/ui/SectionLabel";
import type { PostMeta } from "@/src/lib/posts";

interface BlogGridProps {
    posts: PostMeta[];
}

function EmptyState() {
    return (
        <div className="text-center py-24 px-4">
            <div className="mb-6">
                <SectionLabel>Coming Soon</SectionLabel>
            </div>
            <h2 className="font-semibold text-3xl sm:text-4xl text-gray-900 dark:text-gray-100 mb-4">
                First post dropping soon.
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-md mx-auto">
                Subscribe to the newsletter to get notified the moment it drops.
            </p>
            <a
                href="https://livelifesuccessfull.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#FE8D2A] hover:bg-[#D87620] text-black rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
                Subscribe on Substack
                <ArrowRight className="w-5 h-5" />
            </a>
        </div>
    );
}

export function BlogGrid({ posts }: BlogGridProps) {
    if (posts.length === 0) return <EmptyState />;

    return (
        <>
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-10">
                {posts.length} article{posts.length !== 1 ? "s" : ""}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {posts.map((post, i) => (
                    <BlogCard key={post.slug} post={post} featured={i === 0} />
                ))}
            </div>
        </>
    );
}