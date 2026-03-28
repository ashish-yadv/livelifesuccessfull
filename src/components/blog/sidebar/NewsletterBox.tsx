import { ArrowRight } from "lucide-react";
import { SidebarWidget } from "@/src/components/blog/sidebar/SidebarWidget";
import { BLOG_CONFIG } from "@/src/config/blog.config";

const { newsletter } = BLOG_CONFIG;

export function NewsletterBox() {
    return (
        <SidebarWidget label={newsletter.label}>

            <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm mb-2 leading-snug">
                {newsletter.heading}
            </p>

            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                {newsletter.body}
            </p>

            <a
                href={newsletter.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#FE8D2A] hover:bg-[#D87620] text-black rounded-lg font-semibold text-sm transition-all duration-200 shadow hover:shadow-md"
            >
                {newsletter.cta}
                <ArrowRight className="w-4 h-4" />
            </a>

        </SidebarWidget>
    );
}