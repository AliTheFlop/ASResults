"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const FORMSPARK_FORM_ID = "PoXMLj7CF";

const NewsletterForm = () => {
    const [form, setForm] = useState({ firstName: "", email: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

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
                    body: JSON.stringify(form),
                }
            );

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message || "Something went wrong.");
            }

            setIsSubmitted(true);
            setForm({ firstName: "", email: "" });
        } catch (err) {
            setError(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="bg-muted w-full rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">
                    Thanks for signing up!
                </h3>
                <p className="text-muted-foreground mb-4">
                    You’ll get the next newsletter when it drops.
                </p>
                <Button
                    variant="outline"
                    onClick={() => {
                        setIsSubmitted(false);
                        setError(null);
                    }}
                >
                    Sign Up Again
                </Button>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-card rounded-lg border p-6 shadow-sm max-w-xl mx-auto w-full"
        >
            {error && (
                <div className="mb-4 p-3 bg-destructive/20 text-destructive rounded-md">
                    Error: {error}
                </div>
            )}
            <div className="space-y-4">
                <div>
                    <label
                        htmlFor="firstName"
                        className="block text-sm font-medium mb-1"
                    >
                        First Name
                    </label>
                    <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="Ali"
                        required
                    />
                </div>
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
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                    />
                </div>
                <Button
                    type="submit"
                    className="w-full"
                    variant="brand"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Subscribing..." : "Join The Newsletter"}
                </Button>
            </div>
        </form>
    );
};

export default NewsletterForm;
