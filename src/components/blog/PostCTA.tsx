import { ArrowRight } from "lucide-react";

/**
 * Bottom-of-post CTA.
 * Leaner than the sidebar newsletter box — acts as a final nudge
 * after the reader finishes the article.
 */
export function PostCTA() {
    return (
        <div className="mt-16 pt-10 border-t border-gray-200 dark:border-gray-800">
            <div className="p-8 sm:p-10 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 text-center">

                <p className="text-xs font-semibold uppercase tracking-widest text-[#FE8D2A] mb-3">
                    Enjoyed this article?
                </p>

                <h2 className="font-semibold text-2xl sm:text-3xl text-gray-900 dark:text-gray-100 mb-3 leading-snug">
                    Get the next one in your inbox.
                </h2>

                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-md mx-auto">
                    Join readers getting practical habit systems and discipline
                    frameworks, free, every week.
                </p>

                <a
                    href="https://livelifesuccessfull.substack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#FE8D2A] hover:bg-[#D87620] text-black rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                    Subscribe for free
                    <ArrowRight className="w-4 h-4" />
                </a>

            </div>
        </div>
    );
}