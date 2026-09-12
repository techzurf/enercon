import { motion } from 'motion/react';

export function About() {
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
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <motion.img 
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                src="https://res.cloudinary.com/dv16a8l1l/image/upload/v1789192114/about-solar_eisi5s.jpg" 
                alt="Enercon Solar Project" 
                className="w-full h-full object-cover"
              />
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
    </section>
  );
}
