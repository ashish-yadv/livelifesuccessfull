
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
        id: `lite`,
        tier: `Starter`,
        tierIcon: `book`,
        name: `The 30-Day Habit Jumpstart`,
        tagline: `Break the quit cycle — starting today`,
        description:
            `The streamlined blueprint to complete your first real 30-day streak. Read in one sitting and put it in action the same day.`,
        originalPrice: 47,
        price: 17,
        badge: null,
        image: {
            src: `/30-day-habit-jumpstart.webp`,
            alt: `30-Day Habit Jumpstart — Lite PDF mockup`,
            label: `PDF Guide`,
            accentHex: `#94a3b8`,
        },
        badgeStyle: ``,
        borderStyle: `border-gray-200 dark:border-gray-800`,
        cardStyle: `bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800`,
        accentColor: `text-gray-500 dark:text-gray-400`,
        ctaStyle:
            `bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white`,
        features: [
            `You learn how habits form, explained simply that you can apply today.`,
            `Week-by-week 30-day protocols with daily action steps.`,
            `"Never Miss Twice" recovery protocol, your one miss never becomes two.`,
            `Complexity assessment framework — know exactly which habit to start with first.`,
            `Quick-reference 30-day checklist, just open it, do it, and done.`,
        ],
        gumroadUrl: THE_HABIT_JUMPSTART,
        guarantee: `30-day money-back guarantee`,
    },
    {
        id: `advanced`,
        tier: `Complete`,
        tierIcon: `zap`,
        name: `The 30-Day Habit Blueprint`,
        tagline: `The last habit guide you will ever need`,
        description:
            `The science-backed system with the The 30-Day Habit Jumpstart as your daily companion.`,
        originalPrice: 97,
        price: 47,
        badge: `Most Popular`,
        image: {
            src: `/neural-rewire-blueprint.webp`,
            alt: `Neural Rewire Blueprint — Advanced PDF mockup`,
            label: `PDF Guide`,
            accentHex: `#FE8D2A`,
        },
        badgeStyle: `bg-gradient-to-r from-[#FE8D2A] to-[#D87620] text-black`,
        borderStyle: `border-[#FE8D2A]`,
        cardStyle: `bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800`,
        accentColor: `text-[#FE8D2A]`,
        ctaStyle: `bg-[#FE8D2A] hover:bg-[#D87620] text-gray-900`,
        features: [
            `Complete neuroscience system, with every "but what about me?" answered.`,
            `Habit stacking framework, so each one automatically triggers the next.`,
            `8 real-world blueprints: morning, fitness, nutrition, learning, and more.`,
            `Identity-based habit design: shift from "I'm trying to" to "I'm someone who does".`,
            `Personal transformation plan, your custom action playbook.`,
            `Bonus: The 30-Day Habit Jumpstart`,
        ],
        gumroadUrl: NEURAL_REWIRE_BLUEPRINT,
        guarantee: `30-day money-back guarantee`,
    },
    {
        id: `os`,
        tier: `Ultimate`,
        tierIcon: `monitor`,
        name: `The 30-Day Habit Transformation OS`,
        tagline: `Stop relying on willpower. Build the system.`,
        description:
            `The complete ecosystem: Habit Mastery OS + the Blueprint and the Jumpstart.`,
        originalPrice: 211,
        price: 97,
        badge: `Best Value`,
        image: {
            src: `/habit-transformation-os.webp`,
            alt: `Habit Transformation OS — Notion dashboard screenshot`,
            label: `PDF + Notion OS`,
            accentHex: `#f59e0b`,
        },
        badgeStyle: `bg-gradient-to-r from-amber-500 to-yellow-400 text-black`,
        borderStyle: `border-amber-400 dark:border-amber-500`,
        cardStyle: `bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800`,
        accentColor: `text-amber-500`,
        ctaStyle:
            `bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-black`,
        features: [
            `Habit Mastery OS — full Notion dashboard, updates included.`,
            `One-click habit tracking, intention to action in one tap.`,
            `Visual consistency graph + streak counter, your momentum made visible.`,
            `Milestone and rewards system. Built in task manager.`,
            `Bonus: The 30-day Habit Blueprint + The 30-day Habit Jumpstart`,
            `Lifetime access & all future updates.`,
        ],
        gumroadUrl: HABIT_TRANSFORMATION_OS,
        guarantee: `30-day money-back guarantee`,
    },
];