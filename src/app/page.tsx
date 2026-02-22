"use client"
import { useState } from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { ProblemSection } from '../components/ProblemSection';
import { TurningPointSection } from '../components/TurningPointSection';
import { SolutionSection } from '../components/SolutionSection';
import { SocialProofSection } from '../components/SocialProofSection';
import { LeadMagnetSection } from '../components/LeadMagnetSection';
import { ValueSection } from '../components/ValueSection';
import { AboutSection } from '../components/AboutSection';
import { PricingSection } from '../components/PricingSection';
import { FAQSection } from '../components/FAQSection';
import { FinalCTASection } from '../components/FinalCTASection';
import { Footer } from '../components/Footer';
import { ThankYouPage } from '../components/ThankYouPage';
// import { LeadForm } from '../components/LeadForm';
import { StickyCTA } from '../components/StickyCTA';

type FormType = 'purchase' | 'lead' | null;

export default function Home() {
  // const [showForm, setShowForm] = useState<FormType>(null);
  const [showThankYou, setShowThankYou] = useState<FormType>(null);

  const handleGetStarted = () => {
    // setShowForm('purchase');       // NOTE: Enable this when using "Forms" to collect data.
    window.open("https://livelifesuccessfull.gumroad.com/", "_blank")
  };

  const handleDownloadGuide = () => {
    // setShowForm('lead');         // NOTE: Enable this when using "Forms" to collect data.
    // window.open("https://livelifesuccessfull.gumroad.com/l/the-discipline-reset-checklist", "_blank")
    window.open("https://livelifesuccessfull.gumroad.com/l/30-day-habit-transformation-blueprint-free-version", "_blank")
  };

  // const handleFormSubmit = (data: { name: string; email: string }) => {
  //   console.log('Form submitted:', data);
  //   // In a real app, this would send data to your backend/Supabase
  //   setShowForm(null);
  //   setShowThankYou(showForm);
  // };

  const handleBackToHome = () => {
    setShowThankYou(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show thank you page if needed
  if (showThankYou) {
    return <ThankYouPage type={showThankYou} onBackToHome={handleBackToHome} />;
  }

  return (
    <div className="relative selection:bg-orange-300 selection:text-black">
      <Header />
      <main>
        <HeroSection onGetStarted={handleGetStarted} onDownloadGuide={handleDownloadGuide} />
        <ProblemSection />
        <TurningPointSection />
        <SolutionSection onGetStarted={handleGetStarted} />
        <SocialProofSection />
        <LeadMagnetSection onDownloadGuide={handleDownloadGuide} />
        <ValueSection />
        <AboutSection />
        <PricingSection onGetStarted={handleGetStarted} />
        <FAQSection />
        <FinalCTASection onGetStarted={handleGetStarted} />
      </main>

      <Footer />

      {/* Sticky Mobile CTA */}
      {/* <StickyCTA onClick={handleGetStarted} /> */}

      {/* Lead Form Modal */}
      {/* {showForm && (
        <LeadForm
          type={showForm}
          onClose={() => setShowForm(null)}
          onSubmit={handleFormSubmit}
        />
      )} */}
    </div>
  );
}
