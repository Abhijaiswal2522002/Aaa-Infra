import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="flex flex-col">
            <Section className="bg-slate-900 text-white py-20">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                    <p className="text-lg text-slate-300">
                        Get in touch for tenders, collaborations, or service inquiries.
                    </p>
                </div>
            </Section>

            <Section className="bg-white">
                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Details */}
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold text-[var(--color-foreground)]">Reach Out to Us</h2>
                        <p className="text-[var(--color-secondary)]">
                            Whether you represent a PSU, a private developer, or need industrial construction services, our team is ready to assist you.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-50 p-3 rounded-full text-[var(--color-primary)]">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[var(--color-foreground)]">Head Office</h3>
                                    <p className="text-[var(--color-secondary)]">236, Sirsa, Salaiya Khurd, Meja Road,<br />Prayagraj, Uttar Pradesh - 212301</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-50 p-3 rounded-full text-[var(--color-primary)]">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[var(--color-foreground)]">Phone</h3>
                                    <p className="text-[var(--color-secondary)]">+91 91705 41976</p>
                                    <p className="text-[var(--color-secondary)] text-sm">(Mon-Sat, 9am - 6pm)</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-50 p-3 rounded-full text-[var(--color-primary)]">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[var(--color-foreground)]">Email</h3>
                                    <p className="text-[var(--color-secondary)]">aaainfraa@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-slate-50 p-8 rounded-lg shadow-sm border border-slate-100">
                        <h2 className="text-xl font-bold text-[var(--color-foreground)] mb-6">Send us a Message</h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-[var(--color-foreground)]">Name</label>
                                    <input type="text" id="name" className="w-full h-10 px-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-white" placeholder="Your Name" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-[var(--color-foreground)]">Phone</label>
                                    <input type="text" id="phone" className="w-full h-10 px-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-white" placeholder="+91..." />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-[var(--color-foreground)]">Email</label>
                                <input type="email" id="email" className="w-full h-10 px-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-white" placeholder="your@email.com" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-[var(--color-foreground)]">Message</label>
                                <textarea id="message" rows={4} className="w-full p-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-white" placeholder="Tell us about your project requirements..." />
                            </div>
                            <Button type="button" className="w-full mt-2">Send Message</Button>
                        </form>
                    </div>
                </div>
            </Section>
        </div>
    );
}
