// lib/posts.js
// Full rewrite to robustly handle custom date formats (e.g. "5th July 2025" or "05/July/2025")
// and always sort newest → oldest.

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { parse, format } from "date-fns";

// Adjust if your markdown lives elsewhere
const postsDirectory = path.join(process.cwd(), "content/blog");

/**
 * Convert a front‑matter date string written as DO/MMMM/YYYY or with ordinal suffixes
 * (e.g. "5th July 2025", "05/July/2025") into a native Date object.
 * Returns null if parsing fails.
 */
function parseFrontmatterDate(dateString) {
    if (!dateString || typeof dateString !== "string") return null;

    // 1. Strip ordinal suffixes: 1st → 1, 2nd → 2, etc.
    const cleaned = dateString.replace(/(\d{1,2})(st|nd|rd|th)/gi, "$1");

    // 2. Replace any "/" separators with spaces so we can use one fmt string
    const normalised = cleaned.replace(/[\/]/g, " ").trim();

    // 3. Try parsing with our expected pattern: "d MMMM yyyy" (e.g. 5 July 2025)
    const parsed = parse(normalised, "d MMMM yyyy", new Date());

    return isNaN(parsed) ? null : parsed;
}

/**
 * Read all posts, attach useful metadata, then return them sorted by date (newest first).
 */
export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory);

    const allPostsData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.mdx?$/, "");
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);

        const dateObj = parseFrontmatterDate(data.date);

        return {
            slug,
            ...data, // title, author, summary, etc.
            // Store a display version *and* ISO version for flexibility
            date: dateObj ? format(dateObj, "yyyy-MM-dd") : null,
            dateDisplay: dateObj ? format(dateObj, "d MMMM yyyy") : null,
            _dateObj: dateObj, // private helper for sorting (will be removed before export)
        };
    });

    // Newest → oldest; undefined dates sink to the bottom
    allPostsData.sort((a, b) => {
        if (!a._dateObj) return 1;
        if (!b._dateObj) return -1;
        return b._dateObj - a._dateObj;
    });

    // Remove the helper key before returning
    return allPostsData.map(({ _dateObj, ...rest }) => rest);
}

/**
 * Return full data + HTML for an individual post.
 */
export async function getPostData(slug) {
    const possibleExtensions = [".md", ".mdx"];
    let fullPath = null;

    for (const ext of possibleExtensions) {
        const attempt = path.join(postsDirectory, `${slug}${ext}`);
        if (fs.existsSync(attempt)) {
            fullPath = attempt;
            break;
        }
    }

    if (!fullPath) return null;

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Convert Markdown → HTML
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    const dateObj = parseFrontmatterDate(data.date);

    return {
        slug,
        contentHtml,
        ...data,
        date: dateObj ? format(dateObj, "yyyy-MM-dd") : null,
        dateDisplay: dateObj ? format(dateObj, "d MMMM yyyy") : null,
    };
}

/**
 * For Next.js dynamic routes.
 */
export function getAllPostSlugs() {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => ({
        params: { slug: fileName.replace(/\.mdx?$/, "") },
    }));
}
