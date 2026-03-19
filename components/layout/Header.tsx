"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b-2 border-[#D4A843] bg-[#F2EDE4]/95 backdrop-blur shadow-sm">
            <div className="container-custom mx-auto flex h-20 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-12 h-12 flex items-center justify-center">
                        <Image
                            src="/logo.png"
                            alt="AAA INFRA Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="text-2xl font-bold text-[#2C2416] tracking-tighter font-serif uppercase">AAA INFRA</span>
                        <span className="text-[10px] font-bold text-[#8A7A65] tracking-[0.3em] uppercase label-stat">Civil Construction</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-bold text-[#2C2416] hover:text-[#D4A843] transition-colors uppercase label-stat tracking-widest"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button asChild className="bg-[#2C2416] text-[#F2EDE4] hover:bg-[#D4A843] hover:text-[#1A1208] transition-all rounded-none px-6 h-10 uppercase label-stat font-bold">
                        <Link href="/contact">Get a Quote</Link>
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-[#2C2416]"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-b-2 border-[#D4A843] bg-[#F2EDE4] overflow-hidden"
                    >
                        <nav className="container-custom mx-auto flex flex-col items-start gap-4 py-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-xl font-bold text-[#2C2416] hover:text-[#D4A843] w-full py-3 border-b border-[#D4A843]/20 last:border-0 label-stat tracking-widest uppercase"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button asChild className="w-full mt-4 bg-[#2C2416] text-[#F2EDE4] rounded-none py-6 h-14 uppercase label-stat font-bold">
                                <Link href="/contact" onClick={() => setIsOpen(false)}>Request a Quote</Link>
                            </Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
