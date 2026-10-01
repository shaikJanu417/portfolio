import React from 'react';
import { User, Award, ShieldCheck, Zap, Server, Code, CheckCircle2, Building2, Briefcase } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function About({ onOpenResume }) {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#071521]">
      {/* Background lights */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#FF6B57]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1D2A] border border-[#FF6B57]/30 text-xs font-semibold text-[#FF6B57] tracking-wider uppercase">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#F5F7FA]">
            Passionate Engineering with <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B57] to-[#FFB199]">
              Enterprise Reliability & High Performance
            </span>
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-[#A9B3C1]">
            Transforming complex financial requirements and business workflows into scalable, secure, and intuitive web applications.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Photo & Strengths Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Profile Avatar Portrait Banner */}
            <div className="p-4 rounded-2xl glass-panel border border-[#FF6B57]/30 flex items-center gap-4 bg-[#0B1D2A]/80 shadow-lg">
              <img
                src={personalDetails.avatar}
                alt="Shaik Janu"
                tabIndex={0}
                className="w-16 h-16 rounded-xl object-cover border-2 border-[#FF6B57] shadow-md shadow-[#FF6B57]/20 grayscale hover:grayscale-0 focus:grayscale-0 transition-all duration-500 cursor-pointer"
              />
              <div>
                <h4 className="font-heading font-bold text-base text-[#F5F7FA]">Shaik Janu</h4>
                <p className="text-xs text-[#FF6B57] font-mono">.NET Full Stack Developer</p>
                <p className="text-[11px] text-[#A9B3C1]">Hyderabad, India • 3.6+ Years Experience</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl glass-panel glass-panel-hover border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B57]/15 border border-[#FF6B57]/30 flex items-center justify-center text-[#FF6B57]">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-[#A9B3C1]">3.5 Yrs Subsidiary Experience</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-[#F5F7FA]">
                Financial Domain Background
              </h3>
              <p className="text-xs text-[#A9B3C1] leading-relaxed">
                Engineered loan processing & ledger management solutions for Bharat Financial Inclusion Limited (IndusInd Bank Subsidiary), maintaining strict security, high uptime, and role-based permissions.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-panel glass-panel-hover border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#FF8A65]/15 border border-[#FF8A65]/30 flex items-center justify-center text-[#FF8A65]">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-[#FF6B57] font-semibold">+20% Speedup</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-[#F5F7FA]">
                SQL Query & Backend Performance Optimization
              </h3>
              <p className="text-xs text-[#A9B3C1] leading-relaxed">
                Specialist in T-SQL stored procedures, view generation, query execution path tuning, and indexing strategies that cut system processing times by 20%.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-panel glass-panel-hover border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#FFB199]/15 border border-[#FFB199]/30 flex items-center justify-center text-[#FFB199]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-[#A9B3C1]">Freelance & Enterprise</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-[#F5F7FA]">
                Full Stack Modern React & TypeScript
              </h3>
              <p className="text-xs text-[#A9B3C1] leading-relaxed">
                Architected dual-portal fashion e-commerce platforms with separate customer and boutique owner portals, analytics dashboards, and REST API middleware.
              </p>
            </div>

          </div>

          {/* Right Side: Professional Bio & Timeline */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="p-8 rounded-3xl bg-[#0B1D2A]/90 border border-white/10 space-y-6 shadow-xl relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B57]/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="space-y-4">
                <h3 className="font-heading text-2xl font-bold text-[#F5F7FA]">
                  Engineered for Impact, Security & Precision
                </h3>
                
                <p className="text-sm text-[#A9B3C1] leading-relaxed">
                  I am a <strong className="text-[#F5F7FA] font-semibold">.NET Full Stack Developer</strong> with over <strong className="text-[#FF6B57]">3.6 years of experience</strong> building end-to-end scalable web applications. My core expertise lies in combining powerful backend architectures using <span className="text-[#FFB199]">ASP.NET Core Web API, C#, and SQL Server</span> with modern, responsive frontends in <span className="text-[#FFB199]">React JS and TypeScript</span>.
                </p>

                <p className="text-sm text-[#A9B3C1] leading-relaxed">
                  Having worked in high-security financial domain environments as a Software Engineer at Bharat Financial Inclusion Ltd (IndusInd Bank Subsidiary) as well as managing full software lifecycles for freelance clients, I focus on delivering clean code, robust RESTful APIs, JWT authentication, and optimized database performance.
                </p>
              </div>

              {/* Key Bullet Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Layered Software Architecture",
                  "JWT & Role-Based Access Control",
                  "20% SQL Query Performance Boost",
                  "React.js & TypeScript (TSX) UIs",
                  "C# Async Parallel Processing",
                  "IIS & Azure Deployment Concepts"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B57] shrink-0" />
                    <span className="text-xs text-[#F5F7FA] font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="block text-xs text-[#6B7280]">Current Role & Location:</span>
                  <span className="text-xs font-semibold text-[#F5F7FA]">Freelance Web Developer • Hyderabad, India</span>
                </div>

                <button
                  onClick={onOpenResume}
                  className="px-5 py-2.5 rounded-xl bg-[#FF6B57]/15 text-[#FF6B57] border border-[#FF6B57]/30 hover:bg-[#FF6B57] hover:text-white transition-all text-xs font-semibold"
                >
                  Inspect Full Resume
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
