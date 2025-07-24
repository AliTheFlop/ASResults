"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative min-h-[70vh] flex items-center justify-center">
            <div className="absolute inset-0 -z-10" />

            <div className="container mx-auto my-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.2,
                            duration: 0.6,
                            ease: "easeOut",
                        }}
                        className="font-heading text-4xl max-[359px]:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight"
                    >
                        <span className="block md:inline">More growth.</span>{" "}
                        <span className="block md:inline">More clients.</span>
                        <br className="hidden md:block" />
                        <span className="text-brand relative inline-block">
                            Guaranteed
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-stone-500/50 transform skew-x-12" />
                        </span>
                        .
                    </motion.h1>

                    {/* <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed">
                        We build systems that attract new customers & guarantee
                        results in 120 days or you don&apos;t pay.
                    </p> */}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.5,
                            duration: 0.6,
                            ease: "easeOut",
                        }}
                        className="mt-14 sm:mt-20 mb-2"
                    >
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button
                                size="lg"
                                className="font-body font-bold px-8 py-6 text-base md:text-lg bg-[#1F51FF] text-white hover:bg-[#003a88]"
                                asChild
                                variant="brand"
                            >
                                <Link href="/free-marketing-analysis">
                                    Get A Free Marketing Analysis
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent -z-10" />
        </section>
    );
};

export default Hero;
