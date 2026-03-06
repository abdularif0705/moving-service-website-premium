"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Phone, Mail, MapPin, Loader2, Check } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSecurityModal, setShowSecurityModal] = useState(false);
  const [formLoadTime, setFormLoadTime] = useState<number>(0);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  useEffect(() => {
    setFormLoadTime(Date.now());
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    fromZip: "",
    toZip: "",
    moveSize: "Studio / 1 Bedroom",
    moveDate: "",
  });

  // Automatically formats postal codes like 'n8x1a1' into 'N8X 1A1'
  const formatPostalCode = (value: string) => {
    // Remove all non-alphanumeric characters, convert to upper
    const cleaned = value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
    if (cleaned.length > 3) {
      return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)}`;
    }
    return cleaned;
  };

  const validateForm = () => {
    const newErrors = [];

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.push("Please enter a valid email address.");
    }

    // Phone validation (strip non-digits and check if at least 10)
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      newErrors.push("Please enter a valid 10-digit phone number.");
    }

    // Canadian Postal Code validation (A1A 1A1)
    const postalRegex = /^[A-Z]\d[A-Z]\s?\d[A-Z]\d$/i;
    // Allow standard inputs but validate length / pattern
    if (!postalRegex.test(formData.fromZip.replace(/\s/g, ''))) {
      if (formData.fromZip.length < 5) newErrors.push("'Moving From' must be a valid zip or postal code.");
    }
    if (!postalRegex.test(formData.toZip.replace(/\s/g, ''))) {
      if (formData.toZip.length < 5) newErrors.push("'Moving To' must be a valid zip or postal code.");
    }

    if (!formData.moveDate) {
      newErrors.push("Please select a target move date.");
    }

    // Security check: Timing validation (>3 seconds)
    const timeSpent = Date.now() - formLoadTime;
    if (timeSpent < 3000) {
      newErrors.push("Please take a moment to fill out the form completely.");
    }

    if (newErrors.length > 0) {
      setError(newErrors.join('\n'));
      return false;
    }
    
    setError(null);
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    // Open the security modal instead of submitting directly
    setShowSecurityModal(true);
  };

  const submitToAPI = async (token: string) => {
    setIsSubmitting(true);
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          recaptchaToken: token
        }),
      });
      
      if (res.ok) {
        setIsSuccess(true);
      } else {
        const errorData = await res.json();
        setError(errorData.error || "Something went wrong sending your quote. Please call us directly.");
        setShowSecurityModal(false);
      }
    } catch (error) {
      console.error(error);
      setError("An unexpected network error occurred. Please try again.");
      setShowSecurityModal(false);
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
              <span className="text-accent italic pr-2">Let's</span> <span className="text-accent italic pr-2">get</span> <span className="text-accent italic pr-2">started.</span>
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-md leading-relaxed">
              Fill out the form to request your free, no-obligation moving quote. Our team will get back to you within 24 hours.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 text-white/90">
                <a href="tel:5199809577" aria-label="Call Us" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
                  <Phone className="text-white" />
                </a>
                <div>
                  <p className="text-sm text-white/50">Call Us 24/7</p>
                  <a href="tel:5199809577" className="font-serif text-xl tracking-wide text-accent hover:text-white transition-colors block">
                    519-980-9577
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white/90">
                <a href="mailto:rentahandwindsor@gmail.com" aria-label="Email Us" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
                  <Mail className="text-white" />
                </a>
                <div>
                  <p className="text-sm text-white/50">Email Support</p>
                  <a href="mailto:rentahandwindsor@gmail.com" className="font-bold text-lg hover:text-accent transition-colors block">
                    rentahandwindsor@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white/90">
                {/* <a href="https://maps.app.goo.gl/h6U3V5ZgovVwWPwE9" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"> */}
                <div className="bg-white/10 p-3 rounded-full">
                  <MapPin className="text-white" />
                </div>
                {/* </a> */}
                <div>
                  <p className="text-sm text-white/50">Headquarters</p>
                  {/* <a href="https://maps.app.goo.gl/h6U3V5ZgovVwWPwE9" target="_blank" rel="noopener noreferrer" className="font-bold text-lg hover:text-accent transition-colors block"> */}
                  <p className="font-bold text-lg block">
                    Windsor, Ontario
                  </p>
                  {/* </a> */}
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
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              
              {/* Error Message Display */}
              {error && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-xl text-sm font-medium border border-red-200 dark:border-red-800/50 flex items-start gap-3"
                >
                  <div className="mt-0.5 whitespace-pre-line">{error}</div>
                </motion.div>
              )}

              <input type="hidden" id="formLoadTime" value={formLoadTime} />

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">First Name</label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => {
                      setError(null);
                      setFormData({ ...formData, firstName: e.target.value })
                    }}
                    className="w-full px-4 py-3 rounded-2xl border border-foreground/10 bg-foreground/5 dark:bg-background text-foreground focus:outline-none hover:border-accent/50 focus:ring-0 focus:border-accent focus:shadow-[0_0_15px_rgba(239,161,1,0.2)] transition-all duration-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">Last Name</label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => {
                      setError(null);
                      setFormData({ ...formData, lastName: e.target.value })
                    }}
                    className="w-full px-4 py-3 rounded-2xl border border-foreground/10 bg-foreground/5 dark:bg-background text-foreground focus:outline-none hover:border-accent/50 focus:ring-0 focus:border-accent focus:shadow-[0_0_15px_rgba(239,161,1,0.2)] transition-all duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => {
                      setError(null);
                      setFormData({ ...formData, phone: e.target.value })
                    }}
                    className="w-full px-4 py-3 rounded-2xl border border-foreground/10 bg-foreground/5 dark:bg-background text-foreground focus:outline-none hover:border-accent/50 focus:ring-0 focus:border-accent focus:shadow-[0_0_15px_rgba(239,161,1,0.2)] transition-all duration-300"
                    placeholder="(519) 555-0123"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setError(null);
                      setFormData({ ...formData, email: e.target.value })
                    }}
                    className="w-full px-4 py-3 rounded-2xl border border-foreground/10 bg-foreground/5 dark:bg-background text-foreground focus:outline-none hover:border-accent/50 focus:ring-0 focus:border-accent focus:shadow-[0_0_15px_rgba(239,161,1,0.2)] transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">Moving From (Zip)</label>
                  <input
                    type="text"
                    required
                    maxLength={7}
                    value={formData.fromZip}
                    onChange={(e) => {
                      setError(null);
                      setFormData({ ...formData, fromZip: formatPostalCode(e.target.value) })
                    }}
                    className="w-full px-4 py-3 rounded-2xl border border-foreground/10 bg-foreground/5 dark:bg-background text-foreground focus:outline-none hover:border-accent/50 focus:ring-0 focus:border-accent focus:shadow-[0_0_15px_rgba(239,161,1,0.2)] transition-all duration-300 uppercase"
                    placeholder="N8X 1A1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">Moving To (Zip)</label>
                  <input
                    type="text"
                    required
                    maxLength={7}
                    value={formData.toZip}
                    onChange={(e) => {
                      setError(null);
                      setFormData({ ...formData, toZip: formatPostalCode(e.target.value) })
                    }}
                    className="w-full px-4 py-3 rounded-2xl border border-foreground/10 bg-foreground/5 dark:bg-background text-foreground focus:outline-none hover:border-accent/50 focus:ring-0 focus:border-accent focus:shadow-[0_0_15px_rgba(239,161,1,0.2)] transition-all duration-300 uppercase"
                    placeholder="M5V 2H1"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 w-full max-w-full">
                <div className="w-full max-w-full">
                  <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">Target Move Date</label>
                  <input
                    type="date"
                    required
                    value={formData.moveDate}
                    onChange={(e) => {
                      setError(null);
                      setFormData({ ...formData, moveDate: e.target.value })
                    }}
                    className="flex w-full min-w-0 px-4 py-3 rounded-2xl border border-foreground/10 bg-foreground/5 dark:bg-background text-foreground focus:outline-none hover:border-accent/50 focus:ring-0 focus:border-accent focus:shadow-[0_0_15px_rgba(239,161,1,0.2)] transition-all duration-300 cursor-pointer"
                    style={{ WebkitAppearance: 'none', width: '100%' }}
                  />
                </div>
                <div className="w-full max-w-full">
                  <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">Move Size</label>
                  <select 
                    value={formData.moveSize}
                    onChange={(e) => setFormData({ ...formData, moveSize: e.target.value })}
                    className="flex w-full min-w-0 px-4 py-3 rounded-2xl border border-foreground/10 bg-foreground/5 dark:bg-background text-foreground focus:outline-none hover:border-accent/50 focus:ring-0 focus:border-accent focus:shadow-[0_0_15px_rgba(239,161,1,0.2)] transition-all duration-300 appearance-none cursor-pointer"
                    style={{ width: '100%' }}
                  >
                    <option>Studio / 1 Bedroom</option>
                    <option>2-3 Bedrooms</option>
                    <option>4+ Bedrooms</option>
                    <option>Commercial / Office</option>
                  </select>
                </div>
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
          </motion.div>

        </div>
      </div>

      {/* Security/reCAPTCHA & Success Modal Overlay */}
      <AnimatePresence>
        {showSecurityModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
             {/* Backdrop */}
             <motion.div 
               initial={{opacity: 0}} 
               animate={{opacity: 1}} 
               exit={{opacity: 0}} 
               className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" 
               onClick={() => {
                 if (!isSubmitting && !isSuccess) setShowSecurityModal(false);
               }} 
             />
             
             {/* Modal Content */}
             <motion.div 
               initial={{opacity: 0, scale: 0.95, y: 20}} 
               animate={{opacity: 1, scale: 1, y: 0}} 
               exit={{opacity: 0, scale: 0.95, y: 20}} 
               className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl max-w-md w-full text-center border border-white/10"
             >
               {!isSuccess && !isSubmitting && (
                 <>
                   <h3 className="text-2xl font-bold mb-2 text-foreground">One Last Step</h3>
                   <p className="text-foreground/70 mb-8">Please confirm you are human to send your request.</p>
                   <div className="flex justify-center mb-8 overflow-hidden rounded-xl">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                        onChange={(token) => {
                          if (token) submitToAPI(token);
                        }}
                      />
                   </div>
                   <button 
                     onClick={() => setShowSecurityModal(false)} 
                     className="text-foreground/60 hover:text-foreground font-medium pb-1 border-b border-transparent hover:border-foreground/30 transition-all"
                   >
                     Cancel
                   </button>
                 </>
               )}

               {isSubmitting && (
                 <div className="py-12 flex flex-col items-center">
                   <Loader2 size={48} className="animate-spin text-accent mb-6" />
                   <p className="font-medium text-foreground text-lg">Sending your request...</p>
                 </div>
               )}

               {isSuccess && (
                  <div className="py-6">
                    <div className="success-checkmark mx-auto">
                       <Check strokeWidth={3} />
                    </div>
                    <h3 className="success-title">Message Sent!</h3>
                    <p className="success-message">Thank you for reaching out.<br />We'll get back to you within 24 hours.</p>
                    <button 
                      onClick={() => {
                        setShowSecurityModal(false);
                        setIsSuccess(false);
                        setFormLoadTime(Date.now());
                        setFormData({
                          firstName: "",
                          lastName: "",
                          phone: "",
                          email: "",
                          fromZip: "",
                          toZip: "",
                          moveSize: "Studio / 1 Bedroom",
                          moveDate: "",
                        });
                      }}
                      className="mt-6 bg-accent hover:bg-accent-light text-primary font-bold tracking-wide py-3 px-10 rounded-full shadow-lg hover:shadow-accent/20 transition-all active:scale-[0.98]"
                    >
                      Done
                    </button>
                  </div>
               )}
             </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
