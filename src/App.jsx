import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import ApiTerminal from './components/ApiTerminal';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#071521] text-[#F5F7FA] font-sans antialiased selection:bg-[#FF6B57] selection:text-white relative">
      
      {/* Sticky Glass Navigation Bar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About onOpenResume={() => setResumeOpen(true)} />
        <Skills />
        <Services />
        <Projects />
        <ApiTerminal />
        <Experience />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Printable Resume Drawer / Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

    </div>
  );
}
