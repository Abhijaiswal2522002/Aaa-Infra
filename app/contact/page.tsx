import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="flex flex-col concrete-overlay">
            {/* Hero Section */}
            <section className="bg-[#1A1208] text-[#F2EDE4] py-32 border-b-4 border-[#D4A843]">
                <div className="container-custom text-center space-y-6">
                    <span className="text-[#D4A843] font-bold tracking-[0.4em] uppercase label-stat text-sm">Establish Connection</span>
                    <h1 className="text-6xl md:text-8xl font-bold font-serif leading-tight">
                        THE HEAD <br />
                        <span className="text-[#D4A843]">QUARTERS.</span>
                    </h1>
                </div>
            </section>

            {/* Contact Grid */}
            <section className="py-24 bg-[#F2EDE4]">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-20">
                        {/* Contact Details */}
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h2 className="text-5xl font-bold text-[#2C2416] font-serif leading-tight">Visit our Base <br/>of Operations.</h2>
                                <p className="text-[#8A7A65] text-lg leading-relaxed">
                                    Whether you represent a PSU, a private developer, or require heavy industrial services, we are ready to discuss your project requirements in detail.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-start gap-6 group">
                                    <div className="bg-[#D4A843] p-4 text-[#1A1208] group-hover:scale-110 transition-transform">
                                        <MapPin size={28} />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold text-[#2C2416] uppercase label-stat tracking-widest text-sm">Prayagraj HQ</h3>
                                        <p className="text-[#2C2416]/80 text-lg leading-relaxed font-sans">
                                            236, Sirsa, Salaiya Khurd, Meja Road,<br />Prayagraj, Uttar Pradesh - 212301
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="bg-[#2C2416] p-4 text-[#D4A843] group-hover:scale-110 transition-transform">
                                        <Phone size={28} />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold text-[#2C2416] uppercase label-stat tracking-widest text-sm">Hotline</h3>
                                        <p className="text-[#2C2416]/80 text-2xl font-bold">+91 91705 41976</p>
                                        <p className="text-[#8A7A65] text-sm uppercase font-bold label-stat">Mon-Sat, 9am - 6pm IST</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="bg-[#D4A843] p-4 text-[#1A1208] group-hover:scale-110 transition-transform">
                                        <Mail size={28} />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold text-[#2C2416] uppercase label-stat tracking-widest text-sm">Direct Mail</h3>
                                        <p className="text-[#2C2416]/80 text-lg font-bold">aaainfraa@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="pt-8 border-t border-[#D4A843]/20 space-y-4">
                                <div className="flex items-center gap-4 text-[#D4A843]">
                                    <ShieldCheck size={20} />
                                    <span className="font-bold uppercase label-stat tracking-[0.2em] text-sm">NTPC Registered & ISO Certified Firm</span>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-[#2C2416] p-12 relative overflow-hidden ring-offset-8 ring-4 ring-[#D4A843]">
                            <h2 className="text-3xl font-bold text-[#F2EDE4] mb-8 font-serif uppercase tracking-widest">Request a Consultation</h2>
                            <form className="space-y-6 relative z-10">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-xs font-bold text-[#D4A843] uppercase label-stat tracking-widest">Full Name</label>
                                        <input type="text" id="name" className="w-full h-12 bg-transparent border-b-2 border-[#D4A843]/30 text-[#F2EDE4] focus:outline-none focus:border-[#D4A843] transition-colors" placeholder="e.g. Rahul Singh" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-xs font-bold text-[#D4A843] uppercase label-stat tracking-widest">Contact Phone</label>
                                        <input type="text" id="phone" className="w-full h-12 bg-transparent border-b-2 border-[#D4A843]/30 text-[#F2EDE4] focus:outline-none focus:border-[#D4A843] transition-colors" placeholder="+91 00000 00000" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs font-bold text-[#D4A843] uppercase label-stat tracking-widest">Email Address</label>
                                    <input type="email" id="email" className="w-full h-12 bg-transparent border-b-2 border-[#D4A843]/30 text-[#F2EDE4] focus:outline-none focus:border-[#D4A843] transition-colors" placeholder="your@email.com" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="service" className="text-xs font-bold text-[#D4A843] uppercase label-stat tracking-widest">Service of Interest</label>
                                    <select id="service" className="w-full h-12 bg-transparent border-b-2 border-[#D4A843]/30 text-[#F2EDE4] focus:outline-none focus:border-[#D4A843] transition-colors appearance-none">
                                        <option className="bg-[#2C2416]">Water Tanker Supply</option>
                                        <option className="bg-[#2C2416]">Metal Roofing & Fabrication</option>
                                        <option className="bg-[#2C2416]">Diesel Dewatering Pumps</option>
                                        <option className="bg-[#2C2416]">Road Sweeping Services</option>
                                        <option className="bg-[#2C2416]">Copper Slag Sandblasting</option>
                                        <option className="bg-[#2C2416]">Ash Swallow Fabrication</option>
                                        <option className="bg-[#2C2416]">Excavation & Site Preparation</option>
                                        <option className="bg-[#2C2416]">Civil Infrastructure</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-xs font-bold text-[#D4A843] uppercase label-stat tracking-widest">Project Description</label>
                                    <textarea id="message" rows={4} className="w-full bg-transparent border-b-2 border-[#D4A843]/30 text-[#F2EDE4] focus:outline-none focus:border-[#D4A843] transition-colors pt-4" placeholder="Briefly describe your requirements..." />
                                </div>
                                <Button type="button" className="w-full bg-[#D4A843] text-[#1A1208] hover:bg-[#F2EDE4] transition-all rounded-none h-16 uppercase label-stat font-bold text-lg mt-4">
                                    Submit RFP <ArrowRight className="ml-2" />
                                </Button>
                            </form>
                             {/* Decorative Texture in Form */}
                             <div className="absolute inset-0 opacity-5 pointer-events-none">
                                <MapPin className="absolute -bottom-20 -right-20 w-80 h-80 rotate-12" />
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Logistics Assurance */}
            <section className="py-20 bg-[#1A1208] border-t-8 border-[#2C2416]">
                <div className="container-custom flex flex-col items-center text-center space-y-8">
                     <Clock className="w-12 h-12 text-[#D4A843] opacity-50" />
                     <h2 className="text-3xl font-bold text-[#F2EDE4] font-serif uppercase tracking-widest">Guaranteed Response in 24 Hours.</h2>
                     <p className="text-[#8A7A65] max-w-lg">Our leadership evaluates every inquiry personally to ensure the highest standards of technical assessment.</p>
                </div>
            </section>
        </div>
    );
}
