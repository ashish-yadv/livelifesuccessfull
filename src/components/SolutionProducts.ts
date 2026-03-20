
export interface SolutionProduct {
    id: string;
    tier: string;
    tierIcon: 'book' | 'zap' | 'monitor';
    name: string;
    description: string;
    highlights: string[];
    bestFor: string;
    // image
    image: {
        src: string;       // path in /public — e.g. "/images/lite-mockup.webp"
        alt: string;
        label: string;     // shown as top-right badge on the image frame
        accentHex: string; // hex for bottom gradient tint
    };
    // styles
    accentColor: string;
    borderStyle: string;
    cardStyle: string;
    badgeStyle: string;
}

export const solutionProducts: SolutionProduct[] = [
    {
        id: `lite`,
        tier: `Starter`,
        tierIcon: `book`,
        name: `The 30-Day Habit Jumpstart`,
        description:
            `The streamlined blueprint to complete your first real 30-day streak — no tools, no setup, no overwhelm.`,
        highlights: [
            `You'll finally know why you've quit before. It was never discipline.`,
            `You'll always know what to do today with zero guesswork.`,
            `Missing one day won't derail your progress. The recovery rule will always keep you going.`,
            `You'll feel momentum building, and stopping will feel harder than continuing`,
        ],
        bestFor: `The person who needs one clean win to prove they can follow through.`,
        image: {
            src: `/30-day-habit-jumpstart.webp`,
            alt: `30-Day Habit Jumpstart — Lite PDF mockup`,
            label: `PDF Guide`,
            accentHex: `#94a3b8`,
        },
        accentColor: `text-gray-500 dark:text-gray-400`,
        borderStyle: `border-gray-200 dark:border-gray-800`,
        cardStyle: `bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800`,
        badgeStyle: `bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400`,
    },
    {
        id: `advanced`,
        tier: `Complete`,
        tierIcon: `zap`,
        name: `The 30-Day Habit Blueprint`,
        description:
            `The complete science-backed system, that answers every question your skeptical brain throws at it.`,
        highlights: [
            `You'll understand your brain's design and finally work with it.`,
            `Your habits will trigger each other without any willpower required.`,
            `You'll see your exact situation in 8 real-world blueprints.`,
            `You'll have a clear path: Day 30 → 66 → 365. Nothing will be left to chance.`,
        ],
        bestFor: `The person who wants to understand the why, so they never have to restart again.`,
        image: {
            src: `/neural-rewire-blueprint.webp`,
            alt: `Neural Rewire Blueprint — Advanced PDF mockup`,
            label: `PDF Guide`,
            accentHex: `#FE8D2A`,
        },
        accentColor: `text-[#FE8D2A]`,
        borderStyle: `border-[#FE8D2A]`,
        cardStyle: `bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800`,
        badgeStyle: `bg-[#FE8D2A]/10 text-[#FE8D2A]`,
    },
    {
        id: `os`,
        tier: `Ultimate`,
        tierIcon: `monitor`,
        name: `The 30-day Habit Transformation OS`,
        description:
            `The complete ecosystem. The 30-Day Habit Blueprint + Habit Mastery OS that makes showing up the path of least resistance.`,
        highlights: [
            `You'll stop relying on memory and motivation — the system tracks it all.`,
            `Every win will get recorded, you see the proof it's working.`,
            `Claim your rewards at every milestone, so discipline starts feeling earned.`,
            `Your environment does the heavy lifting, and you just make progress.`,
        ],
        bestFor: `The person who's done relying on motivation and wants a system that runs itself.`,
        image: {
            src: `/habit-transformation-os.webp`,
            alt: `Habit Transformation OS — Notion dashboard screenshot`,
            label: `PDF + Notion OS`,
            accentHex: `#f59e0b`,
        },
        accentColor: `text-amber-500`,
        borderStyle: `border-amber-400 dark:border-amber-500`,
        cardStyle: `bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800`,
        badgeStyle: `bg-amber-500/10 text-amber-500`,
    },
];