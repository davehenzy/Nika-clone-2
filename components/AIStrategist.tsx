
import React, { useState } from 'react';
import { gemini } from '../services/geminiService';

const AIStrategist: React.FC = () => {
  const [industry, setIndustry] = useState('');
  const [vibe, setVibe] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!industry || !vibe) return;
    
    setLoading(true);
    setResult(null);
    try {
      const response = await gemini.generateBrandConcept(industry, vibe);
      setResult(response || "No response received.");
    } catch (error) {
      setResult("Oops, something went wrong with the AI Strategist.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-strategist" className="py-32 px-6 bg-zinc-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20 mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary font-mono text-xs uppercase tracking-wider font-bold">Powered by Gemini 3 Flash</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1]">
              FUTURE-PROOF <br />YOUR BRAND.
            </h2>
            <p className="text-zinc-400 text-lg mb-10 leading-relaxed max-w-md">
              Try our experimental AI Brand Strategist. Input your business idea, and Nika's AI core will draft a visionary concept in seconds.
            </p>

            <form onSubmit={handleGenerate} className="space-y-6 max-w-sm">
              <div>
                <label className="block text-sm font-mono uppercase tracking-widest text-zinc-500 mb-2">Industry</label>
                <input 
                  type="text" 
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  placeholder="e.g. Sustainable Fashion" 
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-mono uppercase tracking-widest text-zinc-500 mb-2">Vibe / Personality</label>
                <input 
                  type="text" 
                  value={vibe}
                  onChange={(e) => setVibe(e.target.value)}
                  placeholder="e.g. Minimalist, Bold, Futuristic" 
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white"
                />
              </div>
              <button 
                disabled={loading}
                className="w-full py-4 bg-primary text-black font-bold rounded-xl hover:bg-emerald-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Strategizing...
                  </>
                ) : 'Generate Concept'}
              </button>
            </form>
          </div>

          <div className="min-h-[500px] glass rounded-3xl p-8 border border-white/5 relative overflow-y-auto max-h-[700px]">
            {!result && !loading && (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-30">
                <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <p className="font-mono text-sm">Awaiting parameters...</p>
              </div>
            )}
            
            {loading && (
              <div className="space-y-4 animate-pulse">
                <div className="h-8 bg-zinc-800 rounded w-1/2"></div>
                <div className="h-4 bg-zinc-800 rounded w-full"></div>
                <div className="h-4 bg-zinc-800 rounded w-full"></div>
                <div className="h-4 bg-zinc-800 rounded w-3/4"></div>
                <div className="h-32 bg-zinc-800 rounded w-full"></div>
              </div>
            )}

            {result && (
              <div className="prose prose-invert max-w-none">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-primary">Strategic Concept</h3>
                  <button onClick={() => setResult(null)} className="text-xs text-zinc-500 hover:text-white">Clear</button>
                </div>
                <div className="text-zinc-300 leading-relaxed whitespace-pre-wrap font-sans">
                  {result}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIStrategist;
