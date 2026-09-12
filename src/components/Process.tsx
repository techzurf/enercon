import { motion } from 'motion/react';

const STEPS = [
  { num: "01", title: "Consultation" },
  { num: "02", title: "Engineering & Design" },
  { num: "03", title: "Procurement" },
  { num: "04", title: "Project Delivery" },
  { num: "05", title: "Operations & Maintenance" },
];

export function Process() {
  return (
    <section className="py-24 bg-enercon-green text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-enercon-green-light font-semibold tracking-widest text-sm uppercase mb-4 block">How We Work</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Our Process
          </h2>
        </motion.div>

        {/* Desktop Horizontal Process */}
        <div className="hidden lg:flex justify-between relative">
          {/* Connecting Line */}
          <div className="absolute top-8 left-10 right-10 h-px bg-white/30 -z-0"></div>
          
          {STEPS.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col items-center relative z-10 w-48"
            >
              <div className="w-16 h-16 rounded-full bg-white text-enercon-green flex items-center justify-center font-bold text-xl shadow-xl mb-6">
                {step.num}
              </div>
              <h3 className="text-center font-bold text-lg leading-tight">
                {step.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Mobile Vertical Process */}
        <div className="lg:hidden flex flex-col gap-4 relative pl-10 pr-2">
           {/* Connecting Line */}
           <div className="absolute top-4 bottom-4 left-[2.25rem] w-[2px] bg-white/20 -z-0"></div>

          {STEPS.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex items-center gap-4 relative z-10 bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 shadow-sm"
            >
              <div className="w-10 h-10 shrink-0 rounded-full bg-white text-enercon-green flex items-center justify-center font-bold text-base shadow-lg absolute -left-5">
                {step.num}
              </div>
              <h3 className="font-bold text-lg pl-6">
                {step.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
