
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import AIStrategist from './components/AIStrategist';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* Statistics Bar */}
        <section className="py-12 border-y border-white/5 bg-zinc-950/50">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-1 text-primary">150+</div>
              <div className="text-xs uppercase tracking-widest text-zinc-500 font-mono">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-1 text-primary">12</div>
              <div className="text-xs uppercase tracking-widest text-zinc-500 font-mono">Global Awards</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-1 text-primary">98%</div>
              <div className="text-xs uppercase tracking-widest text-zinc-500 font-mono">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-1 text-primary">8</div>
              <div className="text-xs uppercase tracking-widest text-zinc-500 font-mono">Years Excellence</div>
            </div>
          </div>
        </section>

        <Portfolio />

        {/* Services Highlight */}
        <section id="services" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div>
                <h2 className="text-4xl font-bold mb-6">CORE CAPABILITIES</h2>
                <p className="text-zinc-500 mb-8 leading-relaxed">We push the boundaries of what is possible, merging aesthetic brilliance with technical precision.</p>
                <div className="w-20 h-1 bg-primary" />
              </div>
              
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 rounded-2xl bg-zinc-900 border border-white/5 hover:border-primary/50 transition-colors">
                  <h3 className="text-xl font-bold mb-4">Strategic Design</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Visual identity systems that grow with your company. We build frameworks, not just logos.
                  </p>
                </div>
                <div className="p-8 rounded-2xl bg-zinc-900 border border-white/5 hover:border-primary/50 transition-colors">
                  <h3 className="text-xl font-bold mb-4">Development</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Cutting-edge tech stack implementations including React, WebGL, and custom API integrations.
                  </p>
                </div>
                <div className="p-8 rounded-2xl bg-zinc-900 border border-white/5 hover:border-primary/50 transition-colors">
                  <h3 className="text-xl font-bold mb-4">Experience UI/UX</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    User-centric journeys mapped through data and refined through creative intuition.
                  </p>
                </div>
                <div className="p-8 rounded-2xl bg-zinc-900 border border-white/5 hover:border-primary/50 transition-colors">
                  <h3 className="text-xl font-bold mb-4">Motion & Content</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Telling stories through fluid motion and impactful visual narratives across all devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AIStrategist />
        
        {/* Testimonial Quote */}
        <section className="py-40 px-6 bg-zinc-950 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="text-6xl text-primary font-serif italic mb-8 block opacity-50">"</span>
            <p className="text-3xl md:text-5xl font-medium leading-tight mb-12 italic text-zinc-200">
              Nika transformed our vision into a digital reality that exceeded every expectation. Their strategic depth is unparalleled in the industry.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden grayscale">
                <img src="https://picsum.photos/seed/ceo/100/100" alt="Client" />
              </div>
              <div className="text-left">
                <div className="font-bold">Sarah Jenkins</div>
                <div className="text-zinc-500 text-sm font-mono">CEO, Lumina Energy</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
