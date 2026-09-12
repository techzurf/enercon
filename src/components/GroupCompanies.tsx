import { motion } from 'motion/react';
import { Building2 } from 'lucide-react';

const COMPANIES = [
  "Enercon Group Energy Systems LLC",
  "Enercon Trading LLC",
  "Sahaal Power & Projects Pvt Ltd"
];

// Duplicate items to ensure the marquee has enough content to scroll seamlessly
const MARQUEE_ITEMS = [...COMPANIES, ...COMPANIES, ...COMPANIES, ...COMPANIES];
const ALL_ITEMS = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]; // 2 halves for -50% translation

export function GroupCompanies() {
  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800 overflow-hidden">
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
      </div>

      <div className="clients-marquee">
        <div className="clients-marquee-track">
          {ALL_ITEMS.map((company, index) => (
            <div
              key={`${company}-${index}`}
              className="flex items-center gap-3 text-slate-300 hover:text-enercon-green transition-colors"
            >
              <Building2 size={20} className="text-slate-500 shrink-0" />
              <span className="font-medium text-lg whitespace-nowrap">{company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
