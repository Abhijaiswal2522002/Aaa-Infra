import { Section } from "@/components/ui/Section";
import { HardHat, Target, Users, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            <Section className="bg-slate-50">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h1 className="text-4xl font-bold text-[var(--color-primary)] mb-4">About AAA INFRA</h1>
                    <p className="text-lg text-[var(--color-secondary)]">
                        A trusted name in civil construction and infrastructure development, committed to building the nation's future.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-[var(--color-foreground)]">Who We Are</h2>
                        <p className="text-[var(--color-secondary)] leading-relaxed">
                            AAA Infra is a leading construction firm with extensive experience in executing government, PSU, and industrial projects. With a dedicated team of engineers, supervisors, and skilled workforce, we deliver high-quality infrastructure solutions on time and within budget.
                        </p>
                        <p className="text-[var(--color-secondary)] leading-relaxed">
                            Our expertise ranges from heavy civil construction and site development to specialized industrial works for clients like NTPC. We pride ourselves on owning a robust fleet of machinery and trucks, giving us full control over project execution and logistics.
                        </p>
                    </div>
                    <div className="relative h-[300px] w-full rounded-lg overflow-hidden shadow-md">
                        {/* Placeholder Image */}
                        <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
                            <span className="text-lg font-medium">About Us Image Placeholder</span>
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="bg-white">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-6 border border-slate-100 rounded-lg bg-slate-50 text-center">
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-[var(--color-primary)]">
                            <Target size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                        <p className="text-sm text-[var(--color-secondary)]">
                            To deliver world-class infrastructure solutions through innovation, quality, and sustainable practices.
                        </p>
                    </div>
                    <div className="p-6 border border-slate-100 rounded-lg bg-slate-50 text-center">
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-[var(--color-primary)]">
                            <Users size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                        <p className="text-sm text-[var(--color-secondary)]">
                            To be the preferred partner for complex industrial and infrastructure projects across the region.
                        </p>
                    </div>
                    <div className="p-6 border border-slate-100 rounded-lg bg-slate-50 text-center">
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-[var(--color-primary)]">
                            <ShieldCheck size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Our Values</h3>
                        <p className="text-sm text-[var(--color-secondary)]">
                            Integrity, Safety, Quality, and Commitment to timely delivery are the pillars of our organization.
                        </p>
                    </div>
                </div>
            </Section>
        </div>
    );
}
