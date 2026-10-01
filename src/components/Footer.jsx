import React from 'react';
import { ArrowUp, Mail, Phone, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalDetails } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071521] border-t border-white/10 pt-16 pb-12 relative overflow-hidden text-[#A9B3C1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Top Footer Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF6B57] to-[#FF8A65] p-0.5 shadow-md shadow-[#FF6B57]/30">
                <div className="w-full h-full bg-[#071521] rounded-[10px] flex items-center justify-center">
                  <span className="font-heading font-extrabold text-base text-[#FF6B57]">
                    SJ
                  </span>
                </div>
              </div>
              <span className="font-heading font-bold text-xl text-[#F5F7FA]">
                Shaik Janu
              </span>
            </div>
            <p className="text-xs text-[#6B7280] max-w-sm">
              .NET Full Stack Developer & React Specialist with 3.6+ years of scalable web engineering experience.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${personalDetails.email}`}
              className="p-3 rounded-xl bg-[#0B1D2A] border border-white/10 text-[#A9B3C1] hover:text-[#FF6B57] hover:border-[#FF6B57]/40 transition-all"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </a>

            <a
              href={`tel:${personalDetails.phone}`}
              className="p-3 rounded-xl bg-[#0B1D2A] border border-white/10 text-[#A9B3C1] hover:text-[#FF6B57] hover:border-[#FF6B57]/40 transition-all"
              title="Call"
            >
              <Phone className="w-5 h-5" />
            </a>

            <a
              href={personalDetails.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-[#0B1D2A] border border-white/10 text-[#A9B3C1] hover:text-[#FF6B57] hover:border-[#FF6B57]/40 transition-all"
              title="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            <a
              href={personalDetails.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-[#0B1D2A] border border-white/10 text-[#A9B3C1] hover:text-[#FF6B57] hover:border-[#FF6B57]/40 transition-all"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-[#0B1D2A] border border-[#FF6B57]/30 text-[#FF6B57] hover:bg-[#FF6B57] hover:text-white transition-all shadow-md shadow-[#FF6B57]/20 flex items-center gap-2 text-xs font-semibold"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B7280]">
          <p>© {new Date().getFullYear()} Shaik Janu. Designed with dark futuristic developer aesthetic.</p>
          <div className="flex items-center gap-4 font-mono">
            <span>ASP.NET Core</span>
            <span>•</span>
            <span>React JS</span>
            <span>•</span>
            <span>SQL Server</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
