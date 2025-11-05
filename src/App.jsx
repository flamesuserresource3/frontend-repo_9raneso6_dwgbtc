import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Techniques from './components/Techniques';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0b0e] text-white">
      {/* Subtle starry noise overlay */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(1px 1px at 10px 10px, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <Navbar />

      <main className="pt-24">
        <Hero />

        {/* Divider */}
        <div id="about" className="mx-auto max-w-7xl px-4">
          <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <p className="text-white/70 max-w-3xl">
            Rooted in the mountains and shadows of feudal Japan, the shinobi developed methods of movement and perception that prized adaptability over force. In our modern lens, these forms echo in parkour, martial discipline, and design — minimal, effective, and deeply intentional.
          </p>
        </div>

        <Techniques />
        <Gallery />
      </main>

      <Footer />
    </div>
  );
}

export default App;
