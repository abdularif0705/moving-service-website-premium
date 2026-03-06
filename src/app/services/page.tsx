import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { Truck, Box, Wrench, Dumbbell, Trash2, Building2, Sparkles, Hammer, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Premium Moving Services | Rent-A-Hand Windsor",
  description: "Comprehensive moving services in Windsor-Essex. From local and long-distance transport to single item moves, expert packing, and furniture assembly.",
};

const detailedServices = [
  {
    title: "Local & Long Distance Moving",
    subtitle: "Flawless Transport Across the Street or Across the Country",
    description: "Experience a seamless, stress-free transition with our premium transport service. We handle the intense logistics, route planning, and heavy lifting so you don't have to.",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Rigorous route planning to minimize transit time",
      "Air-ride suspended trucks for maximum cargo safety",
      "Comprehensive Full-Value Protection insurance",
      "GPS tracking and dedicated move coordination"
    ],
    reverse: false
  },
  {
    title: "Commercial & Office Relocation",
    subtitle: "Minimizing Operational Downtime",
    description: "Relocating a business requires extreme precision. We coordinate highly efficient, after-hours office moves to ensure your team is back to work without skipping a beat.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
    features: [
      "After-hours and weekend availability",
      "IT equipment and server rack handling",
      "Cubicle and office furniture teardown/assembly",
      "Confidential document securely transported"
    ],
    reverse: true
  },
  {
    title: "Single Item & Specialty Moves",
    subtitle: "White-Glove Care for Your Most Valuable Pieces",
    description: "Precision care for items that require specialized knowledge. We expertly handle heavy, awkward, delicate, or extremely high-value single items.",
    icon: Box,
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Grand piano and upright piano moving",
      "Safe and heavy machinery transport",
      "Antique and fine art custom crating",
      "Appliance delivery and installation"
    ],
    reverse: false
  },
  {
    title: "Fitness Equipment Assembly",
    subtitle: "Complex Mechanical Setups Made Easy",
    description: "Don't risk injury or property damage. Our crews handle the heavy lifting, precise mechanical assembly, and calibration of all home and commercial fitness equipment.",
    icon: Dumbbell,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Treadmill and elliptical transport",
      "Home gym multi-station assembly",
      "Weight rack secure installation",
      "Commercial gym equipment deployment"
    ],
    reverse: true
  },
  {
    title: "Furniture Assembly",
    subtitle: "Stress-Free Setup for Your Home or Office",
    description: "Relax while our experts quickly and correctly assemble your new furniture. We handle the complex instructions and heavy parts, leaving your space clean and ready to enjoy.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Quick and correct assembly of new furniture",
      "IKEA systems and custom bedroom sets",
      "Office desk and partition setups",
      "Packaging cleanup and removal"
    ],
    reverse: false
  },
  {
    title: "Junk Removal",
    subtitle: "Reclaim Your Space",
    description: "We efficiently and responsibly remove unwanted items, debris, and clutter from your property. Whether you're clearing an estate, or decluttering before a move.",
    icon: Trash2,
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Responsible disposal and recycling",
      "Appliance and heavy item removal",
      "Construction and yard debris clearing",
      "Donation of usable items to local charities"
    ],
    reverse: true
  },
  {
    title: "Expert Cleaning",
    subtitle: "Immaculate Spaces from Top to Bottom",
    description: "Leave the heavy scrubbing to us. Whether it's move-in/move-out cleans, regular house cleanings, or revitalizing carpets, our expert team ensures your space is pristine.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Comprehensive move-in and move-out deep cleaning",
      "Carpet and upholstery steam cleaning",
      "Post-construction and renovation dust removal",
      "10% off for first-time customers!"
    ],
    reverse: false
  },
  {
    title: "Rent-A-Hand Services",
    subtitle: "Professional Help for the Little Things",
    description: "Need an extra pair of hands? We offer premium side-job services for all those minor tasks around your home or office that you simply don't have the time or tools for.",
    icon: Hammer,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Minor handyman repairs and touch-ups",
      "Basic painting and wall patching",
      "Ceiling fan and light fixture installations",
      "TV mounting and picture hanging"
    ],
    reverse: true
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-col overflow-hidden bg-foreground/5 dark:bg-background pb-0">
        
        {/* Header */}
        <section className="relative pt-40 pb-32 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/services/header.jpg')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-2 border border-accent/40 bg-accent/10 text-accent font-medium text-[10px] tracking-[0.2em] uppercase mb-8 rounded-full">
              Elite Relocation
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
              Our Premium <br /><span className="text-accent italic pr-2">Services.</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              We don't just move boxes. We engineer completely stress-free transitions for homes and businesses across Ontario, utilizing modern equipment and highly trained career professionals.
            </p>
          </div>
        </section>

        {/* Introduction / Why Us */}
        <section className="py-24 md:py-32 bg-white dark:bg-slate-950 border-y border-foreground/5 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 text-center lg:text-left items-center">
              <div className="lg:col-span-1">
                <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6 leading-tight">A Higher Standard of Moving.</h2>
                <div className="w-16 h-1 bg-accent mx-auto lg:mx-0"></div>
              </div>
              <div className="lg:col-span-2">
                <p className="text-foreground/70 text-lg md:text-xl font-light leading-relaxed mb-6">
                  At Rent-A-Hand, we recognized a glaring flaw in the moving industry: a race to the bottom in pricing often meant a drastic drop in quality, resulting in damaged goods, hidden fees, and immense stress for the customer.
                </p>
                <p className="text-foreground/70 text-lg md:text-xl font-light leading-relaxed">
                  We built our service offerings around the concept of absolute premium care. Whether you are moving a one-bedroom apartment across Windsor or relocating an entire corporate headquarters to Toronto, we apply the exact same meticulous methodologies, equipment, and respect to your property.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Service Modules */}
        <section className="py-24 space-y-32">
          {detailedServices.map((service, index) => (
            <div key={index} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`flex flex-col ${service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
                
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative h-[400px] sm:h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl group">
                    <Image 
                      src={service.image} 
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Floating Icon Badge */}
                    <div className={`absolute top-8 ${service.reverse ? 'left-8' : 'right-8'} bg-white/90 dark:bg-black/90 backdrop-blur-md p-4 rounded-2xl shadow-xl z-20`}>
                      <service.icon size={32} className="text-accent" />
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <h4 className="text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-4">{service.subtitle}</h4>
                  <h2 className="text-4xl font-serif text-foreground mb-6">{service.title}</h2>
                  <p className="text-foreground/70 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-4 mb-10">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-4">
                        <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} />
                        <span className="text-foreground/80 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="/#quote" className="inline-flex items-center gap-3 bg-primary text-white hover:bg-primary-light px-8 py-4 rounded-full font-medium transition-colors group">
                    Request This Service
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </section>



        {/* Bottom CTA */}
        <section className="py-24 bg-primary text-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/gallery/picture4_branded.png')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent pointer-events-none"></div>
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 tracking-wide">Ready for a Premium Move?</h2>
            <p className="text-white/70 text-lg mb-8 font-light max-w-xl">
              Let our experts handle the heavy lifting. Get a customized plan tailored to your exact needs.
            </p>
            <a href="/#quote" className="group inline-flex items-center gap-2 bg-accent text-primary hover:bg-white hover:text-primary px-8 py-3.5 rounded-full font-medium text-base transition-all duration-300 transform shadow-lg hover:shadow-[0_0_20px_rgba(255,183,3,0.3)] hover:-translate-y-0.5">
              Get your free quote
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
