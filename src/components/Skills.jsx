import React, { useState } from 'react';
import { Code2, Server, Database, Cloud, Layout, Search, Sparkles, Cpu, CheckCircle } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const iconMap = {
  Code2: Code2,
  Layout: Layout,
  Server: Server,
  Database: Database,
  Cloud: Cloud
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const filteredSkills = skillsData.flatMap((cat) => {
    if (activeCategory !== 'All' && cat.category !== activeCategory) return [];
    return cat.skills
      .filter((s) => s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.tag.toLowerCase().includes(searchQuery.toLowerCase()))
      .map((s) => ({ ...s, categoryName: cat.category }));
  });

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0B1D2A]/50">
      {/* Background visual */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#FF6B57]/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071521] border border-[#FF6B57]/30 text-xs font-semibold text-[#FF6B57] uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Tech Stack & Expertise</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#F5F7FA]">
            Mastered Technologies & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B57] via-[#FF8A65] to-[#FFB199]">
              Developer Toolsets
            </span>
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-[#A9B3C1]">
            Comprehensive technical proficiency acquired through enterprise financial applications and modern full-stack web engineering.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#FF6B57] to-[#FF8A65] text-white shadow-lg shadow-[#FF6B57]/25'
                    : 'bg-[#0E1621] text-[#A9B3C1] hover:text-[#F5F7FA] border border-white/5 hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#A9B3C1] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. React, SQL)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#0E1621] border border-white/10 text-xs text-[#F5F7FA] placeholder-[#6B7280] focus:outline-none focus:border-[#FF6B57]"
            />
          </div>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="p-5 rounded-2xl glass-panel glass-panel-hover border border-white/10 space-y-4 relative group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#071521] border border-[#FF6B57]/20 flex items-center justify-center text-[#FF6B57] group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-5 h-5 text-[#FF6B57]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-[#F5F7FA]">
                      {skill.name}
                    </h4>
                    <span className="text-[11px] text-[#6B7280] font-mono">
                      {skill.categoryName} • {skill.type}
                    </span>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-[#FF6B57]/10 text-[#FF6B57] border border-[#FF6B57]/20">
                  {skill.tag}
                </span>
              </div>

              {/* Progress bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono text-[#A9B3C1]">
                  <span>Proficiency</span>
                  <span className="text-[#FF6B57] font-bold">{skill.level}</span>
                </div>
                <div className="w-full bg-[#071521] h-2 rounded-full overflow-hidden p-0.5 border border-white/5">
                  <div
                    className="bg-gradient-to-r from-[#FF6B57] to-[#FFB199] h-full rounded-full transition-all duration-1000 shadow-[0_0_10px_#FF6B57]"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-[#A9B3C1] font-mono text-sm">
            No technical skills found matching "{searchQuery}". Try searching for C#, React, or SQL.
          </div>
        )}

      </div>
    </section>
  );
}
