import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Briefcase, GraduationCap, HeartHandshake } from "lucide-react";

export const metadata = {
  title: "Careers | SwiftMove",
  description: "Join the SwiftMove team. We are hiring professional movers and logistics experts in Windsor, ON.",
};

const openRoles = [
  {
    title: "Lead Relocation Specialist",
    type: "Full-Time",
    location: "Windsor, ON",
    desc: "Seeking an experienced crew leader to manage high-end residential moves and oversee packing teams.",
  },
  {
    title: "White-Glove Packer",
    type: "Full-Time / Part-Time",
    location: "Windsor, ON",
    desc: "Detail-oriented individuals to securely pack fragile, high-value art, antiques, and electronics.",
  },
  {
    title: "Class DZ Driver",
    type: "Full-Time",
    location: "Windsor, ON / Ontario-wide",
    desc: "Experienced drivers for our modern fleet. Clean abstract required. Customer service skills are a must.",
  },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="flex-col overflow-hidden bg-foreground/5 dark:bg-background pb-20">
        
        {/* Header */}
        <div className="bg-primary pt-40 pb-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <div className="max-w-3xl mx-auto px-4 relative z-10">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-accent/40 bg-accent/10 text-accent font-medium text-[10px] tracking-[0.2em] uppercase mb-6 rounded-full">
              Join The Elite
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Build a Career in <span className="text-accent italic">Premium Logistics.</span></h1>
            <p className="text-lg text-white/80 font-light">
              We aren't looking for day-laborers. We are looking for career-minded professionals who take pride in delivering a flawless customer experience.
            </p>
          </div>
        </div>

        {/* Why Join Us */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-foreground/5">
              <Briefcase className="text-accent mb-6" size={36} />
              <h3 className="text-xl font-serif text-foreground mb-3">Above-Market Pay</h3>
              <p className="text-foreground/70">We believe premium service starts with premium compensation. We offer competitive salaries, bonuses, and full benefits.</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-foreground/5">
              <GraduationCap className="text-accent mb-6" size={36} />
              <h3 className="text-xl font-serif text-foreground mb-3">Extensive Training</h3>
              <p className="text-foreground/70">From specialized packing techniques to customer service protocols, we invest heavily in your professional growth.</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-foreground/5">
              <HeartHandshake className="text-accent mb-6" size={36} />
              <h3 className="text-xl font-serif text-foreground mb-3">Culture of Respect</h3>
              <p className="text-foreground/70">Our team is a family. We respect our crew, we respect our clients, and we maintain a safe, modern, and supportive work environment.</p>
            </div>
          </div>

          {/* Open Roles */}
          <div>
            <h2 className="text-3xl font-serif text-foreground mb-10 text-center">Open Positions</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              {openRoles.map((role, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-foreground/5 dark:border-white/5 shadow-sm hover:shadow-xl transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-6 group">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-serif text-foreground">{role.title}</h3>
                      <span className="bg-primary/5 dark:bg-white/5 text-primary dark:text-stone-300 text-xs font-semibold px-3 py-1 rounded-full">{role.type}</span>
                    </div>
                    <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">{role.location}</p>
                    <p className="text-foreground/70">{role.desc}</p>
                  </div>
                  <button className="shrink-0 bg-foreground dark:bg-white text-background dark:text-foreground hover:bg-accent hover:text-primary transition-colors px-6 py-3 rounded-full font-medium inline-flex items-center justify-center gap-2 group-hover:scale-105 duration-300">
                    Apply Now <ArrowRight size={16} />
                  </button>
                </div>
              ))}
            </div>
            <div className="text-center mt-12 text-foreground/60">
              Don't see a fit? Send your resume to <a href="mailto:careers@swiftmove.com" className="text-accent font-medium hover:underline">careers@swiftmove.com</a>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
