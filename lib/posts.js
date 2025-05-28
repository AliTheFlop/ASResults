// lib/posts.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blog"); // Or 'content/blog'

export function getSortedPostsData() {
    // Get file names under /_posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id (slug)
        const slug = fileName.replace(/\.md$|\.mdx$/, "");

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the slug
        return {
            slug,
            ...matterResult.data, // Spread the frontmatter data (title, date, etc.)
        };
    });

    // Sort posts by date (if you have a date in frontmatter)
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export async function getPostData(slug) {
    let fullPath = path.join(postsDirectory, `${slug}.md`);
    // Check if .mdx version exists if .md not found
    if (!fs.existsSync(fullPath)) {
        fullPath = path.join(postsDirectory, `${slug}.mdx`);
        if (!fs.existsSync(fullPath)) {
            return null; // Or throw an error
        }
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the slug and contentHtml
    return {
        slug,
        contentHtml,
        ...matterResult.data, // Spread the frontmatter data
    };
}

// This function is needed for Next.js to know all possible dynamic paths
export function getAllPostSlugs() {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        return {
            params: {
                slug: fileName.replace(/\.md$|\.mdx$/, ""),
            },
        };
    });
}
