import { AuthorBox, NewsletterBox, RelatedPosts } from "@/src/components/blog/sidebar";
import type { PostMeta } from "@/src/lib/posts";

interface PostSidebarProps {
    relatedPosts: PostMeta[];
}

/**
 * PostSidebar composes sidebar widgets in order.
 *
 * To add a new widget:
 *   1. Create src/components/blog/sidebar/YourWidget.tsx
 *   2. Export it from sidebar/index.ts
 *   3. Add <YourWidget /> below in the order you want it
 *
 * To remove a widget: delete its line below. Nothing else breaks.
 * To reorder widgets: move the lines. That's it.
 */
export function PostSidebar({ relatedPosts }: PostSidebarProps) {
    return (
        <aside className="sticky top-20 self-start">
            <AuthorBox />
            <NewsletterBox />
            <RelatedPosts posts={relatedPosts} />
        </aside>
    );
}