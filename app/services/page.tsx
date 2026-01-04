import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Building2, Truck, HardHat, Pickaxe, Hammer, Anchor } from "lucide-react";

const services = [
    {
        title: "Civil Construction",
        description: "Comprehensive civil works for industrial and residential projects, including foundations, structures, and finishing.",
        icon: <Building2 size={32} />,
    },
    {
        title: "Infrastructure Development",
        description: "Roads, drains, and utility infrastructure development for government and private sectors.",
        icon: <Anchor size={32} />,
    },
    {
        title: "Industrial & PSU Projects",
        description: "Specialized construction services for PSUs like NTPC, adhering to strict safety and quality standards.",
        icon: <HardHat size={32} />,
    },
    {
        title: "Site Development",
        description: "Land clearing, leveling, grading, and preparation of sites for major construction activities.",
        icon: <Pickaxe size={32} />,
    },
    {
        title: "Maintenance Works",
        description: "Ongoing maintenance and repair services for industrial plants and infrastructure facilities.",
        icon: <Hammer size={32} />,
    },
    {
        title: "Crane & Truck Services",
        description: "Rental and operation of heavy machinery, cranes, and trucks for material handling and lifting.",
        icon: <Truck size={32} />,
    },
];

export default function ServicesPage() {
    return (
        <div className="flex flex-col">
            <Section className="bg-slate-900 text-white py-20">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">Our Services</h1>
                    <p className="text-lg text-slate-300">
                        End-to-end construction and infrastructure solutions tailored to your needs.
                    </p>
                </div>
            </Section>

            <Section className="bg-white">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            className="border border-slate-200"
                        />
                    ))}
                </div>
            </Section>
        </div>
    );
}
