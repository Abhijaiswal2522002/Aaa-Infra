import { Button } from "@/components/ui/Button";
import { Building2, ShieldCheck, ArrowRight, Hammer, HardHat, Factory, Milestone, Wind, Droplets } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col concrete-overlay">
      {/* Top Announcement Bar */}
      <div className="bg-[#1A1208] text-[#D4A843] py-2 px-4 text-center text-sm font-medium tracking-[0.2em] uppercase label-stat">
        Trusted Excellence in Civil Construction Since 2010
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-[#1A1208] overflow-hidden border-b-4 border-[#D4A843]">
        <div className="absolute inset-0 opacity-40">
           <Image 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
            alt="Construction Infrastructure"
            fill
            className="object-cover grayscale"
            priority
          />
        </div>
        <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
               <div className="w-20 h-[2px] bg-[#D4A843]"></div>
               <span className="text-[#D4A843] font-medium tracking-widest uppercase label-stat">Heritage Grade Construction</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-[#F2EDE4] font-bold leading-[0.9]">
              BUILDING <br />
              <span className="text-[#D4A843]">LEGACIES</span> <br />
              BRICK BY BRICK.
            </h1>
            <p className="text-xl text-[#8A7A65] max-w-lg leading-relaxed font-sans">
              AAA INFRA is an authoritative force in civil engineering, specializing in industrial infrastructure and large-scale government projects. Grounded in craftsmanship, built for eternity.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <Link href="/contact">
                <Button className="bg-[#D4A843] text-[#1A1208] hover:bg-[#F2EDE4] transition-all duration-300 rounded-none px-10 h-14 text-lg font-bold uppercase label-stat">
                  Start Project
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" className="border-[#F2EDE4] text-[#F2EDE4] hover:bg-[#F2EDE4] hover:text-[#1A1208] transition-all duration-300 rounded-none px-10 h-14 text-lg font-bold uppercase label-stat">
                  Our Portfolio
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-end relative">
             {/* Est. 2010 Circular Stamp */}
             <div className="w-64 h-64 rounded-full border-2 border-[#D4A843] flex flex-col items-center justify-center text-[#D4A843] rotate-[-15deg] animate-pulse">
                <span className="text-sm font-bold tracking-[0.3em] uppercase label-stat">Established</span>
                <span className="text-6xl font-serif font-bold">2010</span>
                <span className="text-sm font-bold tracking-[0.3em] uppercase label-stat">AAA Infra</span>
             </div>
          </div>
        </div>
      </section>

      {/* Gold Trust Strip */}
      <div className="bg-[#D4A843] py-8 border-y-2 border-[#2C2416]">
        <div className="container-custom flex flex-wrap justify-center md:justify-between items-center gap-8">
           {["NTPC REGISTERED", "ISO 9001:2015", "GOVT. LICENSED", "SAFETY CERTIFIED"].map((text) => (
             <span key={text} className="text-[#1A1208] font-bold tracking-[0.2em] text-md label-stat">
               {text}
             </span>
           ))}
        </div>
      </div>

      {/* About Section */}
      <section className="py-24 bg-[#F2EDE4]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-[#2C2416] relative overflow-hidden ring-offset-4 ring-4 ring-[#D4A843]">
                 <Image 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
                  alt="Industrial Construction"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-[#D4A843] p-8 hidden md:block">
                 <p className="text-4xl font-bold text-[#1A1208]">15+</p>
                 <p className="text-sm font-bold text-[#1A1208] uppercase label-stat">Years of Craft</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-5xl font-bold text-[#2C2416]">Old Indian Craftsmanship<br/>Meets Modern Engineering.</h2>
              <div className="w-20 h-1 bg-[#D4A843]"></div>
              <p className="text-[#2C2416]/80 text-lg">
                Since 2010, AAA INFRA has been at the forefront of India&apos;s infrastructure growth. We don&apos;t just pour concrete; we build foundations that last generations. Our process is rooted in truth, transparency, and a brick-by-brick commitment to quality.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-4">
                 <div className="space-y-2">
                    <p className="text-3xl font-bold text-[#2C2416]">100+</p>
                    <p className="text-sm font-bold text-[#8A7A65] uppercase label-stat">Projects Completed</p>
                 </div>
                 <div className="space-y-2">
                    <p className="text-3xl font-bold text-[#2C2416]">500+</p>
                    <p className="text-sm font-bold text-[#8A7A65] uppercase label-stat">Skilled Artisans</p>
                 </div>
              </div>
              
              <Link href="/about">
                <Button variant="ghost" className="text-[#2C2416] p-0 hover:bg-transparent hover:text-[#D4A843] group flex items-center gap-2 text-lg font-bold">
                  Learn our Story <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-rule"></div>

      {/* Services Section */}
      <section className="py-24 bg-[#1A1208] text-[#F2EDE4]">
        <div className="container-custom">
          <div className="text-center mb-20 space-y-4">
             <h2 className="text-5xl font-bold text-[#D4A843]">Our Capabilities</h2>
             <p className="text-[#8A7A65] max-w-2xl mx-auto text-lg">
               Specialized construction solutions for the most demanding environments.
             </p>
          </div>
          
            <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Wind className="w-12 h-12" />, title: "Copper Slag Sandblasting", desc: "Industrial-grade surface preparation and abrasive blasting for heavy structures.", img: "/sandblasting.jpg" },
              { icon: <Droplets className="w-12 h-12" />, title: "Diesel Dewatering Pumps", desc: "High-capacity pump rental solutions for construction, mining, and pits.", img: "/dewatering-pump.jpg" },
              { icon: <Factory className="w-12 h-12" />, title: "Ash Swallow Systems", desc: "Specialized fabrication and erection for industrial ash handling infrastructure.", img: "/ash-swallow.jpg" }
            ].map((service, i) => (
              <div key={i} className="flex flex-col bg-[#2C2416]/20 border border-[#2C2416] hover:bg-[#2C2416] transition-all group">
                 <div className="aspect-video relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                    <Image src={service.img} alt={service.title} fill className="object-cover" />
                 </div>
                 <div className="p-10 space-y-4">
                    <div className="text-[#D4A843]">{service.icon}</div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="text-[#8A7A65] group-hover:text-[#F2EDE4]/80 transition-colors">
                      {service.desc}
                    </p>
                 </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <div className="gold-rule"></div>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#F2EDE4]">
        <div className="container-custom">
           <div className="grid lg:grid-cols-2 gap-20">
              <div className="space-y-8">
                 <h2 className="text-5xl font-bold text-[#2C2416]">Why AAA INFRA?</h2>
                 <p className="text-lg text-[#2C2416]/70">
                   We hold ourselves to a higher standard of civil excellence.
                 </p>
                 <div className="space-y-12 pt-8">
                    {[
                      { num: "01", title: "Authoritative Expertise", desc: "Decades of collective experience handling high-stakes industrial projects." },
                      { num: "02", title: "Grounded Ethics", desc: "Transparent bidding and honest material sourcing for every cubic meter." },
                      { num: "03", title: "Built for Centuries", desc: "We focus on structural longevity over short-term cost cutting." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-8 group">
                         <span className="text-4xl font-serif font-bold text-[#D4A843] opacity-50 group-hover:opacity-100 transition-opacity">{item.num}</span>
                         <div className="space-y-2">
                            <h4 className="text-xl font-bold text-[#2C2416]">{item.title}</h4>
                            <p className="text-[#8A7A65]">{item.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="bg-[#2C2416] p-12 flex flex-col justify-center border-l-8 border-[#D4A843]">
                 <blockquote className="text-3xl font-serif italic text-[#F2EDE4] leading-relaxed">
                   &quot;AAA INFRA is not just a construction company. It is a promise of stability in an ever-shifting landscape. Our structures speak for us.&quot;
                 </blockquote>
                 <cite className="mt-8 block text-[#D4A843] font-bold uppercase tracking-widest label-stat">— Managing Director</cite>
              </div>
           </div>
        </div>
      </section>

      {/* Gold CTA Band */}
      <section className="bg-[#D4A843] py-20">
        <div className="container-custom text-center space-y-8">
           <h2 className="text-5xl md:text-6xl font-bold text-[#1A1208]">READY TO BUILD YOUR LEGACY?</h2>
           <p className="text-[#1A1208] text-xl font-medium uppercase tracking-[0.2em] label-stat">Partner with India&apos;s most grounded construction firm.</p>
           <Link href="/contact">
             <Button className="bg-[#1A1208] text-[#D4A843] hover:bg-[#F2EDE4] hover:text-[#1A1208] transition-all rounded-none px-12 h-16 text-xl font-bold uppercase label-stat">
               Request a Consultation
             </Button>
           </Link>
        </div>
      </section>
    </div>
  );
}

