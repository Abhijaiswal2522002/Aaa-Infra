import { Section } from "@/components/ui/Section";
import { BadgeCheck } from "lucide-react";

export default function ProjectsPage() {
    const projects = [
        {
            title: "NTPC Thermal Power Plant Expansion",
            client: "NTPC Limited",
            description: "Civil construction of auxiliary buildings, road network development, and structural enhancements for the expansion unit.",
            year: "2023",
            category: "PSU / Payment"
        },
        {
            title: "Industrial Warehousing Complex",
            client: "Private Retail Giant",
            description: "Complete site development, boundary wall construction, and flooring for a 5-acre warehousing facility.",
            year: "2022",
            category: "Industrial"
        },
        {
            title: "Highway Drainage System",
            client: "NHAI Sub-Contract",
            description: "Construction of reinforced concrete drains and culverts along the national highway segment.",
            year: "2024",
            category: "Infrastructure"
        },
        {
            title: "Factory Site Levelling",
            client: "Steel Manufacturer",
            description: "Massive earthmoving and site grading operation using our own fleet of dozers and dumpers.",
            year: "2021",
            category: "Site Development"
        }
    ];

    return (
        <div className="flex flex-col">
            <Section className="bg-slate-900 text-white py-20">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
                    <p className="text-lg text-slate-300">
                        A track record of excellence in delivering challenging infrastructure projects.
                    </p>
                </div>
            </Section>

            <Section className="bg-slate-50">
                <div className="grid gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6">
                            <div className="md:w-1/4 flex flex-col justify-between">
                                <div>
                                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-50 rounded-full mb-2">
                                        {project.category}
                                    </span>
                                    <h3 className="text-xl font-bold text-[var(--color-primary)]">{project.year}</h3>
                                </div>
                                {project.client.includes("NTPC") && (
                                    <div className="mt-4 flex items-center gap-2 text-green-600 font-medium">
                                        <BadgeCheck size={20} /> PSU Project
                                    </div>
                                )}
                            </div>
                            <div className="md:w-3/4">
                                <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-2">{project.title}</h2>
                                <p className="text-sm font-semibold text-[var(--color-secondary)] mb-3">Client: {project.client}</p>
                                <p className="text-slate-600 leading-relaxed">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
