"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const FORMSPARK_FORM_ID = "JHwvhpgFK"; // Replace with your actual Formspark Form ID

const EbookForm = () => {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch(
                `https://api.formspark.io/${FORMSPARK_FORM_ID}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({ email }),
                }
            );

            if (!response.ok) {
                const errData = await response.json();
                throw new Error(
                    errData.message || "Something went wrong with the signup."
                );
            }

            // Redirect to thank-you page on success
            router.push("/thank-you");
        } catch (err) {
            setError(err.message);
            console.error("Newsletter signup error:", err);
            setIsSubmitting(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-card rounded-lg border p-6 shadow-sm"
        >
            {error && (
                <div className="mb-4 p-3 bg-destructive/20 text-destructive rounded-md">
                    <p>Error: {error}</p>
                </div>
            )}
            <div className="space-y-4">
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-1"
                    >
                        Email Address
                    </label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        required
                    />
                </div>

                <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Submitting..." : "Send Me The Guide"}
                </Button>
            </div>
        </form>
    );
};

export default EbookForm;
