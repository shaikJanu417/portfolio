import { useState } from 'react';
import PortfolioPage from './components/PortfolioPage';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      <PortfolioPage onOpenResume={() => setResumeOpen(true)} />
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
