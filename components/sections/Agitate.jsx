import { AlertCircle, Clock, UserX } from "lucide-react";

const Agitate = () => {
    return (
        <section className="py-16 md:py-24 bg-muted">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                            So how do you get the most out of your marketing?
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-background rounded-lg p-6 shadow-sm transition-all hover:shadow-md">
                            <div className="flex items-center gap-3 mb-4">
                                <h3 className="text-xl font-semibold text-center w-full">
                                    Do Everything Yourself?
                                </h3>
                            </div>

                            <p className="text-muted-foreground text-center">
                                If you have little to do, it&apos;s not a
                                problem. <br /> <br /> However, if you&apos;re
                                busy... this is not feasible.
                            </p>
                        </div>

                        <div className="bg-background rounded-lg p-6 shadow-sm transition-all hover:shadow-md">
                            <div className="flex items-center gap-3 mb-4">
                                <h3 className="text-xl font-semibold text-center w-full">
                                    Hire New Staff?
                                </h3>
                            </div>

                            <p className="text-muted-foreground text-center">
                                Finding good people is difficult, and training
                                them is expensive.
                                <br />
                                <br />
                                Even if you find the perfect person... You still
                                rely on one individual.
                            </p>
                        </div>

                        <div className="bg-background rounded-lg p-6 shadow-sm transition-all hover:shadow-md">
                            <div className="flex items-center gap-3 mb-4">
                                <h3 className="text-xl font-semibold w-full text-center">
                                    Hire An Agency?
                                </h3>
                            </div>

                            <p className="text-muted-foreground text-center">
                                Don&apos;t have the marketing budget of tens of
                                thousands of euros per month? Well then your
                                account is often managed by the intern of the
                                assistant of the assistant. Not ideal.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Agitate;
