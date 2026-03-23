"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck, MessageSquare, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        service: "Metal Roofing Sheets",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    from_name: formData.name,
                    from_phone: formData.phone,
                    service_type: formData.service,
                    message: formData.message,
                    to_email: "aaainfraa@gmail.com",
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );
            setStatus("success");
            setFormData({ name: "", phone: "", service: "Metal Roofing Sheets", message: "" });
        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus("error");
        }
    };

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="bg-navy text-off-white py-32 border-b border-off-white/10">
                <div className="container-custom text-center space-y-6">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-accent-blue font-bold tracking-[0.4em] uppercase label-stat text-sm"
                    >
                        Establish Connection
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl font-black leading-tight uppercase"
                    >
                        THE HEAD <br />
                        <span className="text-accent-blue">QUARTERS.</span>
                    </motion.h1>
                </div>
            </section>

            {/* Contact Grid */}
            <section className="py-24 bg-off-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-20">
                        {/* Contact Details */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <div className="space-y-6">
                                <h2 className="text-4xl md:text-5xl font-black text-navy leading-tight uppercase">Visit our Base <br />of Operations.</h2>
                                <div className="w-20 h-2 bg-accent-blue"></div>
                                <p className="text-industrial-gray text-lg leading-relaxed font-medium">
                                    Whether you represent a PSU like NTPC, a private developer, or require heavy industrial services, we are ready to discuss your project requirements with technical precision.
                                </p>
                            </div>

                            <div className="grid gap-8">
                                <div className="flex items-start gap-6 group">
                                    <div className="bg-navy p-4 text-off-white group-hover:bg-accent-blue transition-colors rounded-none">
                                        <MapPin size={28} />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xs font-bold text-accent-blue uppercase label-stat tracking-widest">Prayagraj HQ</h3>
                                        <p className="text-navy text-xl font-black leading-tight uppercase">
                                            236, Sirsa, Salaiya Khurd, <br />Meja Road, Prayagraj, <br />UP - 212301
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="bg-navy p-4 text-off-white group-hover:bg-accent-blue transition-colors rounded-none">
                                        <Phone size={28} />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xs font-bold text-accent-blue uppercase label-stat tracking-widest">Industrial Hotline</h3>
                                        <p className="text-navy text-3xl font-black">+91 91705 41976</p>
                                        <p className="text-industrial-gray text-xs font-bold uppercase label-stat">Direct site assistance available</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="bg-navy p-4 text-off-white group-hover:bg-accent-blue transition-colors rounded-none">
                                        <Mail size={28} />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xs font-bold text-accent-blue uppercase label-stat tracking-widest">Official Email</h3>
                                        <p className="text-navy text-xl font-black uppercase">aaainfraa@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-navy/10 flex gap-4">
                                <Link href="https://wa.me/919170541976" className="flex-1">
                                    <Button className="w-full bg-green-600 hover:bg-green-700 h-14 uppercase label-stat font-bold">
                                        <MessageSquare className="mr-2" size={18} /> WhatsApp
                                    </Button>
                                </Link>
                                <Link href="tel:+919170541976" className="flex-1">
                                    <Button variant="outline" className="w-full border-navy text-navy hover:bg-navy hover:text-off-white h-14 uppercase label-stat font-bold">
                                        Call Now
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-navy p-12 industrial-shadow relative overflow-hidden"
                        >
                            <h2 className="text-3xl font-black text-off-white mb-8 uppercase tracking-tight">Request <span className="text-accent-blue">Technical Quote</span></h2>
                            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-xs font-bold text-gray-light/40 uppercase label-stat tracking-widest">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            className="w-full h-12 bg-off-white/5 border border-off-white/10 p-4 text-off-white focus:outline-none focus:border-accent-blue transition-colors font-bold"
                                            placeholder="e.g. Rahul Singh"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-xs font-bold text-gray-light/40 uppercase label-stat tracking-widest">Contact Phone</label>
                                        <input
                                            type="text"
                                            id="phone"
                                            required
                                            className="w-full h-12 bg-off-white/5 border border-off-white/10 p-4 text-off-white focus:outline-none focus:border-accent-blue transition-colors font-bold"
                                            placeholder="+91 00000 00000"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="service" className="text-xs font-bold text-gray-light/40 uppercase label-stat tracking-widest">Industrial Service</label>
                                    <select
                                        id="service"
                                        className="w-full h-12 bg-off-white/5 border border-off-white/10 px-4 text-off-white focus:outline-none focus:border-accent-blue transition-colors appearance-none font-bold"
                                        value={formData.service}
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                    >
                                        <option className="bg-navy">Metal Roofing Sheets</option>
                                        <option className="bg-navy">Industrial Fabrication</option>
                                        <option className="bg-navy">Diesel Dewatering Pumps</option>
                                        <option className="bg-navy">Copper Slag Sandblasting</option>
                                        <option className="bg-navy">Water Tanker Supply</option>
                                        <option className="bg-navy">Road Sweeping Services</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-xs font-bold text-gray-light/40 uppercase label-stat tracking-widest">Project Requirements</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        required
                                        className="w-full bg-off-white/5 border border-off-white/10 p-4 text-off-white focus:outline-none focus:border-accent-blue transition-colors resize-none font-bold"
                                        placeholder="Describe your site requirements..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    disabled={status === "sending"}
                                    className="w-full bg-accent-blue text-off-white hover:bg-off-white hover:text-navy transition-all h-16 uppercase label-stat font-black text-lg mt-4 disabled:opacity-50"
                                >
                                    {status === "sending" ? "Processing ..." : "Submit Request"} <ArrowRight className="ml-2" />
                                </Button>
                                {status === "success" && (
                                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 font-bold text-center mt-4">
                                        Request sent successfully! We will contact you shortly.
                                    </motion.p>
                                )}
                                {status === "error" && (
                                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 font-bold text-center mt-4">
                                        An error occurred. Please try again or call us directly.
                                    </motion.p>
                                )}
                            </form>
                            {/* Decorative Texture */}
                            <div className="absolute top-0 right-0 p-8 text-off-white/5">
                                <Building2 size={160} />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Logistics Assurance */}
            <section className="py-20 bg-off-white border-y border-navy/5">
                <div className="container-custom flex flex-col items-center text-center space-y-6">
                    <Clock className="w-12 h-12 text-accent-blue opacity-50" />
                    <h2 className="text-3xl font-black text-navy uppercase tracking-tight">Guaranteed Response within 24 Hours.</h2>
                    <p className="text-industrial-gray font-medium max-w-lg">Our leadership evaluates every technical inquiry personally to ensure the highest standards of project assessment.</p>
                </div>
            </section>
        </div>
    );
}
