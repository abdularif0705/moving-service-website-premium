"use client";

import { motion } from "framer-motion";
import { Copyleft as Box, Truck, Home, Building2, PackageCheck, Shield } from "lucide-react";

const services = [
  {
    title: "Local Moving",
    description: "Fast, reliable, and stress-free moving services across the city.",
    icon: Home,
  },
  {
    title: "Long Distance",
    description: "Secure cross-country transitions with dedicated tracking.",
    icon: Truck,
  },
  {
    title: "Commercial Office",
    description: "Minimize downtime with our expert office relocation team.",
    icon: Building2,
  },
  {
    title: "Professional Packing",
    description: "We pack everything securely using premium materials.",
    icon: PackageCheck,
  },
  {
    title: "Secure Storage",
    description: "Climate-controlled facilities for short or long-term storage.",
    icon: Box,
  },
  {
    title: "White Glove Handling",
    description: "Specialized care for antiques, pianos, and fragile items.",
    icon: Shield,
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-foreground/5 dark:bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-3"
          >
            What We Do
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-extrabold text-foreground sm:text-5xl"
          >
            Comprehensive Moving Services
          </motion.h3>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-foreground/10 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="h-14 w-14 bg-foreground/5 ring-1 ring-foreground/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-emerald-500 group-hover:ring-emerald-500 transition-all duration-500">
                <service.icon className="text-foreground group-hover:text-white transition-colors duration-500" size={28} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-foreground">{service.title}</h4>
              <p className="text-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
