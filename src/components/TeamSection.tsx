import React from 'react';
import { Language, PageId } from '../types';
import { content } from '../content';
import { motion, useReducedMotion } from 'motion/react';
import { ScrollReveal, StaggerContainer, StaggerItem, MOTION_EASE } from './motion/MotionUtils';
import { Cpu, Network, Layers, Sparkles, ArrowUpRight } from 'lucide-react';

interface TeamSectionProps {
  language: Language;
  onNavigate?: (page: PageId) => void;
  isStandalonePage?: boolean;
}

const divisionIcons = [
  <Cpu className="w-5 h-5 text-emerald-400" />,
  <Network className="w-5 h-5 text-emerald-400" />,
  <Layers className="w-5 h-5 text-emerald-400" />,
  <Sparkles className="w-5 h-5 text-emerald-400" />,
];

export const TeamSection: React.FC<TeamSectionProps> = ({
  language,
  onNavigate,
  isStandalonePage = false,
}) => {
  const t = content[language];
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className={`w-full bg-[#050806] ${
        isStandalonePage ? 'py-16 md:py-24' : 'py-20 md:py-28'
      } border-b border-emerald-500/20`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 2xl:px-24">
        <ScrollReveal yOffset={20}>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10B981]" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-400">
              {t.team.kicker}
            </span>
            <span className="text-emerald-500/40">·</span>
            <span className="text-xs font-mono uppercase tracking-[0.15em] text-slate-400">
              {language === 'ar' ? 'الكفاءات والتكامل' : 'Competencies & Synergy'}
            </span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 md:mb-20">
          <ScrollReveal yOffset={24} duration={0.7} className="lg:col-span-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white tracking-tight leading-[1.2] mb-6 drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
              {t.team.title}
            </h2>
            <p className="text-xl sm:text-2xl text-slate-200 font-normal leading-relaxed border-l-2 rtl:border-l-0 rtl:border-r-2 border-emerald-500 pl-6 rtl:pl-0 rtl:pr-6 py-1">
              "{t.team.subtitle}"
            </p>
          </ScrollReveal>

          <ScrollReveal
            yOffset={24}
            duration={0.7}
            delay={0.15}
            className="lg:col-span-4 flex flex-col justify-between"
          >
            <p className="text-sm text-slate-400 leading-relaxed">{t.team.overview}</p>
            {onNavigate && !isStandalonePage && (
              <div className="pt-6">
                <motion.button
                  whileHover={shouldReduceMotion ? {} : { x: language === 'ar' ? -4 : 4 }}
                  transition={{ duration: 0.2, ease: MOTION_EASE }}
                  onClick={() => onNavigate('team')}
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-emerald-400 hover:text-emerald-300 underline underline-offset-4 decoration-emerald-500/40 hover:decoration-emerald-400 transition-all cursor-pointer"
                >
                  <span>
                    {language === 'ar'
                      ? 'استعراض صفحة الفريق الكاملة'
                      : 'View Full Team Profile'}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 rtl:rotate-[-90deg]" />
                </motion.button>
              </div>
            )}
          </ScrollReveal>
        </div>

        <div className="mb-20">
          <div className="text-xs uppercase tracking-widest text-emerald-400 font-mono mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {t.team.divisionsTitle}
          </div>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.team.divisions.map((div, index) => (
              <StaggerItem key={div.code}>
                <div className="h-full p-6 sm:p-7 bg-[#090F0C] border border-emerald-500/20 hover:border-emerald-400/70 transition-all duration-300 flex flex-col justify-between group shadow-[0_0_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_30px_rgba(16,185,129,0.18)]">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-mono text-xs text-emerald-400 tracking-wider uppercase group-hover:text-emerald-300 transition-colors">
                        {div.code}
                      </span>
                      <div className="p-2.5 bg-emerald-950/60 border border-emerald-500/30">
                        {divisionIcons[index % divisionIcons.length]}
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-white tracking-tight mb-1.5">
                      {div.name}
                    </h3>
                    <div className="text-xs font-mono font-medium text-emerald-400/80 mb-4">
                      {div.role}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {div.description}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-emerald-500/15 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-emerald-500/60 uppercase">
                      LIBYONICS
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#10B981] animate-pulse" />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <div className="mb-20 p-8 sm:p-10 bg-[#090F0C] border border-emerald-500/25 shadow-[0_0_30px_rgba(0,0,0,0.6)] backdrop-blur-md">
          <div className="text-xs uppercase tracking-widest text-emerald-400 font-mono mb-8 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {t.team.valuesTitle}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x rtl:md:divide-x-reverse divide-emerald-500/20">
            {t.team.values.map((val) => (
              <div key={val.num} className="pt-6 md:pt-0 md:px-6 first:px-0">
                <span className="font-mono text-xs text-emerald-400 mb-3 block">
                  [{val.num}]
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2 tracking-tight">
                  {val.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <ScrollReveal yOffset={16}>
          <div className="p-8 sm:p-10 bg-gradient-to-r from-[#070C09] via-[#09140E] to-[#070C09] border border-emerald-500/35 text-white flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-[0_0_35px_rgba(16,185,129,0.15)]">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-mono block mb-2">
                {t.team.cultureTitle}
              </span>
              <p className="text-sm text-slate-300 leading-relaxed">{t.team.cultureText}</p>
            </div>
            {onNavigate && (
              <motion.button
                whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                onClick={() => onNavigate('contact')}
                className="shrink-0 px-8 py-3.5 bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400 hover:from-emerald-300 hover:to-emerald-200 text-slate-950 text-xs font-bold tracking-wider uppercase transition-all cursor-pointer flex items-center justify-center gap-2 self-start md:self-auto rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)]"
              >
                <span>{t.team.joinCta}</span>
                <ArrowUpRight className="w-3.5 h-3.5 rtl:rotate-[-90deg] text-black" />
              </motion.button>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
