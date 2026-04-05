import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { TagPill } from "@/src/components/ui/TagPill";
import FormattedDate from "@/src/components/FormattedDate";

interface PostHeaderProps {
    title: string;
    rawDate: string;
    readTime: string;
    tags?: string[];
}

/**
 * Minimal post header — title, tags, meta.
 * No hero band, no cover image (cover image goes inline in MDX if needed).
 * Matches the James Clear editorial style: typography first.
 */
export function PostHeader({ title, rawDate, readTime, tags }: PostHeaderProps) {
    return (
        <header className="mb-8 pb-8 border-b border-gray-200 dark:border-gray-800">

            {/* Back */}
            <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-[#FE8D2A] transition-colors duration-200 mb-8"
            >
                <ArrowLeft className="w-3.5 h-3.5" />
                All articles
            </Link>

            {/* Tags */}
            {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag) => (
                        <TagPill key={tag} tag={tag} />
                    ))}
                </div>
            )}

            {/* Title */}
            <h1 className="font-semibold text-2xl sm:text-3xl lg:text-4xl leading-[1.5] text-gray-900 dark:text-gray-100 mb-5">
                {title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <FormattedDate rawDate={rawDate} />
                <span>·</span>
                <span>{readTime}</span>
            </div>

        </header>
    );
}