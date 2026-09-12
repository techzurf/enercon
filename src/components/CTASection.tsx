import { motion } from 'motion/react';

export function CTASection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-enercon-darker mb-6 leading-tight">
            Let's Build Your Next Energy Solution
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Tell us about your requirements and our team will be happy to assist you with the right solar energy solution.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#contact" 
              className="bg-enercon-darker hover:bg-black text-white px-8 py-4 rounded-full text-sm font-semibold transition-colors btn-glitch"
              data-text="CONTACT US"
            >
              CONTACT US
            </a>
            <a 
              href="#contact" 
              className="bg-enercon-green hover:bg-enercon-green-dark text-white px-8 py-4 rounded-full text-sm font-semibold transition-colors shadow-lg shadow-enercon-green/20 btn-glitch"
              data-text="GET A QUOTE"
            >
              GET A QUOTE
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
