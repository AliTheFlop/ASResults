// app/done-for-you-google-ads/page.jsx

import {
    Wrench,
    SearchCheck,
    TrendingUp,
    MessageCircle,
    Mail,
} from "lucide-react";
import GoogleAdsSetupForm from "@/components/sections/GoogleAdsSetupForm";

export const metadata = {
    title: "Done-For-You Google Ads | AS Results",
    description:
        "Google Ads setup that gets you clients in 14 days. $750 flat setup. Transparent. Results-driven.",
};

export default function DoneForYouAdsPage() {
    return (
        <div className="bg-[#FAFAFA] py-16 lg:py-24 px-4 md:px-6">
            <div className="max-w-5xl mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-[#1F51FF] mb-4">
                    Done-For-You Google Ads Setup That Gets You Clients in 14
                    Days
                </h1>
                <p className="text-muted-foreground text-xl font-body max-w-2xl mx-auto">
                    We set up everything. You get results.
                    <br />
                    $750 flat setup. No fluff. No lock-in.
                </p>
            </div>

            {/* How It Works */}
            <div className="max-w-5xl mx-auto mb-20">
                <h2 className="text-2xl font-heading font-semibold text-center mb-10 text-[#1F51FF]">
                    How It Works
                </h2>
                <div className="grid gap-6 md:grid-cols-3">
                    <div className="bg-white border border-black/10 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
                        <Wrench className="w-8 h-8 text-[#1F51FF] mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-[#1F51FF] mb-2">
                            We Build It
                        </h3>
                        <p className="text-muted-foreground font-body text-sm">
                            Landing page, funnel, ads fully done-for-you. We set
                            it all up.
                        </p>
                    </div>
                    <div className="bg-white border border-black/10 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
                        <SearchCheck className="w-8 h-8 text-[#1F51FF] mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-[#1F51FF] mb-2">
                            You Show Up
                        </h3>
                        <p className="text-muted-foreground font-body text-sm">
                            You show up when buyers are searching fast.
                        </p>
                    </div>
                    <div className="bg-white border border-black/10 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
                        <TrendingUp className="w-8 h-8 text-[#1F51FF] mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-[#1F51FF] mb-2">
                            We Scale
                        </h3>
                        <p className="text-muted-foreground font-body text-sm">
                            If it works (and it usually does), we turn it up. No
                            contracts.
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA Form */}
            <div className="max-w-2xl mx-auto text-center mb-20">
                <h2 className="text-3xl font-bold font-heading mb-4 text-[#1F51FF]">
                    Want Us To Build It For You?
                </h2>
                <p className="text-muted-foreground font-body mb-8">
                    Fill out the form we&apos;ll show you how it works (or we
                    won&apos;t pitch at all).
                </p>
                <GoogleAdsSetupForm />
            </div>

            {/* Price Reminder */}
            <div className="text-center text-muted-foreground text-sm mt-8 flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span className="font-body">
                    Flat $750 setup. No contracts. No agency BS.
                </span>
            </div>
        </div>
    );
}
