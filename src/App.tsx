import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { VideoSection } from './components/VideoSection';
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
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <VideoSection />
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
