import ContactForm from "@/components/sections/ContactForm";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

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
                    <p className="text-center text-xl text-muted-foreground max-w-2xl mx-auto">
                        <a
                            className="underline"
                            target="_blank"
                            href="https://drive.google.com/file/d/1fA6kO77jIKWfaKyoFGSWHYgtt8NlREqm/view?usp=sharing"
                        >
                            Access the playbook here.
                        </a>
                        <br />
                    </p>
                    <p className="text-center text-sm text-muted-foreground max-w-2xl mx-auto mb-32 mt-4">
                        You&apos;ll also recieve a copy in your email. Please be
                        sure to check your spam folder!
                    </p>
                    <div className="text-center mb-12">
                        <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-4">
                            We can take your ads off your back!
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
