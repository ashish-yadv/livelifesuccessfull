/**
 * blog.config.ts
 *
 * Single source of truth for all blog-related copy, URLs, and author data.
 * Change anything here and it propagates everywhere automatically.
 * No hunting through JSX to update a URL or a tagline.
 */

export const BLOG_CONFIG = {

    author: {
        name: "LiveLifeSuccessfull",
        /** Initial shown in avatar until you have a real photo */
        initial: "L",
        // bio: "Discipline & habit systems. Helping people escape chaos with practical, science-backed frameworks.",
        bio: "Discipline & Habit systems. Helping people build meaningful habits with practical, science-backed frameworks.",
        /** Replace undefined with "/your-photo.webp" once you have one */
        avatar: `/logo.webp` as string | undefined,
    },

    newsletter: {
        label: "Free Newsletter",
        heading: "Build the system. Keep the streak.",
        body: "Practical frameworks on discipline and habits — delivered to your inbox. Join 200+ readers.",
        cta: "Subscribe for free",
        url: "https://livelifesuccessfull.substack.com",
    },

    relatedPosts: {
        label: "You Might Also Like",
        /** Max number of related posts shown in sidebar */
        maxCount: 3,
    },

} as const;