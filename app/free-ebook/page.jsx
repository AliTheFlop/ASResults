import EbookForm from "@/components/sections/EbookForm";

export default function EbookLanding() {
    return (
        <div className="container mx-auto py-16 px-4 md:px-8 lg:py-24">
            <div className="mx-auto max-w-4xl">
                {/* Headline */}
                <div className="text-center mb-12">
                    <h1 className="font-heading text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-6 text-[#004aad]">
                        Your Ads Aren&apos;t Broken.
                    </h1>

                    <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
                        Here&apos;s four tips you can apply to your ads today
                        that will help get you more clients.
                    </p>
                </div>

                {/* Form */}
                <div className="max-w-2xl mx-auto mb-16">
                    <EbookForm />
                </div>
            </div>
        </div>
    );
}
