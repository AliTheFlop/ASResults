import ContactForm from "@/components/sections/ContactForm";

export default function ThankYou() {
    return (
        <div className="container mx-auto py-12 px-4 md:px-6 lg:py-24">
            <div className="mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">
                        Thanks For Signing Up!
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                        Your free guide should arrive within 5 minutes.
                        <br />
                        Please be sure to check your spam folder!
                    </p>
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                            Would you like to know what we can do for you?
                        </h3>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Fill out the form below and we will contact you
                            within 24 hours for a free analysis. No costs, no
                            obligations, no annoying sales pitch. Guaranteed.
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
