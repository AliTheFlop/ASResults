import EbookForm from "@/components/sections/EbookForm";

export default function EbookLanding() {
    return (
        <div className="container mx-auto py-12 px-4 md:px-6 lg:py-24">
            <div className="mx-auto max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[#004aad]">
                        Here&apos;s How To Improve Your Google Ads Today.
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
                        This free playbook will show you what&apos;s currently
                        working for local businesses right now - and how to fix
                        it using a few simple steps. You&apos;ll learn:
                    </p>
                    <ul className="text-left text-lg text-muted-foreground max-w-2xl mx-auto space-y-3 text-[#004aad]">
                        <li>
                            ✅ Why Google&apos;s default campaign type secretly
                            drains your budget
                        </li>
                        <li>
                            ✅ The #1 reason visitors don&apos;t convert (and
                            how to fix it)
                        </li>
                        <li>
                            ✅ How to out-rank big brands by using your local
                            advantage
                        </li>
                        <li>✅ All without even hiring an agency</li>
                    </ul>
                </div>

                <div className="max-w-2xl mx-auto mb-12">
                    <EbookForm />
                </div>

                <div className="text-center max-w-2xl mx-auto border-t pt-12">
                    <p className="text-xl text-muted-foreground mb-4">
                        “Many business owners weren&apos;t trained to be
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
