import { Preloader } from './components/Preloader';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Products } from './components/Products';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GroupCompanies } from './components/GroupCompanies';
import { Process } from './components/Process';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans pb-[calc(72px+env(safe-area-inset-bottom))] lg:pb-0">
      <Preloader />
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Products />
        <WhyChooseUs />
        <GroupCompanies />
        <Process />
        <CTASection />
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
