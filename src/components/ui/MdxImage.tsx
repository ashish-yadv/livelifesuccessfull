import Image from "next/image";

interface MdxImageProps {
    src?: string;
    alt?: string;
    /**
     * Aspect ratio of the image container.
     * Expressed as a percentage (height / width * 100).
     *
     * Common values:
     *   "56.25%"  → 16:9  (default, good for landscape/cover images)
     *   "75%"     → 4:3
     *   "100%"    → 1:1 square
     */
    aspectRatio?: string;
}

/**
 * MdxImage
 *
 * Optimized image component for use inside MDX articles.
 * Wraps next/image with a relative container so `fill` works
 * without requiring explicit width/height props.
 *
 * Usage in PostBody components map:
 *   img: MdxImage
 *
 * Usage as a named component in MDX:
 *   <MdxImage src="/blogImages/my-post/diagram.webp" alt="System diagram" />
 *   <MdxImage src="/blogImages/my-post/photo.webp" alt="Photo" aspectRatio="75%" />
 */
export function MdxImage({ src, alt, aspectRatio = "56.25%" }: MdxImageProps) {
    if (!src) return null;

    return (
        <span
            className="block relative w-full my-8 rounded-xl overflow-hidden shadow-md"
            style={{ paddingTop: aspectRatio }}
        >
            <Image
                src={src}
                alt={alt ?? ""}
                fill
                // className="object-cover"
                className=""
                sizes="(max-width: 896px) 100vw, 896px"
            />
        </span>
    );
}