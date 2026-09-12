import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export function VideoSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-enercon-darker">
            Powering a Sustainable Future
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer aspect-video bg-slate-900"
        >
          {/* Poster image placeholder */}
          <img 
            src="https://images.unsplash.com/photo-1548337138-e87f88eb25e4?auto=format&fit=crop&q=80&w=2000" 
            alt="Enercon Solar Project Video" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-60"
          />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-enercon-green/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white shadow-[0_0_40px_rgba(0,166,81,0.4)] group-hover:scale-110 transition-all duration-300">
              <Play size={36} className="ml-2" fill="currentColor" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
