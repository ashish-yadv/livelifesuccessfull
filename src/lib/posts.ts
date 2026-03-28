import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content/blog");

export interface PostMeta {
    slug: string;
    rawDate: string;   // "YYYY-MM-DD" — formatted client-side for timezone accuracy
    excerpt: string;
    title: string;
    coverImage?: string;
    tags?: string[];
    readTime: string;
}

export interface Post extends PostMeta {
    content: string;
}

// Internal type used only for sorting — avoids `any`
interface SortablePost {
    meta: PostMeta;
    sortMs: number;
}

function estimateReadTime(content: string): string {
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
}

function extractRawDate(value: unknown): string {
    if (value instanceof Date) return value.toISOString().split("T")[0];
    if (typeof value === "string") return value;
    return new Date().toISOString().split("T")[0];
}

function extractString(value: unknown, fallback: string): string {
    return typeof value === "string" ? value : fallback;
}

function extractTags(value: unknown): string[] {
    if (!Array.isArray(value)) return [];
    return value.filter((v): v is string => typeof v === "string");
}

export function getAllPostSlugs(): string[] {
    if (!fs.existsSync(POSTS_DIR)) return [];
    return fs
        .readdirSync(POSTS_DIR)
        .filter((f) => f.endsWith(".mdx"))
        .map((f) => f.replace(/\.mdx$/, ""));
}

export function getAllPosts(): PostMeta[] {
    const slugs = getAllPostSlugs();

    const sortable: SortablePost[] = slugs.map((slug) => {
        const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
        const raw = fs.readFileSync(filePath, "utf8");
        const { data, content } = matter(raw);

        const rawDate = extractRawDate(data.date);

        const meta: PostMeta = {
            slug,
            title: extractString(data.title, "Untitled"),
            rawDate,
            excerpt: extractString(
                data.excerpt,
                content.slice(0, 180).replace(/\n/g, " ") + "…"
            ),
            coverImage:
                typeof data.coverImage === "string" ? data.coverImage : undefined,
            tags: extractTags(data.tags),
            readTime: estimateReadTime(content),
        };

        return { meta, sortMs: new Date(rawDate).getTime() };
    });

    return sortable
        .sort((a, b) => b.sortMs - a.sortMs)
        .map(({ meta }) => meta);
}

export function getPostBySlug(slug: string): Post | null {
    const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) return null;

    const raw = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(raw);

    const rawDate = extractRawDate(data.date);

    return {
        slug,
        title: extractString(data.title, "Untitled"),
        rawDate,
        excerpt: extractString(
            data.excerpt,
            content.slice(0, 180).replace(/\n/g, " ") + "…"
        ),
        coverImage:
            typeof data.coverImage === "string" ? data.coverImage : undefined,
        tags: extractTags(data.tags),
        readTime: estimateReadTime(content),
        content,
    };
}