// File: app/locations/sydney/[slug]/page.jsx

import Link from "next/link";

// Static routes for local SEO pre-rendering
export async function generateStaticParams() {
    return [
        { slug: "parramatta" },
        { slug: "parramatta" },
        { slug: "bondi" },
        { slug: "manly" },
        { slug: "surry-hills" },
        { slug: "chatswood" },
        { slug: "cronulla" },
        { slug: "liverpool" },
        { slug: "the-rocks" },
        { slug: "darling-harbour" },
    ];
}

// SEO Metadata per location
export async function generateMetadata({ params }) {
    const prettyName = params.slug
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());

    const title = `${prettyName} Digital Marketing | AS Results`;
    const description = `Local digital marketing for businesses in ${prettyName}, Sydney.`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `https://www.asresults.com.au/locations/sydney/${params.slug}`,
        },
        other: {
            "script:ld+json": JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: "AS Results",
                url: `https://www.asresults.com.au/locations/sydney/${params.slug}`,
                areaServed: {
                    "@type": "City",
                    name: prettyName,
                },
                description: `Digital marketing agency serving ${prettyName}, Sydney.`,
            }),
        },
    };
}

export default function LocationPage({ params }) {
    const prettyName = params.slug
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());

    return (
        <section className="py-16 md:py-24 bg-[#FAFAFA] border-t border-[#E0E0E0]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-5xl mx-auto text-center mb-12">
                    <h1 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Are You Based In {prettyName}?
                    </h1>
                    <p className="font-body text-muted-foreground text-lg">
                        You&apos;re here because you want growth: clients that
                        pay, consistent leads, and a local marketing team that
                        knows {prettyName} inside out.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-12 text-center">
                    <div className="space-y-4">
                        <h2 className="font-heading text-2xl font-semibold">
                            Why Work With Us?
                        </h2>
                        <ul className="list-none pl-5 text-muted-foreground space-y-2 font-body">
                            <li>
                                We&apos;re local. We&apos;ve walked your streets
                                and tried all the overpriced acai bowls.
                            </li>
                            <li>
                                No lock-in contracts. Stay because it works, not
                                because you&apos;re trapped.
                            </li>
                            <li>
                                You&apos;ll get reports in plain English. Zero
                                marketing mumbo jumbo.
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="font-heading text-2xl font-semibold">
                            What You Can Expect
                        </h2>
                        <p className="text-muted-foreground font-body leading-relaxed">
                            Our work is simple:
                            <br />
                            Hypothesize. Test. Analyze. Repeat.
                            <br />
                            Then double down on what gets results.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="font-heading text-2xl font-semibold">
                            Still On The Fence?
                        </h2>
                        <p className="text-muted-foreground font-body">
                            Book a <strong>free strategy session</strong>. No
                            pressure. You&apos;ll get actionable advice tailored
                            to your business in {prettyName}.
                        </p>

                        <div className="mt-8">
                            <Link
                                href="/free-marketing-analysis"
                                className="inline-block bg-[#1F51FF] text-white font-semibold py-2 px-4 text-sm rounded-lg shadow-lg hover:bg-[#003a88] transition"
                            >
                                Get a Free Strategy Session
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
