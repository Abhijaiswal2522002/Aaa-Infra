import { Section } from "@/components/ui/Section";
import { Truck, HardHat, ShieldCheck, Factory, Wind, Droplets, Warehouse, Construction } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const services = [
    {
        title: "Water Tanker Supply Month Rental",
        description: "Bulk construction water supply with 12000L high-capacity tankers. Monthly rental for industrial, hotel, and commercial sites. Daily supply volume above 500 kL/day.",
        icon: <Droplets className="w-12 h-12" />,
        highlight: "₹ 1,50,000/Month",
        image: "/water-tanker-side.jpg",
        specs: [
            { label: "Water Type", value: "Construction Water" },
            { label: "Supply Mode", value: "Tanker Supply" },
            { label: "Daily Volume", value: "Above 500 kL/day" },
            { label: "Capacity", value: "12000 L" }
        ],
        projects: []
    },
    {
        title: "Metal Roofing & Fabrication",
        description: "Trusted manufacturer and contractor providing complete color-coated roofing solutions, on-site fabrication, and structural erection for large-scale industrial projects.",
        icon: <Warehouse className="w-12 h-12" />,
        highlight: "₹ 400/sq ft",
        image: "/metal-roofing.jpg",
        specs: [
            { label: "Material", value: "Aluminium" },
            { label: "Profile", value: "Deck Sheet" },
            { label: "Thickness", value: "0.50 mm" },
            { label: "Coating", value: "Color Coated" }
        ],
        projects: ["NTPC Meja", "NTPC Unchahar"]
    },
    {
        title: "Diesel Dewatering Pumps",
        description: "Powerful diesel-driven dewatering solution for construction sites and industrial areas. Reliable water removal with high discharge capacity.",
        icon: <Droplets className="w-12 h-12" />,
        highlight: "₹ 20,000/Month",
        image: "/dewatering-pump.jpg",
        specs: [
            { label: "Pump Type", value: "Diesel Driven" },
            { label: "Discharge", value: "201–300 m³/hr" },
            { label: "Head Range", value: "≤15 m" },
            { label: "Source", value: "Diesel Engine" }
        ],
        projects: ["NTPC Patratu"]
    },
    {
        title: "Truck Mounted Road Sweeping",
        description: "Advanced mechanized sweeping with wet and dry systems. Efficiently maintains clean highways, industrial zones, and municipal roads.",
        icon: <Truck className="w-12 h-12" />,
        highlight: "₹ 40,00,000/Unit",
        image: "/road-sweeper.jpg",
        specs: [
            { label: "Machine Type", value: "Truck mounted" },
            { label: "Sweeping Width", value: "1600 mm" },
            { label: "Hopper", value: "6 m³" },
            { label: "System", value: "Wet & Dry" }
        ],
        projects: []
    },
    {
        title: "Copper Slag Sandblasting",
        description: "Manual blasting services for tanks, vessels, and structural steel. SA 2.5 surface preparation ensures maximum durability and coating adhesion.",
        icon: <Wind className="w-12 h-12" />,
        highlight: "₹ 200/sq m",
        image: "/sandblasting.jpg",
        specs: [
            { label: "Service Type", value: "Manual Blasting" },
            { label: "Preparation", value: "SA 2.5" },
            { label: "Grade", value: "Medium Copper Slag" },
            { label: "Industries", value: "Power, Construction" }
        ],
        projects: ["NTPC Meja", "NSPCL Bhilai"]
    },
    {
        title: "Ash Swallow Fabrication",
        description: "Specialized on-site fabrication and erection of ash handling systems. Focused on safety and timely delivery in demanding power plant environments.",
        icon: <Factory className="w-12 h-12" />,
        highlight: "Industrial Grade",
        image: "/ash-swallow2.jpeg",
        specs: [
            { label: "Scope", value: "Fabrication & Erection" },
            { label: "Environment", value: "Power Plants" },
            { label: "Manpower", value: "Skilled Certified" },
            { label: "Focus", value: "Quality & Safety" }
        ],
        projects: ["NTPC Gadarwara"]
    },
    {
        title: "Excavation & Site Preparation",
        description: "Heavy-duty excavation, earthmoving, and site clearing services for large-scale industrial and infrastructure projects.",
        icon: <Construction className="w-12 h-12" />,
        highlight: "Heavy Machinery",
        image: "/excavation-site.jpg",
        specs: [
            { label: "Equipment", value: "Sany Excavators" },
            { label: "Service", value: "Bulk Earthmoving" },
            { label: "Application", value: "Site Preparation" },
            { label: "Capacity", value: "High Volume" }
        ],
        projects: []
    },
    {
        title: "Civil Infrastructure",
        description: "General civil construction, site preparation, and heavy structural works for industrial and government sectors.",
        icon: <HardHat className="w-12 h-12" />,
        highlight: "Core Expertise",
        image: "/workshop-team.jpg",
        specs: [
            { label: "Standard", value: "ISO 9001:2015" },
            { label: "Sectors", value: "Industrial, PSU" },
            { label: "Compliance", value: "Zero Accident" },
            { label: "Maintenace", value: "100% Owned Fleet" }
        ],
        projects: []
    },
];

export default function ServicesPage() {
    return (
        <div className="flex flex-col concrete-overlay">
            {/* Hero Section */}
            <section className="bg-[#1A1208] text-[#F2EDE4] py-20 md:py-32 border-b-4 border-[#D4A843]">
                <div className="container-custom text-center space-y-6 px-4 md:px-0">
                    <span className="text-[#D4A843] font-bold tracking-[0.4em] uppercase label-stat text-xs md:text-sm">Industrial Expertise</span>
                    <h1 className="text-5xl md:text-8xl font-bold font-serif leading-tight text-balance">
                        SPECIALIZED <br />
                        <span className="text-[#D4A843]">SOLUTIONS.</span>
                    </h1>
                </div>
            </section>

            {/* Services Grid with Images */}
            <section className="py-16 md:py-24 bg-[#F2EDE4]">
                <div className="container-custom px-4 md:px-0">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {services.map((service, index) => (
                            <div key={index} className="flex flex-col bg-white border-2 border-[#D4A843]/10 hover:border-[#D4A843] transition-all duration-500 group relative">
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
                                <div className="p-6 md:p-8 space-y-6 flex-grow flex flex-col">
                                    <div className="flex justify-between items-start">
                                        <div className="text-[#D4A843]">{service.icon}</div>
                                        {service.projects.length > 0 && (
                                            <div className="text-right">
                                                <span className="text-[10px] uppercase font-bold text-[#D4A843] tracking-wider block mb-1">Projects Done at</span>
                                                {service.projects.map((p, i) => (
                                                    <span key={i} className="text-[10px] bg-[#1A1208] text-[#F2EDE4] px-2 py-0.5 ml-1 inline-block font-bold rounded-sm">{p}</span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl md:text-2xl font-bold text-[#2C2416] leading-tight">{service.title}</h3>
                                        <p className="text-[#8A7A65] text-sm leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>

                                    {/* Specifications Grid */}
                                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#D4A843]/10">
                                        {service.specs.map((spec, i) => (
                                            <div key={i} className="space-y-0.5">
                                                <span className="text-[10px] uppercase font-bold text-[#D4A843]/60 tracking-wider block">{spec.label}</span>
                                                <span className="text-[11px] font-bold text-[#2C2416] uppercase tracking-tight">{spec.value}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-auto pt-6">
                                        <Button asChild variant="outline" className="w-full rounded-none border-[#D4A843] text-[#1A1208] hover:bg-[#D4A843] hover:text-[#1A1208] transition-all font-bold uppercase text-xs label-stat tracking-widest h-12">
                                            <Link href="/contact">Inquiry details</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Standard */}
            <section className="py-16 md:py-24 bg-[#1A1208] border-y-8 border-[#D4A843]/20">
                <div className="container-custom px-4 md:px-0">
                    <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#F2EDE4] leading-tight">
                                Authoritative <span className="text-[#D4A843]">Safety Standards.</span>
                            </h2>
                            <p className="text-[#8A7A65] text-base md:text-lg leading-relaxed">
                                We operate under strict ISO 9001:2015 protocols. Every cubic meter of concrete and every worker on site is governed by our absolute commitment to structural honesty and safety. 100% of our equipment is company-owned and maintained.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Zero Accident Compliance",
                                    "Daily Technical Audits",
                                    "High-Strength Material Guarantee",
                                    "PSU Standard Regularity"
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-4 text-[#D4A843] p-4 border border-[#D4A843]/20 bg-[#2C2416]/20">
                                        <ShieldCheck size={24} />
                                        <span className="text-[#F2EDE4] font-bold uppercase label-stat tracking-[0.1em] text-[10px] md:text-xs">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative aspect-video lg:aspect-square bg-[#2C2416] p-2 border-2 border-[#D4A843]/40">
                            <Image
                                src="/water-tanker-front.jpg"
                                alt="Industrial Equipment"
                                fill
                                className="object-cover opacity-80"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gold CTA Band */}
            <section className="bg-[#D4A843] py-16 md:py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -rotate-45 translate-x-32 -translate-y-32"></div>
                <div className="container-custom text-center space-y-8 px-4 md:px-0 relative z-10">
                    <h2 className="text-4xl md:text-7xl font-bold text-[#1A1208] font-serif leading-none tracking-tighter">DEMAND PRECISION.</h2>
                    <p className="text-[#1A1208] text-base md:text-xl font-bold uppercase tracking-[0.3em] label-stat max-w-2xl mx-auto">Grounded solutions for high-stakes industrial environments.</p>
                    <div className="pt-4">
                        <Button asChild className="bg-[#1A1208] text-[#D4A843] hover:bg-[#F2EDE4] hover:text-[#1A1208] transition-all rounded-none px-12 h-20 text-lg md:text-2xl font-bold uppercase label-stat shadow-2xl">
                            <Link href="/contact">
                                Request a Consultation
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
