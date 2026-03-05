import { Truck, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-foreground-light pt-16 pb-8 border-t border-white/10 dark:bg-background dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-white">
              <div className="bg-primary p-2 rounded-lg">
                <Truck size={24} />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Swift<span className="text-accent">Move</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Premium moving services designed to eliminate the stress of residential and commercial relocation. Fully licensed, bonded, and insured.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/40 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-white/40 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-white/40 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-white/40 hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-accent transition-colors text-sm">Local Moving</a></li>
              <li><a href="#" className="text-white/60 hover:text-accent transition-colors text-sm">Long Distance Moving</a></li>
              <li><a href="#" className="text-white/60 hover:text-accent transition-colors text-sm">Commercial Relocation</a></li>
              <li><a href="#" className="text-white/60 hover:text-accent transition-colors text-sm">Professional Packing</a></li>
              <li><a href="#" className="text-white/60 hover:text-accent transition-colors text-sm">Storage Solutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-accent transition-colors text-sm">About Us</a></li>
              <li><a href="#process" className="text-white/60 hover:text-accent transition-colors text-sm">How It Works</a></li>
              <li><a href="#testimonials" className="text-white/60 hover:text-accent transition-colors text-sm">Reviews</a></li>
              <li><a href="#" className="text-white/60 hover:text-accent transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-white/60 hover:text-accent transition-colors text-sm">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Coverage Areas</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li>New York City, NY</li>
              <li>Los Angeles, CA</li>
              <li>Chicago, IL</li>
              <li>Miami, FL</li>
              <li>Austin, TX</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} SwiftMove Relocation LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
