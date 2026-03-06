"use client";

import { motion } from "framer-motion";

const stats = [
  { id: 1, name: "Successful Moves", value: "300+" },
  { id: 2, name: "Customer Rating", value: "4.9/5" },
  { id: 3, name: "Years Experience", value: "5+" },
  { id: 4, name: "Cities Covered", value: "50+" },
];

export default function TrustBadges() {
  return (
    <div className="bg-primary-dark py-12 border-y border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <dl className="grid grid-cols-2 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mx-auto flex max-w-xs flex-col gap-y-2"
            >
              <dt className="text-sm font-medium tracking-wide uppercase text-white/50">{stat.name}</dt>
              <dd className="order-first text-4xl font-serif text-accent sm:text-5xl mb-2">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </div>
  );
}
