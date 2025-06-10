
import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-0 relative overflow-hidden px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-transparent"></div>
      
      <div className="text-center animate-fade-in-up relative z-10 max-w-4xl">
        <div className="inline-block mb-6">
          <span className="px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full text-yellow-400 text-sm font-medium">
            Available for work
          </span>
        </div>
        
        <h1 className="text-white mb-6">
          Hi, I'm <span className="gradient-text">Your Name</span>
        </h1>
        
        <h2 className="text-zinc-400 text-2xl md:text-3xl lg:text-4xl mb-8 font-light">
          I create exceptional digital experiences
        </h2>
        
        <p className="max-w-2xl mx-auto mb-12 text-xl leading-relaxed">
          A passionate software engineer specializing in building beautiful, 
          functional, and user-centered digital experiences with modern technologies.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#work"
            className="apple-button group"
          >
            View My Work
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-600 rounded-full transition-all duration-300"
          >
            <Download size={16} className="mr-2" />
            Download CV
          </a>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-float opacity-60"></div>
      <div className="absolute top-3/4 right-10 w-3 h-3 bg-yellow-400 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-float opacity-80" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;
