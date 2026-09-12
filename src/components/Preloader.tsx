import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isLoaded = document.readyState === 'complete';
    let minTimePassed = false;
    
    const handleLoad = () => { isLoaded = true; };
    if (!isLoaded) {
      window.addEventListener('load', handleLoad, { once: true });
    }

    // Guarantee minimum loading time to show off the premium animation
    setTimeout(() => { minTimePassed = true; }, 1200);

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Pause briefly at 100% before hiding
          setTimeout(() => setIsLoading(false), 400);
          return 100;
        }
        
        // If loaded and min time passed, smoothly race to 100
        if (isLoaded && minTimePassed) {
          return Math.min(prev + 4, 100);
        }

        // Hold around 85-95% if still loading
        if (prev >= 85 && !isLoaded) {
          return prev + (Math.random() > 0.8 ? 0.5 : 0);
        }

        // Normal smooth increment
        return Math.min(prev + Math.random() * 3 + 1, 95);
      });
    }, 40);

    return () => {
      clearInterval(interval);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  const displayProgress = Math.min(Math.round(progress), 100);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white px-6"
        >
          {/* Logo & Title */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center mb-12"
          >
            <img
              src="https://res.cloudinary.com/dv16a8l1l/image/upload/v1789193241/enercon_header_logo_v4_qygdvi.png"
              alt="Enercon Solar"
              className="h-14 md:h-16 w-auto object-contain mb-6"
            />
            <h1 className="text-enercon-darker font-serif font-bold text-2xl tracking-[0.2em] uppercase">
              Enercon Solar
            </h1>
          </motion.div>

          {/* Progress Bar Container */}
          <div className="w-full max-w-xs md:max-w-sm h-1.5 bg-enercon-darker/10 rounded-full relative mb-8">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-enercon-green rounded-full"
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.1 }}
            >
              {/* Glowing Indicator Tip */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_12px_4px_rgba(168,201,0,0.6)] z-10">
                 <div className="absolute inset-0 rounded-full bg-white animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
              </div>
            </motion.div>
          </div>

          {/* Percentage */}
          <div className="text-enercon-darker/80 font-semibold text-xl mb-6 tabular-nums tracking-wide">
            {displayProgress}%
          </div>

          {/* Animated Dots */}
          <div className="flex gap-2">
            <motion.div
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0 }}
              className="w-2 h-2 rounded-full bg-enercon-green"
            />
            <motion.div
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
              className="w-2 h-2 rounded-full bg-enercon-green"
            />
            <motion.div
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
              className="w-2 h-2 rounded-full bg-enercon-green"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
