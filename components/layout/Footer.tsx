import Link from "next/link";
import Image from "next/image";
import { Triangle, Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-navy text-gray-light py-20">
            <div className="container-custom mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

                {/* Company Info */}
                <div className="space-y-6">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-12 h-12 flex items-center justify-center">
                            <Image
                                src="/logo.png"
                                alt="AAA Infra Logo"
                                fill
                                className="object-contain" /* Making logo white for dark footer if needed, or keeping it if it's already colorful */
                                priority
                                sizes="48px"
                            />
                        </div>
                        <div className="flex flex-col leading-none text-left">
                            <span className="text-2xl font-bold text-off-white tracking-tighter uppercase">AAA INFRA</span>
                            <span className="text-[10px] font-bold text-accent-blue tracking-[0.3em] uppercase label-stat">Industrial Solutions</span>
                        </div>
                    </Link>
                    <p className="text-gray-light/70 text-sm leading-relaxed">
                        Leading provider of industrial roofing, dewatering, and fabrication services across India. Trusted by NTPC & NSPCL for mission-critical infrastructure projects.
                    </p>
                    <div className="flex gap-4 pt-2">
                        <Link href="https://www.facebook.com/profile.php?id=61578507328685#" className="w-10 h-10 border border-off-white/20 flex items-center justify-center hover:bg-accent-blue hover:border-accent-blue transition-all"><Facebook size={18} /></Link>
                        <Link href="#" className="w-10 h-10 border border-off-white/20 flex items-center justify-center hover:bg-accent-blue hover:border-accent-blue transition-all"><Linkedin size={18} /></Link>
                        <Link href="#" className="w-10 h-10 border border-off-white/20 flex items-center justify-center hover:bg-accent-blue hover:border-accent-blue transition-all"><Twitter size={18} /></Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-off-white font-bold mb-8 uppercase tracking-widest label-stat text-sm">Navigation</h4>
                    <ul className="space-y-4 text-sm font-bold uppercase label-stat tracking-widest">
                        <li><Link href="/" className="hover:text-accent-blue transition-colors">Home</Link></li>
                        <li><Link href="/about" className="hover:text-accent-blue transition-colors">About Us</Link></li>
                        <li><Link href="/services" className="hover:text-accent-blue transition-colors">Services</Link></li>
                        <li><Link href="/projects" className="hover:text-accent-blue transition-colors">Projects</Link></li>
                        <li><Link href="/contact" className="hover:text-accent-blue transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-off-white font-bold mb-8 uppercase tracking-widest label-stat text-sm">Services</h4>
                    <ul className="space-y-4 text-sm text-gray-light/70">
                        <li><Link href="/services" className="hover:text-accent-blue transition-colors">Metal Roofing Sheet Manufacturing</Link></li>
                        <li><Link href="/services" className="hover:text-accent-blue transition-colors">Industrial Fabrication & Erection</Link></li>
                        <li><Link href="/services" className="hover:text-accent-blue transition-colors">Diesel Dewatering Pump Rental</Link></li>
                        <li><Link href="/services" className="hover:text-accent-blue transition-colors">Water Tanker Supply</Link></li>
                        <li><Link href="/services" className="hover:text-accent-blue transition-colors">Copper Slag Sandblasting</Link></li>
                        <li><Link href="/services" className="hover:text-accent-blue transition-colors">Road Sweeping Machine Services</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-off-white font-bold mb-8 uppercase tracking-widest label-stat text-sm">Contact Info</h4>
                    <ul className="space-y-6 text-sm text-gray-light/70">
                        <li className="flex items-start gap-4">
                            <MapPin size={20} className="mt-1 text-accent-blue shrink-0" />
                            <span>236, Sirsa, Salaiya Khurd, Meja Road, Prayagraj, UP - 212301</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <Phone size={20} className="text-accent-blue shrink-0" />
                            <span>+91 91705 41976</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <Mail size={20} className="text-accent-blue shrink-0" />
                            <span>aaainfraa@gmail.com</span>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="container-custom mx-auto mt-20 pt-10 border-t border-off-white/10 text-center text-[10px] font-bold uppercase tracking-[0.4em] label-stat text-gray-light/40">
                &copy; {new Date().getFullYear()} AAA INFRA . INDUSTRIAL SERVICES . ALL RIGHTS RESERVED
            </div>
        </footer>
    );
}
