import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutExperience } from './components/AboutExperience';
import { RealWork } from './components/RealWork';
import { RetailLearning } from './components/RetailLearning';
import { SkillsContact } from './components/SkillsContact';
import { CvModal } from './components/CvModal';
import { PhotoGuideModal } from './components/PhotoGuideModal';
import { ThemeTransitionOverlay } from './components/ThemeTransitionOverlay';
import { ProjectDetailJasaDigital } from './components/ProjectDetailJasaDigital';
import { ProjectDetailPadds } from './components/ProjectDetailPadds';
import { ProjectDetailUsahaKeluarga } from './components/ProjectDetailUsahaKeluarga';

type ActiveProject = 'jasa-digital' | 'padds-smansat' | 'usaha-keluarga' | null;

export default function App() {
  const [activeProject, setActiveProject] = useState<ActiveProject>(() => {
    const hash = window.location.hash;
    if (hash === '#/project/jasa-digital') return 'jasa-digital';
    if (hash === '#/project/padds-smansat') return 'padds-smansat';
    if (hash === '#/project/usaha-keluarga') return 'usaha-keluarga';
    return null;
  });

  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [photoModalTarget, setPhotoModalTarget] = useState<string | null>(null);

  // Synchronize routing with browser history and hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/project/jasa-digital') {
        setActiveProject('jasa-digital');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#/project/padds-smansat') {
        setActiveProject('padds-smansat');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#/project/usaha-keluarga') {
        setActiveProject('usaha-keluarga');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setActiveProject(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectProject = (id: 'jasa-digital' | 'padds-smansat' | 'usaha-keluarga') => {
    setActiveProject(id);
    window.location.hash = `#/project/${id}`;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBackToHome = () => {
    setActiveProject(null);
    window.location.hash = '#work';
    setTimeout(() => {
      const el = document.getElementById('work');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 40);
  };

  const handleNavigateHomeFromNav = (sectionId?: string) => {
    setActiveProject(null);
    window.location.hash = sectionId ? `#${sectionId}` : '#home';
    setTimeout(() => {
      const target = sectionId || 'home';
      const el = document.getElementById(target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 40);
  };

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
      <Navbar
        onOpenCvModal={() => setIsCvModalOpen(true)}
        isDetailPage={Boolean(activeProject)}
        onNavigateHome={handleNavigateHomeFromNav}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full overflow-x-hidden pt-20">
        {activeProject === 'jasa-digital' ? (
          <ProjectDetailJasaDigital onBack={handleBackToHome} />
        ) : activeProject === 'padds-smansat' ? (
          <ProjectDetailPadds onBack={handleBackToHome} />
        ) : activeProject === 'usaha-keluarga' ? (
          <ProjectDetailUsahaKeluarga onBack={handleBackToHome} />
        ) : (
          /* Home Page View */
          <>
            {/* 01 HOME */}
            <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />

            {/* 02 ABOUT & EXPERIENCE */}
            <AboutExperience
              onOpenStoreModal={() => setPhotoModalTarget('Visual Operasional Retail')}
            />

            {/* 03 PORTFOLIO PROJECTS (THREE FOCAL MOCKUPS AS VISUAL ENTRY POINTS) */}
            <RealWork onSelectProject={handleSelectProject} />

            {/* 04 RETAIL LEARNING */}
            <RetailLearning />

            {/* 05 SKILLS / CV / CONTACT */}
            <SkillsContact onOpenCvModal={() => setIsCvModalOpen(true)} />
          </>
        )}
      </main>

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
