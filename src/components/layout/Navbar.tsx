"use client";

import { useState, useEffect } from "react";
import { Menu, X, Truck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? "bg-stone-50/95 backdrop-blur-md shadow-sm py-4 text-primary"
          : "bg-transparent py-6 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className={`p-2 rounded-sm border transition-colors duration-300 ${isScrolled ? 'bg-primary text-accent-light border-accent/20 group-hover:bg-accent group-hover:text-primary' : 'bg-white/10 text-accent border-white/20 group-hover:bg-white/20'}`}>
              <Truck size={24} />
            </div>
            <span className="text-2xl font-bold tracking-tight font-serif">
              SwiftMove
            </span>
          </div>

          <nav className="hidden md:flex gap-8 items-center">
            <a href="#services" className="text-sm font-medium hover:opacity-70 transition-opacity">Services</a>
            <a href="#process" className="text-sm font-medium hover:opacity-70 transition-opacity">Process</a>
            <a href="#testimonials" className="text-sm font-medium hover:opacity-70 transition-opacity">Reviews</a>
            <a
              href="#quote"
              className="bg-accent text-primary hover:bg-accent-light px-7 py-2.5 font-medium transition-colors duration-300 tracking-wide"
            >
              Get a Quote
            </a>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-foreground/10 shadow-2xl md:hidden flex flex-col items-center py-6 gap-6 z-50 ring-1 ring-foreground/5"
          >
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-foreground/80 hover:text-foreground">Services</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-foreground/80 hover:text-foreground">Process</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-foreground/80 hover:text-foreground">Reviews</a>
            <a
              href="#quote"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-accent hover:bg-accent-light text-primary px-8 py-3 font-medium tracking-wide w-3/4 text-center transition-colors duration-300"
            >
              Get a Quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
