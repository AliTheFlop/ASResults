import Link from "next/link";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const sydneySpots = [
        { name: "Parramatta", slug: "sydney/digital-marketing-parramatta" },
        { name: "Bondi Beach", slug: "sydney/digital-marketing-bondi-beach" },
        { name: "Manly", slug: "sydney/digital-marketing-manly" },
        { name: "Surry Hills", slug: "sydney/digital-marketing-surry-hills" },
        { name: "Chatswood", slug: "sydney/digital-marketing-chatswood" },
        { name: "Cronulla", slug: "sydney/digital-marketing-cronulla" },
        { name: "Liverpool", slug: "sydney/digital-marketing-liverpool" },
        { name: "The Rocks", slug: "sydney/digital-marketing-the-rocks" },
        {
            name: "Darling Harbour",
            slug: "sydney/digital-marketing-darling-harbour",
        },
    ];

    return (
        <footer className="bg-muted text-sm">
            <div className="container mx-auto px-4 md:px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                    {/* Brand */}
                    <div>
                        <span className="text-lg font-black font-heading">
                            AS Results
                        </span>
                    </div>

                    {/* Links + Locations */}
                    <div className="flex flex-col md:flex-row gap-6">
                        <ul className="flex space-x-4">
                            <li>
                                <a
                                    href="/terms-and-conditions"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Terms and Conditions
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/privacy-policy"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>

                        {/* Locations Dropdown */}
                        <details className="text-muted-foreground group">
                            <summary className="cursor-pointer hover:text-foreground transition-colors list-none font-medium">
                                Locations We Serve
                                <span className="ml-1 group-open:rotate-90 transition-transform inline-block">
                                    ›
                                </span>
                            </summary>
                            <ul className="mt-2 space-y-1 pl-4">
                                {sydneySpots.map((spot) => (
                                    <li key={spot.slug}>
                                        <Link
                                            href={`/locations/${spot.slug}`}
                                            className="hover:underline"
                                        >
                                            {spot.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </details>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
