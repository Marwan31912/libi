import React, { useState, useEffect, useRef } from 'react';
import { Language, PageId } from '../types';
import { content } from '../content';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { MOTION_EASE } from './motion/MotionUtils';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../libionix/logo.png';
import logoL from '../libionix/L.png';
import ghaithIcon from '../icon/GHAITH.png';
import zenaIcon from '../icon/Zena AI.png';
import monqithIcon from '../icon/منقذ.png';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  activePage,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(true);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const t = content[language];
  const shouldReduceMotion = useReducedMotion();

  const dropdownProjects = [
    {
      id: 'ghaith',
      page: 'project-ghaith' as PageId,
      title: { ar: 'غيث | Ghaith', en: 'Ghaith' },
      icon: ghaithIcon,
      desktopClass: 'h-10 sm:h-12 w-auto max-w-[210px]',
      mobileClass: 'h-10 sm:h-11 w-auto max-w-[190px]',
    },
    {
      id: 'monqith',
      page: 'project-munqidh' as PageId,
      title: { ar: 'منقذ | Munqidh', en: 'Monqith' },
      icon: monqithIcon,
      desktopClass: 'h-13 sm:h-[62px] w-auto max-w-[220px]',
      mobileClass: 'h-12 sm:h-14 w-auto max-w-[200px]',
    },
    {
      id: 'zena',
      page: 'project-zena' as PageId,
      title: { ar: 'Zena AI', en: 'Zena AI' },
      icon: zenaIcon,
      desktopClass: 'h-14 sm:h-[64px] w-auto max-w-[220px]',
      mobileClass: 'h-13 sm:h-[58px] w-auto max-w-[200px]',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle outside click to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProjectsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsProjectsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsProjectsDropdownOpen(false);
    }, 180);
  };

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setIsProjectsDropdownOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleLanguage = () => {
    onLanguageChange(language === 'en' ? 'ar' : 'en');
  };

  const navItems: { label: string; page: PageId }[] = [
    { label: t.nav.home, page: 'home' },
    { label: t.nav.about, page: 'about' },
    { label: t.nav.projects, page: 'projects' },
    { label: t.nav.team, page: 'team' },
    { label: t.nav.contact, page: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-[#060907]/90 backdrop-blur-xl border-b border-emerald-500/20 shadow-[0_4px_25px_rgba(16,185,129,0.08)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.8)] text-slate-900 dark:text-white'
          : 'bg-white/80 dark:bg-[#060907]/60 backdrop-blur-md border-b border-emerald-500/15 dark:border-emerald-500/10 shadow-none text-slate-900 dark:text-white'
      }`}
    >
      <div className="relative w-full px-6 sm:px-10 lg:px-16 2xl:px-24 h-20 flex items-center justify-between">
        <motion.button
          whileHover={shouldReduceMotion ? {} : { opacity: 0.85, scale: 1.02 }}
          onClick={() => handleNavClick('home')}
          className="shrink-0 flex items-center cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500 z-10"
          aria-label="Libionix Home"
        >
          <div className="flex items-center gap-2 select-none" dir="ltr">
            <img
              src={logoL}
              alt="Libionix Emblem"
              className="h-9 sm:h-10 w-auto object-contain select-none"
            />
            <img
              src={logo}
              alt="Libionix"
              className="h-6 sm:h-7 w-auto object-contain select-none dark:brightness-0 dark:invert transition-all"
            />
          </div>
        </motion.button>

        <nav
          className="hidden md:flex items-center gap-8 text-sm font-medium tracking-tight absolute left-1/2 -translate-x-1/2 z-10"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const isActive =
              activePage === item.page ||
              (item.page === 'projects' &&
                (activePage === 'project-ghaith' ||
                  activePage === 'project-application' ||
                  activePage === 'project-zena' ||
                  activePage === 'project-munqidh'));

            if (item.page === 'projects') {
              return (
                <div
                  key={item.page}
                  ref={dropdownRef}
                  className="relative py-2"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => handleNavClick('projects')}
                    className={`relative whitespace-nowrap shrink-0 transition-colors cursor-pointer group flex items-center gap-1.5 ${
                      isActive
                        ? 'text-emerald-700 dark:text-white font-semibold'
                        : 'text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400'
                    }`}
                    aria-expanded={isProjectsDropdownOpen}
                    aria-haspopup="true"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isProjectsDropdownOpen
                          ? 'rotate-180 text-emerald-600 dark:text-emerald-400'
                          : 'text-slate-500 dark:text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400'
                      }`}
                    />
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-[-8px] left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-emerald-300 to-emerald-400 shadow-[0_0_10px_#10B981]"
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    {!isActive && (
                      <span className="absolute bottom-[-8px] left-0 right-0 h-[1.5px] bg-emerald-500/60 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rtl:origin-right duration-200" />
                    )}
                  </button>

                  {/* Dropdown Menu with Project Logos */}
                  <AnimatePresence>
                    {isProjectsDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.18, ease: MOTION_EASE }}
                        className={`absolute top-full mt-2 w-64 sm:w-72 bg-[#070B08]/98 backdrop-blur-2xl border border-white/10 rounded-none p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.9)] z-50 ${
                          language === 'ar' ? 'right-0' : 'left-0'
                        }`}
                      >
                        <div className="flex flex-col gap-1 divide-y divide-white/5" dir="ltr">
                          {dropdownProjects.map((proj) => (
                            <button
                              key={proj.id}
                              onClick={() => handleNavClick(proj.page)}
                              className="w-full flex items-center justify-start min-h-[58px] sm:min-h-[66px] py-2 px-4 rounded-none hover:bg-white/[0.06] transition-all duration-200 group cursor-pointer"
                              aria-label={proj.title[language]}
                            >
                              <img
                                src={proj.icon}
                                alt={proj.title[language]}
                                className={`${proj.desktopClass} object-contain object-left filter group-hover:brightness-110 group-hover:scale-[1.02] transition-all duration-200`}
                              />
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`relative py-2 whitespace-nowrap shrink-0 transition-colors cursor-pointer group ${
                  isActive
                    ? 'text-emerald-700 dark:text-white font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-emerald-300 to-emerald-400 shadow-[0_0_10px_#10B981]"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
                {!isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-emerald-500/60 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rtl:origin-right duration-200" />
                )}
              </button>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-2.5 shrink-0 z-10">
          {/* Language Toggle Button */}
          <motion.button
            whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
            onClick={toggleLanguage}
            className="px-4 py-2 text-xs font-mono font-medium tracking-wider text-emerald-800 dark:text-emerald-300 hover:text-emerald-950 dark:hover:text-white bg-emerald-50/80 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-all border border-emerald-500/30 hover:border-emerald-400 rounded-full cursor-pointer flex items-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.15)] focus-visible:outline-2 focus-visible:outline-emerald-500"
            aria-label={`Switch language to ${language === 'en' ? 'Arabic' : 'English'}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse shadow-[0_0_6px_#10B981]" />
            <span>{language === 'en' ? 'AR · العربية' : 'EN · English'}</span>
          </motion.button>
        </div>

        <div className="flex md:hidden items-center gap-2 z-10">
          <button
            onClick={toggleLanguage}
            className="px-3 py-1.5 text-xs font-mono font-medium border border-emerald-500/30 bg-emerald-50/90 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 rounded-full flex items-center gap-1.5"
            aria-label="Toggle language"
          >
            <span className="w-1 h-1 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
            {language === 'en' ? 'AR · العربية' : 'EN · English'}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors rounded-full focus-visible:outline-2 focus-visible:outline-emerald-500"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: MOTION_EASE }}
            className="md:hidden border-b border-emerald-500/20 bg-white/98 dark:bg-[#070B09]/98 text-slate-900 dark:text-white backdrop-blur-2xl px-6 py-6 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col gap-3 text-base font-medium">
              {navItems.map((item) => {
                const isActive =
                  activePage === item.page ||
                  (item.page === 'projects' &&
                    (activePage === 'project-ghaith' ||
                      activePage === 'project-application' ||
                      activePage === 'project-zena' ||
                      activePage === 'project-munqidh'));

                if (item.page === 'projects') {
                  return (
                    <div key={item.page} className="border-b border-emerald-500/10 pb-3">
                      <div className="flex items-center justify-between py-2">
                        <button
                          onClick={() => handleNavClick('projects')}
                          className={`text-left rtl:text-right font-medium transition-colors ${
                            isActive
                              ? 'text-emerald-600 dark:text-emerald-400 font-bold'
                              : 'text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400'
                          }`}
                        >
                          {item.label}
                        </button>
                        <button
                          onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                          className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 rounded-md"
                          aria-label="Toggle projects sub-menu"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              mobileProjectsOpen ? 'rotate-180 text-emerald-600 dark:text-emerald-400' : ''
                            }`}
                          />
                        </button>
                      </div>

                      {mobileProjectsOpen && (
                        <div className="flex flex-col gap-2 pt-2 pr-2 rtl:pr-0 rtl:pl-2 border-r-2 rtl:border-r-0 rtl:border-l-2 border-emerald-500/20 dark:border-white/10 my-1" dir="ltr">
                          {dropdownProjects.map((proj) => (
                            <button
                              key={proj.id}
                              onClick={() => handleNavClick(proj.page)}
                              className="w-full flex items-center justify-start min-h-[50px] sm:min-h-[56px] p-2.5 px-3 rounded-none bg-[#070B08] hover:bg-[#0E1711] transition-all cursor-pointer group"
                              aria-label={proj.title[language]}
                            >
                              <img
                                src={proj.icon}
                                alt={proj.title[language]}
                                className={`${proj.mobileClass} object-contain object-left group-hover:scale-105 transition-transform`}
                              />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <button
                    key={item.page}
                    onClick={() => handleNavClick(item.page)}
                    className={`py-2 text-left rtl:text-right transition-colors border-b border-emerald-500/10 flex items-center justify-between ${
                      isActive
                        ? 'text-emerald-600 dark:text-emerald-400 font-bold'
                        : 'text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#10B981]" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
