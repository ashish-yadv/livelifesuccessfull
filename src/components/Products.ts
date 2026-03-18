
const THE_HABIT_JUMPSTART = `https://livelifesuccessfull.gumroad.com/l/30-day-habit-transformation-blueprint`;
const NEURAL_REWIRE_BLUEPRINT = `https://livelifesuccessfull.gumroad.com/l/neural-rewire-blueprint`;
const HABIT_TRANSFORMATION_OS = `https://livelifesuccessfull.gumroad.com/l/habit-transformation-os`;

export interface Product {
    id: string;
    tier: string;
    tierIcon: 'book' | 'zap' | 'monitor';
    name: string;
    tagline: string;
    description: string;
    originalPrice: number;
    price: number;
    badge: string | null;
    // image
    image: {
        src: string;       // path in /public — e.g. "/images/lite-mockup.webp"
        alt: string;
        label: string;     // shown as top-right badge on the image frame
        accentHex: string; // hex for bottom gradient tint
    };
    // styles
    badgeStyle: string;
    borderStyle: string;
    cardStyle: string;
    accentColor: string;
    ctaStyle: string;
    features: string[];
    gumroadUrl: string;
    guarantee: string;
}

export const products: Product[] = [
    {
        id: 'lite',
        tier: 'Starter',
        tierIcon: 'book',
        name: '30-Day Habit Jumpstart',
        tagline: 'Break the quit cycle — starting today',
        description:
            'The streamlined, science-backed blueprint to complete your first real 30-day streak. Readable in one sitting. Actionable the same day.',
        originalPrice: 47,
        price: 17,
        badge: null,
        image: {
            src: '/30-day-habit-jumpstart.webp',
            alt: '30-Day Habit Jumpstart — Lite PDF mockup',
            label: 'PDF Guide',
            accentHex: '#94a3b8',
        },
        badgeStyle: '',
        borderStyle: 'border-gray-200 dark:border-gray-800',
        cardStyle: 'bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800',
        accentColor: 'text-gray-500 dark:text-gray-400',
        ctaStyle:
            'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white',
        features: [
            'The neuroscience of how habits actually form',
            '4-component habit architecture system',
            'Week-by-week 30-day protocols with daily steps',
            '"Never Miss Twice" recovery protocol',
            'Streak psychology & binary tracking system',
            'Quick-reference 30-day checklist',
        ],
        gumroadUrl: THE_HABIT_JUMPSTART,
        guarantee: '30-day money-back guarantee',
    },
    {
        id: 'advanced',
        tier: 'Complete',
        tierIcon: 'zap',
        name: 'Neural Rewire Blueprint',
        tagline: 'The last habit guide you will ever need',
        description:
            'The full 12-chapter neuroscience system — plus the Lite Edition as a daily companion. Deep enough to answer every "but what about me?" question.',
        originalPrice: 97,
        price: 47,
        badge: 'Most Popular',
        image: {
            src: '/neural-rewire-blueprint.webp',
            alt: 'Neural Rewire Blueprint — Advanced PDF mockup',
            label: 'PDF Guide',
            accentHex: '#FE8D2A',
        },
        badgeStyle: 'bg-gradient-to-r from-[#FE8D2A] to-[#D87620] text-black',
        borderStyle: 'border-[#FE8D2A]',
        cardStyle: 'bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800',
        accentColor: 'text-[#FE8D2A]',
        ctaStyle: 'bg-[#FE8D2A] hover:bg-[#D87620] text-gray-900',
        features: [
            '12-chapter science-backed operating manual',
            'The myth of willpower — fully dismantled',
            'Advanced habit stacking & sequencing system',
            '8 real-world implementation blueprints',
            '30 → 66 → 365-day long-term architecture',
            'Personal transformation plan (Ch. 12)',
            'Bonus: Lite Edition as daily companion',
        ],
        gumroadUrl: NEURAL_REWIRE_BLUEPRINT,
        guarantee: '30-day money-back guarantee',
    },
    {
        id: 'os',
        tier: 'Ultimate',
        tierIcon: 'monitor',
        name: 'Habit Transformation OS',
        tagline: 'Stop relying on willpower. Build the system.',
        description:
            'The complete ecosystem: Advanced Blueprint + the Notion OS that makes showing up automatic + Lite Edition as your daily companion.',
        originalPrice: 211,
        price: 97,
        badge: 'Best Value',
        image: {
            src: '/habit-transformation-os.webp',
            alt: 'Habit Transformation OS — Notion dashboard screenshot',
            label: 'PDF + Notion OS',
            accentHex: '#f59e0b',
        },
        badgeStyle: 'bg-gradient-to-r from-amber-500 to-yellow-400 text-black',
        borderStyle: 'border-amber-400 dark:border-amber-500',
        cardStyle: 'bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800',
        accentColor: 'text-amber-500',
        ctaStyle:
            'bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-black',
        features: [
            'Advanced Edition — full 12-chapter system',
            'Habit Mastery OS — full Notion dashboard (updates included)',
            'One-click habits & discipline statistics',
            'Visual consistency graph & streak counter',
            'Milestones, rewards & integrated task manager',
            'Lifetime access & all future updates',
            'Bonus: Lite Edition as daily companion',
        ],
        gumroadUrl: HABIT_TRANSFORMATION_OS,
        guarantee: '30-day money-back guarantee',
    },
];