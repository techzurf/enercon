import { Home, Lightbulb, Grid2X2, Settings, Mail } from 'lucide-react';

export function MobileBottomNav() {
  return (
    <nav 
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="flex justify-between items-center px-6 h-16">
        <a href="#home" className="flex flex-col items-center gap-1 text-slate-400 hover:text-enercon-green transition-colors w-16">
          <Home size={20} />
          <span className="text-[10px] font-medium tracking-wider">HOME</span>
        </a>
        <a href="#solutions" className="flex flex-col items-center gap-1 text-slate-400 hover:text-enercon-green transition-colors w-16">
          <Lightbulb size={20} />
          <span className="text-[10px] font-medium tracking-wider">SOLUTIONS</span>
        </a>
        <a href="#projects" className="flex flex-col items-center gap-1 text-slate-400 hover:text-enercon-green transition-colors w-16">
          <Grid2X2 size={20} />
          <span className="text-[10px] font-medium tracking-wider">PROJECTS</span>
        </a>
        <a href="#services" className="flex flex-col items-center gap-1 text-slate-400 hover:text-enercon-green transition-colors w-16">
          <Settings size={20} />
          <span className="text-[10px] font-medium tracking-wider">SERVICES</span>
        </a>
        <a href="#contact" className="flex flex-col items-center gap-1 text-slate-400 hover:text-enercon-green transition-colors w-16">
          <Mail size={20} />
          <span className="text-[10px] font-medium tracking-wider">CONTACT</span>
        </a>
      </div>
    </nav>
  );
}
