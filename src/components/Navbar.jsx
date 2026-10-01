import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send, Code, Terminal, Sparkles } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'API Playground', href: '#api-terminal' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Scroll spy logic
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#071521]/85 backdrop-blur-md border-b border-[#FF6B57]/15 py-3 shadow-lg shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6B57] to-[#FF8A65] p-0.5 shadow-md shadow-[#FF6B57]/30 transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#071521] rounded-[10px] flex items-center justify-center">
                <span className="font-heading font-extrabold text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B57] to-[#FFB199]">
                  SJ
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg text-[#F5F7FA] tracking-tight group-hover:text-[#FF6B57] transition-colors">
                Shaik Janu
              </span>
              <span className="text-[11px] text-[#A9B3C1] font-mono tracking-wider">
                .NET FULL STACK
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0B1D2A]/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/5 shadow-inner">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-[#FF6B57] font-semibold bg-[#FF6B57]/10'
                      : 'text-[#A9B3C1] hover:text-[#F5F7FA] hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-[#FF6B57] rounded-full shadow-[0_0_8px_#FF6B57]"></span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-[#F5F7FA] bg-[#0E1621] border border-white/10 hover:border-[#FF6B57]/40 hover:text-[#FF6B57] transition-all duration-200 shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-[#FF6B57]" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#FF6B57] to-[#FF8A65] hover:opacity-90 transition-all duration-200 shadow-md shadow-[#FF6B57]/20 hover:shadow-[#FF6B57]/40 hover:-translate-y-0.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-2 rounded-lg bg-[#0E1621] text-[#FF6B57] border border-white/10 text-xs font-semibold flex items-center gap-1"
              title="View Resume"
            >
              <FileText className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#A9B3C1] hover:text-[#F5F7FA] bg-[#0B1D2A] border border-white/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#FF6B57]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#071521]/95 backdrop-blur-xl border-b border-[#FF6B57]/20 p-6 shadow-2xl transition-all animate-fadeIn">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-[#FF6B57]/15 text-[#FF6B57] border border-[#FF6B57]/30'
                      : 'text-[#A9B3C1] hover:bg-[#0B1D2A] hover:text-[#F5F7FA]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-[#FF6B57]" />}
                </a>
              );
            })}
          </nav>

          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-3 rounded-xl text-sm font-semibold text-[#F5F7FA] bg-[#0E1621] border border-white/10 flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-[#FF6B57]" />
              <span>View & Download Resume</span>
            </button>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#FF6B57] to-[#FF8A65] text-center shadow-lg shadow-[#FF6B57]/30 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Get In Touch</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
