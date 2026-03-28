import Image from "next/image";
import { SidebarWidget } from "@/src/components/blog/sidebar/SidebarWidget";
import { BLOG_CONFIG } from "@/src/config/blog.config";

const { author } = BLOG_CONFIG;

export function AuthorBox() {
    return (
        <SidebarWidget label="About the Author">
            <div className="flex items-start gap-3">

                {/* Avatar — shows photo if configured, falls back to initial */}
                <div className="w-12 h-12 rounded-full bg-[#FE8D2A]/20 flex-shrink-0 overflow-hidden flex items-center justify-center">
                    {author.avatar ? (
                        <Image
                            src={author.avatar}
                            alt={author.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <span className="text-[#FE8D2A] font-bold text-lg">
                            {author.initial}
                        </span>
                    )}
                </div>

                <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm leading-tight mb-1">
                        {author.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                        {author.bio}
                    </p>
                </div>

            </div>
        </SidebarWidget>
    );
}