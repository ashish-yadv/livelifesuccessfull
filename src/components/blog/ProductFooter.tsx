import Image from "next/image";
import Link from "next/link";
import { products } from "@/src/components/Products";

/**
 * PostProductFooter
 *
 * James Clear-style product footer — dark background, large images,
 * transformational benefit line below each. No prices, no CTAs, no features.
 * The image does the work. The benefit line activates emotion, not logic.
 *
 * Placed outside <main> in both blog/page.tsx and blog/[slug]/page.tsx.
 */

/**
 * One sentence that speaks to the transformation, not the product.
 * Indexed by product id from Products.ts.
 */
const TRANSFORMATIONS: Record<string, string> = {
    lite: "Your first 30 days without quitting.",
    advanced: "The last habit system you'll ever need.",
    os: "Where showing up becomes automatic.",
};

export function ProductFooter() {
    return (
        <section className="bg-gray-900 py-20 sm:py-28">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Product image grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-16">
                    {products.map((product) => (
                        <Link
                            key={product.id}
                            href={product.gumroadUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center gap-5"
                        >
                            {/* Image */}
                            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xs bg-gray-900">
                                <Image
                                    src={product.image.src}
                                    alt={product.image.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 640px) 100vw, 33vw"
                                />
                            </div>

                            {/* Transformation benefit — not the product name */}
                            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium text-center leading-snug group-hover:text-white transition-colors duration-200">
                                {TRANSFORMATIONS[product.id] ?? product.tagline}
                            </p>
                        </Link>
                    ))}
                </div>

                {/* Site footer */}
                <div className="border-t border-white/[0.07] pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">

                    {/* Brand */}
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-600 dark:text-white">
                        LiveLifeSuccessfull
                    </p>

                    {/* Links */}
                    <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                        <Link href="/#pricing" className="hover:text-white hover:dark:text-white transition-colors duration-200 px-3">System</Link>
                        <span>|</span>
                        <Link href="/#about" className="hover:text-white hover:dark:text-white transition-colors duration-200 px-3">About</Link>
                        <span>|</span>
                        <Link href="/#faq" className="hover:text-white hover:dark:text-white transition-colors duration-200 px-3">FAQ</Link>
                        <span>|</span>
                        <Link href="/blog" className="hover:text-white hover:dark:text-white transition-colors duration-200 px-3">Blog</Link>
                        <span>|</span>
                        <Link href="mailto:livelifesuccessfulll@gmail.com" className="hover:text-white hover:dark:text-white transition-colors duration-200 px-3">Support</Link>
                    </div>

                    {/* Copyright */}
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                        © {new Date().getFullYear()} LiveLifeSuccessfull
                    </p>

                </div>
            </div>
        </section>
    );
}