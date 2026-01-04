import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Building2, Truck, HardHat, ShieldCheck, ArrowRight, Pickaxe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] flex items-center justify-center bg-slate-900 text-white overflow-hidden">
        {/* Background Overlay - In real app, use an image here */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-50 grayscale hover:grayscale-0 transition-all duration-1000" />

        <div className="container-custom relative z-20 flex flex-col items-start max-w-4xl">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-200 uppercase bg-blue-900/50 rounded-full border border-blue-800 backdrop-blur-sm">
            Trusted by Government & PSUs
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Building Infrastructure for <span className="text-[var(--color-primary)] bg-white px-2 rounded-sm">Tomorrow</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            AAA INFRA is a premier construction company specializing in civil works, site development, and industrial infrastructure. Partnering with NTPC and major PSUs to deliver excellence.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="text-base" asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base text-white border-white hover:bg-white hover:text-slate-900" asChild>
              <Link href="/projects">View Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Highlights */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl bg-slate-100 group">
            {/* Placeholder for About Image */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[var(--color-foreground)]">Excellence in Civil & Industrial Construction</h2>
            <p className="text-[var(--color-secondary)] leading-relaxed">
              With years of experience in the construction industry, AAA INFRA has established itself as a reliable partner for complex infrastructure projects. We own our fleet of trucks and cranes, ensuring that logistics and execution are always under our control.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["PSU & Government Projects", "Owned Heavy Machinery", "Timely Delivery", "Safety First Approach"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-[var(--color-foreground)] font-medium">
                  <div className="bg-blue-100 p-1 rounded-full text-[var(--color-primary)]"><ShieldCheck size={16} /></div>
                  {item}
                </li>
              ))}
            </ul>
            <Button variant="outline" className="mt-4" asChild>
              <Link href="/about">More About Us</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Services Highlights */}
      <Section className="bg-slate-50">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Core Services</h2>
          <p className="text-[var(--color-secondary)]">
            We provide comprehensive construction solutions tailored to meet the demands of industrial and government sectors.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card
            title="Civil Construction"
            description="High-quality civil works including foundations, structural buildings, and concrete infrastructure for industrial sites."
            icon={<Building2 size={32} />}
            href="/services"
          />
          <Card
            title="Site Development"
            description="Complete site preparation, grading, land development, and maintenance services for large-scale projects."
            icon={<Pickaxe size={32} />}
            href="/services"
          />
          <Card
            title="Material Handling & Logistics"
            description="Efficient transport and handling of construction materials using our own fleet of dumpers and cranes."
            icon={<Truck size={32} />}
            href="/services"
          />
        </div>
        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </Section>

      {/* Stats / Trust Strip */}
      <section className="bg-[var(--color-primary)] py-16 text-white leading-none">
        <div className="container-custom mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Projects Completed", value: "50+" },
            { label: "Years of Experience", value: "15+" },
            { label: "Machinery Owned", value: "20+" },
            { label: "Client Satisfaction", value: "100%" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-bold mb-2 text-blue-100">{stat.value}</div>
              <div className="text-sm uppercase tracking-wider opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <Section className="bg-white">
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center md:text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <HardHat size={300} textAnchor="middle" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl font-bold text-white">Ready to Start Your Project?</h2>
              <p className="text-slate-400 text-lg">
                Contact AAA INFRA today for reliable, quality-driven construction services for your next tendered project.
              </p>
            </div>
            <Button size="lg" className="bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent)]/90 border-none shrink-0" asChild>
              <Link href="/contact" className="gap-2">
                Contact Us Now <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
