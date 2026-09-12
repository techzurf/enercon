import { motion } from 'motion/react';
import { Leaf, ShieldCheck, Users, Target } from 'lucide-react';

const REASONS = [
  {
    icon: Leaf,
    title: "Sustainable Impact",
    desc: "Committed to reducing carbon footprints and promoting green energy."
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "Deploying only top-tier equipment and rigorous engineering standards."
  },
  {
    icon: Users,
    title: "Expert Support",
    desc: "A dedicated team of professionals providing end-to-end assistance."
  },
  {
    icon: Target,
    title: "Customer Focus",
    desc: "Tailored solutions designed specifically for your energy requirements."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-enercon-green-light/30 rounded-bl-[100px] -z-10 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-enercon-green font-semibold tracking-widest text-sm uppercase mb-4 block">The Advantage</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-enercon-darker mb-8">
                Why Choose Enercon?
              </h2>
            </motion.div>

            <div className="space-y-8">
              {REASONS.map((reason, index) => (
                <motion.div 
                  key={reason.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="w-14 h-14 rounded-full bg-enercon-green-light flex items-center justify-center shrink-0 text-enercon-green">
                    <reason.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-enercon-darker mb-2">{reason.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{reason.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1200" 
                alt="Wind turbines and solar panels" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -left-8 -bottom-8 bg-enercon-darker text-white p-8 rounded-2xl shadow-xl max-w-xs hidden md:block">
              <p className="text-lg font-serif font-medium leading-relaxed italic">
                "Empowering businesses with reliable, sustainable, and forward-thinking energy solutions."
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
