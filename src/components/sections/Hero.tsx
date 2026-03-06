"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, MapPin } from "lucide-react";
import { useRef } from "react";
import TextReveal from "../ui/TextReveal";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  // Parallax translation for the background
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative w-full min-h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Background Image - with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0 h-[130%] -top-[15%] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80')",
          y
        }}
      />
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 z-0 bg-primary/70 mix-blend-multiply" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary/50 via-primary/30 to-background/90" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full pt-32 pb-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <div className="flex sm:inline-flex w-full max-w-[280px] sm:w-auto sm:max-w-none items-center justify-center gap-2 sm:gap-3 px-1 sm:px-6 py-2 border border-accent/40 bg-accent/10 text-accent font-medium text-[10.5px] sm:text-xs tracking-[0.1em] sm:tracking-[0.2em] uppercase mb-10 rounded-full shadow-[0_0_15px_rgba(239,161,1,0.15)] backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(239,161,1,0.8)] shrink-0"></span>
            <span className="whitespace-nowrap">Windsor's Reliable Movers</span>
          </div>
          
          <TextReveal 
            text="We Handle the Heavy Lifting." 
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-[1.1] mb-8 uppercase"
            delay={0.1}
          />
          
          <p className="text-lg md:text-xl text-stone-200 mb-12 max-w-2xl font-light leading-relaxed">
            Moving is stressful, but it doesn't have to be. Let our expert team handle the heavy lifting while you enjoy a seamless, worry-free transition. We are committed to providing honest, reliable service—because your peace of mind is our priority.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-20 w-full sm:w-auto">
            <a
              href="#quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-light text-primary px-10 py-4 font-medium tracking-wide transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-accent/20 border border-accent/20 rounded-full"
            >
              Request a Consultation
              <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-transparent border border-white/30 text-white hover:bg-white/10 px-10 py-4 font-medium tracking-wide transition-colors duration-300 rounded-full"
            >
              Explore Services
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-8 sm:gap-12 items-center justify-center text-xs font-semibold text-stone-300 uppercase tracking-[0.15em]">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-accent" size={18} />
              Fully Insured
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-accent" size={18} />
              Guaranteed Precision
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-accent" size={18} />
              Global & Local
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
