import Link from "next/link";
import { Triangle, Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#1A1208] text-[#8A7A65] py-20 border-t-8 border-[#2C2416]">
            <div className="container-custom mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

                {/* Company Info */}
                <div className="space-y-6">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 flex items-center justify-center bg-[#002366] text-white rotate-180">
                            <Triangle fill="white" size={24} />
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="text-2xl font-bold text-[#F2EDE4] tracking-tighter font-serif">AAA INFRA</span>
                        </div>
                    </Link>
                    <p className="text-[#8A7A65] text-sm leading-relaxed font-sans">
                        Since 2010, providing authoritative civil construction solutions for India&apos;s industrial growth. Built to last 100 years.
                    </p>
                    <div className="flex gap-4 pt-2">
                        <Link href="#" className="w-10 h-10 border border-[#D4A843] flex items-center justify-center text-[#D4A843] hover:bg-[#D4A843] hover:text-[#1A1208] transition-all"><Facebook size={18} /></Link>
                        <Link href="#" className="w-10 h-10 border border-[#D4A843] flex items-center justify-center text-[#D4A843] hover:bg-[#D4A843] hover:text-[#1A1208] transition-all"><Linkedin size={18} /></Link>
                        <Link href="#" className="w-10 h-10 border border-[#D4A843] flex items-center justify-center text-[#D4A843] hover:bg-[#D4A843] hover:text-[#1A1208] transition-all"><Twitter size={18} /></Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-[#D4A843] font-bold mb-8 uppercase tracking-widest label-stat text-sm">Navigation</h4>
                    <ul className="space-y-4 text-sm font-bold uppercase label-stat tracking-widest">
                        <li><Link href="/" className="hover:text-[#F2EDE4] transition-colors">Home</Link></li>
                        <li><Link href="/about" className="hover:text-[#F2EDE4] transition-colors">Our History</Link></li>
                        <li><Link href="/projects" className="hover:text-[#F2EDE4] transition-colors">Milestones</Link></li>
                        <li><Link href="/services" className="hover:text-[#F2EDE4] transition-colors">Capabilities</Link></li>
                        <li><Link href="/contact" className="hover:text-[#F2EDE4] transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-[#D4A843] font-bold mb-8 uppercase tracking-widest label-stat text-sm">Expertise</h4>
                    <ul className="space-y-4 text-sm text-[#8A7A65]">
                        <li><Link href="/services" className="hover:text-[#F2EDE4] transition-colors">Industrial Civil Works</Link></li>
                        <li><Link href="/services" className="hover:text-[#F2EDE4] transition-colors">Structural Engineering</Link></li>
                        <li><Link href="/services" className="hover:text-[#F2EDE4] transition-colors">Site Development</Link></li>
                        <li><Link href="/services" className="hover:text-[#F2EDE4] transition-colors">Heavy Foundations</Link></li>
                        <li><Link href="/services" className="hover:text-[#F2EDE4] transition-colors">Infrastructure Logistics</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-[#D4A843] font-bold mb-8 uppercase tracking-widest label-stat text-sm">Headquarters</h4>
                    <ul className="space-y-6 text-sm text-[#8A7A65]">
                        <li className="flex items-start gap-4 font-sans">
                            <MapPin size={20} className="mt-1 text-[#D4A843] shrink-0" />
                            <span>236, Sirsa, Salaiya Khurd, Meja Road, Prayagraj, UP - 212301</span>
                        </li>
                        <li className="flex items-center gap-4 font-sans">
                            <Phone size={20} className="text-[#D4A843] shrink-0" />
                            <span>+91 91705 41976</span>
                        </li>
                        <li className="flex items-center gap-4 font-sans">
                            <Mail size={20} className="text-[#D4A843] shrink-0" />
                            <span>aaainfraa@gmail.com</span>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="container-custom mx-auto mt-20 pt-10 border-t border-[#2C2416] text-center text-[10px] font-bold uppercase tracking-[0.4em] label-stat text-[#8A7A65]">
                &copy; {new Date().getFullYear()} AAA INFRA STRUCTURES . ESTD 2010 . ALL RIGHTS RESERVED
            </div>
        </footer>
    );
}
