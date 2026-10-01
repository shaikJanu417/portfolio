import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, Building2, CheckCircle2, ChevronDown, ChevronUp, Award, Sparkles } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#0B1D2A]/40">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#FF6B57]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071521] border border-[#FF6B57]/30 text-xs font-semibold text-[#FF6B57] uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work History & Timeline</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#F5F7FA]">
            Professional Work Experience & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B57] via-[#FF8A65] to-[#FFB199]">
              Career Achievements
            </span>
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-[#A9B3C1]">
            3.6+ years of verified software engineering experience in full-stack web applications, banking domain microservices, and freelance platform delivery.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FF6B57] via-[#FF8A65]/40 to-transparent"></div>

          <div className="space-y-12">
            {experienceData.map((exp, index) => {
              const isEven = index % 2 === 0;
              const isExpanded = expandedIndex === index;

              return (
                <div
                  key={index}
                  className="relative flex flex-col sm:flex-row items-start"
                >
                  
                  {/* Timeline Glowing Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-6 z-20 w-8 h-8 rounded-full bg-[#071521] border-2 border-[#FF6B57] flex items-center justify-center shadow-[0_0_15px_#FF6B57]">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B57]"></div>
                  </div>

                  {/* Experience Card Wrapper */}
                  <div
                    className={`w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0 ${
                      isEven ? 'sm:mr-auto sm:text-left' : 'sm:ml-auto sm:text-left'
                    }`}
                  >
                    <div
                      className={`p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 hover:border-[#FF6B57]/40 transition-all duration-300 shadow-xl space-y-4 ${
                        isExpanded ? 'bg-[#0E1621]/90 border-[#FF6B57]/30' : ''
                      }`}
                    >
                      {/* Top Meta Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                        <div>
                          <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase bg-[#FF6B57]/15 text-[#FF6B57]">
                            {exp.type}
                          </span>
                          <h3 className="font-heading text-xl font-bold text-[#F5F7FA] mt-1">
                            {exp.role}
                          </h3>
                          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#FFB199] mt-0.5">
                            <Building2 className="w-3.5 h-3.5 text-[#FF6B57]" />
                            <span>{exp.company}</span>
                            {exp.subCompany && (
                              <span className="text-xs text-[#A9B3C1] font-normal">
                                ({exp.subCompany})
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="text-right text-xs font-mono text-[#A9B3C1] space-y-1">
                          <div className="flex items-center gap-1.5 text-[#FF6B57] font-semibold">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1 justify-end text-[11px] text-[#6B7280]">
                            <MapPin className="w-3 h-3" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Brief Description */}
                      <p className="text-xs sm:text-sm text-[#A9B3C1] leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Expandable Key Contributions */}
                      <div className="space-y-2 pt-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[#F5F7FA] uppercase font-mono tracking-wider">
                            Responsibilities & Achievements
                          </span>
                          <button
                            onClick={() => setExpandedIndex(isExpanded ? null : index)}
                            className="text-xs text-[#FF6B57] font-semibold flex items-center gap-1 hover:underline"
                          >
                            <span>{isExpanded ? 'Collapse' : 'Expand All'}</span>
                            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                          </button>
                        </div>

                        {/* Bullet Items */}
                        <div className={`space-y-2 transition-all ${isExpanded ? 'block' : 'line-clamp-3 overflow-hidden'}`}>
                          {exp.bullets.map((b, idx) => (
                            <div key={idx} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-[#FF6B57] shrink-0 mt-0.5" />
                              <span className="text-xs text-[#F5F7FA] leading-relaxed">{b}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack Tags */}
                      <div className="pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-[#071521] text-[#A9B3C1] border border-white/5"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
