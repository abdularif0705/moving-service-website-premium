import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export const metadata = {
  title: "Gallery & Results | Rent-A-Hand Moving",
  description: "View our portfolio of premium relocations, meticulously packed homes, and modern, high-capacity fleet.",
  alternates: {
    canonical: "https://rentahandwindsor.ca/gallery",
  },
  openGraph: {
    title: "Gallery & Results | Rent-A-Hand Moving",
    description: "View our portfolio of premium relocations, meticulously packed homes, and modern, high-capacity fleet.",
    url: "https://rentahandwindsor.ca/gallery",
  },
};

const galleryImages = [
  { src: "/images/gallery/picture1_branded.png", span: "col-span-1 md:col-span-2 row-span-2", alt: "Rent-A-Hand movers carefully packing and loading a residential home in Windsor" }, // Large feature intro
  { src: "https://torontopromovingandstorage.ca/wp-content/uploads/Moving-Company-Toronto-Working-Hard-1.jpg", span: "col-span-1 row-span-1", alt: "Professional movers handling commercial office relocation equipment" }, // Office
  { src: "https://torontopromovingandstorage.ca/wp-content/uploads/Moving-Company-Toronto-Packed.jpg", span: "col-span-1 row-span-1", alt: "Securely packed moving boxes ready for transport" }, // New home exterior
  { src: "/images/gallery/picture4_branded.png", span: "col-span-1 row-span-2", alt: "Rent-A-Hand moving truck loaded with securely strapped furniture and boxes" }, // Tall image, boxes/warehouse
  { src: "https://torontopromovingandstorage.ca/wp-content/uploads/Moving-Company-Toronto-Moving-Moving-Moving.jpg", span: "col-span-1 md:col-span-2 row-span-1", alt: "Moving crew navigating a large piece of furniture through a modern home" }, // Wide modern interior
  { src: "/images/gallery/truck_with_577.png", span: "col-span-1 row-span-1", alt: "Rent-A-Hand premium moving truck fleet parked outside a Windsor residence" }, // Truck with updated phone digits
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="flex-col overflow-hidden bg-foreground/5 dark:bg-background pb-24">
        
        {/* Header */}
        <section className="relative pt-40 pb-20 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/gallery/picture1_branded.png')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
              Our <span className="text-accent italic pr-2 -mr-2">Results.</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              A visual portfolio of flawlessly executed relocations, representing our commitment to absolute precision and care.
            </p>
          </div>
        </section>

        {/* Masonry-style Grid */}
        <section className="pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px]">
              {galleryImages.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`relative rounded-3xl overflow-hidden group cursor-pointer shadow-sm border border-foreground/5 dark:border-white/5 ${img.span}`}
                >
                  <Image 
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-foreground/60 italic font-serif">More high-fidelity showcase images coming soon as we transition our fleet.</p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
