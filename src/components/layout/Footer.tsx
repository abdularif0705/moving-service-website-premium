import { Truck, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-foreground-light pt-16 pb-8 border-t border-white/10 dark:bg-background dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-white">
              <div className="bg-white/5 text-accent p-2 rounded-xl border border-accent/20">
                <Truck size={24} />
              </div>
              <span className="text-2xl font-bold tracking-tight font-serif">
                SwiftMove
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Premium moving services designed to eliminate the stress of residential and commercial relocation. Fully licensed, bonded, and insured.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/40 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-white/40 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-white/40 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hidden"></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif font-medium mb-6 text-lg tracking-wide">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Local Moving</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Long Distance Moving</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Commercial Relocation</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Professional Packing</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Storage Solutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-medium mb-6 text-lg tracking-wide">Company</h4>
            <ul className="space-y-3">
              <li><a href="/about" className="text-white/60 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="/#process" className="text-white/60 hover:text-white transition-colors text-sm">How It Works</a></li>
              <li><a href="/#testimonials" className="text-white/60 hover:text-white transition-colors text-sm">Reviews</a></li>
              <li><a href="/careers" className="text-white/60 hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="/privacy" className="text-white/60 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-medium mb-6 text-lg tracking-wide">Coverage Areas</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li>Windsor, ON</li>
              <li>Tecumseh, ON</li>
              <li>LaSalle, ON</li>
              <li>Amherstburg, ON</li>
              <li>Lakeshore, ON</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <div className="flex flex-col gap-2 relative z-20 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} SwiftMove Relocation. All rights reserved.</p>
            <p className="text-white/30 text-xs">
              Designed & Developed by <a href="https://abdularif.me" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-colors underline underline-offset-2">Abdul Rehman Arif</a>
            </p>
          </div>
          <div className="flex gap-6 relative z-20">
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
