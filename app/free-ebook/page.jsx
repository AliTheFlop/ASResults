import EbookForm from "@/components/sections/EbookForm";

export default function Contact() {
    return (
        <div className="container mx-auto py-12 px-4 md:px-6 lg:py-24">
            <div className="mx-auto">
                <div className="text-center mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                        Free Guide
                    </h3>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">
                        4 Simple Steps To Quickly Attract More Clients For Your
                        Business With Meta Ads
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Google Ads are the quickest and most cost-effective way
                        to attract the perfect clients for your business.
                        <br /> <br />
                        In this free guide we will tell you how to do exactly
                        that. No jargon or technical mumbling, just an easy to
                        follow step-by-step overview of exactly what to do.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <EbookForm />
                </div>
            </div>
        </div>
    );
}
