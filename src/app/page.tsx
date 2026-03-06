import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import TrustBadges from "@/components/sections/TrustBadges";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Comparison from "@/components/sections/Comparison";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex-col">
        <Hero />
        <TrustBadges />
        <Services />
        <Process />
        <Comparison />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
