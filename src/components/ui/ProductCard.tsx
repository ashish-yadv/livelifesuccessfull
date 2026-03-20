import { CheckCircle2, ArrowRight, BookOpen, Zap, Monitor } from 'lucide-react';
import { CardImage } from './CardImage';
import type { Product } from '../Products';

const tierIcons = {
    book: <BookOpen className="w-5 h-5" />,
    zap: <Zap className="w-5 h-5" />,
    monitor: <Monitor className="w-5 h-5" />,
} as const;

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const isPopular = product.badge === 'Most Popular';
    const savingsPct = Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
    );

    return (
        // `group` enables image zoom on card hover via group-hover in CardImage
        <div className="relative flex flex-col h-full">

            {/* Badge — sits above the card */}
            {product.badge && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                    <div className={`${product.badgeStyle} px-6 py-2 rounded-full text-sm font-semibold shadow-lg whitespace-nowrap`}>
                        {product.badge}
                    </div>
                </div>
            )}

            <div
                className={`
          group relative flex flex-col h-full rounded-3xl border-2 shadow-xl
          overflow-hidden
          transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl
          ${product.cardStyle}
          ${product.borderStyle}
          ${isPopular ? 'shadow-[#FE8D2A]/10' : ''}
        `}
            >
                {/* Image — flush to top, full width */}
                <CardImage
                    src={product.image.src}
                    alt={product.image.alt}
                    label={product.image.label}
                    accentHex={product.image.accentHex}
                />

                {/* Content — padded block below image */}
                <div className="flex flex-col flex-1 p-6 sm:p-8">

                    {/* Tier + savings row */}
                    <div className="flex items-center justify-between mb-5">
                        <div className={`flex items-center gap-2 text-sm font-semibold uppercase tracking-widest ${product.accentColor}`}>
                            {tierIcons[product.tierIcon]}
                            {product.tier}
                        </div>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                            {savingsPct}% off
                        </span>
                    </div>

                    {/* Name + tagline */}
                    <div className="mb-5 pb-5 border-b border-gray-200 dark:border-gray-800">
                        <h3 className="font-semibold text-xl sm:text-2xl mb-1 leading-snug">
                            {product.name}
                        </h3>
                        <p className={`text-sm font-medium italic ${product.accentColor}`}>
                            {product.tagline}
                        </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                        {product.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-8 flex-1">
                        {product.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${product.accentColor}`} />
                                <span className="text-sm text-gray-700 dark:text-gray-300 leading-snug">
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Pricing */}
                    <div className="flex items-end gap-2 mb-6">
                        <span className={`text-5xl sm:text-6xl font-bold leading-none ${isPopular ? 'text-[#FE8D2A]' : ''}`}>
                            ${product.price}
                        </span>
                        <div className="mb-1">
                            <span className="block text-gray-400 line-through text-base">
                                ${product.originalPrice}
                            </span>
                            <span className="block text-xs text-gray-500 dark:text-gray-500">
                                one-time
                            </span>
                        </div>
                    </div>

                    {/* CTA */}
                    <a
                        href={product.gumroadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
              group/cta w-full flex items-center justify-center gap-2
              px-8 py-4 rounded-xl font-semibold text-base
              transition-all duration-300 shadow-lg hover:shadow-xl
              ${product.ctaStyle}
            `}
                    >
                        Get {product.name.split(' ').slice(-1)[0]}
                        <ArrowRight className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform" />
                    </a>

                    {/* Guarantee */}
                    <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-500 dark:text-gray-500">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FE8D2A]" />
                        {product.guarantee}
                    </div>

                </div>
            </div>
        </div>
    );
}