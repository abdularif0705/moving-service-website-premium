"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Are you fully insured and licensed?",
      answer: "Yes, Rent-A-Hand is fully licensed and strictly adheres to all provincial regulations. We carry comprehensive full-value protection policies and robust commercial liability insurance. Unlike budget movers, our premium coverage ensures your high-value items, property, and our crew are completely protected throughout the entire relocation process.",
    },
    {
      question: "How do you price your moves? Are there hidden fees?",
      answer: "We strongly believe in absolute transparency. Our pricing is straightforward, typically based on a competitive hourly rate combined with the number of crew members required for your specific job size. Our initial quotes encompass all expected costs. We do not engage in the deceptive industry practice of holding belongings hostage for unagreed-upon 'day-of' fees or stair charges.",
    },
    {
      question: "Do you offer packing services and materials?",
      answer: "Absolutely. We offer an end-to-end white-glove experience. Our vetted professionals can expertly pack your entire home using premium, heavy-duty materials including custom crating for artwork, double-walled boxes for fragile items, and industrial-grade padding for furniture. You literally don't have to lift a finger.",
    },
    {
      question: "How far in advance should I book my move?",
      answer: "To secure our premium service and guarantee your preferred dates, we recommend booking 4 to 6 weeks in advance, particularly during the peak summer season (May to September) and at the end of the month. However, our vast fleet allows us to accommodate short-notice moves depending on immediate availability.",
    },
    {
      question: "Do you handle specialized items like pianos or gym equipment?",
      answer: "Yes, our crews are extensively trained in handling high-value and mechanically complex items. We routinely transport grand pianos, large safes, pool tables, and intricate fitness equipment. These items require specialized structural knowledge and heavy-duty rigging equipment, which our modern fleet carries standard.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="flex-col overflow-hidden bg-foreground/5 dark:bg-background pb-24">
        
        {/* Header */}
        <section className="relative pt-40 pb-20 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542289656-78ab7f8fdfe3?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
              Common <span className="text-accent italic">Questions.</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Clear, transparent answers regarding our premium moving process, policies, and pricing structures.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="pt-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-slate-900 border border-foreground/5 dark:border-white/5 rounded-2xl overflow-hidden shadow-sm hover:border-accent/30 transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center bg-transparent gap-4"
                >
                  <span className="font-serif text-lg font-medium text-foreground leading-snug">
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full border transition-all duration-300 shrink-0 ${openIndex === index ? 'bg-accent/10 border-accent/20 text-accent rotate-180' : 'bg-transparent border-foreground/10 text-foreground/50'}`}>
                    {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-foreground/70 leading-relaxed text-[15px] border-t border-foreground/5 dark:border-white/5 mx-6 mt-1">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
