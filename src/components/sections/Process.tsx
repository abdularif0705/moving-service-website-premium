"use client";

import { motion } from "framer-motion";
import { ClipboardList, PackageOpen, Home } from "lucide-react";
import { useState, useEffect } from "react";

const steps = [
  {
    id: "01",
    title: "Get Your Free Quote",
    description: "Contact our team to discuss your specific needs. We'll provide a transparent, no-obligation estimate tailored exactly to your move.",
    icon: ClipboardList,
  },
  {
    id: "02",
    title: "Customize & Pack",
    description: "Choose from our range of premium services. Our professionals will arrive on time to securely pack and load your belongings with white-glove care.",
    icon: PackageOpen,
  },
  {
    id: "03",
    title: "Book & Relax",
    description: "Once your plan is finalized, we take over the logistics. We handle the heavy lifting, delivering and unloading your items exactly where you want them.",
    icon: Home,
  },
];

export default function Process() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const labelInitial = isMobile ? { opacity: 0 } : { opacity: 0, scale: 0.8 };
  const labelAnimate = isMobile ? { opacity: 1 } : { opacity: 1, scale: 1 };

  return (
    <section id="process" className="py-32 bg-background relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24 flex flex-col items-center">
          <motion.div
            initial={labelInitial}
            whileInView={labelAnimate}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-accent/70" />
            <span className="text-accent font-serif tracking-[0.2em] uppercase text-xs font-semibold">
              The Journey
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
            Your Moving Experience <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/70 italic pr-2">in</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/70 italic pr-2">3</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/70 italic pr-2">Simple</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/70 italic pr-2">Steps</span>
          </motion.h3>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden md:absolute md:block top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-foreground/5 via-foreground/20 to-foreground/5 -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-3 gap-y-32 gap-x-12 md:gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="bg-background rounded-full p-2 mb-6">
                  <div className="w-24 h-24 rounded-full bg-white dark:bg-slate-900 border border-foreground/10 flex items-center justify-center text-foreground shadow-sm group-hover:scale-105 group-hover:bg-accent group-hover:border-accent group-hover:text-primary transition-all duration-500">
                    <step.icon size={40} className="transition-colors duration-500" />
                  </div>
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8rem] md:text-9xl font-black text-foreground/5 dark:text-foreground/5 select-none -z-10">
                  {step.id}
                </div>
                <h4 className="text-2xl font-serif font-medium mb-4 text-foreground">{step.title}</h4>
                <p className="text-foreground/70 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
