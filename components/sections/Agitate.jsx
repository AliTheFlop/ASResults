import { AlertCircle, Clock, UserX } from "lucide-react";

const Agitate = () => {
    return (
        <section className="py-16 md:py-24 bg-[#FAFAFA]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-4">
                            So how do you{" "}
                            <span className="text-brand">get the most</span> out
                            of your marketing?
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg p-6 shadow-sm transition-all hover:shadow-md border hover:border-brand">
                            <div className="flex flex-col items-center gap-4 mb-4">
                                <Clock className="h-8 w-8 text-brand" />
                                <h3 className="text-brand-dark font-heading text-xl font-semibold text-center">
                                    Do Everything Yourself?
                                </h3>
                            </div>

                            <p className="font-body text-muted-foreground text-center">
                                If you have little to do, it&apos;s not a
                                problem. <br /> <br /> However, if you&apos;re
                                busy... this is not feasible.
                            </p>
                        </div>

                        <div className=" bg-white rounded-lg p-6 shadow-sm transition-all hover:shadow-md border hover:border-brand">
                            <div className="flex flex-col items-center gap-4 mb-4">
                                <UserX className="h-8 w-8 text-brand" />
                                <h3 className="text-brand-dark font-heading text-xl font-semibold text-center">
                                    Hire New Staff?
                                </h3>
                            </div>

                            <p className="font-body text-muted-foreground text-center">
                                Finding good people is difficult, and training
                                them is expensive.
                                <br />
                                <br />
                                Even if you find the perfect person... You still
                                rely on one individual.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-sm transition-all hover:shadow-md border hover:border-brand">
                            <div className="flex flex-col items-center gap-4 mb-4">
                                <AlertCircle className="h-8 w-8 text-brand" />
                                <h3 className="text-brand-dark font-heading  text-xl font-semibold text-center">
                                    Hire An Agency?
                                </h3>
                            </div>

                            <p className="font-body text-muted-foreground text-center">
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
