import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Copyleft as Box, Truck, ShieldCheck, Users } from "lucide-react";

export const metadata = {
  title: "About Us | SwiftMove",
  description: "Learn about SwiftMove, Windsor's premium white-glove relocation experts.",
};

const values = [
  { icon: ShieldCheck, title: "Uncompromising Integrity", desc: "Honesty in pricing, care in handling, and transparency in every interaction." },
  { icon: Box, title: "Artisanal Packing", desc: "We don't just put things in boxes; we engineer protective environments for your valuables." },
  { icon: Users, title: "Exceptional Personnel", desc: "Our staff are career professionals, extensively vetted, trained, and uniformed." },
  { icon: Truck, title: "Flawless Execution", desc: "Meticulous planning applied to modern, air-ride suspended transport." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-col overflow-hidden bg-foreground/5 dark:bg-background pb-20">
        
        {/* Hero Section */}
        <section className="relative pt-40 pb-24 sm:pt-48 sm:pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-primary">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578505500858-ad232938814b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-2 border border-accent/40 bg-accent/10 text-accent font-medium text-[10px] tracking-[0.2em] uppercase mb-8 rounded-full">
              Our Story
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
              Redefining the <br /><span className="text-accent italic">Moving Experience.</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Founded in Windsor, Ontario, SwiftMove was built on a simple premise: relocation shouldn't be stressful. We brought white-glove concierge standards to an industry that desperately needed them.
            </p>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <div>
                <h2 className="text-3xl sm:text-4xl font-serif text-foreground mb-6">Built on Integrity. Driven by <span className="text-accent italic">Community.</span></h2>
                <div className="space-y-6 text-foreground/70 leading-relaxed text-lg">
                  <p>
                    SwiftMove was founded by Usman Shahzad with a singular vision: to bring honest, reliable, and premium relocation services to the hardworking people of Windsor and Essex County.
                  </p>
                  <p>
                    As a proud member of the Windsor community, Usman saw firsthand how stressful moving could be—often plagued by hidden fees, careless handling, and poor communication. He set out to change that by building a company rooted in absolute transparency and a genuine desire to help his neighbors transition to their new homes seamlessly. 
                  </p>
                  <p>
                    Today, SwiftMove isn't just about transporting boxes; it's about lifting the burden off families and businesses. Under Usman's leadership, every member of our team treats your cherished possessions—and your peace of mind—as our highest priority.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {values.map((val, idx) => (
                  <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-foreground/5 dark:border-white/5 hover:-translate-y-1 transition-transform">
                    <val.icon className="text-accent mb-4" size={32} />
                    <h3 className="font-serif text-xl text-foreground mb-2">{val.title}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
