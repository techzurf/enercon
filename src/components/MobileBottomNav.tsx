import { useState, useEffect } from 'react';
import { Home, Lightbulb, Grid2X2, Settings, Mail } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home', label: 'HOME', icon: Home },
  { id: 'solutions', label: 'SOLUTIONS', icon: Lightbulb },
  { id: 'projects', label: 'PROJECTS', icon: Grid2X2 },
  { id: 'services', label: 'SERVICES', icon: Settings },
  { id: 'contact', label: 'CONTACT', icon: Mail },
];

export function MobileBottomNav() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      let current = 'home';
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4) {
            current = item.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200/50 shadow-[0_-8px_30px_rgba(0,0,0,0.06)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="flex justify-around items-center h-[72px] px-2">
        {NAV_ITEMS.map(({ id, label, icon: Icon }) => {
          const isActive = activeSection === id;
          
          return (
            <a 
              key={id}
              href={`#${id}`} 
              onClick={() => setActiveSection(id)}
              className="relative flex-1 flex flex-col items-center justify-center gap-1.5 h-full group active:scale-95 transition-transform duration-200"
            >
              {/* Active Indicator Top Line */}
              <div 
                className={`absolute top-0 w-8 h-1 rounded-b-full transition-colors duration-300 ${
                  isActive ? 'bg-enercon-green' : 'bg-transparent'
                }`}
              />
              
              {/* Icon & Label */}
              <div className={`flex flex-col items-center gap-1.5 transition-colors duration-300 ${
                isActive ? 'text-enercon-green' : 'text-enercon-darker/60 hover:text-enercon-darker'
              }`}>
                <Icon 
                  size={22} 
                  strokeWidth={isActive ? 2.5 : 2} 
                  className={`transition-transform duration-300 ${isActive ? 'scale-100' : 'scale-95 group-hover:scale-100'}`} 
                />
                <span className={`text-[10px] font-semibold tracking-wide whitespace-nowrap transition-all duration-300 ${
                  isActive ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'
                }`}>
                  {label}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
