import { useState, useCallback, useEffect } from 'react';
import Lenis from 'lenis';
import IntroAnimation from './components/IntroAnimation';
import Navigation from './components/Navigation';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Format from './components/Format';
import Timing from './components/Timing';
import Categories from './components/Categories';
import Schedule from './components/Schedule';
import Registration from './components/Registration';
import Location from './components/Location';
import Organizers from './components/Organizers';
import FAQ from './components/FAQ';
import MediaNote from './components/MediaNote';
import Footer from './components/Footer';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      <CustomCursor />
      <Navigation />

      <main>
        <Hero />
        <About />
        <Format />
        <Timing />
        <Categories />
        <Schedule />
        <Registration />
        <Location />
        <Organizers />
        <FAQ />
        <MediaNote />
        <Footer />
      </main>
    </>
  );
}

export default App;
