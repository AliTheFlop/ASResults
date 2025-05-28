import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { copperplate } from "@/lib/fonts.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "AS Results | Copy-First Marketing Agency",
    description:
        "We prioritize effective copywriting over flashy design to deliver marketing that actually converts.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${copperplate.variable}`}>
            <body className={inter.className}>
                <div className="flex min-h-screen flex-col">
                    <Header />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
