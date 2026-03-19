import { Section } from "@/components/ui/Section";
import { BadgeCheck, Calendar, MapPin, Building, Ruler, HardHat } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const projects = [
    {
        title: "NTPC Meja & Unchahar Roofing",
        client: "NTPC Limited",
        description: "Supply and fabrication of color-coated metal roofing sheets and structural erection for turbine halls and auxiliary buildings.",
        year: "2024",
        location: "UP",
        type: "Roofing & Fabrication",
        image: "/high-lift-work.jpg"
    },
    {
        title: "NTPC Patratu Dewatering",
        client: "NTPC Limited",
        description: "Large-scale site dewatering and water management services using high-capacity diesel pumps for major excavation pits.",
        year: "2023",
        location: "Patratu, Jharkhand",
        type: "Dewatering Services",
        image: "/dewatering-pump.jpg"
    },
    {
        title: "NSPCL Bhilai Sandblasting",
        client: "NSPCL (NTPC-SAIL)",
        description: "Precision copper slag sandblasting (SA 2.5) of critical tanks, vessels, and structural steel components.",
        year: "2023",
        location: "Bhilai, Chhattisgarh",
        type: "Surface Treatment",
        image: "/sandblasting.jpg"
    },
    {
        title: "NTPC Gadarwara Ash Handling",
        client: "NTPC Limited",
        description: "Fabrication and erection of Ash Swallow systems and specialized ash handling infrastructure for the thermal power unit.",
        year: "2022",
        location: "Gadarwara, MP",
        type: "Ash Handling",
        image: "/workshop-team.jpg"
    },
    {
        title: "NTPC Obra Structural Work",
        client: "NTPC Limited",
        description: "Heavy structural fabrication, erection, and site maintenance for industrial sheds and power infrastructure.",
        year: "2022",
        location: "Obra, UP",
        type: "Industrial Civil",
        image: "https://images.unsplash.com/photo-1541975095191-04e137f29107?q=80&w=2072&auto=format&fit=crop"
    },
    {
        title: "NTPC Kaniha Expansion",
        client: "NTPC Limited",
        description: "Civil construction of auxiliary buildings, critical pump house structures, and arterial road network development.",
        year: "2021",
        location: "Kaniha, Odisha",
        type: "Civil Infrastructure",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
    }
];

export default function ProjectsPage() {
    return (
        <div className="flex flex-col concrete-overlay">
            {/* Hero Section */}
            <section className="bg-[#1A1208] text-[#F2EDE4] py-32 border-b-4 border-[#D4A843]">
                <div className="container-custom text-center space-y-6">
                    <span className="text-[#D4A843] font-bold tracking-[0.4em] uppercase label-stat text-sm">Our Portfolio</span>
                    <h1 className="text-6xl md:text-8xl font-bold font-serif leading-tight">
                        MILESTONES IN <br />
                        <span className="text-[#D4A843]">CONCRETE.</span>
                    </h1>
                </div>
            </section>

            {/* Projects List */}
            <section className="py-24 bg-[#F2EDE4]">
                <div className="container-custom">
                    <div className="space-y-32">
                        {projects.map((project, index) => (
                            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
                                <div className="lg:w-1/2 relative group">
                                    <div className="aspect-[16/9] bg-[#2C2416] overflow-hidden border-2 border-[#D4A843]/30">
                                         <Image 
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                         />
                                    </div>
                                    <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#D4A843] flex flex-col items-center justify-center p-4 shadow-xl">
                                         <span className="text-[#1A1208] text-[10px] font-bold uppercase label-stat tracking-widest text-center leading-tight">Project Year</span>
                                         <span className="text-[#1A1208] text-3xl font-serif font-bold">{project.year}</span>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 space-y-8">
                                    <div className="flex flex-wrap gap-4">
                                        <span className="px-4 py-1 border border-[#D4A843] text-[#D4A843] text-[10px] font-bold uppercase label-stat tracking-[0.2em]">
                                            {project.type}
                                        </span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-bold text-[#2C2416] font-serif leading-tight">
                                        {project.title}
                                    </h2>
                                    <div className="w-20 h-[2px] bg-[#D4A843]"></div>
                                    
                                    <div className="grid grid-cols-2 gap-8 py-4 border-y border-[#2C2416]/10">
                                        <div className="flex items-center gap-3">
                                            <Building className="text-[#D4A843]" size={18} />
                                            <div className="flex flex-col">
                                                <span className="text-[10px] uppercase font-bold text-[#8A7A65] label-stat tracking-widest">Client</span>
                                                <span className="text-sm font-bold text-[#2C2416]">{project.client}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <MapPin className="text-[#D4A843]" size={18} />
                                            <div className="flex flex-col">
                                                <span className="text-[10px] uppercase font-bold text-[#8A7A65] label-stat tracking-widest">Location</span>
                                                <span className="text-sm font-bold text-[#2C2416]">{project.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-lg text-[#2C2416]/80 leading-relaxed font-sans">
                                        {project.description}
                                    </p>
                                    
                                    {project.client.includes("NTPC") && (
                                        <div className="flex items-center gap-3 text-[#002366] font-bold text-sm uppercase label-stat tracking-widest p-4 bg-[#002366]/5 inline-flex">
                                            <BadgeCheck size={20} />
                                            Authoritative PSU Project
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industrial Stamp */}
            <section className="py-24 bg-[#1A1208] border-t-8 border-[#2C2416]">
                <div className="container-custom flex flex-col items-center text-center space-y-12">
                     <div className="w-40 h-40 rounded-full border-4 border-[#D4A843]/20 flex items-center justify-center">
                        <HardHat className="w-16 h-16 text-[#D4A843] opacity-50" />
                     </div>
                     <div className="space-y-4">
                        <h2 className="text-4xl font-bold text-[#F2EDE4] font-serif uppercase tracking-widest">Grounded Excellence</h2>
                        <p className="max-w-xl text-[#8A7A65] mx-auto text-lg italic">
                            &quot;Since 2010, AAA INFRA has handled some of the region&apos;s most complex civil challenges with truth and craftsmanship.&quot;
                        </p>
                     </div>
                </div>
            </section>
            {/* Gold CTA Band */}
            <section className="bg-[#D4A843] py-20 border-t-8 border-[#1A1208]">
                <div className="container-custom text-center space-y-8">
                    <h2 className="text-5xl font-bold text-[#1A1208]">YOUR VISION, OUR CONCRETE.</h2>
                    <p className="text-[#1A1208] text-xl font-medium uppercase tracking-[0.2em] label-stat">From technical drawings to permanent landmarks.</p>
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
