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
          ? "bg-background/95 backdrop-blur-md border-b border-foreground/10 shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="bg-primary text-white p-2 rounded-lg">
              <Truck size={24} />
            </div>
            <span className="text-2xl font-bold tracking-tight text-primary-dark dark:text-white">
              Swift<span className="text-accent">Move</span>
            </span>
          </div>

          <nav className="hidden md:flex gap-8 items-center">
            <a href="#services" className="text-sm font-medium hover:text-accent transition-colors">Services</a>
            <a href="#process" className="text-sm font-medium hover:text-accent transition-colors">Process</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-accent transition-colors">Reviews</a>
            <a
              href="#quote"
              className="bg-accent hover:bg-accent-dark text-white px-5 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-accent/50 active:scale-95"
            >
              Get a Quote
            </a>
          </nav>

          <button
            className="md:hidden p-2 text-foreground"
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
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Services</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Process</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Reviews</a>
            <a
              href="#quote"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-accent text-white px-8 py-3 rounded-full font-bold shadow-lg"
            >
              Get a Quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
