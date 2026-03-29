import Link from "next/link";
import { SidebarWidget } from "@/src/components/blog/sidebar/SidebarWidget";
import FormattedDate from "@/src/components/FormattedDate";
import { BLOG_CONFIG } from "@/src/config/blog.config";
import type { PostMeta } from "@/src/lib/posts";

const { relatedPosts: config } = BLOG_CONFIG;

interface RelatedPostsProps {
    posts: PostMeta[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
    if (posts.length === 0) return null;

    return (
        <SidebarWidget label={config.label} divider={true}>
            <ul className="space-y-5">
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link href={`/blog/${post.slug}`} className="group block">

                            {/* First tag */}
                            {post.tags && post.tags.length > 0 && (
                                <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-[#FE8D2A] mb-1 block">
                                    {post.tags[0]}
                                </span>
                            )}

                            {/* Title */}
                            <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-snug group-hover:text-[#FE8D2A] transition-colors duration-200 mb-1">
                                {post.title}
                            </p>

                            {/* Date */}
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                <FormattedDate rawDate={post.rawDate} />
                            </p>

                        </Link>
                    </li>
                ))}
            </ul>
        </SidebarWidget>
    );
}