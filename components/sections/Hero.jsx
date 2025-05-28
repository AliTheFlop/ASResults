import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative">
            <div className="absolute inset-0 -z-10" />

            <div className="container mx-auto px-4 md:px-6 py-24 md:py-32">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                        More growth. More clients.
                        <br />
                        <span className="text-primary relative">
                            Guaranteed
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-stone-500/50 transform skew-x-12"></div>
                        </span>
                        .
                    </h1>

                    {/* <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed">
                        We build systems that attract new customers & guarantee
                        results in 120 days or you don&apos;t pay.
                    </p> */}
                    <div className="mt-20 mb-2">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button
                                size="lg"
                                className="px-8 py-6 text-lg"
                                asChild
                            >
                                <Link href="/contact">Yes, I Want That!</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent -z-10" />
        </section>
    );
};

export default Hero;
