"use client";

import { motion } from "framer-motion";
import { Truck, Box, Wrench, Dumbbell, Trash2, Building2, Sparkles, Hammer, ArrowRight } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Local & Long Distance",
    description: "Whether across the street or across the country, experience a seamless transition with our premium transport service.",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Single Item Moves",
    description: "Precision care for your most valuable pieces. We expertly handle heavy, awkward, or delicate single items with white-glove care.",
    icon: Box,
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Furniture Assembly",
    description: "Relax while our experts quickly and correctly assemble your new furniture, leaving your space clean and ready to enjoy.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Fitness Equipment",
    description: "Complex gym setups made easy. We handle the heavy lifting and precise mechanical assembly of all fitness equipment.",
    icon: Dumbbell,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Junk Removal",
    description: "Reclaim your space. We efficiently and responsibly remove unwanted items, debris, and clutter from your property.",
    icon: Trash2,
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Commercial Office",
    description: "Minimize operational downtime with our highly coordinated, after-hours office moving and setup services.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Expert Cleaning",
    description: "Deep cleaning, office, move-in/out, and carpet & upholstery cleaning. 10% off for first-time customers!",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Rent-A-Hand",
    description: "Need help with the little things? We offer side job services including basic painting, building a fan, and minor handyman work.",
    icon: Hammer,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1000&q=80",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-foreground/5 dark:bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-accent/70" />
            <span className="text-accent font-serif tracking-[0.2em] uppercase text-xs font-semibold">
              Premium Solutions
            </span>
            <div className="h-[1px] w-12 bg-accent/70" />
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight"
          >
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/70 italic pr-2">Moving Services</span>
          </motion.h3>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className={`relative overflow-hidden rounded-[2rem] h-[420px] group cursor-pointer border border-foreground/5 shadow-lg bg-black box-border col-span-1 lg:col-span-2 ${
                index === 6 ? "lg:col-start-2" : ""
              }`}
              onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover transition-all duration-1000 ease-out group-hover:scale-[1.03]"
                />
              </div>
              
              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent transition-opacity duration-500 z-10" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay z-10" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white z-20 overflow-hidden">
                <div className="transform transition-transform duration-500 ease-out group-hover:-translate-y-14">
                  <div className="bg-white/10 backdrop-blur-md w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 border border-white/20 group-hover:bg-accent group-hover:text-black group-hover:border-transparent group-hover:shadow-[0_0_20px_rgba(202,160,82,0.4)]">
                    <service.icon size={26} className="transition-colors duration-500" />
                  </div>
                  <h4 className="text-2xl font-serif font-medium mb-3">{service.title}</h4>
                  <p className="text-white/70 leading-relaxed font-light text-sm md:text-base opacity-90 transition-all duration-500 group-hover:text-white">
                    {service.description}
                  </p>
                </div>
                
                {/* Learn More Block (Absolutely positioned to prevent layout push & clipping) */}
                <div className="absolute bottom-8 left-8 right-8 pointer-events-none opacity-0 transform translate-y-4 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:duration-500">
                  <div className="flex items-center justify-between mb-2 text-accent">
                    <span className="font-semibold text-xs tracking-[0.2em] uppercase">Learn More</span>
                    <ArrowRight size={16} className="transform -translate-x-4 transition-transform duration-500 ease-out group-hover:translate-x-0 delay-100" />
                  </div>
                  <div className="w-full h-[1.5px] bg-white/20 relative overflow-hidden">
                    <div className="absolute inset-y-0 left-0 bg-accent w-full transform -translate-x-full transition-transform duration-700 ease-out group-hover:translate-x-0 delay-150" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
