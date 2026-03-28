# Blog Writing Guide

Quick reference for writing articles in `content/blog/`.

---

## Creating a new post

1. Create a file in `content/blog/your-post-slug.mdx`
2. The filename becomes the URL: `your-post-slug.mdx` → `/blog/your-post-slug`
3. Add frontmatter at the top (see below)
4. Write your content in Markdown below the frontmatter
5. Push to GitHub — Vercel deploys automatically

---

## Frontmatter (required at top of every post)

```mdx
---
title: "Your Post Title Here"
date: "2026-03-26"
excerpt: "One or two sentences shown on the blog card and in Google search results. Make it count."
tags: ["Habits", "Systems"]
coverImage: "/blogImages/your-post-slug/cover.webp"
---
```

| Field      | Required | Notes                                           |
| ---------- | -------- | ----------------------------------------------- |
| title      | ✅        | Shown on card and at top of post                |
| date       | ✅        | Format: YYYY-MM-DD. Used for sorting            |
| excerpt    | ✅        | 1–2 sentences. Shown on card and in Google      |
| tags       | optional | Array of strings. Max 2 shown on card           |
| coverImage | optional | Path from /public e.g. `/blogImages/your-post-slug/cover.webp` |

---

## Formatting cheatsheet

```mdx
## Section Heading          → large heading, use for main sections
### Sub Heading             → medium heading, use inside sections
#### Smaller Heading        → small heading, use sparingly

Normal paragraph text goes here. Leave a blank line between paragraphs.

**Bold text like this**
*Italic text like this*
**Combine *both* like this**

> This is a blockquote. Use for key insights or memorable lines.
> — Optional attribution

- Bullet point one
- Bullet point two
- Bullet point three

1. Numbered step one
2. Numbered step two
3. Numbered step three

[Link text](https://example.com)

---    ← horizontal divider line

`inline code looks like this`
```

---

## Adding images between paragraphs

1. Put the image in `/blogImages/your-post-slug`
2. Use `.webp` format for best performance
3. Drop it anywhere in the MDX with standard Markdown syntax:

```mdx
Some paragraph text here.

![Description of the image](/blogImages/your-post-slug/your-image.webp)

Next paragraph continues here.
```

Images are automatically styled: full-width, rounded corners, shadow, vertical spacing.

---

## Image folder structure

Each post gets its own image folder named after its slug.

public/blogImages/your-post-slug/
├── cover.webp         ← always name the cover image this
├── image-one.webp
└── image-two.webp

Reference in frontmatter:
  coverImage: "/blogImages/your-post-slug/cover.webp"

Reference inline:
  ![Description](/blogImages/your-post-slug/image-name.webp)

Rules:
- Folder name = MDX filename (without .mdx)
- Always use .webp for performance
- Lowercase, hyphenated filenames only
- Cover image always named 'cover.webp'
- File size — Compress before uploading. Run images through `squoosh.app` before dropping into the project. Aim under 200kb per image.
- Dimensions — Don't upload a 4000px wide image for something displayed at 800px. Resize first.

---

## Full post example

```mdx
---
title: "Why Most Habit Systems Fail"
date: "2026-03-26"
excerpt: "Most systems fail not because of bad design but because of wrong assumptions about who you are."
tags: ["Habits", "Systems"]
coverImage: "/blogImages/habit-systems/cover.webp"
---

Most people build habit systems for the best version of themselves.
That's the first mistake.

## The Aspirational Self Trap

You plan the 5am wake-up, the hour of journaling, the cold shower.
All designed for a person who doesn't exist yet.

> Build systems for who you are today,
> not who you hope to be tomorrow.

### What to do instead

Start with your current baseline — not your ideal one.

1. Write down what you *actually* do each morning right now
2. Pick one thing to add or improve
3. Run it for two weeks before touching anything else

**The goal is consistency, not perfection.**

![A simple daily habit tracker](/blogImages/habit-tracker.webp)

Consistency compounds. *Perfection* stalls.

---

The system that runs every day beats the perfect system
abandoned on day four.
```

---

## Cross-posting to Substack

1. Write and push the MDX file → your site gets the SEO credit
2. Paste the same content into Substack
3. In Substack → post settings → set **Canonical URL** to:
   `https://livelifesuccessfull.vercel.app/blog/your-post-slug`
4. Google sees the canonical and gives all ranking to your domain
5. Substack still sends the email to your subscribers