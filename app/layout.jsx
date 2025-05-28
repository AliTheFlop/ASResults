import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { copperplate } from "@/lib/fonts.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "AS Results | Online Marketing Agency",
    description: "We guarantee more growth and more clients or you don't pay.",
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
