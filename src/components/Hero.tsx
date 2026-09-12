import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const yText = useTransform(scrollY, [0, 500], [0, -100]);
  const scaleBg = useTransform(scrollY, [0, 500], [1, 1.05]);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-[85svh] md:min-h-[90svh] flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <motion.div 
        className="absolute inset-0 z-0 overflow-hidden bg-enercon-dark"
        style={{ scale: scaleBg }}
      >
        <iframe
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          src="https://www.youtube.com/embed/TzfnlPxCZv0?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=TzfnlPxCZv0&modestbranding=1&playsinline=1&iv_load_policy=3"
          title="Enercon Background Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        
        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-enercon-darker/90 via-enercon-darker/60 to-enercon-darker/30 z-10"></div>
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-32">
        <motion.div 
          style={{ y: yText }}
          className="max-w-3xl"
        >
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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white font-bold leading-[1.1] tracking-tight mb-6 md:mb-8"
          >
            Powering a Sustainable Tomorrow
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-base md:text-xl text-slate-200 leading-relaxed mb-8 md:mb-10 max-w-2xl text-balance"
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
              className="group flex items-center justify-center gap-2 bg-enercon-green hover:bg-enercon-green-dark text-white px-8 py-4 rounded-full text-sm font-semibold transition-all shadow-lg shadow-enercon-green/20"
            >
              EXPLORE OUR PROJECTS
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-sm font-semibold transition-all"
            >
              GET A QUOTE
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
