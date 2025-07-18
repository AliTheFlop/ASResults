"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2 } from "lucide-react";

const FORMSPARK_FORM_ID = "Hs6aYt8OI"; // Replace with your actual Formspark Form ID

const ContactForm = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
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
                    body: JSON.stringify(formState),
                }
            );

            if (!response.ok) {
                const errData = await response.json();
                throw new Error(
                    errData.message || "Something went wrong with Formspark."
                );
            }

            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({ event: "google_ads_form_submit" });

            setIsSubmitted(true);
            setFormState({
                name: "",
                email: "",
                message: "",
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
                    Your message has been sent. We&apos;ll be in touch shortly.
                </p>
                <Button
                    variant="outline"
                    onClick={() => {
                        setIsSubmitted(false);
                        setError(null);
                    }}
                >
                    Send Another Message
                </Button>
            </div>
        );
    }

    return (
        <form
            id="primary-lead-form"
            onSubmit={handleSubmit}
            className="bg-card rounded-lg border p-6 shadow-sm space-y-4 text-left"
        >
            {error && (
                <div className="p-3 bg-destructive/20 text-destructive rounded-md">
                    <p>Error: {error}</p>
                </div>
            )}

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
                    placeholder="Your name"
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
                    placeholder="you@email.com"
                    required
                />
            </div>

            <div>
                <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                >
                    Optional Message
                </label>
                <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell us what you’re after, or leave it blank and we’ll show you how it works."
                    rows={3}
                />
            </div>

            <Button
                type="submit"
                variant="brand"
                className="w-full"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
        </form>
    );
};

export default ContactForm;
