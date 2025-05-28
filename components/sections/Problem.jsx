import { AlertCircle } from "lucide-react";

const Problem = () => {
    return (
        <section className="py-8 md:py-16 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                            Marketing is important...
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            However, there&apos;s already 101 things on your
                            to-do list.
                            <br />
                            And they are all important!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Problem;
