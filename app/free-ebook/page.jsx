import EbookForm from "@/components/sections/EbookForm";

export default function EbookLanding() {
    return (
        <div className="container mx-auto py-12 px-4 md:px-6 lg:py-24">
            <div className="mx-auto max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[#004aad]">
                        Tired of Ads That Don&apos;t Get the Phone Ringing?
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
                        I&apos;m giving you a dead-simple checklist that local
                        tradies are using to get real clients calling in,
                        *fast*.
                    </p>
                    <ul className="text-left text-lg text-muted-foreground max-w-2xl mx-auto space-y-3 text-[#004aad]">
                        <li>
                            ✅ Show up when people are already searching for
                            your service
                        </li>
                        <li>✅ Skip the agency fees and wasted ad spend</li>
                        <li>
                            ✅ Learn the 3-part formula that&apos;s working
                            right now
                        </li>
                        <li>
                            ✅ Stop relying on referrals and word-of-mouth only
                        </li>
                    </ul>
                </div>

                <div className="max-w-2xl mx-auto mb-12">
                    <EbookForm />
                </div>

                <div className="text-center max-w-2xl mx-auto border-t pt-12">
                    <p className="text-xl text-muted-foreground mb-4">
                        “Most business owners are invisible online. This guide
                        shows you how to fix that with zero fluff.”
                    </p>
                    <p className="text-sm text-muted-foreground">
                        It&apos;s free, and you&apos;ll learn more in 10 minutes
                        than most marketers charge a thousand bucks for.
                        You&apos;ll also get our client-first newsletter
                        that&apos;s 100% focused on helping you land more
                        clients, provides tips to push ads to work in your
                        favour.
                    </p>
                </div>
            </div>
        </div>
    );
}
