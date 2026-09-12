import { motion } from 'motion/react';
import { ArrowRight, MapPin } from 'lucide-react';
import dubaiAirportImg from '../assets/images/regenerated_image_1789214303370.png';

const PROJECTS = [
  {
    id: 1,
    title: "Nutty N Nuts Solar Project",
    category: "Commercial Solar PV",
    location: "UAE",
    desc: "Large-scale rooftop solar installation powering manufacturing operations.",
    img: "https://res.cloudinary.com/dv16a8l1l/image/upload/v1789192489/ChatGPT_Image_Sep_12_2026_11_24_38_AM_a7rdau.png"
  },
  {
    id: 2,
    title: "Dubai Airport Car Parking Shades",
    category: "Solar Carport",
    location: "Dubai, UAE",
    desc: "Integrated solar car parking shades providing clean energy and vehicle protection.",
    img: dubaiAirportImg
  },
  {
    id: 3,
    title: "Solar Module Cleaning & Maintenance",
    category: "O&M Service",
    location: "Various Locations",
    desc: "Comprehensive cleaning and maintenance ensuring maximum solar yield.",
    img: "https://res.cloudinary.com/dv16a8l1l/image/upload/v1789193142/ChatGPT_Image_Sep_12_2026_11_35_33_AM_bv72sg.png"
  },
  {
    id: 4,
    title: "Security Guard Room Solar System",
    category: "Off-Grid System",
    location: "Remote Sites",
    desc: "Reliable off-grid solar power for remote security outposts.",
    img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 5,
    title: "Truk Restaurant Off-Grid Solar",
    category: "Commercial Off-Grid",
    location: "UAE",
    desc: "Complete energy independence for F&B operations with battery storage.",
    img: "https://res.cloudinary.com/dv16a8l1l/image/upload/v1789214551/ChatGPT_Image_Sep_12_2026_05_31_37_PM_hcu41v.png"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-enercon-darker text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-enercon-green font-semibold tracking-widest text-sm uppercase mb-4 block">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
              Our Projects
            </h2>
          </motion.div>
          
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            href="#" 
            className="group flex items-center gap-2 text-white hover:text-enercon-green font-semibold transition-colors pb-2 border-b border-white/20 hover:border-enercon-green"
          >
            VIEW ALL PROJECTS
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-6 lg:gap-8 pb-8 -mx-6 px-6 lg:mx-0 lg:px-0 snap-x snap-mandatory hide-scrollbar">
          {PROJECTS.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="shrink-0 w-[85vw] lg:w-auto snap-center group cursor-pointer bg-slate-800/20 lg:bg-transparent rounded-2xl lg:rounded-none p-4 lg:p-0 border border-slate-700/50 lg:border-none"
            >
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-6">
                <div className="absolute inset-0 bg-enercon-dark/40 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20 bg-enercon-green text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {project.category}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-enercon-green transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {project.desc}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-slate-300 text-sm font-medium">
                    <MapPin size={16} className="text-enercon-green" />
                    {project.location}
                  </div>
                  <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-enercon-green group-hover:border-enercon-green transition-colors">
                    <ArrowRight size={18} className="group-hover:-rotate-45 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Remaining projects in a tighter grid or hidden on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 lg:hidden">
            {PROJECTS.slice(3).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex gap-4 bg-slate-800/50 p-4 rounded-xl hover:bg-slate-800 transition-colors"
            >
              <div className="w-32 h-32 shrink-0 rounded-lg overflow-hidden relative">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-enercon-green text-xs font-bold uppercase tracking-wider mb-1">{project.category}</div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-white text-slate-200 transition-colors leading-tight">{project.title}</h3>
                <div className="flex items-center gap-1 text-slate-400 text-xs">
                  <MapPin size={12} /> {project.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="hidden lg:grid grid-cols-2 gap-8 mt-8">
           {PROJECTS.slice(3).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl aspect-[21/9]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-enercon-darker via-enercon-darker/40 to-transparent z-10 opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              <img 
                src={project.img} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <div className="text-enercon-green text-xs font-bold uppercase tracking-wider mb-2">{project.category}</div>
                <h3 className="text-2xl font-serif font-bold mb-2 text-white group-hover:text-enercon-green-light transition-colors">{project.title}</h3>
                <div className="flex items-center gap-1.5 text-slate-300 text-sm font-medium mb-4">
                    <MapPin size={16} className="text-enercon-green" />
                    {project.location}
                </div>
                <a href="#" className="inline-flex items-center gap-2 text-white font-semibold text-sm group/link btn-glitch" data-text="View Project">
                  View Project
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
