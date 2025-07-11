import NewsletterForm from "@/components/sections/NewsletterForm";

export default function NewsletterPage() {
    return (
        <div className="container mx-auto h-[80vh] flex flex-col justify-center  py-16 px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center w-full mb-12">
                <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-brand mb-4">
                    Grow Your Business Faster
                </h1>
                <p className="font-body text-xl text-muted-foreground">
                    Get proven marketing strategies every week directly in your
                    inbox.
                </p>

                <p className="font-body text-xl text-muted-foreground">
                    Learn practical strategies used by experts to grow any
                    business.
                </p>
            </div>
            <NewsletterForm />
        </div>
    );
}
