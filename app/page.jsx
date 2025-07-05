import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Agitate from "@/components/sections/Agitate";
import Solution from "@/components/sections/Solution";
import ContactCTA from "@/components/sections/ContactCTA";
import NewsletterSignupCTA from "@/components/sections/NewsletterSignupCTA";

export default function Home() {
    return (
        <>
            <Hero />
            <Problem />
            <Agitate />
            <Solution />
            <ContactCTA />
            <NewsletterSignupCTA />
        </>
    );
}
