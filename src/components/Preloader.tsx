import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ensure the preloader displays for a minimum time (e.g., 800ms) 
    // to prevent jarring flashes on fast connections, while waiting for window load.
    const minTimePromise = new Promise(resolve => setTimeout(resolve, 800));
    
    const loadPromise = new Promise(resolve => {
      if (document.readyState === 'complete') {
        resolve(true);
      } else {
        window.addEventListener('load', () => resolve(true), { once: true });
      }
    });

    Promise.all([minTimePromise, loadPromise]).then(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-enercon-darker"
        >
          <motion.img
            src="https://res.cloudinary.com/dv16a8l1l/image/upload/v1789193241/enercon_header_logo_v4_qygdvi.png"
            alt="Loading Enercon..."
            className="h-12 md:h-16 w-auto object-contain"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
