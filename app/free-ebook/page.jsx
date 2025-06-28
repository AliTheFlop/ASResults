import EbookForm from "@/components/sections/EbookForm";

export default function Contact() {
    return (
        <div className="container mx-auto py-12 px-4 md:px-6 lg:py-24">
            <div className="mx-auto max-w-4xl">
                <div className="text-center mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                        Free Guide
                    </h3>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">
                        A Simple Checklist To Getting More Clients Using Google
                        Ads
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Google Ads work if you get the basics right.
                        <br /> <br />
                        It puts you right in front of people who are{" "}
                        <strong>already</strong> searching for what you do.
                        <br /> <br />
                        This quick guide helps you start using Google Ads the
                        right way, without wasting money or hiring an agency.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <EbookForm />
                </div>
            </div>
        </div>
    );
}
