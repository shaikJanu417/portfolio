import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Eye, Terminal, Sparkles } from 'lucide-react';
import { personalDetails, statsData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % personalDetails.taglines.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden bg-radial-gradient">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#FF6B57]/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FF8A65]/10 rounded-full blur-3xl pointer-events-none animate-float"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Typography & Text matching reference layout */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Pill matching screenshot */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0E1621]/90 border border-[#FF6B57]/40 shadow-lg shadow-[#FF6B57]/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B57] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF6B57]"></span>
              </span>
              <span className="text-xs font-semibold text-[#FFB199] tracking-wide">
                Available for new projects
              </span>
            </div>

            {/* Giant Name Headline & Subtitle matching reference screenshot */}
            <div className="space-y-3">
              <h1 className="font-heading text-5xl sm:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B57] via-[#FF8A65] to-[#FFB199] uppercase leading-none">
                SHAIK JANU
              </h1>
              <p className="font-heading font-semibold text-lg sm:text-xl text-[#F5F7FA] tracking-wide">
                Full Stack Developer <span className="text-[#FF6B57]">|</span> Tech Enthusiast <span className="text-[#FF6B57]">|</span> Problem Solver
              </p>
            </div>

            {/* Tagline description text matching reference */}
            <p className="text-base sm:text-lg text-[#A9B3C1] max-w-2xl leading-relaxed">
              I'm a Senior Full-Stack Developer specialized in building high-performance scalable web applications using modern technologies and futuristic designs.
            </p>

          </div>

          {/* Right Column: Full-Height Clean Image Box (Black & White by Default, Color on Hover/Focus) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md group cursor-pointer">
              
              {/* Soft Ambient Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#FF6B57] to-[#FF8A65] opacity-30 blur-2xl group-hover:opacity-60 transition-opacity"></div>
              
              {/* Image Frame Container matching reference screenshot */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0B1D2A] aspect-square w-full">
                
                {/* Floating Top Corner Badge */}
                <div className="absolute top-4 right-4 z-20 px-3.5 py-1.5 rounded-full bg-[#071521]/85 backdrop-blur-md border border-[#FF6B57]/40 text-xs font-semibold text-[#FFB199] shadow-xl flex items-center gap-2 animate-float pointer-events-none">
                  <span className="w-2 h-2 rounded-full bg-[#FF6B57] animate-ping"></span>
                  <Sparkles className="w-3.5 h-3.5 text-[#FF6B57]" />
                  <span>5+ Projects Delivered</span>
                </div>

                <img
                  src={personalDetails.avatar}
                  alt="Shaik Janu"
                  tabIndex={0}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-focus:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-in-out"
                />
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Stats Grid */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#0B1D2A]/80 border border-white/5 hover:border-[#FF6B57]/30 transition-all duration-300 shadow-md group"
            >
              <div className="font-heading text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B57] to-[#FFB199] group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-semibold text-[#F5F7FA]">
                {stat.label}
              </div>
              <div className="text-xs text-[#6B7280] font-mono mt-0.5">
                {stat.accent}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
