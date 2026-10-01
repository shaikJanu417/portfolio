import React from 'react';
import { Layers, Cpu, Database, Terminal, CheckCircle2, Sparkles, ArrowUpRight } from 'lucide-react';
import { servicesData } from '../data/portfolioData';

const iconMap = {
  Layers: Layers,
  Cpu: Cpu,
  Database: Database,
  Terminal: Terminal
};

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#071521]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1D2A] border border-[#FF6B57]/30 text-xs font-semibold text-[#FF6B57] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Services & Capabilities</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#F5F7FA]">
            Core Technical Solutions & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B57] via-[#FF8A65] to-[#FFB199]">
              Full Stack Engineering Services
            </span>
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-[#A9B3C1]">
            Delivering robust backend architectures, secure API infrastructure, optimized database queries, and responsive modern web interfaces.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service) => {
            const IconComp = iconMap[service.icon] || Layers;

            return (
              <div
                key={service.id}
                className="p-8 rounded-3xl glass-panel glass-panel-hover border border-white/10 space-y-6 relative group overflow-hidden"
              >
                {/* Subtle Card Background Glow */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FF6B57]/10 rounded-full blur-3xl group-hover:bg-[#FF6B57]/20 transition-all pointer-events-none"></div>

                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF6B57] to-[#FF8A65] p-0.5 shadow-lg shadow-[#FF6B57]/20">
                    <div className="w-full h-full bg-[#071521] rounded-[14px] flex items-center justify-center text-[#FF6B57] group-hover:text-white transition-colors">
                      <IconComp className="w-7 h-7" />
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className="p-2.5 rounded-xl bg-[#0E1621] border border-white/10 text-[#A9B3C1] group-hover:text-[#FF6B57] group-hover:border-[#FF6B57]/40 transition-all"
                    title="Discuss Service"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>

                <div className="space-y-2">
                  <h3 className="font-heading text-2xl font-bold text-[#F5F7FA] group-hover:text-[#FF6B57] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#A9B3C1] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features Pill Checklist */}
                <div className="grid grid-cols-2 gap-2.5 pt-2 border-t border-white/10">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B57] shrink-0" />
                      <span className="text-xs text-[#F5F7FA] font-medium">{feat}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
