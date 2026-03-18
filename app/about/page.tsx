import { Section } from "@/components/ui/Section";
import { Target, Users, ShieldCheck, History, Award, HardHat } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function AboutPage() {
    return (
        <div className="flex flex-col concrete-overlay">
            {/* Hero Section */}
            <section className="bg-[#1A1208] text-[#F2EDE4] py-32 border-b-4 border-[#D4A843] relative overflow-hidden">
                <div className="container-custom relative z-10 text-center space-y-6">
                    <span className="text-[#D4A843] font-bold tracking-[0.4em] uppercase label-stat text-sm">Our Legacy</span>
                    <h1 className="text-6xl md:text-8xl font-bold font-serif leading-tight">
                        AUTHORITATIVE <br />
                        <span className="text-[#D4A843]">GROUNDING.</span>
                    </h1>
                </div>
            </section>

            {/* Who We Are Section */}
            <section className="py-24 bg-[#F2EDE4]">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-4 text-[#D4A843]">
                                <History size={24} />
                                <span className="font-bold uppercase label-stat tracking-widest">Estd. 2010</span>
                            </div>
                            <h2 className="text-5xl font-bold text-[#2C2416] leading-tight">Grounded in Truth, <br/>Built on Dedication.</h2>
                            <div className="w-20 h-1 bg-[#D4A843]"></div>
                            <div className="space-y-6 text-[#2C2416]/80 text-lg leading-relaxed font-sans">
                                <p>
                                    AAA INFRA is a leading construction firm with extensive experience in executing government, PSU, and industrial projects. Since our inception in 2010, we have stood as a testament to precision and craftsmanship in India&apos;s infrastructure landscape.
                                </p>
                                <p>
                                    With a dedicated team of engineers, supervisors, and a skilled workforce, we deliver high-quality infrastructure solutions that are built to last centuries. Our expertise ranges from heavy civil construction and site development to specialized industrial works for prestigious clients like NTPC.
                                </p>
                                <p>
                                    What sets us apart is our absolute control over the supply chain. We pride ourselves on owning a robust fleet of machinery and trucks, giving us full control over project execution and logistics, ensuring we are never at the mercy of third-party delays.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/5] bg-[#2C2416] relative overflow-hidden ring-offset-8 ring-4 ring-[#D4A843]">
                                <Image 
                                    src="/sandblasting.jpg"
                                    alt="Heritage Construction"
                                    fill
                                    className="object-cover opacity-70 grayscale hover:grayscale-0 transition-all duration-700"
                                />

                            </div>
                            <div className="absolute -top-10 -left-10 w-40 h-40 border-l-4 border-t-4 border-[#D4A843] hidden md:block"></div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="gold-rule"></div>

            {/* The Pillars (Mission, Vision, Values) */}
            <section className="py-24 bg-[#1A1208] text-[#F2EDE4]">
                <div className="container-custom">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-bold text-[#D4A843]">The Foundations</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-0 border border-[#2C2416]">
                        <div className="p-16 border border-[#2C2416] hover:bg-[#2C2416] transition-colors group space-y-6 text-center">
                            <div className="text-[#D4A843] flex justify-center"><Target size={48} /></div>
                            <h3 className="text-2xl font-bold uppercase label-stat tracking-widest">Our Mission</h3>
                            <p className="text-[#8A7A65] group-hover:text-[#F2EDE4] transition-colors leading-relaxed">
                                To deliver world-class infrastructure solutions through innovation, quality, and sustainable practices that honor Indian craftsmanship.
                            </p>
                        </div>
                        <div className="p-16 border border-[#2C2416] hover:bg-[#2C2416] transition-colors group space-y-6 text-center shadow-xl z-10 bg-[#1A1208]">
                            <div className="text-[#D4A843] flex justify-center"><Users size={48} /></div>
                            <h3 className="text-2xl font-bold uppercase label-stat tracking-widest text-[#D4A843]">Our Vision</h3>
                            <p className="text-[#8A7A65] group-hover:text-[#F2EDE4] transition-colors leading-relaxed">
                                To be the preferred partner for complex industrial and infrastructure projects across the region, known for structural integrity.
                            </p>
                        </div>
                        <div className="p-16 border border-[#2C2416] hover:bg-[#2C2416] transition-colors group space-y-6 text-center">
                            <div className="text-[#D4A843] flex justify-center"><ShieldCheck size={48} /></div>
                            <h3 className="text-2xl font-bold uppercase label-stat tracking-widest">Our Values</h3>
                            <p className="text-[#8A7A65] group-hover:text-[#F2EDE4] transition-colors leading-relaxed">
                                Integrity, Safety, and Commitment to timely delivery are not just goals—they are the permanent pillars of our organization.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Section / Quote */}
            <section className="py-32 bg-[#F2EDE4]">
                <div className="container-custom max-w-4xl mx-auto text-center space-y-12">
                     <Award className="w-16 h-16 text-[#D4A843] mx-auto opacity-50" />
                     <blockquote className="text-4xl md:text-5xl font-serif italic text-[#2C2416] leading-tight">
                        &quot;At AAA INFRA, we believe that infrastructure is the bone structure of a nation. We build it to be strong, enduring, and honest.&quot;
                     </blockquote>
                     <div className="space-y-2">
                        <p className="text-[#2C2416] font-bold uppercase tracking-widest label-stat">Managing Director</p>
                        <p className="text-[#8A7A65] text-sm">AAA INFRA STRUCTURES</p>
                     </div>
                </div>
            </section>
            {/* Gold CTA Band */}
            <section className="bg-[#D4A843] py-20 border-t-2 border-[#2C2416]">
                <div className="container-custom text-center space-y-8">
                    <h2 className="text-5xl font-bold text-[#1A1208]">WORK WITH THE MASTERS.</h2>
                    <p className="text-[#1A1208] text-xl font-medium uppercase tracking-[0.2em] label-stat">Experience structural honesty and engineering excellence.</p>
                    <Link href="/contact">
                        <Button className="bg-[#1A1208] text-[#D4A843] hover:bg-[#F2EDE4] hover:text-[#1A1208] transition-all rounded-none px-12 h-16 text-xl font-bold uppercase label-stat">
                            Start a Project
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
