import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MapPin, Navigation, Building, Home, Map, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Areas We Serve | Windsor-Essex & Ontario Moving",
  description: "Rent-A-Hand provides elite relocation services across Windsor, LaSalle, Tecumseh, Lakeshore, Amherstburg, and long-distance throughout Ontario.",
};

const locations = [
  "Windsor", "LaSalle", "Tecumseh", "Lakeshore", 
  "Amherstburg", "Leamington", "Kingsville", "Essex"
];

export default function LocationsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-col overflow-hidden bg-foreground/5 dark:bg-background pb-0">
        
        {/* Header */}
        <section className="relative pt-40 pb-32 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549646401-419b4fcb5e82?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-2 border border-accent/40 bg-accent/10 text-accent font-medium text-[10px] tracking-[0.2em] uppercase mb-8 rounded-full">
              Local & Beyond
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
              Coverage <span className="text-accent italic">Areas.</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Rooted in Windsor, scaling across Ontario. We bring our signature premium moving methodologies to every corner of Essex County and beyond.
            </p>
          </div>
        </section>

        {/* Windsor Core Focus */}
        <section className="py-24 bg-white dark:bg-slate-950 border-y border-foreground/5 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-accent/10 rounded-2xl">
                    <Building className="text-accent" size={28} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif text-foreground">Windsor Moving Specialists</h2>
                </div>
                <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                  As our home base, nobody knows the complexities of moving within Windsor better than Rent-A-Hand. From navigating the tight corridors of downtown high-rises and historic Walkerville homes, to executing seamless transitions into South Windsor suburbs, our local expertise is unparalleled.
                </p>
                <p className="text-foreground/70 text-lg leading-relaxed mb-8">
                  We understand local building regulations, optimal parking strategies for large fleet vehicles, and the fastest routes to ensure your move is completely efficient.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-foreground/5 dark:bg-white/5 rounded-full text-sm font-medium text-foreground">Downtown Windsor</span>
                  <span className="px-4 py-2 bg-foreground/5 dark:bg-white/5 rounded-full text-sm font-medium text-foreground">South Windsor</span>
                  <span className="px-4 py-2 bg-foreground/5 dark:bg-white/5 rounded-full text-sm font-medium text-foreground">Walkerville</span>
                  <span className="px-4 py-2 bg-foreground/5 dark:bg-white/5 rounded-full text-sm font-medium text-foreground">Riverside</span>
                </div>
              </div>
              
              <div className="relative h-[400px] lg:h-[500px] rounded-[2rem] overflow-hidden shadow-xl border border-foreground/5 dark:border-white/5">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542289656-78ab7f8fdfe3?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Essex County Breakdown */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -mr-96 -mt-96"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex justify-center items-center mb-6">
                <Home className="text-accent" size={40} />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">Serving All of Essex County</h2>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Our premium fleet is constantly active throughout the county. Whether you are moving into a sprawling estate in LaSalle, a waterfront property in Lakeshore, or a serene rural home in Kingsville, we have the logistical capacity to execute flawlessly.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {locations.map((city, idx) => (
                <div key={idx} className="group flex flex-col items-center justify-center p-8 rounded-3xl bg-white dark:bg-slate-900 shadow-sm border border-foreground/5 dark:border-white/5 hover:border-accent/40 hover:shadow-xl hover:-translate-y-1 transition-all">
                  <MapPin size={24} className="text-foreground/30 group-hover:text-accent mb-4 transition-colors" />
                  <span className="font-serif text-xl text-foreground font-medium">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Long Distance Section */}
        <section className="py-24 bg-white dark:bg-slate-950 border-t border-foreground/5 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary rounded-[3rem] overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://torontopromovingandstorage.ca/wp-content/uploads/Moving-Company-Toronto-Starting-New-Adventure.jpg')] bg-cover bg-center opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent"></div>
              
              <div className="relative z-10 p-10 md:p-16 lg:p-20 lg:w-2/3">
                <div className="flex items-center gap-4 mb-6">
                  <Map className="text-accent" size={32} />
                  <h2 className="text-3xl md:text-4xl font-serif text-white">Long Distance Relocations</h2>
                </div>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  Leaving Windsor? We offer fully dedicated, high-security long distance transport across Ontario and neighboring provinces. Unlike massive van lines that consolidate your belongings with other families or sub-contract drivers, your items stay on our truck, driven by our full-time crew, straight to your new destination.
                </p>
                <ul className="space-y-4 mb-10 text-white/90">
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-accent"></div> Guaranteed Delivery Windows</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-accent"></div> No Cargo Mixing or Cross-Docking</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-accent"></div> GPS En-Route Tracking</li>
                </ul>
                <a href="/#quote" className="inline-flex items-center gap-3 bg-white text-primary hover:bg-stone-100 px-8 py-4 rounded-full font-bold transition-colors">
                  Plan Your Long Distance Move
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
