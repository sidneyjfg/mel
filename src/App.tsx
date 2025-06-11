import { useState, MouseEvent } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Process from './components/Process';
import Products from './components/Products';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

interface Splash {
  id: number;
  x: number;
  y: number;
}

function App() {
  const [splashes, setSplashes] = useState<Splash[]>([]);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {

    const splash: Splash = {
      id: Date.now(),
      x: e.pageX,
      y: e.pageY,
    };
    setSplashes((prev) => [...prev, splash]);

    setTimeout(() => {
      setSplashes((prev) => prev.filter((s) => s.id !== splash.id));
    }, 1000);
  };


  return (
    <div className="bg-[url('/img/mel-pattern-light.png')] bg-repeat bg-amber-50 min-h-screen relative overflow-hidden" onClick={handleClick}>
      <Header />
      <Hero />
      <Benefits />
      <Process />
      <Products />
      <About />
      <Testimonials />
      <Contact />
      <Footer />

      {/* Splash DEPOIS dos componentes */}
      {splashes.map((splash) => (
        <div
          key={splash.id}
          style={{
            position: 'fixed',
            top: splash.y - 40,
            left: splash.x - 40,
            width: 80,
            height: 80,
            zIndex: 9999,
            pointerEvents: 'none',
            animation: 'splashAnim 1.2s ease-out forwards',
            filter: 'blur(0.5px) brightness(1.05) saturate(1.2) drop-shadow(0 0 6px #f5c518)',
          }}
          dangerouslySetInnerHTML={{
            __html: `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#f5c518"
            d="M50 10c10 0 20 10 20 20s-5 10 0 20 5 25-10 25-10-10-20-10-20 10-30 0 0-20 0-30 10-25 20-25z"
          />
        </svg>
      `,
          }}
        />
      ))}

    </div>
  );
}

export default App;
