import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ContactCTA = () => {
    return (
        <section className="py-16 md:py-24  bg-gradient-to-r from-[#1F51FF] to-[#003a88] text-white ">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-heading text-2xl md:text-4xl font-bold tracking-tight mb-6">
                        Contact Us For A Free Marketing Analysis
                    </h2>

                    <Button
                        size="lg"
                        variant="brand"
                        asChild
                        className="group bg-accent text-white"
                    >
                        <Link href="/free-marketing-analysis">
                            Get in Touch{" "}
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
