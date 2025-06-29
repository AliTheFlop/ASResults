// alitheflop/asresults/ASResults-928640b90802c6a6f03057aa162c972c6916f2e5/components/sections/ContactForm.jsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2 } from "lucide-react";

const FORMSPARK_FORM_ID = "7WNMrPbYB"; // Replace with your actual Formspark Form ID

const ContactForm = () => {
    const [formState, setFormState] = useState({
        name: "",
        companyName: "",
        email: "",
        phone: "",
        website: "",
        question: "",
        source: "",
        adSpend: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null); // Clear previous errors

        try {
            const response = await fetch(
                `https://api.formspark.io/${FORMSPARK_FORM_ID}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify(formState),
                }
            );

            if (!response.ok) {
                const errData = await response.json();
                throw new Error(
                    errData.message || "Something went wrong with Formspark."
                );
            }

            setIsSubmitted(true);
            setFormState({
                // Reset form fields
                name: "",
                companyName: "",
                email: "",
                phone: "",
                website: "",
                question: "",
                source: "",
                adSpend: "",
            });
        } catch (err) {
            setError(err.message);
            console.error("Form submission error:", err);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="bg-muted rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
                <p className="text-muted-foreground mb-4">
                    Your message has been sent successfully. We&apos;ll get back
                    to you within 24 hours.
                </p>
                <Button
                    variant="outline"
                    onClick={() => {
                        setIsSubmitted(false);
                        setError(null); // Clear any errors when showing form again
                    }}
                >
                    Send Another Message
                </Button>
            </div>
        );
    }

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
                        htmlFor="name"
                        className="block text-sm font-medium mb-1"
                    >
                        Name
                    </label>
                    <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor="companyName"
                        className="block text-sm font-medium mb-1"
                    >
                        Company Name
                    </label>
                    <Input
                        id="companyName"
                        name="companyName"
                        value={formState.companyName}
                        onChange={handleChange}
                        placeholder="Your company name"
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-1"
                    >
                        Email
                    </label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-1"
                    >
                        Phone Number
                    </label>
                    <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="0404 404 040"
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor="question"
                        className="block text-sm font-medium mb-1"
                    >
                        What is your most important question?
                    </label>
                    <Textarea
                        id="question"
                        name="question"
                        value={formState.question}
                        onChange={handleChange}
                        placeholder="Tell us your main concern or question"
                        rows={3}
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor="website"
                        className="block text-sm font-medium mb-1"
                    >
                        Website
                    </label>
                    <Input
                        id="website"
                        name="website"
                        type="url"
                        value={formState.website}
                        onChange={handleChange}
                        placeholder="https://your-website.com"
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor="source"
                        className="block text-sm font-medium mb-1"
                    >
                        How did you find us?
                    </label>
                    <Input
                        id="source"
                        name="source"
                        value={formState.source}
                        onChange={handleChange}
                        placeholder="Google, referral, social media, etc."
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor="adSpend"
                        className="block text-sm font-medium mb-1"
                    >
                        How much are you spending on advertising / month?
                    </label>
                    <Input
                        id="adSpend"
                        name="adSpend"
                        type="number"
                        value={formState.adSpend}
                        onChange={handleChange}
                        placeholder="Monthly ad spend"
                        required
                    />
                </div>

                <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
            </div>
        </form>
    );
};

export default ContactForm;
