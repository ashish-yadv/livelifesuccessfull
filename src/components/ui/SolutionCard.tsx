import { CheckCircle2, ArrowRight, BookOpen, Zap, Monitor } from 'lucide-react';
import { CardImage } from './CardImage';
import type { SolutionProduct } from '../SolutionProducts';

const tierIcons = {
    book: <BookOpen className="w-5 h-5" />,
    zap: <Zap className="w-5 h-5" />,
    monitor: <Monitor className="w-5 h-5" />,
} as const;

interface SolutionCardProps {
    product: SolutionProduct;
}

export function SolutionCard({ product }: SolutionCardProps) {
    return (
        // `group` enables image zoom on card hover via group-hover in CardImage
        <div
            className={`
        group relative flex flex-col h-full rounded-3xl border-2 shadow-xl
        overflow-hidden
        transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl
        ${product.cardStyle}
        ${product.borderStyle}
      `}
        >
            {/* Image — flush to top, no padding, full width */}
            <CardImage
                src={product.image.src}
                alt={product.image.alt}
                label={product.image.label}
                accentHex={product.image.accentHex}
            />

            {/* Content — padded block below image */}
            <div className="flex flex-col flex-1 p-6 sm:p-8">

                {/* Tier badge */}
                <div className="mb-5">
                    <div
                        className={`
              inline-flex items-center gap-2 px-3 py-1.5 rounded-full
              text-xs font-semibold uppercase tracking-widest
              ${product.badgeStyle}
            `}
                    >
                        {tierIcons[product.tierIcon]}
                        {product.tier}
                    </div>
                </div>

                {/* Name */}
                <h3 className="font-semibold text-xl sm:text-2xl mb-3 leading-snug">
                    {product.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {product.description}
                </p>

                {/* Divider */}
                <div className="border-t border-gray-200 dark:border-gray-800 mb-6" />

                {/* Highlights */}
                <div className="space-y-3 flex-1 mb-6">
                    {product.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <CheckCircle2
                                className={`w-4 h-4 flex-shrink-0 mt-0.5 ${product.accentColor}`}
                            />
                            <span className="text-sm text-gray-700 dark:text-gray-300 leading-snug">
                                {highlight}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Best for */}
                <div className="rounded-xl px-4 py-3 mb-6 bg-gray-100 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-[#FE8D2A] mb-1">
                        Best for
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-snug">
                        {product.bestFor}
                    </p>
                </div>

                {/* Anchor link — text only, no button */}
                <a
                    href="#pricing"
                    className={`
            group/link flex items-center justify-center gap-1.5
            text-sm font-semibold transition-opacity duration-200
            hover:opacity-80 ${product.accentColor}
          `}
                >
                    See pricing
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>

            </div>
        </div>
    );
}