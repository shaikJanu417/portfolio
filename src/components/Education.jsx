import React from 'react';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 relative overflow-hidden bg-[#071521]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1D2A] border border-[#FF6B57]/30 text-xs font-semibold text-[#FF6B57] uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#F5F7FA]">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B57] to-[#FFB199]">Qualifications</span>
          </h2>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-panel glass-panel-hover border border-white/10 space-y-4 relative group"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#0B1D2A] border border-[#FF6B57]/20 flex items-center justify-center text-[#FF6B57] group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#FF6B57]/10 text-[#FF6B57] border border-[#FF6B57]/20">
                  {edu.badge}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="font-heading font-bold text-lg text-[#F5F7FA]">
                  {edu.degree}
                </h3>
                <p className="text-xs font-medium text-[#FFB199]">
                  {edu.field}
                </p>
                <p className="text-xs text-[#A9B3C1] pt-1">
                  {edu.institution}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-[#6B7280]">Score</span>
                <span className="text-[#F5F7FA] font-bold bg-[#071521] px-2.5 py-1 rounded border border-white/5">
                  {edu.score}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
