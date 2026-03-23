"use client";

import { Button } from "@/components/ui/Button";
import {
   Building2,
   ShieldCheck,
   ArrowRight,
   Hammer,
   HardHat,
   Factory,
   Droplets,
   Zap,
   Settings,
   CheckCircle2,
   Clock,
   Layers,
   Phone
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Home() {
   const [formData, setFormData] = useState({
      name: "",
      phone: "",
      service: "Metal Roofing Sheets",
      message: ""
   });
   const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setStatus("sending");

      try {
         await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            {
               from_name: formData.name,
               from_phone: formData.phone,
               service_type: formData.service,
               message: formData.message,
               to_email: "aaainfraa@gmail.com",
            },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
         );
         setStatus("success");
         setFormData({ name: "", phone: "", service: "Metal Roofing Sheets", message: "" });
      } catch (error) {
         console.error("EmailJS Error:", error);
         setStatus("error");
      }
   };

   return (
      <div className="flex flex-col">
         {/* Hero Section */}
         <section className="relative min-h-[90vh] flex items-center bg-navy overflow-hidden">
            {/* Background Pattern/Overlay */}
            <div className="absolute inset-0 opacity-20">
               <Image
                  src="/renusagar.jpeg"
                  alt="Industrial Background"
                  fill
                  className="object-cover"
                  priority
                  sizes="100vw"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent"></div>
            </div>

            <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
               <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
               >
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-1 bg-accent-blue"></div>
                     <span className="text-accent-blue font-bold tracking-[0.2em] uppercase label-stat">Trusted Industrial Partner</span>
                  </div>

                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight text-transparent stroke-text">
                     AAA INFRA <br />
                     <span className="text-accent-blue underline decoration-4 underline-offset-8">
                        EXPERTS
                     </span> IN INDUSTRIAL SERVICES
                  </h1>

                  <p className="text-xl text-gray-light/80 max-w-lg leading-relaxed font-medium">
                     Specializing in Metal Roofing, Dewatering, Fabrication & More. Extensive experience with <strong>NTPC</strong> & <strong>NSPCL</strong> projects across India.
                  </p>

                  <div className="flex flex-wrap gap-6 pt-4">
                     <Link href="/contact">
                        <Button size="lg" className="bg-accent-blue hover:bg-off-white hover:text-navy transition-all">
                           Get Free Quote
                        </Button>
                     </Link>
                     <a href="tel:+919170541976">
                        <Button variant="outline" size="lg" className="border-off-white text-off-white hover:bg-off-white hover:text-navy">
                           <Phone className="mr-2" size={20} /> Call Now
                        </Button>
                     </a>
                  </div>

                  <div className="flex items-center gap-8 pt-6 border-t border-off-white/10">
                     <div>
                        <p className="text-3xl font-bold text-off-white">14+</p>
                        <p className="text-xs text-gray-light uppercase tracking-widest label-stat">Years Experience</p>
                     </div>
                     <div className="w-px h-10 bg-off-white/10"></div>
                     <div>
                        <p className="text-3xl font-bold text-off-white">100+</p>
                        <p className="text-xs text-gray-light uppercase tracking-widest label-stat">Projects Done</p>
                     </div>
                  </div>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="hidden lg:block relative"
               >
                  <div className="relative aspect-square max-w-[500px] ml-auto">
                     <div className="absolute inset-0 border-2 border-accent-blue/30 translate-x-6 translate-y-6"></div>
                     <div className="relative z-10 w-full h-full overflow-hidden industrial-shadow">
                        <Image
                           src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                           alt="AAA Infra Project"
                           fill
                           className="object-cover brightness-75 hover:scale-110 transition-transform duration-700"
                           sizes="(max-width: 1024px) 100vw, 500px"
                        />
                     </div>
                     <div className="absolute -bottom-6 -left-6 bg-off-white p-6 industrial-shadow z-20">
                        <p className="text-navy font-bold text-sm tracking-widest label-stat">PREMIUM QUALITY</p>
                        <p className="text-industrial-gray text-xs">Standardized Excellence</p>
                     </div>
                  </div>
               </motion.div>
            </div>
         </section>

         {/* Trust Strip */}
         <div className="bg-gray-light border-y border-navy/5 py-10 overflow-hidden">
            <div className="container-custom">
               <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-60">
                  {["NTPC REGISTERED", "ISO CERTIFIED", "SAFETY FIRST", "ON-TIME DELIVERY", "INDUSTRIAL EXPERTS"].map((text) => (
                     <span key={text} className="text-navy font-black tracking-[0.2em] text-sm label-stat">
                        {text}
                     </span>
                  ))}
               </div>
            </div>
         </div>

         {/* About Section */}
         <section className="py-24 bg-off-white relative overflow-hidden">
            <div className="container-custom">
               <div className="grid lg:grid-cols-2 gap-20 items-center">
                  <motion.div
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     className="relative"
                  >
                     <div className="aspect-[4/3] bg-navy relative overflow-hidden industrial-shadow group">
                        <Image
                           src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
                           alt="Industrial Construction"
                           fill
                           className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                           sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                     </div>
                     <div className="absolute -bottom-10 -right-10 bg-navy p-10 hidden md:block border-l-4 border-accent-blue">
                        <p className="text-5xl font-black text-off-white">NTPC</p>
                        <p className="text-sm font-bold text-accent-blue uppercase label-stat mt-1">Certified Expertise</p>
                     </div>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="space-y-8"
                  >
                     <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-black text-navy leading-tight">
                           ABOUT AAA INFRA — <br />
                           <span className="text-industrial-gray font-bold">RELIABILITY IN EVERY PROJECT.</span>
                        </h2>
                        <div className="w-20 h-2 bg-accent-blue"></div>
                     </div>

                     <p className="text-industrial-gray text-lg leading-relaxed">
                        AAA Infra is a premium industrial service provider specializing in complex fabrication, roofing, and utility rentals. With a commitment to on-time delivery and high-quality standards, we have become a trusted partner for major power plants and industrial hubs.
                     </p>

                     <div className="p-6 bg-navy/5 border-l-4 border-navy space-y-4">
                        <p className="font-bold text-navy uppercase tracking-widest text-sm label-stat">Proven Experience in:</p>
                        <div className="grid grid-cols-2 gap-4">
                           {[
                              "NTPC Meja",
                              "NTPC Unchahar",
                              "NTPC Patratu",
                              "NSPCL Bhilai"
                           ].map((site) => (
                              <div key={site} className="flex items-center gap-2">
                                 <CheckCircle2 size={16} className="text-accent-blue" />
                                 <span className="font-bold text-navy text-sm">{site}</span>
                              </div>
                           ))}
                        </div>
                     </div>

                     <div className="pt-4">
                        <Link href="/about">
                           <Button variant="outline" className="group">
                              Learn More About Us <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                           </Button>
                        </Link>
                     </div>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* Services Section */}
         <section className="py-24 bg-navy text-off-white" id="services">
            <div className="container-custom">
               <div className="text-center mb-20 space-y-4">
                  <motion.h2
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="text-4xl md:text-6xl font-black text-off-white uppercase"
                  >
                     OUR CORE <span className="text-accent-blue">SERVICES</span>
                  </motion.h2>
                  <div className="w-24 h-1 bg-accent-blue mx-auto"></div>
                  <p className="text-gray-light/60 max-w-2xl mx-auto text-lg uppercase label-stat tracking-[0.2em]">
                     Premium Industrial Solutions for Large-Scale Projects
                  </p>
               </div>

               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {[
                     {
                        icon: <Layers className="w-12 h-12" />,
                        title: "Metal Roofing Sheets",
                        desc: "Premium PPGI and Colour Coated Sheets manufacturing. Durable, weather-resistant roofing solutions for industrial plants and warehouses.",
                        img: "/metal-roofing.jpg"
                     },
                     {
                        icon: <Factory className="w-12 h-12" />,
                        title: "Industrial Fabrication",
                        desc: "Expert structural fabrication and erection services. High-precision engineering for heavy machinery, platforms, and industrial frameworks.",
                        img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070&auto=format&fit=crop"
                     },
                     {
                        icon: <Droplets className="w-12 h-12" />,
                        title: "Diesel Dewatering Pumps",
                        desc: "High-capacity diesel dewatering pump rental services. Ideal for construction sites, pits, and emergency flood control in industrial zones.",
                        img: "/Aggressor-80-180-1300x900px-768x1109-1-1.jpg"
                     },
                     {
                        icon: <Settings className="w-12 h-12" />,
                        title: "Copper Slag Sandblasting",
                        desc: "Professional abrasive blasting for surface preparation. Removes rust and old coatings from heavy steel structures with extreme precision.",
                        img: "/industrial-copper-slag-blasting-service.jpg"
                     },
                     {
                        icon: <Droplets className="w-12 h-12" />,
                        title: "Water Tanker Supply",
                        desc: "Reliable water tanker supply for industrial requirements, construction curing, and dust suppression systems in heavy-duty zones.",
                        img: "/water-tanker-side.jpg"
                     },
                     {
                        icon: <Clock className="w-12 h-12" />,
                        title: "Road Sweeping Machines",
                        desc: "Mechanical road sweeping services for industrial townships, power plants, and large factory premises to maintain safety and hygiene.",
                        img: "/road-sweeper.jpg"
                     }
                  ].map((service, i) => (
                     <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group bg-off-white/5 border border-off-white/10 hover:bg-off-white hover:text-navy transition-all duration-500 overflow-hidden industrial-shadow flex flex-col"
                     >
                        <div className="aspect-video relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                           <Image src={service.img} alt={service.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                           <div className="absolute inset-0 bg-navy/40 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <div className="p-8 flex-grow flex flex-col justify-between">
                           <div className="space-y-4">
                              <div className="text-accent-blue group-hover:text-navy transition-colors">{service.icon}</div>
                              <h3 className="text-2xl font-black uppercase tracking-tight group-hover:text-navy">{service.title}</h3>
                              <p className="text-gray-light/60 group-hover:text-navy/80 transition-colors text-sm font-medium">
                                 {service.desc}
                              </p>
                           </div>
                           <Link href="/contact" className="mt-8 flex items-center gap-2 text-accent-blue group-hover:text-navy font-bold uppercase label-stat text-xs tracking-widest">
                              Get Quote <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                           </Link>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* Projects Section */}
         <section className="py-24 bg-off-white overflow-hidden" id="projects">
            <div className="container-custom">
               <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                  <div className="space-y-4">
                     <h2 className="text-4xl md:text-5xl font-black text-navy uppercase leading-tight">
                        OUR PROJECT <span className="text-industrial-gray font-bold">MILESTONES</span>
                     </h2>
                     <div className="w-20 h-2 bg-accent-blue"></div>
                  </div>
                  <p className="text-industrial-gray font-medium max-w-md text-lg">
                     Showcasing our commitment to engineering excellence at some of India&apos;s most critical power plants.
                  </p>
               </div>

               <div className="grid lg:grid-cols-2 gap-12">
                  {[
                     {
                        title: "NTPC Meja Power Plant",
                        location: "Prayagraj, UP",
                        work: "Fabrication & Erection of Heavy Structures",
                        img: "/ntpc meja.jpg"
                     },
                     {
                        title: "NTPC Unchahar Project",
                        location: "Raebareli, UP",
                        work: "Industrial Roofing & Maintenance Services",
                        img: "/ntpc unchahar.jpg"
                     },
                     {
                        title: "NTPC Patratu Expansion",
                        location: "Ramgarh, Jharkhand",
                        work: "Diesel Dewatering Solutions for Critical Zones",
                        img: "/excavation-site.jpg"
                     },
                     {
                        title: "NSPCL Bhilai",
                        location: "Durg, Chhattisgarh",
                        work: "Metal Roofing & Surface Preparation Services",
                        img: "/trf-nspcl-bhilai-chattisgarh-1-e1717690804616.jpg"
                     }
                  ].map((project, i) => (
                     <motion.div
                        key={i}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative group overflow-hidden industrial-shadow h-[400px]"
                     >
                        <Image src={project.img} alt={project.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000 brightness-50 group-hover:brightness-75" sizes="(max-width: 1024px) 100vw, 50vw" />
                        <div className="absolute inset-0 bg-navy/20"></div>
                        <div className="absolute bottom-0 left-0 p-10 w-full bg-gradient-to-t from-navy via-navy/40 to-transparent">
                           <div className="space-y-2">
                              <p className="text-accent-blue font-bold text-xs tracking-[0.3em] uppercase label-stat">{project.location}</p>
                              <h3 className="text-3xl font-black text-off-white uppercase">{project.title}</h3>
                              <p className="text-gray-light/80 font-medium italic">{project.work}</p>
                           </div>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* Why Choose Us */}
         <section className="py-24 bg-navy text-off-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-blue/5 -skew-x-12 translate-x-1/2"></div>
            <div className="container-custom relative z-10">
               <div className="grid lg:grid-cols-2 gap-20 items-center">
                  <div className="space-y-10">
                     <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight">
                           WHY <span className="text-accent-blue">AAA INFRA?</span>
                        </h2>
                        <div className="w-20 h-2 bg-accent-blue"></div>
                        <p className="text-gray-light/60 text-lg font-medium italic">
                           Precision. Reliability. Industrial Excellence.
                        </p>
                     </div>

                     <div className="grid gap-10">
                        {[
                           { icon: <HardHat className="text-accent-blue" size={32} />, title: "Experienced Team", desc: "Our engineers and technicians bring decades of collective industrial expertise to every project site." },
                           { icon: <Clock className="text-accent-blue" size={32} />, title: "On-Time Delivery", desc: "We understand that in industry, time is money. We maintain strict schedules for fabrication and erection." },
                           { icon: <ShieldCheck className="text-accent-blue" size={32} />, title: "Industrial Expertise", desc: "Specialized knowledge in power plant utility services, including dewatering and heavy fabrication." },
                           { icon: <CheckCircle2 className="text-accent-blue" size={32} />, title: "Quality Work", desc: "Zero compromise on material grades and structural integrity. Built to withstand the harshest environments." }
                        ].map((item, i) => (
                           <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -30 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                              className="flex gap-6 group"
                           >
                              <div className="shrink-0 p-4 bg-off-white/5 border border-off-white/10 group-hover:bg-accent-blue transition-colors rounded-none">
                                 {item.icon}
                              </div>
                              <div className="space-y-2">
                                 <h4 className="text-xl font-black uppercase tracking-tight text-off-white">{item.title}</h4>
                                 <p className="text-gray-light/60 font-medium leading-relaxed">{item.desc}</p>
                              </div>
                           </motion.div>
                        ))}
                     </div>
                  </div>

                  <motion.div
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     className="bg-off-white p-12 industrial-shadow border-l-8 border-accent-blue relative"
                  >
                     <div className="absolute top-0 right-0 p-8 text-navy/10">
                        <Building2 size={120} />
                     </div>
                     <blockquote className="text-2xl font-bold text-navy leading-relaxed relative z-10">
                        &quot;AAA INFRA is not just a service provider; it is a promise of stability in an ever-shifting industrial landscape. Our work at NTPC and NSPCL speaks for our commitment to India&apos;s growth.&quot;
                     </blockquote>
                     <div className="mt-8 flex items-center gap-4">
                        <div className="w-12 h-1 bg-navy"></div>
                        <div>
                           <cite className="block text-navy font-black uppercase tracking-widest label-stat not-italic">Managing Director</cite>
                           <p className="text-industrial-gray text-xs font-bold uppercase label-stat">AAA Infra Group</p>
                        </div>
                     </div>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* Testimonials (Premium Look) */}
         <section className="py-24 bg-off-white border-y border-navy/5">
            <div className="container-custom">
               <div className="text-center mb-16 space-y-4">
                  <h2 className="text-4xl md:text-5xl font-black text-navy uppercase">WHAT OUR <span className="text-industrial-gray">CLIENTS SAY</span></h2>
                  <div className="w-24 h-1 bg-accent-blue mx-auto"></div>
               </div>

               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                     { name: "Project Manager", company: "NTPC Meja", text: "AAA Infra's fabrication work was precise and delivered ahead of schedule. Their team's technical knowledge is exceptional." },
                     { name: "Site Engineer", company: "NSPCL Bhilai", text: "The dewatering solutions provided during the monsoon were critical for our project's continuity. Reliable and professional service." },
                     { name: "Lead Architect", company: "Industrial Parks", text: "The quality of their metal roofing sheets is superior. Their erection team is safe and highly efficient on site." }
                  ].map((t, i) => (
                     <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-10 bg-white border border-navy/5 industrial-shadow relative flex flex-col justify-between"
                     >
                        <div className="space-y-6">
                           <div className="flex text-accent-blue gap-1">
                              {[1, 2, 3, 4, 5].map(s => <Zap key={s} fill="currentColor" size={16} />)}
                           </div>
                           <p className="text-industrial-gray font-medium italic leading-relaxed text-lg">
                              &quot;{t.text}&quot;
                           </p>
                        </div>
                        <div className="mt-8 pt-6 border-t border-navy/5">
                           <p className="text-navy font-black uppercase tracking-wider label-stat">{t.name}</p>
                           <p className="text-accent-blue text-xs font-bold uppercase label-stat">{t.company}</p>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* Contact Section */}
         <section className="py-24 bg-navy relative overflow-hidden" id="contact">
            <div className="container-custom relative z-10">
               <div className="grid lg:grid-cols-2 gap-20">
                  <div className="space-y-12">
                     <div className="space-y-4">
                        <h2 className="text-4xl md:text-6xl font-black text-off-white uppercase leading-tight">
                           READY TO <br /><span className="text-accent-blue">WORK TOGETHER?</span>
                        </h2>
                        <p className="text-gray-light/60 text-xl font-medium tracking-wide">
                           Get a premium consultation for your industrial needs today.
                        </p>
                     </div>

                     <div className="grid gap-8">
                        <div className="flex items-start gap-6">
                           <div className="w-14 h-14 bg-accent-blue flex items-center justify-center shrink-0">
                              <Phone className="text-off-white" size={24} />
                           </div>
                           <div>
                              <p className="text-gray-light/40 uppercase text-xs font-bold tracking-widest label-stat mb-1">Call Us Anywhere</p>
                              <p className="text-off-white text-2xl font-black">+91 91705 41976</p>
                           </div>
                        </div>

                        <div className="flex items-start gap-6">
                           <div className="w-14 h-14 bg-off-white/10 flex items-center justify-center shrink-0">
                              <Layers className="text-accent-blue" size={24} />
                           </div>
                           <div>
                              <p className="text-gray-light/40 uppercase text-xs font-bold tracking-widest label-stat mb-1">Email Inquiry</p>
                              <p className="text-off-white text-2xl font-black">aaainfraa@gmail.com</p>
                           </div>
                        </div>

                        <div className="flex items-start gap-6">
                           <div className="w-14 h-14 bg-off-white/10 flex items-center justify-center shrink-0">
                              <Building2 className="text-accent-blue" size={24} />
                           </div>
                           <div>
                              <p className="text-gray-light/40 uppercase text-xs font-bold tracking-widest label-stat mb-1">Head Office</p>
                              <p className="text-off-white text-lg font-bold leading-snug">
                                 236, Sirsa, Salaiya Khurd, Meja Road, <br />
                                 Prayagraj, UP - 212301
                              </p>
                           </div>
                        </div>
                     </div>

                     <div className="pt-6 flex gap-4">
                        <Link href="https://wa.me/919170541976">
                           <Button size="lg" className="bg-green-600 hover:bg-green-700 border-none px-10">
                              WhatsApp Us
                           </Button>
                        </Link>
                        <Link href="mailto:aaainfraa@gmail.com">
                           <Button size="lg" variant="outline" className="border-off-white text-off-white hover:bg-off-white hover:text-navy px-10">
                              Email Us
                           </Button>
                        </Link>
                     </div>
                  </div>

                  <motion.div
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     className="bg-off-white p-12 industrial-shadow"
                  >
                     <h3 className="text-3xl font-black text-navy uppercase mb-8">REQUEST A <span className="text-accent-blue">QUOTE</span></h3>
                     <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 gap-6">
                           <div className="space-y-2">
                              <label className="text-xs font-bold text-navy uppercase tracking-widest label-stat">Full Name</label>
                              <input
                                 type="text"
                                 required
                                 className="w-full bg-navy/5 border border-navy/10 p-4 focus:outline-none focus:border-accent-blue transition-colors font-bold text-navy"
                                 placeholder="John Doe"
                                 value={formData.name}
                                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              />
                           </div>
                           <div className="space-y-2">
                              <label className="text-xs font-bold text-navy uppercase tracking-widest label-stat">Phone Number</label>
                              <input
                                 type="tel"
                                 required
                                 className="w-full bg-navy/5 border border-navy/10 p-4 focus:outline-none focus:border-accent-blue transition-colors font-bold text-navy"
                                 placeholder="+91 00000 00000"
                                 value={formData.phone}
                                 onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              />
                           </div>
                        </div>
                        <div className="space-y-2">
                           <label className="text-xs font-bold text-navy uppercase tracking-widest label-stat">Service Required</label>
                           <select
                              className="w-full bg-navy/5 border border-navy/10 p-4 focus:outline-none focus:border-accent-blue transition-colors font-bold text-navy appearance-none"
                              value={formData.service}
                              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                           >
                              <option>Metal Roofing Sheets</option>
                              <option>Industrial Fabrication</option>
                              <option>Diesel Dewatering Pumps</option>
                              <option>Copper Slag Sandblasting</option>
                              <option>Water Tanker Supply</option>
                              <option>Road Sweeping Services</option>
                           </select>
                        </div>
                        <div className="space-y-2">
                           <label className="text-xs font-bold text-navy uppercase tracking-widest label-stat">Project Details</label>
                           <textarea
                              required
                              className="w-full bg-navy/5 border border-navy/10 p-4 h-32 focus:outline-none focus:border-accent-blue transition-colors font-bold text-navy resize-none"
                              placeholder="Describe your industrial requirement..."
                              value={formData.message}
                              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                           />
                        </div>
                        <Button
                           type="submit"
                           disabled={status === "sending"}
                           className="w-full h-16 text-lg bg-navy hover:bg-accent-blue transition-all disabled:opacity-50"
                        >
                           {status === "sending" ? "Processing..." : "Submit Request"}
                        </Button>
                        {status === "success" && (
                           <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold text-center mt-4">
                              Request sent successfully!
                           </motion.p>
                        )}
                        {status === "error" && (
                           <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-600 font-bold text-center mt-4">
                              Oops! Something went wrong.
                           </motion.p>
                        )}
                     </form>
                  </motion.div>
               </div>
            </div>
         </section>
      </div>
   );
}
