import Link from "next/link";
import { HardHat, Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-200 py-12 border-t border-slate-800">
            <div className="container-custom mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                {/* Company Info */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <div className="bg-[var(--color-primary)] p-1.5 rounded-md text-white">
                            <HardHat size={24} />
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="text-xl font-bold text-white tracking-tight">AAA INFRA</span>
                        </div>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Delivering excellence in infrastructure and civil construction. Trusted by PSUs and industrial leaders for quality and safety.
                    </p>
                    <div className="flex gap-4 pt-2">
                        <Link href="#" className="hover:text-white transition-colors"><Facebook size={20} /></Link>
                        <Link href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></Link>
                        <Link href="#" className="hover:text-white transition-colors"><Twitter size={20} /></Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm text-slate-400">
                        <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                        <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
                        <li><Link href="/assets" className="hover:text-white transition-colors">Assets & Equipment</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Our Services</h4>
                    <ul className="space-y-2 text-sm text-slate-400">
                        <li><Link href="/services" className="hover:text-white transition-colors">Civil Construction</Link></li>
                        <li><Link href="/services" className="hover:text-white transition-colors">Industrial Infrastructure</Link></li>
                        <li><Link href="/services" className="hover:text-white transition-colors">Site Development</Link></li>
                        <li><Link href="/services" className="hover:text-white transition-colors">Maintenance Work</Link></li>
                        <li><Link href="/services" className="hover:text-white transition-colors">Crane & Truck Services</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Contact Us</h4>
                    <ul className="space-y-4 text-sm text-slate-400">
                        <li className="flex items-start gap-3">
                            <MapPin size={18} className="mt-0.5 text-[var(--color-primary)]" />
                            <span>236, Sirsa, Salaiya Khurd, Meja Road, Prayagraj, Uttar Pradesh - 212301</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone size={18} className="text-[var(--color-primary)]" />
                            <span>+91 91705 41976</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={18} className="text-[var(--color-primary)]" />
                            <span>aaainfraa@gmail.com</span>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="container-custom mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
                &copy; {new Date().getFullYear()} AAA INFRA. All rights reserved.
            </div>
        </footer>
    );
}
