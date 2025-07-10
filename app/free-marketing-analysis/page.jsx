import ContactForm from "@/components/sections/ContactForm";

export default function Contact() {
    return (
        <div className="container mx-auto py-12 px-4 md:px-6 lg:py-24">
            <div className="mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-brand">
                        Get A Free Marketing Analysis
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Fill out the form below and we will contact you within
                        24 hours. No costs, no obligations, no annoying sales
                        pitch. Guaranteed.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
