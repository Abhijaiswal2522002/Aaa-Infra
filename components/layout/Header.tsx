"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Menu, X, HardHat } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Assets", href: "/assets" },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container-custom mx-auto flex h-16 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="bg-[var(--color-primary)] p-1.5 rounded-md text-white">
                        <HardHat size={24} />
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="text-xl font-bold text-[var(--color-primary)] tracking-tight">AAA INFRA</span>
                        <span className="text-[10px] font-medium text-[var(--color-secondary)] tracking-widest uppercase">Construction & Infra</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button asChild size="sm" className="hidden lg:inline-flex">
                        <Link href="/contact">Request a Quote</Link>
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-[var(--color-foreground)]"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-b bg-white overflow-hidden"
                    >
                        <nav className="container-custom mx-auto flex flex-col items-start gap-4 py-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-[var(--color-foreground)] hover:text-[var(--color-primary)] w-full py-2 border-b border-gray-100 last:border-0"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button asChild className="w-full mt-4">
                                <Link href="/contact" onClick={() => setIsOpen(false)}>Request a Quote</Link>
                            </Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
