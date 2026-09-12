import { motion } from 'motion/react';
import { Building2 } from 'lucide-react';

const COMPANIES = [
  "Enercon Solar Energy Systems LLC",
  "Enercon Trading LLC",
  "Sahaal Power & Projects Pvt Ltd"
];

export function GroupCompanies() {
  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-slate-400 font-semibold tracking-widest text-xs uppercase mb-2 block">Our Network</span>
          <h2 className="text-2xl font-serif font-bold text-white">
            ENERCON GROUP
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 flex-wrap">
          {COMPANIES.map((company, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center gap-3 text-slate-300 hover:text-enercon-green transition-colors"
            >
              <Building2 size={20} className="text-slate-500" />
              <span className="font-medium text-lg">{company}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
