import { ArrowRight, ChevronDown, Star, ShieldCheck, Users } from 'lucide-react';
import Image from 'next/image';

interface HeroSectionProps {
    handlePricingSection: () => void;
    handleFrameworksSection: () => void;
}

export function HeroSection({ handlePricingSection, handleFrameworksSection }: HeroSectionProps) {
    return (
        <section className="relative min-h-screen grid grid-rows-[1fr_auto] overflow-hidden pt-16">

            {/* Hero Image */}
            <div className="w-full z-20 lg:z-0 lg:absolute lg:inset-0">
                <div className="relative w-full h-64 sm:h-96 lg:h-full">

                    {/* Mobile / Tablet Image */}
                    <Image
                        // src="/hero-image-small-screen.jpg"
                        src="/hero-image-test-mobile.jpg"
                        alt="Person building consistent habits with a clear daily system"
                        fill
                        priority
                        className="object-cover lg:hidden"
                        sizes="(max-width: 64rem) 100vw"
                    />

                    {/* Large Screen Image */}
                    <Image
                        src="/hero-image-test.jpg"
                        alt="Person building consistent habits with a clear daily system"
                        fill
                        priority
                        className="object-cover hidden lg:block"
                        sizes="(min-width: 64rem) 100vw"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-0 lg:z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex items-center">
                <div className="text-left max-w-4xl">

                    {/* ── HEADLINE ─────────────────────────────────────────────────────
                        Lead with the identity hook — not the product category.
                        "Stop Blaming Yourself For Quitting" triggers the
                        "that's exactly me" response before the brain's
                        pattern-matching filter dismisses it as another habit app.
                        ─────────────────────────────────────────────────────────────────── */}
                    <p className="text-sm font-semibold uppercase tracking-widest text-[#FE8D2A] mb-3">
                        Don&#39;t wait another Monday
                    </p>
                    <h1 className="font-semibold text-5xl sm:text-5xl lg:text-7xl mb-6 sm:mb-10 leading-[1.2]">
                        Stop Blaming Yourself
                        <br />
                        <span className="text-[#FE8D2A]"> For Quitting.</span>
                    </h1>

                    {/* ── SUBHEADLINE ───────────────────────────────────────────────────
                        Now carries the mechanism — what the product does and why it
                        works — without `mx-auto` which caused left-alignment drift.
                        ─────────────────────────────────────────────────────────────────── */}
                    <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-10 sm:mb-14 max-w-3xl">
                        The problem was never willpower, it was the lack of a <i className="text-[#FE8D2A]">System</i>
                        . Build the system that makes showing up the path of least resistance to
                        build better & meaningful habits.
                    </p>

                    {/* ── TRUST INDICATORS ─────────────────────────────────────────────
                        Moved above the CTA buttons. Trust must be established
                        before the ask — not buried below it.
                        Replaced "30 Days" (product feature) and "Science Backed"
                        (generic claim) with specific, credible social proof signals.
                        ─────────────────────────────────────────────────────────────────── */}
                    <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10 lg:mb-6">

                        <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-[#FE8D2A] flex-shrink-0" />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                1,000+ lives transformed
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-[#FE8D2A] flex-shrink-0" />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                4.9 / 5 average rating
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-[#FE8D2A] flex-shrink-0" />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                30-day money-back guarantee
                            </span>
                        </div>

                    </div>

                    {/* ── CTA BUTTONS ──────────────────────────────────────────────────
                        Primary pulls into the pricing journey.
                        Secondary pulls into the educational journey.
                        Both keep the visitor on the page.
                        ─────────────────────────────────────────────────────────────────── */}
                    <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-start items-stretch sm:items-center">

                        <button
                            onClick={handlePricingSection}
                            className="w-full sm:w-auto group px-8 py-4 bg-[#FE8D2A] hover:bg-[#D87620] text-black rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl cursor-pointer font-semibold"
                        >
                            See The System
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button
                            onClick={handleFrameworksSection}
                            className="w-full sm:w-auto group px-8 py-4 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 border-2 border-gray-200 dark:border-gray-700 cursor-pointer font-semibold"
                        >
                            How It Works
                            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                        </button>

                    </div>

                </div>
            </div>

            {/* ── SCROLL INDICATOR ───────────────────────────────────────────────────
                Removed `hidden lg:block` — mobile users need this more than desktop.
                Gives the visual affordance that content exists below the fold.
                Positioned statically inside the flow on mobile so it never
                overlaps content on short-screen phones.
                ──────────────────────────────────────────────────────────────────────── */}
            <div className="w-full flex justify-center pb-4 lg:absolute lg:bottom-4 lg:left-1/2 lg:-translate-x-1/2 lg:w-auto animate-bounce">
                <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full p-1">
                    <div className="w-1.5 h-3 bg-[#FE8D2A] rounded-full mx-auto" />
                </div>
            </div>

        </section>
    );
}