// app/blog/[slug]/page.jsx
import { getPostData, getAllPostSlugs } from "@/lib/posts"; // Adjust path if needed
import { notFound } from "next/navigation";

// This function tells Next.js which slugs to pre-render
export async function generateStaticParams() {
    const paths = getAllPostSlugs(); // Get all { params: { slug: '...' } }
    return paths.map((path) => ({ slug: path.params.slug }));
}

export async function generateMetadata({ params }) {
    const awaitParams = await params;
    const post = await getPostData(awaitParams.slug);
    if (!post) {
        return { title: "Post Not Found" };
    }
    return {
        title: post.title,
        description: post.summary || "Blog post", // Use summary from frontmatter if available
    };
}

export default async function PostPage({ params }) {
    const awaitParams = await params;
    const postData = await getPostData(awaitParams.slug);

    if (!postData) {
        notFound(); // This will render the nearest not-found.js file or a default 404 page
    }

    return (
        <div className="container mx-auto py-12 px-4 md:px-6 lg:py-24">
            <div className="border border-muted rounded-lg p-6 md:p-10 bg-white dark:bg-background shadow-sm">
                <article className="prose prose-base md:prose-lg dark:prose-invert max-w-none prose-headings:font-logo prose-headings:text-brand prose-p:text-foreground prose-a:text-brand hover:prose-a:underline prose-strong:text-brand prose-li:marker:text-brand">
                    <h1>{postData.title}</h1>
                    {postData.date && (
                        <p className="text-muted-foreground">
                            <time dateTime={postData.date}>
                                {postData.date}
                            </time>
                        </p>
                    )}
                    {postData.author && (
                        <p className="text-muted-foreground">
                            By {postData.author}
                        </p>
                    )}
                    <hr className="my-6" />
                    <div
                        dangerouslySetInnerHTML={{
                            __html: postData.contentHtml,
                        }}
                    />
                </article>
            </div>
        </div>
    );
}
