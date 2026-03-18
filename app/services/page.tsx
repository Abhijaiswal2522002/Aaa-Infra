import { Section } from "@/components/ui/Section";
import { Truck, HardHat, ShieldCheck, Factory, Wind, Droplets, Warehouse, Construction } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const services = [
    {
        title: "Copper Slag Sandblasting",
        description: "Professional industrial surface preparation and abrasive blasting using high-grade copper slag for superior finishes.",
        icon: <Wind className="w-12 h-12" />,
        highlight: "Industrial Grade",
        image: "/sandblasting.jpg"
    },
    {
        title: "Diesel Dewatering Pumps",
        description: "Reliable high-capacity diesel dewatering pump rental services for construction sites, mines, and industrial pits.",
        icon: <Droplets className="w-12 h-12" />,
        highlight: "Rental Service",
        image: "/dewatering-pump.jpg"
    },
    {
        title: "Metal Roofing & Fabrication",
        description: "Expert manufacturing and fabrication of industrial metal roofing sheets, customized for large-scale infrastructure.",
        icon: <Warehouse className="w-12 h-12" />,
        highlight: "Contractor",
        image: "/metal-roofing.jpg"
    },
    {
        title: "Truck Mounted Road Sweeping",
        description: "Mechanized road sweeping and cleaning services using advanced truck-mounted machines for highways and industrial zones.",
        icon: <Truck className="w-12 h-12" />,
        highlight: "Mechanized",
        image: "/road-sweeper.jpg"
    },
    {
        title: "Ash Swallow Fabrication",
        description: "Specialized fabrication and erection services for Ash Swallow systems and industrial handling equipment.",
        icon: <Factory className="w-12 h-12" />,
        highlight: "Specialized",
        image: "/ash-swallow.jpg"
    },
    {
        title: "Civil Infrastructure",
        description: "General civil construction, site preparation, and heavy structural works for industrial and government sectors.",
        icon: <Construction className="w-12 h-12" />,
        highlight: "Core Expertise",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
    },
];

export default function ServicesPage() {
    return (
        <div className="flex flex-col concrete-overlay">
            {/* Hero Section */}
            <section className="bg-[#1A1208] text-[#F2EDE4] py-20 md:py-32 border-b-4 border-[#D4A843]">
                <div className="container-custom text-center space-y-6 px-4 md:px-0">
                    <span className="text-[#D4A843] font-bold tracking-[0.4em] uppercase label-stat text-xs md:text-sm">Industrial Expertise</span>
                    <h1 className="text-5xl md:text-8xl font-bold font-serif leading-tight">
                        SPECIALIZED <br />
                        <span className="text-[#D4A843]">SOLUTIONS.</span>
                    </h1>
                </div>
            </section>

            {/* Services Grid with Images */}
            <section className="py-16 md:py-24 bg-[#F2EDE4]">
                <div className="container-custom px-4 md:px-0">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="flex flex-col bg-white border-2 border-[#D4A843]/10 hover:border-[#D4A843] transition-all duration-500 group">
                                <div className="aspect-video relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1208]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                        <span className="text-[#D4A843] font-bold uppercase label-stat text-xs tracking-widest">{service.highlight}</span>
                                    </div>
                                </div>
                                <div className="p-6 md:p-8 space-y-4">
                                    <div className="text-[#D4A843] mb-2">{service.icon}</div>
                                    <h3 className="text-xl md:text-2xl font-bold text-[#2C2416]">{service.title}</h3>
                                    <p className="text-[#8A7A65] text-sm md:text-base leading-relaxed line-clamp-3">
                                        {service.description}
                                    </p>
                                    <div className="w-full h-[1px] bg-[#D4A843]/20 pt-4"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Standard */}
            <section className="py-16 md:py-24 bg-[#1A1208]">
                <div className="container-custom px-4 md:px-0">
                    <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#F2EDE4] leading-tight">
                                Authoritative <span className="text-[#D4A843]">Safety Standards.</span>
                            </h2>
                            <p className="text-[#8A7A65] text-base md:text-lg leading-relaxed">
                                We operate under strict ISO 9001:2015 protocols. Every cubic meter of concrete and every worker on site is governed by our absolute commitment to structural honesty and safety. 100% of our equipment is company-owned and maintained.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Zero Accident Compliance",
                                    "Daily Technical Audits",
                                    "High-Strength Material Guarantee",
                                    "PSU Standard Regularity"
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-4 text-[#D4A843]">
                                        <ShieldCheck size={20} />
                                        <span className="text-[#F2EDE4] font-bold uppercase label-stat tracking-widest text-xs md:text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </section>
            {/* Gold CTA Band */}
            <section className="bg-[#D4A843] py-16 md:py-20 border-t-4 border-[#1A1208]">
                <div className="container-custom text-center space-y-8 px-4 md:px-0">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#1A1208]">DEMAND PRECISION.</h2>
                    <p className="text-[#1A1208] text-base md:text-xl font-medium uppercase tracking-[0.2em] label-stat">Grounded solutions for high-stakes industrial environments.</p>
                    <Button asChild className="bg-[#1A1208] text-[#D4A843] hover:bg-[#F2EDE4] hover:text-[#1A1208] transition-all rounded-none px-12 h-16 text-lg md:text-xl font-bold uppercase label-stat">
                        <Link href="/contact">
                            Request a Consultation
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
