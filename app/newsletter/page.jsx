import NewsletterForm from "@/components/sections/NewsletterForm";

export default function NewsletterPage() {
    return (
        <div className="container mx-auto py-16 px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-brand mb-4">
                    Grow Your Business Faster
                </h1>
                <p className="text-xl text-muted-foreground">
                    Get proven marketing strategies every week directly in your
                    inbox.
                </p>

                <p className="text-xl text-muted-foreground">
                    Learn practical strategies used by experts to grow any
                    business.
                </p>
            </div>
            <NewsletterForm />
        </div>
    );
}
