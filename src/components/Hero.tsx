import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-enercon-dark/60 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1509391366360-1e97b524f7e5?auto=format&fit=crop&q=80&w=2000" 
          alt="Solar Panels at Sunset" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-enercon-green/20 border border-enercon-green/30 text-enercon-green-light text-sm font-semibold tracking-wide mb-6">
              ENERCON GROUP AE
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif text-white font-bold leading-[1.1] tracking-tight mb-8"
          >
            Powering a Sustainable Tomorrow
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-slate-200 leading-relaxed mb-10 max-w-2xl text-balance"
          >
            We deliver innovative and reliable solar energy solutions that empower businesses and communities for a cleaner, greener future.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#projects" 
              className="group flex items-center justify-center gap-2 bg-enercon-green hover:bg-enercon-green-dark text-white px-8 py-4 rounded-full text-sm font-semibold transition-all"
            >
              EXPLORE OUR PROJECTS
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-sm font-semibold transition-all"
            >
              GET A QUOTE
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
