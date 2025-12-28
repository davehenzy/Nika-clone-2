
import React from 'react';

const Navbar: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (!target) return;

    const navbarHeight = 80; // height of our fixed navbar
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800;
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);
      
      // EaseInOutQuad function for smooth deceleration
      const easing = percentage < 0.5 
        ? 2 * percentage * percentage 
        : -1 + (4 - 2 * percentage) * percentage;

      window.scrollTo(0, startPosition + distance * easing);

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
    
    // Update URL hash without jumping
    window.history.pushState(null, '', targetId);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-black font-black text-xl">N</span>
          </div>
          <span className="font-bold text-xl tracking-tight">NIKA.</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="#work" 
            onClick={(e) => handleScroll(e, '#work')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Work
          </a>
          <a 
            href="#services" 
            onClick={(e) => handleScroll(e, '#services')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Services
          </a>
          <a 
            href="#ai-strategist" 
            onClick={(e) => handleScroll(e, '#ai-strategist')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            AI Strategist
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleScroll(e, '#contact')}
            className="px-5 py-2.5 bg-white text-black rounded-full text-sm font-bold hover:bg-primary transition-all"
          >
            Start a Project
          </a>
        </div>
        
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
