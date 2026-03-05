"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Loader2, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fromZip: "",
    toZip: "",
    moveSize: "Studio / 1 Bedroom",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (res.ok) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };
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
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Ready for a smooth move? <br />
              <span className="text-accent italic">Let's get started.</span>
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-md leading-relaxed">
              Fill out the form to request your free, no-obligation moving quote. Our team will get back to you within 24 hours.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 text-white/90">
                <div className="bg-white/10 p-3 rounded-full"><Phone className="text-white" /></div>
                <div>
                  <p className="text-sm text-white/50">Call Us 24/7</p>
                  <p className="font-serif text-xl tracking-wide text-accent">1-800-555-MOVE</p>
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
                  <p className="font-bold text-lg">123 Ouellette Ave, Windsor, ON</p>
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
            <div className="absolute -top-5 right-4 sm:-right-6 bg-accent text-primary border border-primary/40 px-6 py-1.5 rounded-full font-bold text-[10px] tracking-[0.25em] uppercase shadow-xl shadow-black/30 transform rotate-3 z-10 hover:rotate-0 hover:-translate-y-1 transition-all duration-300 cursor-default ring-1 ring-white/20 ring-inset">
              Priority Response
            </div>
            <h3 className="text-3xl font-serif text-foreground mb-8 text-center sm:text-left">Request a Consultation</h3>
            
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="text-2xl font-serif text-foreground mb-3">Request Received</h4>
                <p className="text-foreground/70 max-w-sm">
                  Thank you, {formData.firstName}. We've received your details and our premium moving concierge will contact you shortly.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 text-sm font-medium text-accent hover:text-accent-dark transition-colors"
                >
                  Submit another request
                </button>
              </motion.div>
            ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">First Name</label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-foreground/10 bg-foreground/5 dark:bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">Last Name</label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-foreground/10 bg-foreground/5 dark:bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">Moving From (Zip)</label>
                  <input
                    type="text"
                    required
                    value={formData.fromZip}
                    onChange={(e) => setFormData({ ...formData, fromZip: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-foreground/10 bg-foreground/5 dark:bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="N8X 1A1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">Moving To (Zip)</label>
                  <input
                    type="text"
                    required
                    value={formData.toZip}
                    onChange={(e) => setFormData({ ...formData, toZip: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-foreground/10 bg-foreground/5 dark:bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="M5V 2H1"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-2">Move Size</label>
                <select 
                  value={formData.moveSize}
                  onChange={(e) => setFormData({ ...formData, moveSize: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border border-foreground/10 bg-foreground/5 dark:bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer"
                >
                  <option>Studio / 1 Bedroom</option>
                  <option>2-3 Bedrooms</option>
                  <option>4+ Bedrooms</option>
                  <option>Commercial / Office</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent-light disabled:bg-accent/70 disabled:cursor-not-allowed text-primary font-medium tracking-wide py-4 rounded-full shadow-xl hover:shadow-accent/20 transition-all duration-300 flex items-center justify-center gap-3 active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <>Processing <Loader2 size={20} className="animate-spin" /></>
                ) : (
                  <>Send Request <Send size={20} /></>
                )}
              </button>
            </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
