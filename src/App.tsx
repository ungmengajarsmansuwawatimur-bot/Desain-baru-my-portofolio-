import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutExperience } from './components/AboutExperience';
import { RealWork } from './components/RealWork';
import { RetailLearning } from './components/RetailLearning';
import { SkillsContact } from './components/SkillsContact';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { PhotoGuideModal } from './components/PhotoGuideModal';
import { ThemeTransitionOverlay } from './components/ThemeTransitionOverlay';

export default function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [photoModalTarget, setPhotoModalTarget] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] text-[#171717] dark:text-[#F5F5F5] flex flex-col selection:bg-[#F9B51B] selection:text-[#171717] transition-colors duration-200 relative">
      {/* Theme Transition Ambience Overlay */}
      <ThemeTransitionOverlay />

      {/* Top Accessible Skip Link */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#111111] dark:focus:bg-[#242424] focus:text-white focus:rounded-md focus:font-bold focus:shadow-lg"
      >
        Lewati ke Konten Utama
      </a>

      {/* Persistent Responsive Navbar */}
      <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full overflow-x-hidden">
        {/* 01 HOME */}
        <Hero
          onOpenCvModal={() => setIsCvModalOpen(true)}
        />

        {/* 02 ABOUT & EXPERIENCE */}
        <AboutExperience
          onOpenStoreModal={() => setPhotoModalTarget('Visual Operasional Retail')}
        />

        {/* 03 REAL WORK */}
        <RealWork />

        {/* 04 RETAIL LEARNING */}
        <RetailLearning />

        {/* 05 SKILLS / CV / CONTACT */}
        <SkillsContact onOpenCvModal={() => setIsCvModalOpen(true)} />
      </main>

      {/* Persistent Responsive Footer */}
      <Footer onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Interactive Global Modals */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />

      <PhotoGuideModal
        isOpen={Boolean(photoModalTarget)}
        target={photoModalTarget || undefined}
        onClose={() => setPhotoModalTarget(null)}
      />
    </div>
  );
}
