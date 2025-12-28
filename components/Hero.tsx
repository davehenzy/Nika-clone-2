
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      {/* Background Decorative Elements with Parallax */}
      <div 
        className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full animate-pulse" 
        style={{ 
          transform: `translateY(${scrollY * 0.3}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />
      <div 
        className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full" 
        style={{ 
          transform: `translateY(${scrollY * 0.15}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div 
          className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
          style={{ 
            transform: isVisible ? `translateY(${scrollY * -0.05}px)` : 'translate-y-12' 
          }}
        >
          <h1 className="text-6xl md:text-9xl font-black leading-[0.9] tracking-tighter mb-8">
            CREATIVE <br />
            <span className="text-primary italic">SOLUTIONS</span> <br />
            FOR THE BOLD.
          </h1>
          
          <p className="max-w-xl text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed">
            We are a multidisciplinary design agency crafting digital experiences that resonate, inspire, and drive real results.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#work" className="px-8 py-4 bg-primary text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2">
              Explore Our Work
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#ai-strategist" className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-white font-bold rounded-full hover:bg-zinc-800 transition-colors">
              Talk to AI Strategist
            </a>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40">
          <div className="font-mono text-xs uppercase tracking-widest border-l border-zinc-800 pl-4">Digital Identity</div>
          <div className="font-mono text-xs uppercase tracking-widest border-l border-zinc-800 pl-4">Full-stack Dev</div>
          <div className="font-mono text-xs uppercase tracking-widest border-l border-zinc-800 pl-4">Product Design</div>
          <div className="font-mono text-xs uppercase tracking-widest border-l border-zinc-800 pl-4">Brand Strategy</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
