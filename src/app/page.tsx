import About from '@/components/About';
import Contact from '@/components/Contact';
import HeroSection from '@/components/HeroSection';
import Projects from '@/components/Project';

export default function Home() {
  
  return (
    <div>
      <HeroSection />
      <About />
      <Projects />
      <Contact/>
    </div>
  );
}