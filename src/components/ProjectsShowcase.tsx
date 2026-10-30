import React, { useRef, useEffect } from 'react';
import { Language, PageId } from '../types';
import { content, projectsData } from '../content';
import { motion, useReducedMotion } from 'motion/react';
import { ScrollReveal, MOTION_EASE } from './motion/MotionUtils';
import { ArrowRight, Cpu, Layers, Sparkles } from 'lucide-react';

interface ProjectsShowcaseProps {
  language: Language;
  onNavigate: (page: PageId) => void;
  isStandalonePage?: boolean;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({
  language,
  onNavigate,
  isStandalonePage = false,
}) => {
  const t = content[language];
  const ghaith = projectsData.find((p) => p.id === 'ghaith')!;
  const appProject = projectsData.find((p) => p.id === 'application')!;
  const zena = projectsData.find((p) => p.id === 'zena')!;
  const shouldReduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(video);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      className={`w-full bg-[#FAFCFA] dark:bg-[#050806] ${
        isStandalonePage ? 'pb-16 md:pb-24 pt-8 md:pt-12' : 'pb-20 md:pb-32'
      } border-b border-emerald-500/20`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 2xl:px-24">
        {/* Section Header */}
        <ScrollReveal yOffset={20}>
          <div className="text-center py-12 md:py-16 mb-16 md:mb-24 border-b border-emerald-500/20 flex flex-col items-center justify-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white tracking-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]">
              {language === 'ar' ? 'مشاريعنا' : 'Our Projects'}
            </h2>
          </div>
        </ScrollReveal>

        {/* Project 01: Ghaith */}
        <div className="mb-24 md:mb-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <ScrollReveal
              yOffset={28}
              duration={0.75}
              className="lg:col-span-7 order-1 lg:order-1"
            >
              <div
                onClick={() => onNavigate('project-ghaith')}
                className="group relative border border-emerald-500/25 hover:border-emerald-500/70 bg-white dark:bg-[#090F0C] overflow-hidden cursor-pointer transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.06)] dark:shadow-[0_0_25px_rgba(0,0,0,0.8)] hover:shadow-[0_10px_35px_rgba(16,185,129,0.22)]"
              >
                <div className="aspect-[16/10] overflow-hidden bg-gradient-to-br from-emerald-50 via-emerald-100/30 to-white dark:from-emerald-950/40 dark:via-[#070D0A] dark:to-[#040605] flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-radial-at-c from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
                  <div className="text-center p-8 z-10 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full border border-emerald-500/40 bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-700 dark:text-emerald-400 mb-4 shadow-[0_0_20px_rgba(16,185,129,0.25)] group-hover:scale-110 transition-transform">
                      <Cpu className="w-8 h-8" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-widest text-emerald-700 dark:text-emerald-400/90 mb-1 font-semibold">
                      HARDWARE PROTOTYPE
                    </span>
                    <span className="text-2xl font-bold text-slate-900 dark:text-white font-mono">
                      غيث | Ghaith
                    </span>
                  </div>
                </div>

              </div>
            </ScrollReveal>

            <ScrollReveal
              yOffset={24}
              duration={0.7}
              delay={0.1}
              className="lg:col-span-5 order-2 lg:order-2 flex flex-col justify-center"
            >

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
                <bdi dir="rtl" className="inline-block" style={{ unicodeBidi: 'isolate' }}>
                  {ghaith.name[language]}
                </bdi>
              </h3>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                {ghaith.shortDescription[language]}
              </p>
              <div>
                <motion.button
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  transition={{ duration: 0.2, ease: MOTION_EASE }}
                  onClick={() => onNavigate('project-ghaith')}
                  className="px-8 py-3.5 text-xs font-bold tracking-wider uppercase text-slate-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400 hover:from-emerald-300 hover:to-emerald-200 transition-all rounded-full cursor-pointer inline-flex items-center gap-3 group shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(16,185,129,0.55)] focus-visible:outline-2 focus-visible:outline-emerald-400"
                >
                  <span>{t.projects.viewProject}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
                </motion.button>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Project 02: HAJJA */}
        <div className="mb-24 md:mb-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-5">
                <bdi dir="rtl" className="inline-block" style={{ unicodeBidi: 'isolate' }}>
                  {appProject.name[language]}
                </bdi>
              </h3>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                {appProject.shortDescription[language]}
              </p>
              <div>
                <motion.button
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  transition={{ duration: 0.2, ease: MOTION_EASE }}
                  onClick={() => onNavigate('project-application')}
                  className="px-8 py-3.5 text-xs font-bold tracking-wider uppercase text-slate-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400 hover:from-emerald-300 hover:to-emerald-200 transition-all rounded-full cursor-pointer inline-flex items-center gap-3 group shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(16,185,129,0.55)] focus-visible:outline-2 focus-visible:outline-emerald-400"
                >
                  <span>{t.projects.viewProject}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
                </motion.button>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div
                onClick={!isStandalonePage ? () => onNavigate('project-application') : undefined}
                className={`group relative border border-emerald-500/35 hover:border-emerald-500/80 overflow-hidden bg-white dark:bg-[#050706] transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.06)] dark:shadow-[0_0_30px_rgba(16,185,129,0.15)] ${
                  !isStandalonePage ? 'cursor-pointer' : ''
                }`}
              >
                <div className="aspect-[16/10] overflow-hidden bg-gradient-to-br from-emerald-50 via-emerald-100/30 to-white dark:from-emerald-950/30 dark:via-[#070A08] dark:to-[#040605] flex items-center justify-center relative">
                  <div className="text-center p-8 z-10 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full border border-emerald-500/40 bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-700 dark:text-emerald-400 mb-4 shadow-[0_0_20px_rgba(16,185,129,0.25)] group-hover:scale-110 transition-transform">
                      <Layers className="w-8 h-8" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-widest text-emerald-700 dark:text-emerald-400/90 mb-1 font-semibold">
                      EDUCATIONAL PLATFORM
                    </span>
                    <span className="text-2xl font-bold text-slate-900 dark:text-white font-mono">
                      حجة | HAJJA
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Project 03: Zena AI */}
        <div className="mb-24 md:mb-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <ScrollReveal
              yOffset={28}
              duration={0.75}
              className="lg:col-span-7 order-1 lg:order-1"
            >
              <div
                onClick={() => onNavigate('project-zena')}
                className="group relative border border-emerald-500/25 hover:border-emerald-500/70 bg-white dark:bg-[#090F0C] overflow-hidden cursor-pointer transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.06)] dark:shadow-[0_0_25px_rgba(0,0,0,0.8)] hover:shadow-[0_10px_35px_rgba(16,185,129,0.22)]"
              >
                <div className="aspect-[16/10] overflow-hidden bg-gradient-to-br from-emerald-50 via-emerald-100/30 to-white dark:from-emerald-950/40 dark:via-[#070A08] dark:to-[#040605] flex items-center justify-center relative">
                  <div className="text-center p-8 z-10 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full border border-emerald-500/40 bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-700 dark:text-emerald-400 mb-4 shadow-[0_0_20px_rgba(16,185,129,0.25)] group-hover:scale-110 transition-transform">
                      <Sparkles className="w-8 h-8" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-widest text-emerald-700 dark:text-emerald-400/90 mb-1 font-semibold">
                      COGNITIVE RESEARCH SYSTEM
                    </span>
                    <span className="text-2xl font-bold text-slate-900 dark:text-white font-mono">
                      Zena AI
                    </span>
                  </div>
                </div>

              </div>
            </ScrollReveal>

            <ScrollReveal
              yOffset={24}
              duration={0.7}
              delay={0.1}
              className="lg:col-span-5 order-2 lg:order-2 flex flex-col justify-center"
            >

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
                <bdi dir="ltr" className="inline-block" style={{ unicodeBidi: 'isolate' }}>
                  {zena.name[language]}
                </bdi>
              </h3>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                {zena.shortDescription[language]}
              </p>
              <div>
                <motion.button
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  transition={{ duration: 0.2, ease: MOTION_EASE }}
                  onClick={() => onNavigate('project-zena')}
                  className="px-8 py-3.5 text-xs font-bold tracking-wider uppercase text-slate-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400 hover:from-emerald-300 hover:to-emerald-200 transition-all rounded-full cursor-pointer inline-flex items-center gap-3 group shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(16,185,129,0.55)] focus-visible:outline-2 focus-visible:outline-emerald-400"
                >
                  <span>{t.projects.viewProject}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
                </motion.button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
