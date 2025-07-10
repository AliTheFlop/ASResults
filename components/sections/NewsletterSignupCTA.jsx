"use client";

import NewsletterForm from "./NewsletterForm";

const NewsletterSignupCTA = () => {
    return (
        <section className="py-16 md:py-24 bg-muted/40 border-t border-[#E0E0E0] shadow-inner">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-10">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Grow Your Business Faster
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Get proven marketing strategies every week directly in
                        your inbox.
                    </p>
                </div>
                <NewsletterForm />
            </div>
        </section>
    );
};

export default NewsletterSignupCTA;
