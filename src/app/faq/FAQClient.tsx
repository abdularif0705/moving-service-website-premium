"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { FAQSchema } from "@/components/seo/SchemaOrg";

export default function FAQClient() {
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
      <FAQSchema faqs={faqs} />
      <Navbar />
      <div className="flex-col bg-foreground/5 dark:bg-background pb-24">
        
        {/* Header */}
        <section className="relative pt-40 pb-32 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/services/header.jpg')] bg-cover bg-center opacity-10 mix-blend-luminosity rounded-b-[3rem]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
            <div className="flex w-fit items-center gap-2 px-6 py-2 border border-accent/40 bg-accent/10 text-accent font-medium text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-8 rounded-full shadow-[0_0_15px_rgba(239,161,1,0.15)] backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(239,161,1,0.8)] inline-block"></span>
              Knowledge Base
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-[1.1] mb-6">
              Common <span className="text-accent italic pr-2 -mr-2">Questions.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light">
              Clear, transparent answers regarding our premium moving process, policies, and pricing structures.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="pt-24 pb-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-6">
            <AnimatePresence initial={false}>
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`group bg-white dark:bg-slate-900/50 backdrop-blur-sm border ${isOpen ? 'border-accent/40 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgba(255,255,255,0.03)]' : 'border-foreground/5 dark:border-white/5 hover:border-accent/20'} rounded-[1.5rem] overflow-hidden transition-all duration-500`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full text-left px-8 py-6 md:py-8 flex justify-between items-center bg-transparent gap-6 group-hover:bg-foreground/[0.01] transition-colors duration-300"
                    >
                      <span className={`font-serif text-xl md:text-2xl leading-snug transition-colors duration-300 ${isOpen ? 'text-accent' : 'text-foreground group-hover:text-foreground/80'}`}>
                        {faq.question}
                      </span>
                      <div className={`flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-500 shrink-0 ${isOpen ? 'bg-accent/10 border-accent/30 text-accent' : 'bg-transparent border-foreground/10 text-foreground/40 group-hover:border-accent/30 group-hover:text-accent'}`}>
                        <ChevronDown size={20} className={`transition-transform duration-500 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                      </div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.section
                          key="content"
                          initial="collapsed"
                          animate="open"
                          exit="collapsed"
                          variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 }
                          }}
                          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                          className="overflow-hidden"
                        >
                          <div className="px-8 pb-8 pt-0 text-foreground/70 font-light leading-relaxed text-[16px] md:text-lg border-t border-foreground/5 dark:border-white/5 mx-8 mt-2">
                            <div className="pt-6">
                              {faq.answer}
                            </div>
                          </div>
                        </motion.section>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}
