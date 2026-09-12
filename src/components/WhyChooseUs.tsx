import { motion } from 'motion/react';
import { Leaf, ShieldCheck, Users, Target } from 'lucide-react';

const COLORS = [
  { main: "#A8C900", bg: "rgba(168,201,0,0.05)", hoverBg: "rgba(168,201,0,0.12)", shadow: "rgba(168,201,0,0.25)" }, // Lime Green
  { main: "#20A9E8", bg: "rgba(32,169,232,0.05)", hoverBg: "rgba(32,169,232,0.12)", shadow: "rgba(32,169,232,0.25)" }, // Sky Blue
  { main: "#16B978", bg: "rgba(22,185,120,0.05)", hoverBg: "rgba(22,185,120,0.12)", shadow: "rgba(22,185,120,0.25)" }, // Emerald Green
  { main: "#F2C94C", bg: "rgba(242,201,76,0.05)", hoverBg: "rgba(242,201,76,0.12)", shadow: "rgba(242,201,76,0.25)" }, // Golden Yellow
];

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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8 lg:grid-cols-1 lg:space-y-8">
              {REASONS.map((reason, index) => {
                const color = COLORS[index % COLORS.length];
                return (
                  <motion.div 
                    key={reason.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group flex flex-col lg:flex-row gap-4 lg:gap-6 items-start p-6 rounded-2xl border transition-all duration-400 relative overflow-hidden bg-[var(--card-bg)] border-slate-100/50 hover:border-transparent md:hover:bg-[var(--card-hover-bg)] md:hover:shadow-[0_8px_30px_var(--card-shadow)] md:hover:-translate-y-1.5 active:scale-[0.98]"
                    style={{
                      '--card-color': color.main,
                      '--card-bg': color.bg,
                      '--card-hover-bg': color.hoverBg,
                      '--card-shadow': color.shadow,
                    } as React.CSSProperties}
                  >
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-[0.85rem] flex items-center justify-center shrink-0 text-white bg-[var(--card-color)] shadow-md transition-transform duration-500 md:group-hover:scale-110 relative overflow-hidden">
                      <reason.icon size={24} className="relative z-10 lg:w-7 lg:h-7" />
                      {/* Shimmer effect inside icon container */}
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent md:group-hover:animate-[shimmer_1.5s_ease-in-out_infinite] z-0 skew-x-12"></div>
                    </div>
                    <div>
                      <h3 className="text-lg lg:text-xl font-bold text-enercon-darker mb-2">{reason.title}</h3>
                      <p className="text-slate-600 text-sm lg:text-base leading-relaxed">{reason.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
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
