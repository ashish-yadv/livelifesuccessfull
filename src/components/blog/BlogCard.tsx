import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { TagPill } from "@/src/components/ui/TagPill";
import FormattedDate from "@/src/components/FormattedDate";
import type { PostMeta } from "@/src/lib/posts";

interface BlogCardProps {
    post: PostMeta;
    /** First card (index 0) renders as a full-width feature card */
    featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
    return (
        <Link
            href={`/blog/${post.slug}`}
            className={[
                "group flex flex-col bg-white dark:bg-gray-900",
                "rounded-2xl border border-gray-200 dark:border-gray-800",
                "overflow-hidden shadow-sm",
                "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
                featured ? "md:flex-row md:col-span-3" : "",
            ].join(" ")}
        >
            {/* Cover Image */}
            {post.coverImage && (
                <div
                    className={[
                        // `relative` is required for next/image with fill
                        "relative overflow-hidden bg-gray-100 dark:bg-gray-800 flex-shrink-0",
                        featured ? "md:w-[45%] h-56 md:h-auto" : "h-52",
                    ].join(" ")}
                >
                    <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        /**
                         * sizes tells the browser how wide the image will be
                         * at each breakpoint so it downloads the right size.
                         *
                         * Featured card: full width on mobile, ~45% of max-w-7xl on desktop
                         * Regular card:  full width on mobile, ~1/3 of max-w-7xl on desktop
                         */
                        sizes={
                            featured
                                ? "(max-width: 768px) 100vw, 45vw"
                                : "(max-width: 768px) 100vw, 33vw"
                        }
                    />
                </div>
            )}

            {/* Body */}
            <div
                className={[
                    "flex flex-col flex-1 p-6 sm:p-8",
                    featured ? "md:justify-center" : "",
                ].join(" ")}
            >
                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 2).map((tag) => (
                            <TagPill key={tag} tag={tag} />
                        ))}
                    </div>
                )}

                {/* Title */}
                <h2
                    className={[
                        "font-semibold leading-snug text-gray-900 dark:text-gray-100 mb-3",
                        "transition-colors duration-200 group-hover:text-[#FE8D2A]",
                        featured ? "text-2xl sm:text-3xl lg:text-4xl" : "text-xl sm:text-2xl",
                    ].join(" ")}
                >
                    {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed flex-1 mb-6">
                    {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center md:gap-4">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                        <FormattedDate rawDate={post.rawDate} />
                        {/* {" · "} */}
                        <br />
                        {post.readTime}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FE8D2A] transition-all duration-200 group-hover:gap-3">
                        Read article
                        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                </div>
            </div>
        </Link>
    );
}