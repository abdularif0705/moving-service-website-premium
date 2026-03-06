"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Navbar({ transparentTextColor = "white" }: { transparentTextColor?: "white" | "dark" }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll(); // Initialize state immediately on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-stone-50/95 backdrop-blur-md shadow-sm py-4 text-primary"
            : `bg-transparent py-6 ${transparentTextColor === 'white' ? 'text-white' : 'text-primary dark:text-white'}`
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link 
              href="/" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="bg-transparent rounded-xl px-0 py-1.5 transition-transform duration-300 group-hover:scale-[1.02]">
                <Image 
                  src="/logo_transparent.png" 
                  alt="Rent-A-Hand Logo" 
                  width={160} 
                  height={50} 
                  className="w-auto h-12 sm:h-16 object-contain drop-shadow-md"
                  priority
                />
              </div>
            </Link>

            <nav className="hidden md:flex gap-8 items-center">
              <Link href="/about" className="text-sm font-medium hover:opacity-70 transition-opacity">About</Link>
              <Link href="/services" className="text-sm font-medium hover:opacity-70 transition-opacity">Services</Link>
              <Link href="/locations" className="text-sm font-medium hover:opacity-70 transition-opacity">Locations</Link>
              <Link href="/gallery" className="text-sm font-medium hover:opacity-70 transition-opacity">Gallery</Link>
              <Link href="/faq" className="text-sm font-medium hover:opacity-70 transition-opacity">FAQ</Link>
              <Link
                href="/#quote"
                className="bg-accent text-primary hover:bg-accent-light px-7 py-2.5 font-medium transition-colors duration-300 tracking-wide rounded-full shadow-md"
              >
                Get a Quote
              </Link>
            </nav>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-[100dvh] w-[80%] max-w-[400px] bg-white dark:bg-stone-900 shadow-2xl md:hidden flex flex-col pt-6 pb-8 px-6 z-[60] border-l border-stone-200 dark:border-stone-800 overflow-y-auto"
            >
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700 dark:hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex flex-col gap-6">
                <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium text-stone-800 dark:text-stone-200 hover:text-accent transition-colors border-b border-stone-100 dark:border-stone-800 pb-4">About</Link>
                <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium text-stone-800 dark:text-stone-200 hover:text-accent transition-colors border-b border-stone-100 dark:border-stone-800 pb-4">Services</Link>
                <Link href="/locations" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium text-stone-800 dark:text-stone-200 hover:text-accent transition-colors border-b border-stone-100 dark:border-stone-800 pb-4">Locations</Link>
                <Link href="/gallery" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium text-stone-800 dark:text-stone-200 hover:text-accent transition-colors border-b border-stone-100 dark:border-stone-800 pb-4">Gallery</Link>
                <Link href="/faq" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium text-stone-800 dark:text-stone-200 hover:text-accent transition-colors border-b border-stone-100 dark:border-stone-800 pb-4">FAQ</Link>
              </div>
              
              <div className="mt-auto pt-8 pb-12">
                <Link
                  href="/#quote"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full bg-accent hover:bg-accent-light text-primary py-4 font-semibold tracking-wide text-center transition-colors duration-300 rounded-xl shadow-md text-lg"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
