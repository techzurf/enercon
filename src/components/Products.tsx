import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import offGridImg from '../assets/images/regenerated_image_1789194237256.png';
import allInOneImg from '../assets/images/regenerated_image_1789195702090.png';
import pureSineImg from '../assets/images/regenerated_image_1789195815422.png';

const PRODUCTS = [
  {
    title: "Solar PV Modules",
    img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Pure Sine Wave Inverters",
    img: pureSineImg,
  },
  {
    title: "Off-Grid Hybrid Inverters",
    img: offGridImg,
  },
  {
    title: "Lithium Energy Storage Batteries",
    img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "All-in-One Energy Storage",
    img: allInOneImg,
  }
];

export function Products() {
  return (
    <section id="products" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-enercon-green font-semibold tracking-widest text-sm uppercase mb-4 block">Premium Equipment</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-enercon-darker mb-6">
              Our Products
            </h2>
            <p className="text-slate-600 text-lg">
              We supply high-tier solar and energy storage products to ensure maximum efficiency and reliability for every project.
            </p>
          </motion.div>
        </div>

        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 pb-8 -mx-6 px-6 md:mx-0 md:px-0 snap-x snap-mandatory hide-scrollbar">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="shrink-0 w-[75vw] md:w-auto snap-center group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col"
            >
              <div className="aspect-square bg-slate-100 p-6 flex items-center justify-center overflow-hidden">
                {/* Product images are often on white/transparent backgrounds. We use a subtle blend. */}
                <img 
                  src={product.img} 
                  alt={product.title} 
                  className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-500 mix-blend-multiply"
                />
              </div>
              <div className="p-6 text-center flex flex-col flex-grow items-center justify-between border-t border-slate-50">
                <h3 className="font-bold text-enercon-darker mb-4 group-hover:text-enercon-green transition-colors text-balance">
                  {product.title}
                </h3>
                <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-enercon-green group-hover:text-white transition-colors text-slate-400">
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
