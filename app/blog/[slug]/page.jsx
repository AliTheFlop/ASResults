// app/blog/[slug]/page.jsx
import { getPostData, getAllPostSlugs } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
    const paths = getAllPostSlugs();
    return paths.map((path) => ({ slug: path.params.slug }));
}

export async function generateMetadata({ params }) {
    const post = await getPostData(params.slug);
    if (!post) return { title: "Post Not Found" };
    return {
        title: post.title,
        description: post.summary || "Blog post",
    };
}

export default async function PostPage({ params }) {
    const postData = await getPostData(params.slug);
    if (!postData) notFound();

    return (
        <div className="container mx-auto py-12 px-4 md:px-6 lg:py-24">
            <div className="border border-muted rounded-lg p-6 md:p-10 bg-white dark:bg-background shadow-sm">
                <article className="prose prose-base md:prose-lg dark:prose-invert max-w-none prose-headings:font-logo prose-headings:text-brand prose-p:text-foreground prose-a:text-brand hover:prose-a:underline prose-strong:text-brand prose-li:marker:text-brand">
                    {/* HERO */}
                    <header className="mb-10">
                        <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight text-brand">
                            {postData.title}
                        </h1>
                        <div className="font-body mt-4 text-muted-foreground text-sm">
                            <time dateTime={postData.date}>
                                {postData.dateDisplay}
                            </time>
                            {postData.author && <> · By {postData.author}</>}
                        </div>
                    </header>

                    {/* CONTENT */}
                    <div
                        className="prose prose-base md:prose-lg dark:prose-invert prose-headings:font-logo prose-headings:text-brand prose-p:text-foreground prose-a:text-brand hover:prose-a:underline prose-strong:text-brand prose-li:marker:text-brand"
                        dangerouslySetInnerHTML={{
                            __html: postData.contentHtml,
                        }}
                    />
                </article>
            </div>
        </div>
    );
}
