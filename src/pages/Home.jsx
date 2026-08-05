import Hero from '../components/sections/Hero';
import TechTicker from '../components/sections/TechTicker';
import Services from '../components/sections/Services';
import About from '../components/sections/About';
import Process from '../components/sections/Process';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <TechTicker />
      <Services />
      <About />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
