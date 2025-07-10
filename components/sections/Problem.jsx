"use client";

import { AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const Problem = () => {
    return (
        <section className="py-8 md:py-16 bg-[#FAFAFA]">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="text-center">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-4">
                            Marketing is important...
                        </h2>
                        <p className="font-body text-xl text-muted-foreground">
                            However, there&apos;s already 101 things on your
                            to-do list.
                            <br />
                            And they are all important!
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Problem;
