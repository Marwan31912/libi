import React from 'react';
import { Language, PageId } from '../types';
import { motion, useReducedMotion } from 'motion/react';
import { ScrollReveal, MOTION_EASE } from './motion/MotionUtils';
import { Cpu, Layers, Recycle, Sparkles, ArrowRight } from 'lucide-react';
import logo from '../libionix/logo.png';
import logoL from '../libionix/L.png';

interface AboutSectionProps {
  language: Language;
  onNavigate: (page: PageId) => void;
  isStandalonePage?: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  language,
  onNavigate,
  isStandalonePage = false,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const isAr = language === 'ar';

  const projects = isAr
    ? [
        {
          id: 'ghaith',
          name: 'غيث',
          englishName: 'Ghaith',
          deviceTitle: 'غيث | Ghaith',
          category: '01 // العتاد التقني · نظام فيزيائي',
          badge: 'PROJECT 01 // HARDWARE',
          subtitle: 'HARDWARE PROTOTYPE',
          description:
            'مشروع يهدف إلى إعادة تصور تجربة استخدام الهاتف، مع التركيز على احتياجات المكفوفين وذوي الإعاقة.',
          icon: Cpu,
          targetPage: 'project-ghaith' as PageId,
        },
        {
          id: 'hujjah',
          name: 'حجة',
          englishName: 'HAJJA',
          deviceTitle: 'حجة | HAJJA',
          category: '02 // تطبيق برمجي · منصة تدريب',
          badge: 'PROJECT 02 // SOFTWARE APPLICATION',
          subtitle: 'EDUCATIONAL PLATFORM',
          description:
            'منصة للتدريب وتطوير المهارات، تهدف إلى تقليص الفجوة بين قدرات الأفراد ومتطلبات سوق العمل.',
          icon: Layers,
          targetPage: 'project-application' as PageId,
        },
        {
          id: 'munqidh',
          name: 'منقذ',
          englishName: 'Munqidh',
          deviceTitle: 'منقذ | Munqidh',
          category: '03 // استدامة الموارد · الحد من الهدر',
          badge: 'PROJECT 03 // RESOURCE MANAGEMENT',
          subtitle: 'RESOURCE OPTIMIZATION',
          description:
            'مشروع يهدف إلى الحد من هدر المنتجات والسلع، من خلال تسهيل الاستفادة من المنتجات المعرضة للهدر.',
          icon: Recycle,
          targetPage: null,
        },
        {
          id: 'zeina',
          name: 'Zena AI',
          englishName: '',
          deviceTitle: 'Zena AI',
          category: '04 // ذكاء اصطناعي أكاديمي',
          badge: 'PROJECT 04 // COGNITIVE AI',
          subtitle: 'COGNITIVE RESEARCH SYSTEM',
          description:
            'أداة ذكاء اصطناعي متخصصة في دعم البحث العلمي، ومساعدة الطلبة في تطوير مشاريعهم الأكاديمية والوصول إلى المراجع العلمية.',
          icon: Sparkles,
          targetPage: 'project-zena' as PageId,
        },
      ]
    : [
        {
          id: 'ghaith',
          name: 'Ghaith',
          englishName: 'غيث',
          deviceTitle: 'Ghaith | غيث',
          category: '01 // HARDWARE · PHYSICAL SYSTEM',
          badge: 'PROJECT 01 // HARDWARE',
          subtitle: 'HARDWARE PROTOTYPE',
          description:
            'An initiative aimed at reimagining the mobile experience, with focus on the needs of the visually impaired and people with disabilities.',
          icon: Cpu,
          targetPage: 'project-ghaith' as PageId,
        },
        {
          id: 'hujjah',
          name: 'HAJJA',
          englishName: 'حجة',
          deviceTitle: 'HAJJA | حجة',
          category: '02 // SOFTWARE APPLICATION',
          badge: 'PROJECT 02 // SOFTWARE APPLICATION',
          subtitle: 'EDUCATIONAL PLATFORM',
          description:
            'A training and skills development platform aimed at bridging the gap between individual capabilities and labor market requirements.',
          icon: Layers,
          targetPage: 'project-application' as PageId,
        },
        {
          id: 'munqidh',
          name: 'Munqidh',
          englishName: 'منقذ',
          deviceTitle: 'Munqidh | منقذ',
          category: '03 // RESOURCE OPTIMIZATION',
          badge: 'PROJECT 03 // RESOURCE MANAGEMENT',
          subtitle: 'RESOURCE OPTIMIZATION',
          description:
            'An initiative aimed at curbing product and goods waste by facilitating the utilization of items vulnerable to waste.',
          icon: Recycle,
          targetPage: null,
        },
        {
          id: 'zeina',
          name: 'Zena AI',
          englishName: '',
          deviceTitle: 'Zena AI',
          category: '04 // ACADEMIC INTELLIGENCE',
          badge: 'PROJECT 04 // COGNITIVE AI',
          subtitle: 'COGNITIVE RESEARCH SYSTEM',
          description:
            'An AI tool specialized in supporting scientific research, helping students develop academic projects and access scientific references.',
          icon: Sparkles,
          targetPage: 'project-zena' as PageId,
        },
      ];

  return (
    <div className={`w-full bg-[#FAFCFA] dark:bg-[#050806] text-slate-900 dark:text-[#E5E7EB] ${isAr ? 'rtl' : 'ltr'} transition-colors duration-300`}>
      {/* Hero Intro Section without "من نحن" headline as requested */}
      <section className="relative w-full py-16 sm:py-24 border-b border-emerald-500/20 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none"
        />
        <div className="w-full px-6 sm:px-10 lg:px-16 2xl:px-24">
          <ScrollReveal yOffset={24} duration={0.7} className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8 sm:mb-10">
              <div className="flex items-center gap-3 sm:gap-4 select-none" dir="ltr">
                <img
                  src={logoL}
                  alt="Libionix Emblem"
                  className="h-14 sm:h-18 md:h-22 w-auto object-contain select-none"
                />
                <img
                  src={logo}
                  alt="Libionix"
                  className="h-10 sm:h-14 md:h-16 w-auto object-contain brightness-0 dark:invert select-none"
                />
              </div>
            </div>
            {/* Note: كلمة "من نحن" تم إزالتها استجابة لطلب المستخدم */}

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 dark:text-white tracking-tight leading-[1.3] mb-8 drop-shadow-[0_2px_15px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
              {isAr
                ? 'نبني حلولًا تقنية تنطلق من احتياجات الواقع.'
                : 'Building technological solutions rooted in real-world needs.'}
            </h1>

            <div className="space-y-5 text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal text-right sm:text-center">
              <p>
                {isAr
                  ? 'ليبيونيكس هي شركة قابضة متخصصة في مجال التكنولوجيا، تأسست في سبتمبر 2026، وتضم تحت مظلتها أربعة مشاريع تقنية تعمل على تطوير حلول تستجيب لاحتياجات السوق وتعالج تحديات واقعية في مجالات مختلفة.'
                  : 'Libionix is a technology holding company established in September 2026, encompassing four technology initiatives developing solutions that address market demands and real-world challenges across diverse sectors.'}
              </p>
              <p className="text-slate-500 dark:text-slate-400">
                {isAr
                  ? 'نؤمن بأن التكنولوجيا ليست مجرد أدوات، بل وسيلة لابتكار حلول عملية، وخلق فرص جديدة، وتقديم قيمة حقيقية للأفراد والمجتمع.'
                  : 'We believe technology is not merely tools, but a vehicle for crafting practical solutions, creating new opportunities, and delivering authentic value to individuals and society.'}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Vision Statement Section - 1. Make 'رؤيتنا' bigger */}
      <section className="relative w-full py-20 sm:py-24 bg-white dark:bg-[#060A08] border-b border-emerald-500/20 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
        <div className="w-full px-6 sm:px-10 lg:px-16 2xl:px-24">
          <ScrollReveal yOffset={24} duration={0.7} className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center gap-3 text-emerald-600 dark:text-emerald-400 font-semibold mb-6">
              <span className="w-8 sm:w-12 h-[2px] bg-emerald-500" />
              <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-mono tracking-wider">
                {isAr ? 'رؤيتنا' : 'Our Vision'}
              </span>
              <span className="w-8 sm:w-12 h-[2px] bg-emerald-500" />
            </div>
            <blockquote className="text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white font-medium leading-relaxed sm:leading-relaxed md:leading-relaxed tracking-tight drop-shadow-[0_2px_15px_rgba(0,0,0,0.08)] dark:drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
              "
              {isAr
                ? 'أن نكون منظومة تقنية رائدة في تطوير مشاريع مبتكرة تستجيب لاحتياجات السوق، وتساهم في بناء مستقبل أكثر كفاءة واستدامة.'
                : 'To be a leading technological ecosystem developing innovative initiatives that respond to market demands, contributing to building a more efficient and sustainable future.'}
              "
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-2">
              <div className="w-12 h-[1px] bg-emerald-500/30" />
              <div className="w-2 h-2 rotate-45 border border-emerald-500/80 bg-emerald-500/20" />
              <div className="w-12 h-[1px] bg-emerald-500/30" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What We Do Section - 2. Removed green 'ماذا نفعل؟' badge */}
      <section className="relative w-full py-20 sm:py-28 border-b border-emerald-500/20 overflow-hidden bg-[#FAFCFA] dark:bg-[#050806]">
        <div className="w-full px-6 sm:px-10 lg:px-16 2xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <ScrollReveal yOffset={24} duration={0.7} className="lg:col-span-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug mb-6">
                {isAr ? 'ماذا نفعل؟' : 'What We Do'}
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {isAr
                  ? 'نعمل على تطوير وإدارة مشاريع تقنية مستقلة، لكل منها مجالها الخاص ومشكلاتها المستهدفة، ضمن توجه يجمع بين الابتكار، وفهم احتياجات المستخدمين، والاستفادة من الإمكانات التي توفرها التكنولوجيا.'
                  : 'We develop and manage independent technology initiatives, each with its dedicated domain and targeted challenges, driven by an approach that unites innovation, understanding user needs, and harnessing the possibilities of technology.'}
              </p>
            </ScrollReveal>

            <ScrollReveal yOffset={24} duration={0.8} delay={0.15} className="lg:col-span-6">
              <div className="relative border border-emerald-500/25 bg-white dark:bg-[#090F0C] p-6 sm:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.06)] dark:shadow-[0_0_35px_rgba(0,0,0,0.6)]">
                <div className="relative w-full aspect-[4/3] max-w-md mx-auto flex items-center justify-center">
                  <div className="absolute inset-0 bg-emerald-500/5 blur-[50px] rounded-full pointer-events-none" />
                  <svg viewBox="0 0 400 320" className="w-full h-full overflow-visible">
                    <defs>
                      <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10B981" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#059669" stopOpacity="0.3" />
                      </linearGradient>
                      <filter id="emeraldGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>
                    <path
                      d="M 200 160 C 130 160, 100 115, 75 70"
                      fill="none"
                      stroke="url(#pathGradient)"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      className="animate-pulse"
                    />
                    <path
                      d="M 200 160 C 270 160, 300 115, 325 70"
                      fill="none"
                      stroke="url(#pathGradient)"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      className="animate-pulse"
                      style={{ animationDelay: '0.4s' }}
                    />
                    <path
                      d="M 200 160 C 130 160, 100 205, 75 250"
                      fill="none"
                      stroke="url(#pathGradient)"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      className="animate-pulse"
                      style={{ animationDelay: '0.8s' }}
                    />
                    <path
                      d="M 200 160 C 270 160, 300 205, 325 250"
                      fill="none"
                      stroke="url(#pathGradient)"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      className="animate-pulse"
                      style={{ animationDelay: '1.2s' }}
                    />
                    {[
                      { cx: 75, cy: 70, delay: '0s' },
                      { cx: 325, cy: 70, delay: '0.4s' },
                      { cx: 75, cy: 250, delay: '0.8s' },
                      { cx: 325, cy: 250, delay: '1.2s' },
                    ].map((node, i) => (
                      <g key={i}>
                        <circle
                          cx={node.cx}
                          cy={node.cy}
                          r="22"
                          fill="none"
                          stroke="#10B981"
                          strokeWidth="1"
                          strokeOpacity="0.4"
                          className="animate-ping"
                          style={{
                            animationDuration: '3s',
                            animationDelay: node.delay,
                          }}
                        />
                        <circle
                          cx={node.cx}
                          cy={node.cy}
                          r="18"
                          fill="#060A08"
                          stroke="#10B981"
                          strokeWidth="1.5"
                          filter="url(#emeraldGlowFilter)"
                        />
                        <circle cx={node.cx} cy={node.cy} r="6" fill="#34D399" />
                      </g>
                    ))}
                    <g filter="url(#emeraldGlowFilter)">
                      <circle
                        cx="200"
                        cy="160"
                        r="44"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="1"
                        strokeOpacity="0.3"
                        strokeDasharray="6 4"
                      />
                      <circle
                        cx="200"
                        cy="160"
                        r="34"
                        fill="#050806"
                        stroke="#10B981"
                        strokeWidth="2"
                      />
                      <polygon
                        points="200,146 214,160 200,174 186,160"
                        fill="#10B981"
                        className="animate-pulse"
                      />
                    </g>
                  </svg>
                </div>
                <div className="text-center mt-4 pt-4 border-t border-emerald-500/15">
                  <span className="text-xs font-mono uppercase tracking-widest text-emerald-400/80">
                    {isAr
                      ? 'الشركة القابضة المركزية متصلة بأربعة مسارات تقنية مستقلة'
                      : 'Central Holding Node with 4 Autonomous Technology Pathways'}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Projects Overview - 3. Removed green 'مشاريعنا' badge & 4. Showcase layout with device name and image/visual preview */}
      <section className="relative w-full py-20 sm:py-28 border-b border-emerald-500/20 overflow-hidden">
        <div className="w-full px-6 sm:px-10 lg:px-16 2xl:px-24">
          <ScrollReveal yOffset={24} duration={0.7} className="mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
              {isAr ? 'مشاريعنا' : 'Our Projects'}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal">
              {isAr
                ? 'تضم ليبيو نيكس أربعة مشاريع رئيسية:'
                : 'Libionix encompasses four primary initiatives:'}
            </p>
          </ScrollReveal>

          <div className="space-y-16 md:space-y-24">
            {projects.map((project, index) => {
              const Icon = project.icon;
              const isEven = index % 2 === 1;

              return (
                <div key={project.id} className="relative">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                    {/* Device / Visual Showcase Container */}
                    <ScrollReveal
                      yOffset={28}
                      duration={0.75}
                      className={`lg:col-span-7 ${
                        isEven ? 'order-1 lg:order-2' : 'order-1 lg:order-1'
                      }`}
                    >
                      <div
                        onClick={
                          project.targetPage
                            ? () => onNavigate(project.targetPage as PageId)
                            : undefined
                        }
                        className={`group relative border border-emerald-500/25 hover:border-emerald-500/70 bg-white dark:bg-[#090F0C] overflow-hidden transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.06)] dark:shadow-[0_0_25px_rgba(0,0,0,0.8)] hover:shadow-[0_10px_35px_rgba(16,185,129,0.22)] ${
                          project.targetPage ? 'cursor-pointer' : ''
                        }`}
                      >
                        <div className="aspect-[16/10] overflow-hidden bg-gradient-to-br from-emerald-50 via-emerald-100/30 to-white dark:from-emerald-950/40 dark:via-[#070D0A] dark:to-[#040605] flex items-center justify-center relative">
                          <div className="absolute inset-0 bg-radial-at-c from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
                          <div className="text-center p-8 z-10 flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full border border-emerald-500/40 bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-700 dark:text-emerald-400 mb-4 shadow-[0_0_20px_rgba(16,185,129,0.25)] group-hover:scale-110 transition-transform">
                              <Icon className="w-8 h-8" />
                            </div>
                            <span className="font-mono text-xs uppercase tracking-widest text-emerald-700 dark:text-emerald-400/90 mb-1 font-semibold">
                              {project.subtitle}
                            </span>
                            <span className="text-2xl font-bold text-slate-900 dark:text-white font-mono">
                              {project.deviceTitle}
                            </span>
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>

                    {/* Project Information */}
                    <ScrollReveal
                      yOffset={24}
                      duration={0.7}
                      delay={0.1}
                      className={`lg:col-span-5 ${
                        isEven ? 'order-2 lg:order-1' : 'order-2 lg:order-2'
                      } flex flex-col justify-center`}
                    >
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
                        <bdi dir={isAr ? 'rtl' : 'ltr'} className="inline-block" style={{ unicodeBidi: 'isolate' }}>
                          <span className="text-slate-900 dark:text-white">{project.name}</span>
                          {project.englishName ? (
                            <>
                              <span className="mx-2 sm:mx-3 text-slate-400 font-normal select-none">|</span>
                              <span className="text-slate-900 dark:text-white">{project.englishName}</span>
                            </>
                          ) : null}
                        </bdi>
                      </h3>
                      <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                        {project.description}
                      </p>
                      {project.targetPage && (
                        <div>
                          <motion.button
                            whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2 }}
                            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                            transition={{ duration: 0.2, ease: MOTION_EASE }}
                            onClick={() => onNavigate(project.targetPage as PageId)}
                            className="px-8 py-3.5 text-xs font-bold tracking-wider uppercase text-slate-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400 hover:from-emerald-300 hover:to-emerald-200 transition-all rounded-full cursor-pointer inline-flex items-center gap-3 group shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(16,185,129,0.55)] focus-visible:outline-2 focus-visible:outline-emerald-400"
                          >
                            <span>{isAr ? 'عرض المشروع' : 'View Project'}</span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
                          </motion.button>
                        </div>
                      )}
                    </ScrollReveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach Section - 5. Removed green 'توجهنا' badge & 6. Removed underlines from green words */}
      <section className="relative w-full py-20 sm:py-28 bg-white dark:bg-[#060A08] border-b border-emerald-500/20 overflow-hidden">
        <div className="w-full px-6 sm:px-10 lg:px-16 2xl:px-24">
          <ScrollReveal yOffset={24} duration={0.7} className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-8">
              {isAr ? 'توجهنا' : 'Our Approach'}
            </h2>
            <div className="p-8 sm:p-10 border border-emerald-500/25 bg-emerald-50/40 dark:bg-[#090F0C] relative shadow-sm">
              <div className="absolute top-0 right-0 rtl:right-auto rtl:left-0 w-24 h-1 bg-gradient-to-r from-emerald-500 to-transparent" />
              <p className="text-lg sm:text-xl md:text-2xl text-slate-800 dark:text-slate-200 leading-relaxed sm:leading-relaxed font-normal">
                {isAr ? (
                  <>
                    نركز على بناء مشاريع تقنية تنطلق من{' '}
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                      مشكلات حقيقية
                    </span>
                    ، وتستفيد من الابتكار لتقديم{' '}
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                      حلول عملية قابلة للتطوير
                    </span>
                    ، مع السعي إلى تحقيق أثر إيجابي ومستدام في المجالات التي نعمل فيها.
                  </>
                ) : (
                  <>
                    We focus on building technology initiatives originating from{' '}
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                      real-world problems
                    </span>
                    , leveraging innovation to deliver{' '}
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                      scalable, practical solutions
                    </span>
                    , while striving to achieve positive, sustainable impact across the fields we serve.
                  </>
                )}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Libionix Final Showcase - 7. Removed LIBIONIX HOLDING // 2026 box */}
      <section className="relative w-full py-20 sm:py-28 bg-emerald-50/30 dark:bg-[#020403] border-b border-emerald-500/20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none tech-grid-pattern" />
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-emerald-500/10 blur-[100px] pointer-events-none"
        />
        <div className="w-full px-6 sm:px-10 lg:px-16 2xl:px-24 relative z-10">
          <ScrollReveal yOffset={24} duration={0.8} className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 drop-shadow-[0_2px_20px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)]">
              {isAr ? 'ليبيو نيكس' : 'Libionix'}
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-emerald-600 dark:text-emerald-400 mb-6 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              {isAr
                ? 'أربع مشاريع، وتوجه واحد نحو المستقبل.'
                : 'Four initiatives, one forward direction toward the future.'}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-10 max-w-2xl mx-auto">
              {isAr
                ? 'نطوّر اليوم حلولًا تقنية بطموح يتجاوز حدود الفكرة، نحو مشاريع تسعى إلى إحداث فرق ملموس في حياة الناس وفي القطاعات التي تخدمها.'
                : "Today we develop technological solutions with ambition exceeding the boundaries of an idea, heading toward initiatives that make a tangible difference in people's lives and the sectors they serve."}
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
