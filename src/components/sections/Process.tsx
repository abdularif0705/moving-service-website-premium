"use client";

import { motion } from "framer-motion";
import { ClipboardList, PackageOpen, Home } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Get a Free Quote",
    description: "Provide your move details online or over the phone. We'll give you a transparent, guaranteed estimate.",
    icon: ClipboardList,
  },
  {
    id: "02",
    title: "We Pack & Load",
    description: "Our professional team arrives on time to securely pack, wrap, and load your belongings with absolute care.",
    icon: PackageOpen,
  },
  {
    id: "03",
    title: "Settle In",
    description: "We deliver and unload your items at your new home exactly where you want them. Stress-free and easy.",
    icon: Home,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-foreground/70 font-semibold tracking-wide uppercase text-sm mb-3"
          >
            How It Works
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-extrabold text-foreground sm:text-5xl"
          >
            A Seamless Transition in 3 Steps
          </motion.h3>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden md:absolute md:block top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-foreground/5 via-foreground/20 to-foreground/5 -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="bg-background rounded-full p-2 mb-6">
                  <div className="w-24 h-24 rounded-full bg-white dark:bg-slate-900 border border-foreground/10 flex items-center justify-center text-foreground shadow-sm group-hover:scale-105 group-hover:bg-foreground group-hover:text-background transition-all duration-500">
                    <step.icon size={40} className="transition-colors duration-500" />
                  </div>
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8rem] md:text-9xl font-black text-foreground/5 dark:text-foreground/5 select-none -z-10">
                  {step.id}
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">{step.title}</h4>
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
