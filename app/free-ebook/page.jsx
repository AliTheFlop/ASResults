import EbookForm from "@/components/sections/EbookForm";

export default function EbookLanding() {
    return (
        <div className="container mx-auto py-16 px-4 md:px-8 lg:py-24">
            <div className="mx-auto max-w-4xl">
                {/* Headline */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6 text-[#004aad]">
                        Google Ads Are a Goldmine for Local Businesses...
                        <br className="hidden md:block" />
                        <br className="hidden md:block" />
                        <span className="text-3xl md:text-4xl">
                            If You Don&apos;t Blow Your Budget.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
                        I broke down the steps that make it work without hiring
                        an agency, wasting money, or fighting on price.
                    </p>

                    <p className="text-base text-muted-foreground max-w-xl mx-auto italic mb-8">
                        TLDR: It&apos;s all about showing up when someone&apos;s
                        already searching for what you do.
                    </p>
                </div>

                {/* What&apos;s Inside */}
                <div className="text-center mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#004aad] mb-4">
                        Inside This Free Playbook
                    </h3>
                    <p className="text-base text-muted-foreground max-w-xl mx-auto mb-6">
                        You&apos;ll learn all this in under 10 minutes:
                    </p>
                    <ul className="text-left text-lg max-w-2xl mx-auto space-y-3 text-[#004aad]">
                        <li>✅ Why most ads fail before they even launch</li>
                        <li>
                            ✅ The biggest mistake small biz owners make with
                            Google (and how to fix it)
                        </li>
                        <li>
                            ✅ The <span className="italic">only</span> ad type
                            you need to start with
                        </li>
                        <li>
                            ✅ How to out-rank big brands using local targeting
                        </li>
                        <li>
                            ✅ Why your website must work{" "}
                            <span className="italic">for you</span>
                        </li>
                    </ul>
                </div>

                {/* Emotional Reassurance */}
                <div className="text-center mb-12">
                    <p className="text-xl text-muted-foreground max-w-xl mx-auto italic mb-4">
                        If you&apos;re running a business, this was built for
                        you.
                        <br />
                        You shouldn&apos;t have to master ad tech just to show
                        up for people already searching.
                    </p>
                    <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                        Just drop your email below, and I&apos;ll send the
                        playbook instantly.
                    </p>
                </div>

                {/* Form */}
                <div className="max-w-2xl mx-auto mb-16">
                    <EbookForm />
                </div>

                {/* Quote */}
                <div className="text-center max-w-2xl mx-auto border-t pt-10">
                    <p className="text-xl text-muted-foreground mb-4 font-medium">
                        “Most business owners weren&apos;t trained to be
                        marketers. Follow this playbook, and you fix that.”
                    </p>
                    <p className="text-sm text-muted-foreground">
                        It&apos;s free, and you&apos;ll learn more in 10 minutes
                        than most marketers charge a thousand bucks for.
                    </p>
                </div>
            </div>
        </div>
    );
}
