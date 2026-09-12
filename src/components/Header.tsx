import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SOLUTIONS', href: '#solutions' },
  { label: 'SERVICES', href: '#services' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'PRODUCTS', href: '#products' },
  { label: 'CONTACT', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="flex items-center group">
          <img 
            src="https://res.cloudinary.com/dv16a8l1l/image/upload/v1789193241/enercon_header_logo_v4_qygdvi.png"
            alt="Enercon Solar"
            className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-enercon-green ${
                isScrolled ? 'text-slate-600' : 'text-white/90'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="bg-enercon-green hover:bg-enercon-green-dark text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors shadow-lg shadow-enercon-green/20 btn-glitch"
            data-text="GET A QUOTE"
          >
            GET A QUOTE
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-enercon-darker bg-white/10 backdrop-blur-sm rounded-full"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={24} className={isScrolled ? 'text-enercon-darker' : 'text-white'} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex items-center justify-between mb-12">
                <a href="#home" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                  <img 
                    src="https://res.cloudinary.com/dv16a8l1l/image/upload/v1789193241/enercon_header_logo_v4_qygdvi.png"
                    alt="Enercon Solar"
                    className="h-10 w-auto object-contain"
                  />
                </a>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 bg-slate-100 rounded-full text-slate-600"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-bold text-slate-800 hover:text-enercon-green transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="mt-auto pb-12">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full block text-center bg-enercon-green hover:bg-enercon-green-dark text-white px-6 py-4 rounded-full text-lg font-semibold transition-colors btn-glitch"
                  data-text="GET A QUOTE"
                >
                  GET A QUOTE
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
