"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, MapPin, Truck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-20 md:pt-56 md:pb-32 overflow-hidden w-full max-w-[100vw] min-h-[90vh] flex items-center">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10 -z-10" />
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-accent/20 blur-[100px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-semibold text-sm mb-8 mt-4 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Top-Rated Movers Nationwide
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-foreground">
              Moving made <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">effortless.</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-xl leading-relaxed">
              Experience a seamless, stress-free transition to your new home. 
              Professional packing, safe transport, and absolute peace of mind.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-2 bg-foreground hover:bg-foreground/90 text-background px-8 py-4 rounded-full font-bold text-lg transition-all shadow-2xl shadow-foreground/10 hover:shadow-foreground/20 group active:scale-95"
              >
                Get Your Free Quote
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-white dark:bg-white/5 border border-foreground/10 hover:border-foreground/20 dark:hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg transition-all active:scale-95"
              >
                Our Services
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 items-center text-sm font-semibold text-foreground/80">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-emerald-500" size={20} />
                Fully Insured
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-emerald-500" size={20} />
                On-Time Guarantee
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-emerald-500" size={20} />
                Local & Long Distance
              </div>
            </div>
          </motion.div>

          {/* Graphic/Image Area - Placeholder using abstract shapes for ultra-modern look */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block h-[600px] w-full"
          >
            <div className="absolute inset-0 glass-panel rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
              <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/10 to-transparent" />
              {/* Decorative premium elements mapping to 'moving' visually without generic stock photos */}
              <div className="absolute bottom-10 -left-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl mix-blend-multiply" />
              <div className="absolute top-20 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl mix-blend-multiply" />
              
              <div className="flex items-center justify-center h-full relative z-10">
                 {/* 3D-like Box Illustration via CSS */}
                 <div className="relative w-64 h-64 ease-in-out">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-56 h-56 bg-foreground text-background rounded-[2rem] shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:shadow-emerald-500/20 flex items-center justify-center border border-white/10 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <Truck size={84} className="drop-shadow-md z-10" />
                      </div>
                    </div>
                    {/* Floating elements */}
                    <motion.div 
                      animate={{ y: [0, -15, 0] }} 
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-0 right-0 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-2xl border border-foreground/10 flex items-center gap-3"
                    >
                      <div className="bg-emerald-500/10 text-emerald-500 p-2 rounded-full"><ShieldCheck size={20}/></div>
                      <div>
                        <p className="text-xs text-foreground/80 font-medium">Status</p>
                        <p className="text-sm font-bold">Safely In Transit</p>
                      </div>
                    </motion.div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
