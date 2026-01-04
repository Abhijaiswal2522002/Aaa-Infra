import { Section } from "@/components/ui/Section";
import { Truck, Wrench, Warehouse } from "lucide-react";

export default function AssetsPage() {
    const assets = [
        {
            name: "Heavy Duty Cranes",
            count: "3+",
            description: "Hydraulic and Telescopic cranes for heavy lifting and erection works.",
            icon: <Warehouse size={40} />
        },
        {
            name: "Dumpers & Trucks",
            count: "15+",
            description: "Fleet of high-capacity dumpers for material transport and earthmoving.",
            icon: <Truck size={40} />
        },
        {
            name: "Excavators & JCBs",
            count: "5+",
            description: "Earthmovers for site levelling, digging, and trenching operations.",
            icon: <Wrench size={40} />
        },
        {
            name: "Concrete Mixers",
            count: "8+",
            description: "Automated drum mixers for on-site concrete production.",
            icon: <Wrench size={40} />
        }
    ];

    return (
        <div className="flex flex-col">
            <Section className="bg-slate-900 text-white py-20">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">Assets & Equipment</h1>
                    <p className="text-lg text-slate-300">
                        We own our machinery, ensuring reliability, speed, and cost-effectiveness for every project.
                    </p>
                </div>
            </Section>

            <Section className="bg-white">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {assets.map((asset, index) => (
                        <div key={index} className="bg-slate-50 p-6 rounded-lg text-center border border-slate-200 hover:border-[var(--color-primary)] transition-colors">
                            <div className="text-[var(--color-primary)] mx-auto mb-4 flex justify-center">
                                {asset.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-1">{asset.name}</h3>
                            <div className="text-3xl font-extrabold text-slate-300 mb-3">{asset.count}</div>
                            <p className="text-sm text-[var(--color-secondary)]">{asset.description}</p>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
