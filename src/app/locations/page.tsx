import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MapPin, Navigation, Building, Home, Map, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Areas We Serve | Windsor-Essex & Ontario Moving",
  description: "Rent-A-Hand provides elite relocation services across Windsor, LaSalle, Tecumseh, Lakeshore, Amherstburg, and long-distance throughout Ontario.",
  alternates: {
    canonical: "https://rentahandwindsor.ca/locations",
  },
  openGraph: {
    title: "Areas We Serve | Windsor-Essex & Ontario Moving",
    description: "Rent-A-Hand provides elite relocation services across Windsor, LaSalle, Tecumseh, Lakeshore, Amherstburg, and long-distance throughout Ontario.",
    url: "https://rentahandwindsor.ca/locations",
  },
};

const locations = [
  "Windsor", "LaSalle", "Tecumseh", "Lakeshore", 
  "Amherstburg", "Leamington", "Kingsville", "Essex"
];

export default function LocationsPage() {
  return (
    <>
      <Navbar />
      <div className="flex-col bg-foreground/5 dark:bg-background pb-0">
        
        {/* Header */}
        <section className="relative pt-40 pb-32 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/services/header.jpg')] bg-cover bg-center opacity-10 mix-blend-luminosity rounded-b-[3rem]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
            <div className="flex w-fit items-center gap-2 px-6 py-2 border border-accent/40 bg-accent/10 text-accent font-medium text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-8 rounded-full shadow-[0_0_15px_rgba(239,161,1,0.15)] backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(239,161,1,0.8)] inline-block"></span>
              Local & Beyond
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-[1.1] mb-6">
              Coverage <span className="text-accent italic pr-2">Areas.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light">
              Rooted in Windsor, scaling across Ontario. We bring our signature premium moving methodologies to every corner of Essex County and beyond.
            </p>
          </div>
        </section>

        {/* Windsor Core Focus */}
        <section className="py-24 md:py-32 bg-white dark:bg-slate-950 border-y border-foreground/5 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-accent/10 rounded-2xl flex-shrink-0">
                    <Building className="text-accent" size={28} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight">Windsor Moving Specialists</h2>
                </div>
                <p className="text-foreground/70 text-lg md:text-xl font-light leading-relaxed mb-6">
                  As our home base, nobody knows the complexities of moving within Windsor better than Rent-A-Hand. From navigating the tight corridors of downtown high-rises and historic Walkerville homes, to executing seamless transitions into South Windsor suburbs, our local expertise is unparalleled.
                </p>
                <p className="text-foreground/70 text-lg md:text-xl font-light leading-relaxed mb-8">
                  We understand local building regulations, optimal parking strategies for large fleet vehicles, and the fastest routes to ensure your move is completely efficient.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <span className="px-5 py-2.5 bg-white dark:bg-slate-900 border border-foreground/10 dark:border-white/10 rounded-full text-sm font-medium text-foreground/80 shadow-sm hover:shadow-md hover:border-accent/40 hover:-translate-y-0.5 transition-all cursor-default">Downtown Windsor</span>
                  <span className="px-5 py-2.5 bg-white dark:bg-slate-900 border border-foreground/10 dark:border-white/10 rounded-full text-sm font-medium text-foreground/80 shadow-sm hover:shadow-md hover:border-accent/40 hover:-translate-y-0.5 transition-all cursor-default">South Windsor</span>
                  <span className="px-5 py-2.5 bg-white dark:bg-slate-900 border border-foreground/10 dark:border-white/10 rounded-full text-sm font-medium text-foreground/80 shadow-sm hover:shadow-md hover:border-accent/40 hover:-translate-y-0.5 transition-all cursor-default">Walkerville</span>
                  <span className="px-5 py-2.5 bg-white dark:bg-slate-900 border border-foreground/10 dark:border-white/10 rounded-full text-sm font-medium text-foreground/80 shadow-sm hover:shadow-md hover:border-accent/40 hover:-translate-y-0.5 transition-all cursor-default">Riverside</span>
                </div>
              </div>
              
              <div className="relative h-[400px] lg:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border border-foreground/5 dark:border-white/5 group">
                <div className="absolute inset-0 bg-[url('/images/gallery/picture1_branded.png')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Essex County Breakdown */}
        <section className="py-24 md:py-32 relative overflow-hidden bg-foreground/[0.02] dark:bg-background">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -mr-96 -mt-96"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none -ml-64 -mb-64"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
              <div className="inline-flex justify-center items-center mb-6 p-4 bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-foreground/5 dark:border-white/5">
                <Home className="text-accent" size={36} />
              </div>
              <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">Serving All of Essex County</h2>
              <p className="text-foreground/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
                Our premium fleet is constantly active throughout the county. Whether you are moving into a sprawling estate in LaSalle, a waterfront property in Lakeshore, or a serene rural home in Kingsville, we have the logistical capacity to execute flawlessly.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {locations.map((city, idx) => (
                <div key={idx} className="group flex flex-col items-center justify-center p-8 rounded-[2rem] bg-white dark:bg-slate-900/50 backdrop-blur-sm shadow-sm border border-foreground/5 dark:border-white/5 hover:border-accent/50 hover:shadow-[0_8px_30px_rgba(202,160,82,0.15)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                  <MapPin size={28} className="text-foreground/30 group-hover:text-accent mb-4 transition-all duration-300 group-hover:scale-110 relative z-10" />
                  <span className="font-serif text-xl text-foreground font-medium relative z-10 transition-colors duration-300 group-hover:text-accent">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Long Distance Section */}
        <section className="py-24 md:py-32 bg-white dark:bg-slate-950 border-t border-foreground/5 dark:border-white/5 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary rounded-[2.5rem] overflow-hidden relative shadow-2xl group">
              <div className="absolute inset-0 bg-[url('/images/gallery/picture4_branded.png')] bg-cover bg-center opacity-20 transition-transform duration-1000 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/40 md:to-transparent pointer-events-none"></div>
              
              <div className="relative z-10 p-10 md:p-16 lg:p-20 lg:w-2/3">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-accent/20 rounded-2xl flex-shrink-0 backdrop-blur-sm">
                    <Map className="text-accent" size={32} />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-serif text-white tracking-wide">Long Distance Relocations</h2>
                </div>
                <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed mb-8">
                  Leaving Windsor? We offer fully dedicated, high-security long distance transport across Ontario and neighboring provinces. Unlike massive van lines that consolidate your belongings with other families or sub-contract drivers, your items stay on our truck, driven by our full-time crew, straight to your new destination.
                </p>
                <ul className="space-y-4 mb-12 text-white/90 font-medium">
                  <li className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-accent/20 text-accent"><ArrowRight size={12} /></div>
                    Guaranteed Delivery Windows
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-accent/20 text-accent"><ArrowRight size={12} /></div>
                    No Cargo Mixing or Cross-Docking
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-accent/20 text-accent"><ArrowRight size={12} /></div>
                    GPS En-Route Tracking
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <a href="/#quote" className="group/btn inline-flex items-center justify-center gap-2 bg-accent text-primary hover:bg-white hover:text-primary px-8 py-3.5 rounded-full font-medium text-base transition-all duration-300 transform shadow-lg hover:shadow-[0_0_20px_rgba(255,183,3,0.3)] hover:-translate-y-0.5 whitespace-nowrap">
                    Plan Your Move
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}
