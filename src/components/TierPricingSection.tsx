import { ProductCard } from './ui/ProductCard';
import { products } from './Products';

export function TierPricingSection() {
    return (
        <section id="pricing" className="py-24 sm:py-32 bg-white dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-24">
                    <h2 className="font-semibold text-4xl sm:text-5xl lg:text-6xl mb-6 leading-[1.2]">
                        Simple Investment.
                        <br />
                        <span className="text-[#FE8D2A]">Lifetime Value.</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        One-time payment. No subscriptions. No hidden fees.{' '}
                        Start where you are — upgrade when you&apos;re ready.
                    </p>
                </div>

                {/* Cards grid — loop lives here, not inside ProductCard */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mt-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* Value Comparison */}
                <div className="mt-20 text-center">
                    <p className="font-semibold text-[#FE8D2A] dark:text-[#FE8D2A] mb-6">
                        Compare the value:
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl sm:max-w-4xl mx-auto">
                        {[
                            { label: '1-on-1 Coaching', value: '$1,500+', highlight: false },
                            { label: 'Online Courses', value: '$500+', highlight: false },
                            { label: 'Habit Apps (yearly)', value: '$120+', highlight: false },
                            { label: 'This Complete System', value: 'From $17', highlight: true },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className={`p-4 rounded-xl ${item.highlight ? 'bg-[#FE8D2A] text-gray-900' : 'bg-gray-50 dark:bg-gray-900'}`}
                            >
                                <div
                                    className={`font-bold text-2xl mb-1 ${item.highlight ? '' : 'text-gray-400 dark:text-gray-500 line-through'}`}
                                >
                                    {item.value}
                                </div>
                                <div
                                    className={`text-sm font-medium ${item.highlight ? 'text-gray-900' : 'text-gray-500 dark:text-gray-400'}`}
                                >
                                    {item.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trust line */}
                <p className="text-center mt-10 text-sm text-gray-500 dark:text-gray-500">
                    <span className="text-[#FE8D2A] text-sm font-semibold uppercase tracking-widest">
                        ·&nbsp; 
                    </span>
                    Instant access after purchase &nbsp;
                    <span className="text-[#FE8D2A] text-sm font-semibold uppercase tracking-widest">·&nbsp;</span>
                    1,000+ lives transformed &nbsp;
                    <span className="text-[#FE8D2A] text-sm font-semibold uppercase tracking-widest">·&nbsp;</span>
                    Secure checkout via Gumroad
                </p>

            </div>
        </section>
    );
}