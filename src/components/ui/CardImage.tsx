import Image from 'next/image';

interface CardImageProps {
    src: string;
    alt: string;
    label: string;       // e.g. "PDF Guide", "PDF + Notion OS"
    accentHex: string;   // hex color for bottom gradient tint — e.g. "#FE8D2A"
}

export function CardImage({ src, alt, label, accentHex }: CardImageProps) {
    return (
        /*
         * FRAME DIMENSIONS
         * ─────────────────────────────────────────────────────────────────────
         * Aspect ratio : 4 / 3  (width : height)
         * Recommended source image size : 800 × 600 px minimum
         *
         * What to put in each card:
         *   Starter  (Lite PDF)      → PDF cover mockup, slightly angled/3D
         *   Complete (Advanced PDF)  → PDF cover mockup, slightly angled/3D
         *   Ultimate (OS Bundle)     → Notion dashboard screenshot, cropped 4:3
         *
         * Tools to create mockups:
         *   • mockuuups.com / smartmockups.com  → 3D PDF/book renders
         *   • Your own Notion screenshot        → crop to 800×600
         * ─────────────────────────────────────────────────────────────────────
         */
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800">

            {/* Product image */}
            <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Bottom gradient fade — tinted with accent color */}
            {/* <div
                className="absolute inset-0"
                style={{
                    background: `linear-gradient(
            to bottom,
            transparent 70%,
            ${accentHex}18 90%,
            ${accentHex}27 100%
          )`,
                }}
            /> */}

            {/* Top-left noise grain overlay — adds depth */}
            <div
                className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    backgroundSize: '128px 128px',
                }}
            />

            {/* Product type label — top right */}
            <div
                className="absolute top-3 right-3 px-2.5 py-1 rounded-lg
                   text-[10px] font-bold uppercase tracking-widest
                   bg-black/40 backdrop-blur-sm text-white/90
                   border border-white/10"
            >
                {label}
            </div>

        </div>
    );
}