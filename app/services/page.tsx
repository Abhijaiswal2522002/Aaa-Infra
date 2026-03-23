"use client";

import { Truck, HardHat, ShieldCheck, Factory, Wind, Droplets, Warehouse, Construction, ArrowRight, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

const services = [
    {
        title: "Metal Roofing Sheets",
        description: "Premium manufacturer of PPGI and Colour Coated Sheets. We provide complete industrial roofing solutions including on-site fabrication and precision erection for large power plants and warehouses.",
        icon: <Warehouse className="w-12 h-12" />,
        highlight: "Premium Grade",
        image: "/metal-roofing.jpg",
        specs: [
            { label: "Material", value: "PPGI / Galvalume" },
            { label: "Profile", value: "Trapezoidal / Decking" },
            { label: "Thickness", value: "0.45 mm - 0.60 mm" },
            { label: "Durability", value: "Extreme Weather" }
        ],
        projects: ["NTPC Meja", "NTPC Unchahar"]
    },
    {
        title: "Industrial Fabrication",
        description: "Expert structural fabrication and erection services. Specialized in heavy machinery platforms, industrial sheds, and intricate steel frameworks for utility sectors.",
        icon: <Factory className="w-12 h-12" />,
        highlight: "Heavy Duty",
        image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070&auto=format&fit=crop",
        specs: [
            { label: "Standards", value: "IS 2062 / ASTM" },
            { label: "Welding", value: "Certified MIG/ARC" },
            { label: "Capacity", value: "Bulk Structural" },
            { label: "Finishing", value: "Epoxy / PU Coated" }
        ],
        projects: ["NTPC Obra", "NTPC Meja"]
    },
    {
        title: "Diesel Dewatering Pumps",
        description: "High-capacity diesel-driven dewatering pump rental services. Essential for construction pits, flood control, and large-scale site preparation in industrial zones.",
        icon: <Droplets className="w-12 h-12" />,
        highlight: "24/7 Support",
        image: "/Aggressor-80-180-1300x900px-768x1109-1-1.jpg",
        specs: [
            { label: "Pump Type", value: "Diesel Driven" },
            { label: "Discharge", value: "Up to 300 m³/hr" },
            { label: "Head Range", value: "≤15-30 Meters" },
            { label: "Source", value: "High-Power Engine" }
        ],
        projects: ["NTPC Patratu"]
    },
    {
        title: "Copper Slag Sandblasting",
        description: "Professional abrasive blasting for surface preparation (SA 2.5). Removes rust and old coatings from heavy steel structures with extreme precision for maximum coating life.",
        icon: <Wind className="w-12 h-12" />,
        highlight: "SA 2.5 Certified",
        image: "/industrial-copper-slag-blasting-service.jpg",
        specs: [
            { label: "Service", value: "Manual Blasting" },
            { label: "Abrasive", value: "Copper Slag" },
            { label: "Preparation", value: "SA 2.5 Standard" },
            { label: "Application", value: "Industrial Tanks" }
        ],
        projects: ["NTPC Meja", "NSPCL Bhilai"]
    },
    {
        title: "Road Sweeping Machines",
        description: "Mechanical road sweeping services for industrial townships, power plants, and large factory premises. Keeps environments safe and dust-free with specialized equipment.",
        icon: <Truck className="w-12 h-12" />,
        highlight: "Advanced Tech",
        image: "/road-sweeper.jpg",
        specs: [
            { label: "Machine", value: "Truck Mounted" },
            { label: "System", value: "Vaccum / Wet" },
            { label: "Area", value: "Large Perimeter" },
            { label: "Efficiency", value: "High Speed" }
        ],
        projects: []
    },
    {
        title: "Water Tanker Supply",
        description: "Reliable bulk water tanker supply of up to 12,000L. Monthly rental services for industrial sites, construction curing, and dust suppression systems in heavy-duty zones.",
        icon: <Droplets className="w-12 h-12" />,
        highlight: "Bulk Supply",
        image: "/water-tanker-side.jpg",
        specs: [
            { label: "Capacity", value: "12000 Liters" },
            { label: "Daily Volume", value: "500 kL+" },
            { label: "Mode", value: "On-Site Delivery" },
            { label: "Rental", value: "Monthly / Bulk" }
        ],
        projects: []
    }
];

export default function ServicesPage() {
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
                        Industrial Expertise
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl font-black leading-tight uppercase"
                    >
                        PREMIUM <br />
                        <span className="text-accent-blue">SERVICES.</span>
                    </motion.h1>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-off-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white border border-navy/5 industrial-shadow group overflow-hidden flex flex-col"
                            >
                                <div className="aspect-video relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-100"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute top-4 right-4 bg-accent-blue text-off-white px-3 py-1 text-[10px] font-bold uppercase label-stat tracking-widest z-10">
                                        {service.highlight}
                                    </div>
                                </div>
                                <div className="p-8 space-y-6 flex-grow flex flex-col justify-between">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-start">
                                            <div className="text-accent-blue">{service.icon}</div>
                                            {service.projects.length > 0 && (
                                                <div className="flex flex-col items-end">
                                                    <span className="text-[10px] font-bold text-navy uppercase label-stat opacity-40">Deployed at</span>
                                                    <div className="flex gap-1 mt-1">
                                                        {service.projects.map((p, i) => (
                                                            <span key={i} className="text-[9px] bg-navy text-white px-2 py-0.5 font-bold uppercase label-stat">{p}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <h3 className="text-2xl font-black text-navy uppercase tracking-tight">{service.title}</h3>
                                        <p className="text-industrial-gray text-sm leading-relaxed font-medium">
                                            {service.description}
                                        </p>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-navy/10">
                                            {service.specs.map((spec, i) => (
                                                <div key={i} className="space-y-1">
                                                    <span className="text-[10px] uppercase font-bold text-accent-blue label-stat tracking-widest block opacity-70">{spec.label}</span>
                                                    <span className="text-xs font-black text-navy uppercase tracking-tight">{spec.value}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <Link href="/contact" className="block">
                                            <Button variant="outline" className="w-full border-navy text-navy hover:bg-navy hover:text-off-white h-12 font-black uppercase label-stat text-xs">
                                                Technical Inquiry <ArrowRight className="ml-2" size={14} />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Commitment */}
            <section className="py-24 bg-navy text-off-white relative overflow-hidden">
                <div className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-accent-blue/5 -skew-y-12 translate-y-1/2"></div>
                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-6xl font-black text-off-white leading-tight uppercase">
                                ZERO COMPROMISE <br /><span className="text-accent-blue">SAFETY STANDARDS.</span>
                            </h2>
                            <p className="text-gray-light/60 text-lg leading-relaxed font-medium">
                                We operate under strict safety protocols and are registered with major PSUs. Every project site follows daily technical audits and uses 100% company-owned, high-performance equipment.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    "PSU Site Compliance",
                                    "ISO 9001 Alignment",
                                    "Zero Site Accidents",
                                    "Expert Personnel Only"
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-4 text-accent-blue p-4 bg-off-white/5 border border-off-white/10">
                                        <ShieldCheck size={24} />
                                        <span className="text-off-white font-bold uppercase label-stat tracking-widest text-xs">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative industrial-shadow pt-12">
                            <div className="bg-accent-blue p-12 text-off-white space-y-6 relative overflow-hidden">
                                <Zap className="absolute top-0 right-0 w-64 h-64 text-off-white/10 -translate-y-1/2 translate-x-1/2" />
                                <h3 className="text-3xl font-black uppercase leading-tight relative z-10">Trusted by NTPC for Mission-Critical Utility Support.</h3>
                                <p className="text-off-white/80 font-bold uppercase label-stat tracking-widest text-sm relative z-10">Certified Operational Excellence Since 2010</p>
                                <div className="pt-4 relative z-10">
                                    <Link href="/contact">
                                        <Button className="bg-navy text-off-white hover:bg-off-white hover:text-navy border-none h-14 px-10 font-black uppercase label-stat">
                                            Request Service Quote
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
