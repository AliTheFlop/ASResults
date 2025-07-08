import EbookForm from "@/components/sections/EbookForm";

export default function EbookLanding() {
    return (
        <div className="container mx-auto py-16 px-4 md:px-8 lg:py-24">
            <div className="mx-auto max-w-4xl">
                {/* Headline */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6 text-[#004aad]">
                        Google Ads Work. <br className="hidden md:block" />
                        If You Don&apos;t Blow Your Money Like a Clown.
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
                        Learn how to get your phone ringing without hiring a
                        sketchy agency, wasting your cash, or guessing what
                        works.
                    </p>

                    <p className="text-base text-muted-foreground max-w-xl mx-auto italic mb-24">
                        Spoiler: it&apos;s just about showing up when people
                        *already* want to buy.
                    </p>
                </div>

                {/* What&apos;s Inside */}
                <div className="text-center mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#004aad] mb-4">
                        What You&apos;ll Get in This 10-Minute Read:
                    </h3>
                    <ul className="text-left text-lg max-w-2xl mx-auto space-y-3 text-[#004aad]">
                        <li>✅ Why most ads flop before they even start</li>
                        <li>
                            ✅ The brutal mistake local businesses make with
                            Google (and how to avoid it)
                        </li>
                        <li>✅ The one ad type that actually makes money</li>
                        <li>
                            ✅ How to crush big brands using local targeting (no
                            fancy agency required)
                        </li>
                    </ul>
                </div>

                {/* Emotional Reassurance */}
                <div className="text-center mb-12">
                    <p className="text-xl text-muted-foreground max-w-xl mx-auto italic mb-4">
                        If people are already searching for what you sell, why
                        the heck aren&apos;t you showing up?
                    </p>
                    <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                        Drop your email and you&apos;ll get the playbook
                        instantly.
                        <br />
                        It&apos;s Free.
                    </p>
                </div>

                {/* Form */}
                <div className="max-w-2xl mx-auto mb-16">
                    <EbookForm />
                </div>

                {/* Quote */}
                <div className="text-center max-w-2xl mx-auto border-t pt-10">
                    <p className="text-sm text-muted-foreground">
                        You&apos;ll learn more in 10 minutes than most
                        &apos;experts&apos; give away in a $997 course.
                    </p>
                </div>
            </div>
        </div>
    );
}
