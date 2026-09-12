import { motion } from 'motion/react';
import { Leaf, ShieldCheck, Users, Target } from 'lucide-react';

const COLORS = [
  { main: "#A8C900", glow: "rgba(168,201,0,0.35)" }, // Lime Green
  { main: "#20A9E8", glow: "rgba(32,169,232,0.35)" }, // Cyan Blue
  { main: "#16B978", glow: "rgba(22,185,120,0.35)" }, // Emerald Green
  { main: "#F2C94C", glow: "rgba(242,201,76,0.35)" }, // Golden Yellow
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
                className="group p-8 lg:p-10 rounded-[24px] bg-[#FAFAFA] border border-slate-200/80 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] transition-all duration-400 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(11,49,93,0.12)] relative overflow-hidden flex flex-col sm:flex-row gap-6 lg:gap-8 items-start"
                style={{
                  '--card-accent': color.main,
                  '--card-glow': color.glow,
                } as React.CSSProperties}
              >
                {/* Subtle Hover Highlight Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--card-accent)]/30 rounded-[24px] transition-colors duration-400 pointer-events-none z-20"></div>

                {/* Icon Container */}
                <div className="w-16 h-16 lg:w-20 lg:h-20 shrink-0 rounded-[18px] bg-white border border-slate-100 shadow-[0_4px_12px_-4px_rgba(0,0,0,0.05)] flex items-center justify-center transition-all duration-400 ease-out group-hover:-translate-y-1 group-hover:scale-[1.08] group-hover:shadow-[0_0_25px_var(--card-glow)] relative z-10 overflow-hidden group-hover:border-transparent">
                  {/* Internal Icon Gradient Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--card-accent)]/5 to-[var(--card-accent)]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                  <reason.icon size={32} className="text-slate-600 transition-all duration-400 ease-out group-hover:text-[var(--card-accent)] group-hover:scale-110 relative z-10 w-8 h-8 lg:w-9 lg:h-9" strokeWidth={1.5} />
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
