import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X } from 'lucide-react';

export function About() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="about" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group">
              <motion.img 
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                src="https://res.cloudinary.com/dv16a8l1l/image/upload/v1789192114/about-solar_eisi5s.jpg" 
                alt="Enercon Group Project" 
                className="w-full h-full object-cover"
              />
              
              {/* Animated Play Button Overlay */}
              <div 
                className="absolute inset-0 z-20 flex items-center justify-center cursor-pointer"
                onClick={() => setIsVideoOpen(true)}
              >
                <div className="relative flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  {/* Continuous Ripple Animations */}
                  <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                  <div className="absolute inset-0 rounded-full border-2 border-enercon-green/50 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite_1s]"></div>
                  
                  {/* Main Play Button */}
                  <div className="relative w-20 h-20 bg-enercon-darker/90 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 group-hover:bg-enercon-green group-hover:border-enercon-green group-hover:shadow-[0_0_30px_rgba(168,201,0,0.5)] transition-all duration-300 shadow-2xl active:scale-95">
                    <Play size={32} className="ml-1.5 text-enercon-green group-hover:text-white transition-colors duration-300" fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:absolute md:-bottom-8 md:-right-8 bg-white p-6 md:p-8 rounded-2xl shadow-xl md:max-w-xs mt-[-30px] md:mt-0 relative z-10 mx-6 md:mx-0">
              <div className="text-4xl font-serif font-bold text-enercon-green mb-2">10+</div>
              <div className="text-slate-600 font-medium">Years of Excellence in Renewable Energy Solutions</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <span className="text-enercon-green font-semibold tracking-widest text-sm uppercase mb-4">About Enercon</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-enercon-darker mb-8 leading-tight">
              Engineering a Cleaner Energy Future
            </h2>
            
            <div className="prose prose-lg text-slate-600">
              <p className="mb-6">
                Enercon provides practical and dependable solar and energy solutions, 
                covering consultation, procurement, project delivery, maintenance, and EPC services.
              </p>
              
              <div className="mt-10 space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-enercon-darker mb-3 flex items-center gap-3">
                    <span className="w-8 h-px bg-enercon-green"></span>
                    Our Mission
                  </h3>
                  <p className="text-base">
                    To accelerate the transition to sustainable energy by providing innovative, 
                    efficient, and accessible solar solutions to businesses and communities.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-enercon-darker mb-3 flex items-center gap-3">
                    <span className="w-8 h-px bg-enercon-green"></span>
                    Our Vision
                  </h3>
                  <p className="text-base">
                    To be the leading force in renewable energy across the region, creating a 
                    cleaner environment and a sustainable future for generations to come.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-enercon-darker/95 backdrop-blur-md"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.button 
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md z-50"
              onClick={() => setIsVideoOpen(false)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <X size={24} />
            </motion.button>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] ring-1 ring-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/TzfnlPxCZv0?autoplay=1" 
                title="Enercon Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
