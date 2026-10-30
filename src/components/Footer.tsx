import React from 'react';
import { Language, PageId } from '../types';
import { content, projectsData } from '../content';
import { motion, useReducedMotion } from 'motion/react';
import { ScrollReveal } from './motion/MotionUtils';
import logo from '../libionix/logo.png';
import logoL from '../libionix/L.png';

interface FooterProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onLanguageChange,
  onNavigate,
}) => {
  const t = content[language];
  const ghaith = projectsData.find((p) => p.id === 'ghaith')!;
  const appProject = projectsData.find((p) => p.id === 'application')!;
  const zena = projectsData.find((p) => p.id === 'zena')!;
  const shouldReduceMotion = useReducedMotion();

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navPages: Array<'home' | 'about' | 'projects' | 'team' | 'contact'> = [
    'home',
    'about',
    'projects',
    'team',
    'contact',
  ];

  return (
    <footer className="w-full bg-white dark:bg-[#030504] text-slate-800 dark:text-[#E5E7EB] pt-16 pb-12 border-t border-emerald-500/20">
      <div className="w-full px-6 sm:px-10 lg:px-16 2xl:px-24">
        <ScrollReveal yOffset={20} duration={0.65}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-emerald-500/15">
            <div className="lg:col-span-5 space-y-4">
              <motion.button
                whileHover={shouldReduceMotion ? {} : { opacity: 0.85, scale: 1.02 }}
                onClick={() => handleNav('home')}
                className="cursor-pointer inline-flex items-center select-none"
                aria-label="Libionix Home"
              >
                <div className="flex items-center gap-2 select-none" dir="ltr">
                  <img
                    src={logoL}
                    alt="Libionix Emblem"
                    className="h-10 sm:h-11 w-auto object-contain select-none"
                  />
                  <img
                    src={logo}
                    alt="Libionix"
                    className="h-7 sm:h-8 w-auto object-contain brightness-0 dark:invert select-none"
                  />
                </div>
              </motion.button>
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
                {t.footer.aboutSummary}
              </p>
            </div>

            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                {t.footer.navigationTitle}
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400 font-mono">
                {navPages.map((p) => (
                  <li key={p}>
                    <motion.button
                      whileHover={
                        shouldReduceMotion
                          ? {}
                          : { x: language === 'ar' ? -3 : 3 }
                      }
                      transition={{ duration: 0.15 }}
                      onClick={() => handleNav(p)}
                      className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
                    >
                      {t.nav[p]}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                {t.footer.projectsTitle}
              </h4>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li>
                  <motion.button
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : { x: language === 'ar' ? -3 : 3 }
                    }
                    transition={{ duration: 0.15 }}
                    onClick={() => handleNav('project-ghaith')}
                    className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors flex items-center justify-between w-full group cursor-pointer text-left rtl:text-right"
                  >
                    <bdi dir="rtl" style={{ unicodeBidi: 'isolate' }}>
                      {ghaith.name[language]}
                    </bdi>
                    <span className="text-xs font-mono text-emerald-600/80 dark:text-emerald-500/70 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {ghaith.status[language]}
                    </span>
                  </motion.button>
                </li>
                <li>
                  <motion.button
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : { x: language === 'ar' ? -3 : 3 }
                    }
                    transition={{ duration: 0.15 }}
                    onClick={() => handleNav('project-application')}
                    className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors flex items-center justify-between w-full group cursor-pointer text-left rtl:text-right"
                  >
                    <bdi dir="rtl" style={{ unicodeBidi: 'isolate' }}>
                      {appProject.name[language]}
                    </bdi>
                    <span className="text-xs font-mono text-emerald-600/80 dark:text-emerald-500/70 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {appProject.status[language]}
                    </span>
                  </motion.button>
                </li>
                <li>
                  <motion.button
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : { x: language === 'ar' ? -3 : 3 }
                    }
                    transition={{ duration: 0.15 }}
                    onClick={() => handleNav('project-zena')}
                    className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors flex items-center justify-between w-full group cursor-pointer text-left rtl:text-right"
                  >
                    <bdi dir="ltr" style={{ unicodeBidi: 'isolate' }}>
                      {zena.name[language]}
                    </bdi>
                    <span className="text-xs font-mono text-emerald-600/80 dark:text-emerald-500/70 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {zena.status[language]}
                    </span>
                  </motion.button>
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 font-mono gap-4 tracking-wider">
          <div>{t.footer.copyright}</div>
        </div>
      </div>
    </footer>
  );
};
