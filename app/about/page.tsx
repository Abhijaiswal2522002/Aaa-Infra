"use client";

import { Target, Users, ShieldCheck, History, Award, HardHat, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="bg-navy text-off-white py-32 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                   <Image 
                    src="/high-lift-work.jpg"
                    alt="Industrial Background"
                    fill
                    className="object-cover"
                    sizes="100vw"
                   />
                </div>
                <div className="container-custom relative z-10 text-center space-y-6">
                    <motion.span 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-accent-blue font-bold tracking-[0.4em] uppercase label-stat text-sm"
                    >
                      Our Legacy
                    </motion.span>
                    <motion.h1 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-6xl md:text-8xl font-black leading-tight uppercase"
                    >
                        INDUSTRIAL <br />
                        <span className="text-accent-blue">EXCELLENCE.</span>
                    </motion.h1>
                </div>
            </section>

            {/* Who We Are Section */}
            <section className="py-24 bg-off-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div 
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-4 text-accent-blue">
                                <History size={24} />
                                <span className="font-bold uppercase label-stat tracking-widest text-navy">Estd. 2010</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-navy leading-tight uppercase">Grounded in Reliability, <br />Built for Impact.</h2>
                            <div className="w-20 h-2 bg-accent-blue"></div>
                            <div className="space-y-6 text-industrial-gray text-lg leading-relaxed font-medium">
                                <p>
                                    AAA Infra is a leading industrial service provider specializing in complex fabrication, metal roofing manufacturing, and utility rentals. Since our inception in 2010, we have stood as a testament to precision and reliability in India&apos;s industrial landscape.
                                </p>
                                <p>
                                    With a dedicated team of engineers and specialized technicians, we deliver mission-critical solutions for prestigious clients like <strong>NTPC</strong> and <strong>NSPCL</strong>. Our work is defined by strict adherence to safety standards and an unwavering commitment to on-time delivery.
                                </p>
                                <p>
                                    Whether it&apos;s manufacturing high-grade PPGI roofing sheets or providing high-capacity diesel dewatering pumps, AAA Infra brings premium quality and professional management to every site across India.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          className="relative"
                        >
                            <div className="aspect-[4/5] bg-navy relative overflow-hidden industrial-shadow">
                                <Image
                                    src="/workshop-team.jpg"
                                    alt="Industrial Construction"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-75"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                            <div className="absolute -top-10 -left-10 w-40 h-40 border-l-8 border-t-8 border-accent-blue hidden md:block"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* The Pillars (Mission, Vision, Values) */}
            <section className="py-24 bg-navy text-off-white">
                <div className="container-custom">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-5xl font-black text-off-white uppercase">THE <span className="text-accent-blue">PILLARS</span></h2>
                        <div className="w-24 h-1 bg-accent-blue mx-auto"></div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                          { icon: <Target size={48} />, title: "Our Mission", text: "To deliver world-class industrial services through innovation, quality, and sustainable practices that exceed client expectations." },
                          { icon: <Users size={48} />, title: "Our Vision", text: "To be the most trusted partner for large-scale power plants and industrial hubs across India, known for operational excellence." },
                          { icon: <ShieldCheck size={48} />, title: "Our Values", text: "Integrity, Safety, and Commitment to timely delivery are the permanent foundation stones of our organization." }
                        ].map((pillar, i) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-12 border border-off-white/10 hover:bg-off-white hover:text-navy transition-all duration-500 group space-y-6 text-center"
                          >
                                <div className="text-accent-blue group-hover:text-navy flex justify-center">{pillar.icon}</div>
                                <h3 className="text-2xl font-black uppercase tracking-tight">{pillar.title}</h3>
                                <p className="text-gray-light/60 group-hover:text-navy leading-relaxed font-medium transition-colors">
                                    {pillar.text}
                                </p>
                          </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Stats */}
            <section className="py-24 bg-off-white border-y border-navy/5">
                <div className="container-custom">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                        {[
                          { num: "14+", label: "Years in Industry" },
                          { num: "100+", label: "Projects Completed" },
                          { num: "4+", label: "NTPC Locations" },
                          { num: "50+", label: "Expert Personnel" }
                        ].map((stat, i) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                          >
                             <p className="text-5xl font-black text-navy">{stat.num}</p>
                             <p className="text-xs font-bold text-accent-blue uppercase tracking-[0.2em] label-stat mt-2">{stat.label}</p>
                          </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Quote */}
            <section className="py-32 bg-off-white">
                <div className="container-custom max-w-4xl mx-auto text-center space-y-12">
                    <Award className="w-16 h-16 text-accent-blue mx-auto opacity-50" />
                    <motion.blockquote 
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="text-3xl md:text-5xl font-bold text-navy leading-tight uppercase italic"
                    >
                        &quot;Industrial growth is the backbone of a nation. At AAA Infra, we build the foundation of strength and reliability.&quot;
                    </motion.blockquote>
                    <div className="space-y-2">
                        <p className="text-navy font-black uppercase tracking-widest label-stat">Managing Director</p>
                        <p className="text-industrial-gray text-xs font-bold uppercase label-stat">AAA Infra Group</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-accent-blue py-20">
                <div className="container-custom text-center space-y-8">
                    <h2 className="text-4xl md:text-6xl font-black text-off-white uppercase leading-none">WORK WITH THE EXPERTS.</h2>
                    <p className="text-off-white text-xl font-bold uppercase tracking-[0.2em] label-stat">Partner with India&apos;s most reliable industrial service provider.</p>
                    <Link href="/contact">
                        <Button size="lg" className="bg-navy text-off-white hover:bg-off-white hover:text-navy border-none h-16 text-xl">
                            Start a Project
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
