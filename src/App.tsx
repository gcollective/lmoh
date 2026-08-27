import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
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
        {/* 1. Dignified Hero Header */}
        <Hero
          onOpenArchitecture={() => setIsArchitectureOpen(true)}
          onOpenDisclaimerModal={() => setIsDisclaimerOpen(true)}
        />

        {/* 2. Mission Statement & Three Pillars */}
        <MissionSection />

        {/* 3. Professional Services & Legal Expertise */}
        <ServicesSection
          onSelectServiceForIntake={handleSelectServiceForIntake}
        />

        {/* 4. Substack Blog Integration & Live Feed */}
        <SubstackFeedSection />

        {/* 5. Preliminary Case Review & Intake Form */}
        <IntakeForm
          initialServiceId={selectedServiceForIntake}
          onOpenDisclaimerModal={() => setIsDisclaimerOpen(true)}
        />

        {/* 6. Frequently Asked Questions */}
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
