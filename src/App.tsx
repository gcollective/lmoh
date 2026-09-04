import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { MissionSection } from './components/MissionSection';
import { ServicesSection } from './components/ServicesSection';
import { SubstackFeedSection } from './components/SubstackFeedSection';
import { IntakeForm } from './components/IntakeForm';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ArchitectureModal } from './components/ArchitectureModal';
import { LegalDisclaimerModal } from './components/LegalDisclaimerModal';

export default function App() {
  const [isArchitectureOpen, setIsArchitectureOpen] = useState(false);
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [selectedServiceForIntake, setSelectedServiceForIntake] = useState<string | undefined>();

  const handleSelectServiceForIntake = (serviceId: string) => {
    setSelectedServiceForIntake(serviceId);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans-legal selection:bg-amber-500 selection:text-slate-950">
      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenArchitecture={() => setIsArchitectureOpen(true)}
        onOpenDisclaimerModal={() => setIsDisclaimerOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Dignified Hero Header (Home) */}
        <Hero
          onOpenArchitecture={() => setIsArchitectureOpen(true)}
          onOpenDisclaimerModal={() => setIsDisclaimerOpen(true)}
        />

        {/* 2. About Us & Founder Bio (N. A-A Abdullah-Malik) */}
        <AboutSection
          onOpenDisclaimerModal={() => setIsDisclaimerOpen(true)}
          onSelectServiceForIntake={handleSelectServiceForIntake}
        />

        {/* 3. Mission Statement & Three Pillars */}
        <MissionSection />

        {/* 4. Professional Services & Legal Expertise */}
        <ServicesSection
          onSelectServiceForIntake={handleSelectServiceForIntake}
        />

        {/* 5. Substack Blog Integration & Live Feed */}
        <SubstackFeedSection />

        {/* 6. Preliminary Case Review & Intake Form */}
        <IntakeForm
          initialServiceId={selectedServiceForIntake}
          onOpenDisclaimerModal={() => setIsDisclaimerOpen(true)}
        />

        {/* 7. Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenDisclaimerModal={() => setIsDisclaimerOpen(true)}
        onOpenArchitecture={() => setIsArchitectureOpen(true)}
      />

      {/* Modals */}
      <ArchitectureModal
        isOpen={isArchitectureOpen}
        onClose={() => setIsArchitectureOpen(false)}
      />

      <LegalDisclaimerModal
        isOpen={isDisclaimerOpen}
        onClose={() => setIsDisclaimerOpen(false)}
      />
    </div>
  );
}
