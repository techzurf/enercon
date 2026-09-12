import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-24 pb-[calc(1.5rem+72px+env(safe-area-inset-bottom))] lg:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 pr-12 sm:pr-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-6">
              <span className="text-2xl font-bold leading-none tracking-tight text-white">ENERCON</span>
              <span className="text-sm font-medium tracking-widest text-enercon-green">GROUP</span>
            </div>
            <p className="text-sm text-slate-400 mb-6">
              Powering a Sustainable Tomorrow with innovative and reliable solar energy solutions.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders if needed */}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-enercon-green transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-enercon-green transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-enercon-green transition-colors">Projects</a></li>
              <li><a href="#products" className="hover:text-enercon-green transition-colors">Products</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <MapPin size={18} className="text-enercon-green shrink-0 mt-0.5" />
                  <p>
                    Makateb Building, Office No. 109, First Floor,<br />
                    Al Quoz 3, Sheikh Zayed Road,<br />
                    Dubai, UAE
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-enercon-green shrink-0" />
                  <a href="tel:+971502084902" className="hover:text-white transition-colors">+971 50 208 4902</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-enercon-green shrink-0" />
                  <a href="mailto:info@enercongreen.com" className="hover:text-white transition-colors">info@enercongreen.com</a>
                </div>
              </div>
              
              <div className="flex flex-col justify-start">
                <a 
                  href="https://wa.me/971502084902" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-[#25D366] hover:bg-[#20b858] text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors inline-flex items-center justify-center gap-2 mb-4 self-start sm:self-auto"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  Chat on WhatsApp
                </a>
                <p className="text-xs text-slate-500">We typically reply within a few minutes.</p>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Enercon Group AE. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
