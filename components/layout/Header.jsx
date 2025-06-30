"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-200",
                isScrolled
                    ? "bg-background/90 backdrop-blur-md shadow-sm"
                    : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center h-full">
                        <Link
                            href="/"
                            className="font-medium font-logo text-brand text-2xl w-full"
                        >
                            AS Results
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        <Link
                            href="/"
                            className="text-foreground/80 hover:text-foreground transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="/blog"
                            className="text-foreground/80 hover:text-foreground transition-colors"
                        >
                            Blog
                        </Link>

                        <Button asChild variant="secondary">
                            <Link href="/free-marketing-analysis">
                                Free Marketing Analysis
                            </Link>
                        </Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-muted"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-background shadow-md">
                        <Link
                            href="/"
                            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/blog"
                            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Blog
                        </Link>
                        <div className="px-3 py-2">
                            <Button
                                asChild
                                variant="secondary"
                                className="w-full"
                            >
                                <Link
                                    href="/free-marketing-analysis"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Free Marketing Analysis
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
