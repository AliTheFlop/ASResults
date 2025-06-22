import ContactForm from "@/components/sections/ContactForm";
import { CheckCircle } from "lucide-react";

export default function ThankYou() {
    return (
        <div className="container mx-auto py-12 px-4 md:px-6 lg:py-24">
            <div className="mx-auto">
                <div className="mb-12">
                    <div className="text-center mb-4">
                        <CheckCircle className="mx-auto mb-4 w-16 h-16 text-green-500" />
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Thanks For Signing Up!
                        </h1>
                    </div>
                    <p className="text-center text-xl text-muted-foreground max-w-2xl mx-auto mb-32">
                        Your free guide should arrive within 5 minutes.
                        <br />
                        Please be sure to check your spam folder!
                    </p>
                    <div className="text-center mb-12">
                        <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-4">
                            Would you like us to help you?
                        </h3>
                        <p className=" text-muted-foreground max-w-2xl mx-auto">
                            Fill out the form below and we will contact you
                            within 24 hours.
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
