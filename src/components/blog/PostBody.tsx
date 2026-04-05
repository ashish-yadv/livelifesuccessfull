import { MDXRemote } from "next-mdx-remote/rsc";
import { MdxImage } from "@/src/components/ui/MdxImage";

interface PostBodyProps {
    content: string;
}

const components = {
    h1: ({ children }: { children?: React.ReactNode }) => (
        <h1 className="font-semibold text-3xl sm:text-4xl text-gray-900 dark:text-gray-100 leading-snug mt-12 mb-5">
            {children}
        </h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
        <h2 className="font-semibold text-2xl sm:text-3xl text-gray-900 dark:text-gray-100 leading-snug mt-12 mb-4">
            {children}
        </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
        <h3 className="font-semibold text-xl text-gray-900 dark:text-gray-100 leading-snug mt-8 mb-3">
            {children}
        </h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
        <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mt-6 mb-2">
            {children}
        </h4>
    ),
    p: ({ children }: { children?: React.ReactNode }) => (
        <p className="text-gray-600 dark:text-gray-400 text-xl leading-[1.5] sm:leading-[1.73]  mb-6">
            {children}
        </p>
    ),
    a: ({ href, children }: { href?: string; children?: React.ReactNode }) => (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative isolate inline-block px-0.5 text-current
             after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full
             after:h-[2px] after:border-b-2 after:border-gray-400 after:bg-[#FE8D2A]/30
             after:transition-all after:duration-300 after:ease-in-out after:-z-10
             hover:after:border-[#FE8D2A]/30 hover:after:h-full hover:text-white"
        >
            {children}
        </a>
    ),
    strong: ({ children }: { children?: React.ReactNode }) => (
        <strong className="font-semibold text-gray-900 dark:text-gray-100">
            {children}
        </strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
        <em className="italic text-gray-700 dark:text-gray-300">{children}</em>
    ),
    ul: ({ children }: { children?: React.ReactNode }) => (
        <ul className="list-disc list-outside pl-6 mb-6 space-y-2 text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-[1.55]">
            {children}
        </ul>
    ),
    ol: ({ children }: { children?: React.ReactNode }) => (
        <ol className="list-decimal list-outside pl-6 mb-6 space-y-2 text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-[1.55]">
            {children}
        </ol>
    ),
    li: ({ children }: { children?: React.ReactNode }) => (
        <li className="pl-1">{children}</li>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
        <blockquote className="my-8 italic text-center  text-[1.05rem] sm:text-[1.1rem] leading-[1.75] text-neutral-700 dark:text-neutral-300">
            {children}
        </blockquote>
    ),
    code: ({ children }: { children?: React.ReactNode }) => (
        <code className="text-[#FE8D2A] bg-[#FE8D2A]/10 rounded px-1.5 py-0.5 text-sm font-mono">
            {children}
        </code>
    ),
    pre: ({ children }: { children?: React.ReactNode }) => (
        <pre className="bg-gray-900 border border-gray-800 rounded-xl px-6 py-5 overflow-x-auto mb-6 text-sm">
            {children}
        </pre>
    ),
    hr: () => (
        <hr className="border-gray-200 dark:border-gray-800 my-10" />
    ),
    // Replaces plain <img> with the optimized MdxImage component
    img: MdxImage,
};

export function PostBody({ content }: PostBodyProps) {
    return (
        <div className="max-w-none font-[family-name:var(--font-crimson-pro)]">
            <MDXRemote source={content} components={components} />
        </div>
    );
}