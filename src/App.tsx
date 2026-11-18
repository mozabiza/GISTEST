import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProgramsSection } from './components/ProgramsSection';
import { FinancingSection } from './components/FinancingSection';
import { InquirySection } from './components/InquirySection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { PrivacyModal } from './components/PrivacyModal';

export default function App() {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const scrollToForm = () => {
    const el = document.getElementById('borang-pertanyaan');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectProgram = (programTitle: string) => {
    setSelectedProgram(programTitle);
    scrollToForm();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar onNavigateToForm={scrollToForm} />

      <main>
        <HeroSection onNavigateToForm={scrollToForm} />
        <ProgramsSection
          selectedProgramTitle={selectedProgram}
          onSelectProgram={handleSelectProgram}
        />
        <FinancingSection onNavigateToForm={scrollToForm} />
        <InquirySection
          selectedProgram={selectedProgram}
          onClearProgram={() => setSelectedProgram(null)}
          onOpenPrivacy={() => setIsPrivacyOpen(true)}
        />
        <FaqSection />
      </main>

      <Footer onOpenPrivacy={() => setIsPrivacyOpen(true)} />

      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
    </div>
  );
}
