"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Calendar } from "lucide-react";

export default function FloatingCTA() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  // Show the CTA only after scrolling past the initial hero section
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : 50,
        pointerEvents: isVisible ? "auto" : "none" 
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-50 md:bottom-10 md:right-10"
    >
      <a 
        href="/#quote"
        className="group relative flex items-center justify-center bg-foreground hover:bg-stone-800 text-accent border border-accent/20 h-14 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)] hover:-translate-y-1 overflow-hidden pointer-events-auto"
      >
        <div className="flex items-center justify-center px-4 w-14 h-14 shrink-0 transition-transform duration-300 group-hover:scale-110">
          <Calendar className="w-6 h-6 text-accent" />
        </div>
        <div className="flex items-center overflow-hidden transition-all duration-300 max-w-0 group-hover:max-w-[200px] opacity-0 group-hover:opacity-100 pr-0 group-hover:pr-6 whitespace-nowrap">
          <span className="font-sans font-medium tracking-wide">Book a Consultation</span>
        </div>
        <span className="absolute inset-0 rounded-full bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></span>
      </a>
    </motion.div>
  );
}
