"use client";

import { useRouter } from "next/navigation";
import { Header } from "@/src/components/Header";

/**
 * BlogHeader wraps the shared Header for use on blog pages.
 *
 * On blog pages there's no pricing section to scroll to,
 * so "Build Better Habits" navigates to the homepage pricing section instead.
 *
 * Scroll links (Solution, About, FAQ) are handled automatically
 * inside Header via usePathname — they navigate to /#section
 * when not on the homepage.
 */
export function BlogHeader() {
    const router = useRouter();

    const handleGetStarted = () => {
        router.push("/#pricing");
    };

    return <Header onGetStarted={handleGetStarted} />;
}