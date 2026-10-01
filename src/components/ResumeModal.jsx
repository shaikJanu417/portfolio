import React, { useState } from 'react';
import { X, Download, Printer, Copy, Check, FileText, Sparkles, Building2, Calendar, MapPin } from 'lucide-react';
import { personalDetails, experienceData, projectsData, educationData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
SHAIK JANU
Hyderabad | ${personalDetails.email} | ${personalDetails.phone}

PROFESSIONAL SUMMARY
${personalDetails.summary}

WORK EXPERIENCE
${experienceData.map(e => `${e.role} - ${e.company} (${e.period})\n${e.bullets.map(b => `• ${b}`).join('\n')}`).join('\n\n')}

PROJECTS
${projectsData.map(p => `${p.title}\n${p.description}`).join('\n\n')}

EDUCATION
${educationData.map(e => `${e.degree} - ${e.institution} (${e.year}) - ${e.score}`).join('\n')}
    `;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#071521] border border-[#FF6B57]/30 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 print:p-0 print:border-none print:shadow-none print:bg-white print:text-black">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#FF6B57]" />
            <h3 className="font-heading text-lg font-bold text-[#F5F7FA]">
              Shaik Janu — Curriculum Vitae
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-xl bg-[#0E1621] text-[#A9B3C1] hover:text-[#FF6B57] border border-white/10 text-xs font-mono flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Resume' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#FF6B57] to-[#FF8A65] text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-[#FF6B57]/20"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-[#0E1621] text-[#A9B3C1] hover:text-white border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Printable Resume View */}
        <div className="space-y-8 text-left text-[#F5F7FA] print:text-black">
          
          {/* Header */}
          <div className="text-center space-y-2 border-b border-white/10 pb-6 print:border-black">
            <h1 className="font-heading text-3xl font-extrabold tracking-wide uppercase text-[#F5F7FA] print:text-black">
              SHAIK JANU
            </h1>
            <p className="text-xs font-mono text-[#A9B3C1] print:text-gray-700">
              Hyderabad, India | <a href={`mailto:${personalDetails.email}`} className="text-[#FF6B57] hover:underline print:text-black">{personalDetails.email}</a> | {personalDetails.phone}
            </p>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-[#FF6B57] uppercase tracking-widest border-b border-[#FF6B57]/30 pb-1 print:text-black print:border-black">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs leading-relaxed text-[#A9B3C1] print:text-black">
              {personalDetails.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-[#FF6B57] uppercase tracking-widest border-b border-[#FF6B57]/30 pb-1 print:text-black print:border-black">
              TECHNICAL SKILLS
            </h2>
            <ul className="text-xs text-[#A9B3C1] space-y-1 print:text-black font-mono">
              <li>• <strong>Programming Languages:</strong> C#, JavaScript</li>
              <li>• <strong>Frontend Technologies:</strong> React JS, TypeScript (TSX), HTML5, CSS3, Bootstrap, jQuery, AJAX</li>
              <li>• <strong>Backend Technologies:</strong> ASP.NET Core, ASP.NET MVC, ASP.NET Web API</li>
              <li>• <strong>Database & ORM:</strong> SQL Server, T-SQL, Entity Framework Core, ADO.NET</li>
              <li>• <strong>Cloud Technologies:</strong> Microsoft Azure (Basics – App Services, Deployment Concepts)</li>
              <li>• <strong>Tools & Platforms:</strong> Visual Studio, IIS, TFS, Postman</li>
            </ul>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold text-[#FF6B57] uppercase tracking-widest border-b border-[#FF6B57]/30 pb-1 print:text-black print:border-black">
              WORK EXPERIENCE
            </h2>

            {experienceData.map((exp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-[#F5F7FA] print:text-black">
                  <div>
                    <span>{exp.role}</span> — <span className="text-[#FFB199] print:text-black">{exp.company}</span> {exp.subCompany && `(${exp.subCompany})`}
                  </div>
                  <div className="font-mono text-[#A9B3C1] print:text-gray-700">
                    {exp.period} | {exp.location}
                  </div>
                </div>

                <ul className="text-xs text-[#A9B3C1] space-y-1 pl-4 print:text-black">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="list-disc leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold text-[#FF6B57] uppercase tracking-widest border-b border-[#FF6B57]/30 pb-1 print:text-black print:border-black">
              PROJECTS
            </h2>

            {projectsData.map((proj, idx) => (
              <div key={idx} className="space-y-1">
                <h3 className="text-xs font-bold text-[#F5F7FA] print:text-black">
                  {proj.title} ({proj.period})
                </h3>
                <p className="text-xs text-[#A9B3C1] print:text-black">
                  {proj.description}
                </p>
                <ul className="text-xs text-[#A9B3C1] pl-4 print:text-black">
                  {proj.highlights.map((h, i) => (
                    <li key={i} className="list-disc">{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-[#FF6B57] uppercase tracking-widest border-b border-[#FF6B57]/30 pb-1 print:text-black print:border-black">
              EDUCATION
            </h2>
            <ul className="text-xs text-[#A9B3C1] space-y-1 print:text-black">
              {educationData.map((edu, i) => (
                <li key={i} className="list-disc ml-4">
                  <strong>{edu.degree}</strong> ({edu.field}) – {edu.institution} with <strong>{edu.score}</strong> ({edu.year})
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
