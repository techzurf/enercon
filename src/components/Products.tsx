import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import offGridImg from '../assets/images/regenerated_image_1789194237256.png';
import allInOneImg from '../assets/images/regenerated_image_1789195702090.png';
import pureSineImg from '../assets/images/regenerated_image_1789195815422.png';

const PRODUCTS = [
  {
    title: "Solar PV Modules",
    desc: "High-efficiency solar modules designed for reliable and long-term renewable energy generation.",
    benefit: "High-Efficiency Solar Generation",
    img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Pure Sine Wave Inverters",
    desc: "Reliable power conversion delivering stable and clean AC power for sensitive electrical and solar applications.",
    benefit: "Stable & Clean Power",
    img: pureSineImg,
  },
  {
    title: "Off-Grid Hybrid Inverters",
    desc: "Flexible energy management solutions designed to integrate solar generation, battery storage and backup power.",
    benefit: "Flexible Energy Management",
    img: offGridImg,
  },
  {
    title: "Lithium Energy Storage Batteries",
    desc: "Advanced lithium battery technology providing efficient energy storage and dependable backup power.",
    benefit: "Advanced Energy Storage",
    img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "All-in-One Energy Storage",
    desc: "Integrated energy storage solutions combining battery technology and power management for convenient energy control.",
    benefit: "Integrated Energy Solution",
    img: allInOneImg,
  }
];

export function Products() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

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
              className="shrink-0 w-[85vw] md:w-auto snap-center"
            >
              <div 
                className={`product-flip-card ${flippedIndex === index ? 'is-flipped' : ''}`}
                onClick={() => setFlippedIndex(flippedIndex === index ? null : index)}
              >
                <div className="product-flip-card-inner">
                  {/* FRONT */}
                  <div className="product-flip-card-front">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="mix-blend-multiply"
                    />
                    <div className="product-card-content">
                      <h3 className="text-balance">{product.title}</h3>
                      <div className="product-arrow">
                        <ArrowRight size={18} />
                      </div>
                    </div>
                  </div>

                  {/* BACK */}
                  <div className="product-flip-card-back">
                    <h3 className="text-balance">{product.title}</h3>
                    <p>
                      {product.desc}
                    </p>
                    <div className="product-benefit">
                      {product.benefit}
                    </div>
                    <a
                      href="#"
                      className="product-details-btn"
                      onClick={(e) => {
                        e.stopPropagation(); // prevent flipping when clicking CTA
                      }}
                    >
                      View Details <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
