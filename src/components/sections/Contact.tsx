"use client";

import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="quote" className="py-24 bg-foreground dark:bg-slate-900 text-white relative overflow-hidden">
      {/* Abstract Background Design */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Ready for a smooth move? <br />
              <span className="text-white/70">Let's get started.</span>
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-md leading-relaxed">
              Fill out the form to request your free, no-obligation moving quote. Our team will get back to you within 24 hours.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 text-white/90">
                <div className="bg-white/10 p-3 rounded-full"><Phone className="text-white" /></div>
                <div>
                  <p className="text-sm text-white/50">Call Us 24/7</p>
                  <p className="font-bold text-xl">1-800-555-MOVE</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white/90">
                <div className="bg-white/10 p-3 rounded-full"><Mail className="text-white" /></div>
                <div>
                  <p className="text-sm text-white/50">Email Support</p>
                  <p className="font-bold text-lg">quotes@swiftmove.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white/90">
                <div className="bg-white/10 p-3 rounded-full"><MapPin className="text-white" /></div>
                <div>
                  <p className="text-sm text-white/50">Headquarters</p>
                  <p className="font-bold text-lg">123 Logistics Way, NY 10001</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl relative"
          >
            <div className="absolute -top-4 right-4 sm:-right-4 bg-emerald-500 text-white border border-emerald-400 px-4 py-1 flex p rounded-full font-bold text-sm shadow-lg transform rotate-3 z-10 hover:rotate-0 transition-transform cursor-default">
              Fast Response!
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Request a Free Quote</h3>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/5 dark:bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/5 dark:bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">Moving From (Zip)</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/5 dark:bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="10001"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">Moving To (Zip)</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/5 dark:bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="90210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-2">Move Size</label>
                <select className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/5 dark:bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer">
                  <option>Studio / 1 Bedroom</option>
                  <option>2-3 Bedrooms</option>
                  <option>4+ Bedrooms</option>
                  <option>Commercial / Office</option>
                </select>
              </div>

              <button
                type="button"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                Send Request
                <Send size={20} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
