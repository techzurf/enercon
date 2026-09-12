import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    num: "01",
    title: "Solar Energy Solutions",
    desc: "Comprehensive solar PV systems for commercial and residential applications.",
    img: "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?auto=format&fit=crop&q=80&w=800"
  },
  {
    num: "02",
    title: "Engineering",
    desc: "Expert structural and electrical engineering design for optimal system performance.",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800"
  },
  {
    num: "03",
    title: "Procurement",
    desc: "Sourcing premium, high-efficiency solar components from global leaders.",
    img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=800"
  },
  {
    num: "04",
    title: "Operations & Maintenance",
    desc: "Ensuring maximum yield through proactive monitoring and maintenance.",
    img: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=800"
  },
  {
    num: "05",
    title: "EPC Solutions",
    desc: "End-to-end Engineering, Procurement, and Construction services.",
    img: "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&q=80&w=800"
  },
  {
    num: "06",
    title: "Import & Export",
    desc: "Global trading and logistics of renewable energy equipment.",
    img: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=800"
  },
  {
    num: "07",
    title: "General Trading",
    desc: "Supplying top-tier materials for diverse industrial requirements.",
    img: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=800"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-enercon-green font-semibold tracking-widest text-sm uppercase mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-enercon-darker mb-6">
            Comprehensive Services
          </h2>
        </motion.div>

        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-8 -mx-6 px-6 md:mx-0 md:px-0 snap-x snap-mandatory hide-scrollbar">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="shrink-0 w-[85vw] md:w-auto snap-center group flex flex-col bg-slate-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-200/60 shadow-sm"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-enercon-dark/20 z-10 group-hover:bg-transparent transition-colors duration-300"></div>
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20 text-white font-serif text-2xl font-bold drop-shadow-md">
                  {service.num}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-enercon-darker mb-3 group-hover:text-enercon-green transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6 flex-grow">
                  {service.desc}
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-enercon-green font-semibold text-sm group/link">
                  Learn More
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
