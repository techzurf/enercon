import { motion } from 'motion/react';
import { Leaf, ShieldCheck, Users, Target } from 'lucide-react';

const COLORS = [
  { main: "#A8D500", bgTint: "rgba(168,213,0,0.1)", glow: "rgba(168,213,0,0.35)" }, // Lime Green
  { main: "#20A9E0", bgTint: "rgba(32,169,224,0.1)", glow: "rgba(32,169,224,0.35)" }, // Cyan Blue
  { main: "#18B978", bgTint: "rgba(24,185,120,0.1)", glow: "rgba(24,185,120,0.35)" }, // Emerald Green
  { main: "#F5C542", bgTint: "rgba(245,197,66,0.1)", glow: "rgba(245,197,66,0.35)" }, // Golden Yellow
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
      {/* Subtle decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 rounded-bl-[100px] -z-10 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-enercon-green font-semibold tracking-widest text-sm uppercase mb-4 block">The Advantage</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-enercon-darker">
            Why Choose Enercon?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {REASONS.map((reason, index) => {
            const color = COLORS[index % COLORS.length];
            return (
              <motion.div 
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 lg:p-10 rounded-[24px] bg-[#FAFAFA] border border-slate-200/80 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(11,49,93,0.12)] relative overflow-hidden flex flex-col sm:flex-row gap-6 lg:gap-8 items-start"
                style={{
                  '--card-accent': color.main,
                  '--card-glow': color.glow,
                  '--card-bg-tint': color.bgTint,
                } as React.CSSProperties}
              >
                {/* Subtle Hover Highlight Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--card-accent)]/30 rounded-[24px] transition-colors duration-300 pointer-events-none z-20"></div>

                {/* Icon Container */}
                <div className="w-16 h-16 lg:w-20 lg:h-20 shrink-0 rounded-[18px] bg-[var(--card-bg-tint)] shadow-[0_4px_12px_-4px_rgba(0,0,0,0.05)] flex items-center justify-center transition-all duration-300 ease-out group-hover:scale-[1.08] group-hover:shadow-[0_0_25px_var(--card-glow)] relative z-10 overflow-hidden">
                  <reason.icon size={32} className="text-[var(--card-accent)] transition-all duration-300 ease-out group-hover:drop-shadow-[0_0_8px_var(--card-glow)] relative z-10 w-8 h-8 lg:w-9 lg:h-9" strokeWidth={2} />
                </div>
                
                <div className="relative z-10 pt-1 lg:pt-2">
                  <h3 className="text-xl lg:text-2xl font-bold text-enercon-darker mb-3">{reason.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm lg:text-base">{reason.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
