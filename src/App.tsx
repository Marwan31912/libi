import React, { useState, useEffect } from 'react';
import { Language, PageId } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { DedicatedProjectGhaith } from './components/DedicatedProjectGhaith';
import { DedicatedProjectApp } from './components/DedicatedProjectApp';
import { DedicatedProjectZena } from './components/DedicatedProjectZena';
import { DedicatedProjectMunqidh } from './components/DedicatedProjectMunqidh';
import { ContactSection } from './components/ContactSection';
import { TeamSection } from './components/TeamSection';
import { Footer } from './components/Footer';
import { PageEntryProgress, MOTION_EASE } from './components/motion/MotionUtils';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

export default function App() {
  const [language, setLanguage] = useState<Language>('ar'); // Default to Arabic as primary regional innovation identity, fully toggleable
  const [activePage, setActivePage] = useState<PageId>('home');
  const shouldReduceMotion = useReducedMotion();

  // Dark mode is default
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }, []);

  // Sync HTML attributes for language and reading direction (RTL / LTR)
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    if (language === 'ar') {
      document.body.classList.add('font-arabic');
    } else {
      document.body.classList.remove('font-arabic');
    }
  }, [language]);

  const handleNavigate = (page: PageId) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
  };

  return (
    <div className={`min-h-screen flex flex-col bg-[#FAFCFA] dark:bg-[#050806] text-slate-900 dark:text-[#E5E7EB] selection:bg-emerald-500 selection:text-black relative overflow-x-hidden tech-grid-pattern transition-colors duration-300 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      {/* Ambient Moving Emerald Glows */}
      <div
        aria-hidden="true"
        className="fixed top-[-10%] left-[-10%] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full bg-emerald-500/10 dark:bg-emerald-500/10 blur-[130px] pointer-events-none animate-ambient-pulse z-0"
      />
      <div
        aria-hidden="true"
        className="fixed bottom-[-10%] right-[-10%] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full bg-emerald-600/8 dark:bg-emerald-600/10 blur-[140px] pointer-events-none animate-ambient-pulse z-0"
        style={{ animationDelay: '-6s' }}
      />
      <div
        aria-hidden="true"
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-emerald-400/[0.04] dark:bg-emerald-400/[0.03] blur-[160px] pointer-events-none z-0"
      />

      {/* Refined Initial Page-Entry Progress */}
      <PageEntryProgress />

      {/* Top Bar Navigation */}
      <Navbar
        language={language}
        onLanguageChange={handleLanguageChange}
        activePage={activePage}
        onNavigate={handleNavigate}
      />

      {/* Main Page Content with Smooth Page Transitions */}
      <main className={`flex-1 w-full overflow-hidden relative z-10 ${activePage !== 'home' ? 'pt-20' : ''}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: MOTION_EASE }}
            className="w-full"
          >
            {activePage === 'home' && (
              <>
                <Hero language={language} onNavigate={handleNavigate} />
                <ProjectsShowcase language={language} onNavigate={handleNavigate} />
              </>
            )}

            {activePage === 'about' && (
              <AboutSection language={language} onNavigate={handleNavigate} isStandalonePage={true} />
            )}

            {activePage === 'team' && (
              <TeamSection language={language} onNavigate={handleNavigate} isStandalonePage={true} />
            )}

            {activePage === 'projects' && (
              <ProjectsShowcase language={language} onNavigate={handleNavigate} isStandalonePage={true} />
            )}

            {activePage === 'project-ghaith' && (
              <DedicatedProjectGhaith language={language} onNavigate={handleNavigate} />
            )}

            {activePage === 'project-application' && (
              <DedicatedProjectApp language={language} onNavigate={handleNavigate} />
            )}

            {activePage === 'project-zena' && (
              <DedicatedProjectZena language={language} onNavigate={handleNavigate} />
            )}

            {activePage === 'project-munqidh' && (
              <DedicatedProjectMunqidh language={language} onNavigate={handleNavigate} />
            )}

            {activePage === 'contact' && (
              <ContactSection language={language} isStandalonePage={true} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Corporate Minimalist Footer */}
      <Footer
        language={language}
        onLanguageChange={handleLanguageChange}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
