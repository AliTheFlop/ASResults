import { Shield, MapPin, Target, Briefcase } from "lucide-react";

const Solution = () => {
    return (
        <section className="py-16 md:py-24 bg-[#FAFAFA]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-4">
                            &quot;Ok.. but what makes you{" "}
                            <span className="text-brand">different?</span>&quot;
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-all border group">
                            <div className="flex gap-4">
                                <div className="bg-blue-100/50 rounded-full w-14 h-14 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                                    <Shield className="h-7 w-7 text-brand-dark" />
                                </div>
                                <div>
                                    <h3 className="text-brand-dark font-heading text-xl font-semibold mb-2">
                                        Guarantee
                                    </h3>
                                    <p className="font-body text-muted-foreground">
                                        We only win if you win. That&apos;s the
                                        basis for a good partnership. You
                                        won&apos;t carry all the risk,
                                        we&apos;ll share it.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-all border group">
                            <div className="flex gap-4">
                                <div className="bg-blue-100/50 dark:bg-emerald-900/50 rounded-full w-14 h-14 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                                    <MapPin className="h-7 w-7 text-brand-dark" />
                                </div>
                                <div>
                                    <h3 className="text-brand-dark font-heading  text-xl font-semibold mb-2">
                                        Local
                                    </h3>
                                    <p className="font-body text-muted-foreground">
                                        We are not tucked away in some anonymous
                                        call center. We&apos;re based in Sydney,
                                        so you&apos;ll be able to reach us when
                                        you need us.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-all border group">
                            <div className="flex gap-4">
                                <div className="bg-blue-100/50 dark:bg-purple-900/50 rounded-full w-14 h-14 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                                    <Target className="h-7 w-7 text-brand-dark" />
                                </div>
                                <div>
                                    <h3 className="text-brand-dark font-heading  text-xl font-semibold mb-2">
                                        Results
                                    </h3>
                                    <p className="font-body text-muted-foreground">
                                        Our first priority is to get you
                                        results. Less talk, more walk.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-all border group">
                            <div className="flex gap-4">
                                <div className="bg-blue-100/50 dark:bg-amber-900/50 rounded-full w-14 h-14 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                                    <Briefcase className="h-7 w-7 text-brand-dark" />
                                </div>
                                <div>
                                    <h3 className="text-brand-dark font-heading text-xl font-semibold mb-2">
                                        Specialization
                                    </h3>
                                    <p className="font-body text-muted-foreground">
                                        Jack of all trades... Master of none.
                                        That&apos;s why we work with industries
                                        we know, so we can guarantee results.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;
