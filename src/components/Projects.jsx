import React, { useState } from 'react';
import { ExternalLink, Layers, Sparkles, CheckCircle2, ChevronRight, X, Eye, Code, Database, Cpu } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filters = ['All', 'Full Stack', 'Financial Systems', 'Automation'];

  const filteredProjects = projectsData.filter((project) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Full Stack' && (project.category.includes('Full Stack') || project.category.includes('Enterprise'))) return true;
    if (selectedFilter === 'Financial Systems' && (project.category.includes('Financial') || project.title.includes('DLP') || project.title.includes('BCM') || project.title.includes('OCM'))) return true;
    if (selectedFilter === 'Automation' && (project.category.includes('Automation') || project.tech.includes('C#'))) return true;
    return true;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#0B1D2A]/30">
      {/* Background glow elements */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#FF6B57]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071521] border border-[#FF6B57]/30 text-xs font-semibold text-[#FF6B57] uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#F5F7FA]">
            Highlighted Engineering Projects & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B57] via-[#FF8A65] to-[#FFB199]">
              Enterprise Systems
            </span>
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-[#A9B3C1]">
            Real-world applications delivered across financial banking institutions, e-commerce web platforms, and automated cloud extraction tools.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-14">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                selectedFilter === filter
                  ? 'bg-gradient-to-r from-[#FF6B57] to-[#FF8A65] text-white shadow-lg shadow-[#FF6B57]/30'
                  : 'bg-[#0E1621] text-[#A9B3C1] hover:text-[#F5F7FA] border border-white/5 hover:border-white/20'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Alternating Project Cards List */}
        <div className="space-y-16">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 hover:border-[#FF6B57]/40 transition-all duration-300 shadow-2xl group"
              >
                {/* Image Section */}
                <div
                  className={`lg:col-span-6 relative overflow-hidden rounded-2xl aspect-video cursor-pointer ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                  onClick={() => setActiveModalProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071521] via-transparent to-transparent opacity-80"></div>
                  
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#071521]/90 backdrop-blur-md text-[#FF6B57] border border-[#FF6B57]/30">
                    {project.category}
                  </span>

                  {/* Quick Inspect Hover Overlay */}
                  <div className="absolute inset-0 bg-[#071521]/70 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF6B57] to-[#FF8A65] text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-[#FF6B57]/40">
                      <Eye className="w-4 h-4" /> Inspect Project Details
                    </button>
                  </div>
                </div>

                {/* Content Section */}
                <div
                  className={`lg:col-span-6 space-y-5 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-[#A9B3C1]">
                      <span>{project.period}</span>
                      {project.featured && (
                        <span className="text-[#FF6B57] font-semibold flex items-center gap-1">
                          <Sparkles className="w-3 h-3" /> Featured Architecture
                        </span>
                      )}
                    </div>

                    <h3
                      onClick={() => setActiveModalProject(project)}
                      className="font-heading text-2xl sm:text-3xl font-bold text-[#F5F7FA] group-hover:text-[#FF6B57] transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm font-medium text-[#FFB199]">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#A9B3C1] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-1">
                    {project.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#FF6B57] shrink-0 mt-0.5" />
                        <span className="text-xs text-[#F5F7FA]">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-md text-[11px] font-mono font-medium bg-[#0E1621] text-[#A9B3C1] border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-3 flex items-center gap-3">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#FF6B57] to-[#FF8A65] hover:opacity-90 transition-all flex items-center gap-1.5 shadow-md shadow-[#FF6B57]/20"
                    >
                      <span>Full Case Study</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="p-2 rounded-xl bg-[#0E1621] border border-white/10 text-[#A9B3C1] hover:text-[#F5F7FA] hover:border-white/20 transition-all"
                      title="View Architecture Details"
                    >
                      <Code className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Detail Modal Preview */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0B1D2A] border border-[#FF6B57]/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono text-[#FF6B57] font-semibold">
                  {activeModalProject.category} • {activeModalProject.period}
                </span>
                <h3 className="font-heading text-2xl font-bold text-[#F5F7FA] mt-1">
                  {activeModalProject.title}
                </h3>
                <p className="text-xs text-[#A9B3C1]">{activeModalProject.subtitle}</p>
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2 rounded-full bg-[#0E1621] text-[#A9B3C1] hover:text-white border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Banner */}
            <div className="rounded-2xl overflow-hidden aspect-video relative border border-white/10">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Detailed Description */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-[#F5F7FA] uppercase tracking-wider font-mono">
                Project Overview & Architecture
              </h4>
              <p className="text-xs sm:text-sm text-[#A9B3C1] leading-relaxed">
                {activeModalProject.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-[#F5F7FA] uppercase tracking-wider font-mono">
                Engineering Highlights & Key Contributions
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeModalProject.highlights.map((h, i) => (
                  <div key={i} className="p-3 rounded-xl bg-[#0E1621] border border-white/5 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B57] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#F5F7FA]">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-[#A9B3C1] uppercase tracking-wider font-mono">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.tech.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-lg text-xs font-mono bg-[#071521] text-[#FFB199] border border-[#FF6B57]/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-2 rounded-xl text-xs font-semibold bg-[#0E1621] text-[#A9B3C1] hover:text-white border border-white/10"
              >
                Close Case Study
              </button>

              <a
                href="#contact"
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#FF6B57] to-[#FF8A65] shadow-md shadow-[#FF6B57]/30"
              >
                Inquire About Similar Architecture →
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
