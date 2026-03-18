
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
        id: 'lite',
        tier: 'Starter',
        tierIcon: 'book',
        name: '30-Day Habit Jumpstart',
        description:
            'The streamlined blueprint. Everything you need to complete your first real 30-day streak — no tools, no setup, no overwhelm.',
        highlights: [
            'Neuroscience of habit formation',
            'Week-by-week 30-day protocols',
            '"Never Miss Twice" recovery protocol',
            'Streak psychology & tracking system',
        ],
        bestFor: 'Those who want to start simple and prove they can follow through.',
        image: {
            src: '/30-day-habit-jumpstart.webp',
            alt: '30-Day Habit Jumpstart — Lite PDF mockup',
            label: 'PDF Guide',
            accentHex: '#94a3b8',
        },
        accentColor: 'text-gray-500 dark:text-gray-400',
        borderStyle: 'border-gray-200 dark:border-gray-800',
        cardStyle: 'bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800',
        badgeStyle: 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400',
    },
    {
        id: 'advanced',
        tier: 'Complete',
        tierIcon: 'zap',
        name: 'Neural Rewire Blueprint',
        description:
            'The full 12-chapter science-backed system. Deep enough to answer every question your skeptical brain throws at it.',
        highlights: [
            '12-chapter operating manual',
            'Advanced habit stacking & sequencing',
            '8 real-world implementation blueprints',
            '30 → 66 → 365-day architecture',
        ],
        bestFor: 'Those who want the complete science and a system built to last a lifetime.',
        image: {
            src: '/neural-rewire-blueprint.webp',
            alt: 'Neural Rewire Blueprint — Advanced PDF mockup',
            label: 'PDF Guide',
            accentHex: '#FE8D2A',
        },
        accentColor: 'text-[#FE8D2A]',
        borderStyle: 'border-[#FE8D2A]',
        cardStyle: 'bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800',
        badgeStyle: 'bg-[#FE8D2A]/10 text-[#FE8D2A]',
    },
    {
        id: 'os',
        tier: 'Ultimate',
        tierIcon: 'monitor',
        name: 'Habit Transformation OS',
        description:
            'The complete ecosystem. The Advanced Blueprint plus a purpose-built Notion OS that makes showing up the path of least resistance.',
        highlights: [
            'Full 12-chapter Advanced Blueprint',
            'Habit Mastery OS — Notion dashboard',
            'Visual streaks, stats & consistency graph',
            'Milestones, rewards & task manager',
        ],
        bestFor: 'Those who want the full infrastructure — knowledge, architecture, and environment.',
        image: {
            src: '/habit-transformation-os.webp',
            alt: 'Habit Transformation OS — Notion dashboard screenshot',
            label: 'PDF + Notion OS',
            accentHex: '#f59e0b',
        },
        accentColor: 'text-amber-500',
        borderStyle: 'border-amber-400 dark:border-amber-500',
        cardStyle: 'bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800',
        badgeStyle: 'bg-amber-500/10 text-amber-500',
    },
];