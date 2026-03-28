interface TagPillProps {
    tag: string;
}

/**
 * Small orange tag chip.
 * Used in BlogCard and PostHeader.
 */
export function TagPill({ tag }: TagPillProps) {
    return (
        <span className="text-xs font-semibold uppercase tracking-widest text-[#FE8D2A] bg-[#FE8D2A]/10 px-3 py-1 rounded-full border border-[#FE8D2A]/20">
            {tag}
        </span>
    );
}