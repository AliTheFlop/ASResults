// app/blog/page.jsx
import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts"; // Adjust path if needed

export const metadata = {
    title: "Blog | AS Results",
    description: "Read our latest articles and insights.",
};

export default function BlogIndexPage() {
    const allPostsData = getSortedPostsData();

    return (
        <div className="container mx-auto py-12 px-4 md:px-6 lg:py-24">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                    Our Blog
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Latest articles and insights from our team.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1 max-w-3xl mx-auto">
                {allPostsData.map(({ slug, title, date, summary }) => (
                    <article
                        key={slug}
                        className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow"
                    >
                        <h2 className="text-2xl font-semibold mb-2">
                            <Link
                                href={`/blog/${slug}`}
                                className="hover:text-primary transition-colors"
                            >
                                {title}
                            </Link>
                        </h2>
                        {date && (
                            <p className="text-sm text-muted-foreground mb-3">
                                <time dateTime={date}>{date}</time>
                            </p>
                        )}
                        {summary && (
                            <p className="text-muted-foreground mb-4">
                                {summary}
                            </p>
                        )}
                        <Link
                            href={`/blog/${slug}`}
                            className="font-medium text-primary hover:underline"
                        >
                            Read more &rarr;
                        </Link>
                    </article>
                ))}
                {allPostsData.length === 0 && (
                    <p className="text-center text-muted-foreground">
                        No posts yet. Check back soon!
                    </p>
                )}
            </div>
        </div>
    );
}
