import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Agitate from "@/components/sections/Agitate";
import Solution from "@/components/sections/Solution";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
    return (
        <>
            <Hero />
            <Problem />
            <Agitate />
            <Solution />
            <ContactCTA />
        </>
    );
}
