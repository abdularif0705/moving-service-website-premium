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
          <div className="grid grid-cols-3 sm:grid-cols-12 bg-foreground dark:bg-slate-800 text-white p-4 sm:px-8 border-b border-foreground/10 dark:border-white/10">
            <div className="col-span-1 sm:col-span-4 flex items-center pr-2">
              <span className="font-serif font-medium tracking-wide text-white/50 uppercase text-[10px] sm:text-sm">Feature</span>
            </div>
            <div className="col-span-1 sm:col-span-4 flex items-center justify-center sm:justify-start px-1 sm:px-0">
              <span className="font-serif text-[13px] sm:text-2xl text-accent text-center sm:text-left leading-tight">SwiftMove</span>
            </div>
            <div className="col-span-1 sm:col-span-4 flex items-center justify-center sm:justify-start px-1 sm:px-0">
              <span className="font-serif text-[13px] sm:text-xl text-white/60 text-center sm:text-left leading-tight">Other Movers</span>
            </div>
          </div>

          <div className="divide-y divide-foreground/10 dark:divide-white/5 bg-white dark:bg-slate-900">
            {comparisonData.map((item, index) => (
              <div key={index} className="grid grid-cols-3 sm:grid-cols-12 p-3 sm:p-6 sm:px-8 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors items-center gap-2 sm:gap-0">
                <div className="col-span-1 sm:col-span-4 flex items-center pr-2">
                  <span className="font-medium text-xs sm:text-base text-foreground dark:text-stone-200 leading-tight">{item.feature}</span>
                </div>
                
                <div className="col-span-1 sm:col-span-4 flex flex-col sm:flex-row items-center sm:items-start gap-1.5 sm:gap-3 sm:pr-4 text-center sm:text-left">
                  <CheckCircle2 className="text-accent shrink-0 sm:mt-0.5 w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-[10px] sm:text-base text-foreground/80 dark:text-stone-300 font-medium leading-[1.3] sm:leading-snug">{item.us}</span>
                </div>
                
                <div className="col-span-1 sm:col-span-4 flex flex-col sm:flex-row items-center sm:items-start gap-1.5 sm:gap-3 text-center sm:text-left opacity-80 sm:opacity-60">
                  <XCircle className="text-rose-500 shrink-0 sm:mt-0.5 w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-[10px] sm:text-base text-foreground/80 dark:text-stone-400 leading-[1.3] sm:leading-snug">{item.them}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
