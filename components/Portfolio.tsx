
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const closeModal = () => setSelectedProject(null);

  return (
    <section id="work" className="py-32 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">SELECTED WORK</h2>
            <p className="text-zinc-500 max-w-md">Our portfolio showcases a range of projects from startups to global enterprises.</p>
          </div>
          <div className="flex gap-4">
            <button className="text-primary font-bold border-b-2 border-primary pb-1">All Work</button>
            <button className="text-zinc-600 font-bold hover:text-white transition-colors pb-1">Branding</button>
            <button className="text-zinc-600 font-bold hover:text-white transition-colors pb-1">Development</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id} 
              onClick={() => setSelectedProject(project)}
              className={`group cursor-pointer ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6 bg-zinc-900">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex items-end p-10">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <span className="text-white font-semibold bg-primary/20 backdrop-blur-md px-6 py-2 rounded-full text-sm border border-primary/40 shadow-xl">
                      View Project
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start px-2">
                <div>
                  <p className="text-primary font-mono text-xs uppercase tracking-widest mb-1">{project.category}</p>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300 group-hover:-rotate-45">
                  <svg className="w-5 h-5 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-xl transition-opacity duration-300"
            onClick={closeModal}
          />
          <div className="relative w-full max-w-5xl bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 animate-float-slow">
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-black/50 hover:bg-primary hover:text-black text-white rounded-full flex items-center justify-center transition-all backdrop-blur-md border border-white/10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-[300px] lg:h-[600px]">
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-16 flex flex-col justify-center">
                <span className="text-primary font-mono text-sm uppercase tracking-[0.2em] mb-4 block">{selectedProject.category}</span>
                <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">{selectedProject.title}</h2>
                <p className="text-zinc-400 text-lg lg:text-xl leading-relaxed mb-12">
                  {selectedProject.description}
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 py-4 border-b border-white/5">
                    <span className="text-zinc-500 font-mono text-xs uppercase w-24">Services</span>
                    <span className="text-white">Branding, UI/UX, Creative Direction</span>
                  </div>
                  <div className="flex items-center gap-4 py-4 border-b border-white/5">
                    <span className="text-zinc-500 font-mono text-xs uppercase w-24">Year</span>
                    <span className="text-white">2024</span>
                  </div>
                </div>

                <div className="mt-12 flex gap-4">
                  <button className="px-8 py-4 bg-primary text-black font-bold rounded-full hover:scale-105 transition-transform">
                    Launch Experience
                  </button>
                  <button className="px-8 py-4 bg-zinc-800 text-white font-bold rounded-full hover:bg-zinc-700 transition-colors">
                    Case Study
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
