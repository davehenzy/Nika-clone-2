
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black pt-32 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32">
          <div className="lg:col-span-2">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
              LET'S CREATE <br />
              <span className="text-primary italic">TOGETHER.</span>
            </h2>
            <a href="mailto:hello@nika.agency" className="text-2xl md:text-3xl font-medium hover:text-primary transition-colors underline underline-offset-8">
              hello@nika.agency
            </a>
          </div>
          
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">Social</h4>
            <ul className="space-y-4 text-lg">
              <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Dribbble</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">Offices</h4>
            <ul className="space-y-4 text-zinc-400">
              <li>Berlin, Germany <br />Oberbaumstraße 7</li>
              <li>New York, USA <br />250 Hudson St</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded-full" />
            <span className="font-bold">NIKA AGENCY</span>
          </div>
          <p className="text-zinc-600 text-sm">© {new Date().getFullYear()} Nika Agency Inc. All rights reserved.</p>
          <div className="flex gap-8 text-zinc-600 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
