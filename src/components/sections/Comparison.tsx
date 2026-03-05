"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const comparisonData = [
  {
    feature: "Pricing Model",
    us: "Guaranteed Flat-Rate / Transparent Quotes",
    them: "Hidden Fees & Day-of Upcharges",
  },
  {
    feature: "Crew Professionalism",
    us: "Full-Time, Vetted, Uniformed Experts",
    them: "Temporary Laborers or Contractors",
  },
  {
    feature: "Insurance & Liability",
    us: "Comprehensive Full-Value Protection",
    them: "Minimum Required Legal Liability ($0.60/lb)",
  },
  {
    feature: "Equipment & Trucks",
    us: "Modern Fleet, Air-Ride Suspension",
    them: "Aging Rentals, High Risk of Damage",
  },
  {
    feature: "Packing Materials",
    us: "Premium Protective Padding, Custom Crating",
    them: "Used Boxes, Scant Padding",
  },
];

export default function Comparison() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 relative border-y border-foreground/5 dark:border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-serif tracking-[0.15em] uppercase text-xs font-semibold mb-4"
          >
            The SwiftMove Difference
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-serif text-foreground sm:text-4xl lg:text-5xl leading-tight"
          >
            How We Compare to Average <br /> Windsor Movers
          </motion.h3>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden ring-1 ring-black/[0.03] dark:ring-white/10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.06)] dark:shadow-none"
        >
          <div className="grid grid-cols-12 bg-foreground dark:bg-slate-800 text-white p-6 sm:px-8 border-b border-foreground/10 dark:border-white/10">
            <div className="col-span-12 sm:col-span-4 mb-4 sm:mb-0 hidden sm:block">
              <span className="font-serif font-medium tracking-wide text-white/50 uppercase text-sm">Feature</span>
            </div>
            <div className="col-span-6 sm:col-span-4 flex items-center justify-center sm:justify-start">
              <span className="font-serif text-xl sm:text-2xl text-accent">SwiftMove</span>
            </div>
            <div className="col-span-6 sm:col-span-4 flex items-center justify-center sm:justify-start">
              <span className="font-serif text-lg sm:text-xl text-white/60">Other Movers</span>
            </div>
          </div>

          <div className="divide-y divide-foreground/10 dark:divide-white/5">
            {comparisonData.map((item, index) => (
              <div key={index} className="grid grid-cols-12 p-6 sm:px-8 hover:bg-white/50 dark:hover:bg-white/[0.02] transition-colors">
                <div className="col-span-12 sm:col-span-4 mb-4 sm:mb-0 flex items-center">
                  <span className="font-medium text-foreground dark:text-stone-200">{item.feature}</span>
                </div>
                
                <div className="col-span-6 sm:col-span-4 flex items-start gap-3 sm:pr-4">
                  <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={20} />
                  <span className="text-sm sm:text-base text-foreground/80 dark:text-stone-300 font-medium leading-snug">{item.us}</span>
                </div>
                
                <div className="col-span-6 sm:col-span-4 flex items-start gap-3 opacity-60">
                  <XCircle className="text-rose-500 shrink-0 mt-0.5" size={20} />
                  <span className="text-sm sm:text-base text-foreground/80 dark:text-stone-400 leading-snug">{item.them}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
