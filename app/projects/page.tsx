"use client";

import { BadgeCheck, Calendar, MapPin, Building, Ruler, HardHat, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

const projects = [
    {
        title: "NTPC Meja & Unchahar Roofing",
        client: "NTPC Limited",
        description: "Supply and fabrication of color-coated metal roofing sheets and structural erection for turbine halls and auxiliary buildings. Built to withstand extreme industrial conditions.",
        year: "2024",
        location: "Prayagraj / Raebareli, UP",
        type: "Roofing & Fabrication",
        image: "/ntpc meja.jpg"
    },
    {
        title: "NTPC Patratu Dewatering",
        client: "NTPC Limited",
        description: "Large-scale site dewatering and water management services using high-capacity diesel pumps for major excavation pits in critical expansion zones.",
        year: "2023",
        location: "Patratu, Jharkhand",
        type: "Dewatering Services",
        image: "/excavation-site.jpg"
    },
    {
        title: "NSPCL Bhilai Sandblasting",
        client: "NSPCL (NTPC-SAIL)",
        description: "Precision copper slag sandblasting (SA 2.5) of critical tanks, vessels, and structural steel components for life extension projects.",
        year: "2023",
        location: "Bhilai, Chhattisgarh",
        type: "Surface Treatment",
        image: "/trf-nspcl-bhilai-chattisgarh-1-e1717690804616.jpg"
    },
    {
        title: "NTPC Gadarwara Ash Handling",
        client: "NTPC Limited",
        description: "Fabrication and erection of Ash Swallow systems and specialized ash handling infrastructure for the thermal power unit expansion.",
        year: "2022",
        location: "Gadarwara, MP",
        type: "Ash Handling",
        image: "/ash-swallow.jpg"
    },
    {
        title: "NTPC Obra Structural Work",
        client: "NTPC Limited",
        description: "Heavy structural fabrication, erection, and site maintenance for industrial sheds and power infrastructure support systems.",
        year: "2022",
        location: "Obra, UP",
        type: "Industrial Fabrication",
        image: "/high-lift-work.jpg"
    },
    {
        title: "Renusagar Power Plant Chimney Construction",
        client: "Hindalco Industries Limited",
        description: "Construction and installation of industrial chimneys for power plant operations, ensuring structural stability, emission compliance, and long-term durability under high-temperature conditions.",
        year: "2021",
        location: "Renusagar, Uttar Pradesh",
        type: "Industrial Infrastructure",
        image: "/renusagar.jpeg"
    }
];

export default function ProjectsPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="bg-navy text-off-white py-32 border-b border-off-white/10 relative overflow-hidden">
                <div className="container-custom relative z-10 text-center space-y-6">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-accent-blue font-bold tracking-[0.4em] uppercase label-stat text-sm"
                    >
                        Our Portfolio
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl font-black leading-tight uppercase"
                    >
                        INDUSTRIAL <br />
                        <span className="text-accent-blue">MILESTONES.</span>
                    </motion.h1>
                </div>
            </section>

            {/* Projects List */}
            <section className="py-24 bg-off-white">
                <div className="container-custom">
                    <div className="space-y-32">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
                            >
                                <div className="lg:w-1/2 relative group w-full">
                                    <div className="aspect-[16/9] bg-navy overflow-hidden industrial-shadow border border-navy/10">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 brightness-75 group-hover:brightness-100"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                        />
                                    </div>
                                    <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent-blue flex flex-col items-center justify-center p-4 industrial-shadow z-10">
                                        <span className="text-off-white text-[10px] font-bold uppercase label-stat tracking-widest text-center leading-tight">Project Year</span>
                                        <span className="text-off-white text-3xl font-black">{project.year}</span>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 space-y-8 w-full">
                                    <div className="flex flex-wrap gap-4">
                                        <span className="px-4 py-1 border border-accent-blue text-accent-blue text-[10px] font-bold uppercase label-stat tracking-[0.2em]">
                                            {project.type}
                                        </span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-black text-navy leading-tight uppercase">
                                        {project.title}
                                    </h2>
                                    <div className="w-20 h-2 bg-accent-blue"></div>

                                    <div className="grid grid-cols-2 gap-8 py-6 border-y border-navy/10">
                                        <div className="flex items-center gap-3">
                                            <Building className="text-accent-blue" size={18} />
                                            <div className="flex flex-col">
                                                <span className="text-[10px] uppercase font-bold text-industrial-gray label-stat tracking-widest">Client</span>
                                                <span className="text-sm font-black text-navy uppercase">{project.client}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <MapPin className="text-accent-blue" size={18} />
                                            <div className="flex flex-col">
                                                <span className="text-[10px] uppercase font-bold text-industrial-gray label-stat tracking-widest">Location</span>
                                                <span className="text-sm font-black text-navy uppercase">{project.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-lg text-industrial-gray leading-relaxed font-medium">
                                        {project.description}
                                    </p>

                                    {project.client.includes("NTPC") && (
                                        <div className="flex items-center gap-3 text-white font-bold text-xs uppercase label-stat tracking-widest p-4 bg-navy inline-flex">
                                            <BadgeCheck size={20} className="text-accent-blue" />
                                            NTPC CERTIFIED PROJECT SITE
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industrial Stamp */}
            <section className="py-24 bg-navy text-off-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/4 h-full bg-accent-blue/5 -skew-x-12 translate-x-1/2"></div>
                <div className="container-custom flex flex-col items-center text-center space-y-12 relative z-10">
                    <div className="w-40 h-40 border-4 border-accent-blue/20 flex items-center justify-center">
                        <HardHat className="w-16 h-16 text-accent-blue opacity-50" />
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-4xl font-black text-off-white uppercase tracking-tight">Reliability Demonstrated</h2>
                        <p className="max-w-xl text-gray-light/60 mx-auto text-lg italic font-medium">
                            &quot;Since 2010, AAA Infra has successfully completed mission-critical projects at major NTPC locations with zero safety incidents.&quot;
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-accent-blue py-20">
                <div className="container-custom text-center space-y-8">
                    <h2 className="text-4xl md:text-6xl font-black text-off-white uppercase leading-none">BUILD WITH THE BEST.</h2>
                    <p className="text-off-white text-xl font-bold uppercase tracking-[0.2em] label-stat">From precision manufacturing to massive site operations.</p>
                    <Link href="/contact">
                        <Button size="lg" className="bg-navy text-off-white hover:bg-off-white hover:text-navy border-none h-16 text-xl px-12">
                            Request Quote <ArrowRight className="ml-2" />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
