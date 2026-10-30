import React from 'react';
import { Language, PageId } from '../types';
import { motion, useReducedMotion } from 'motion/react';
import { ScrollReveal, MOTION_EASE } from './motion/MotionUtils';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  GraduationCap,
  Palette,
  Briefcase,
  Award,
  CheckCircle2,
  Building2,
  Globe,
  Layers,
  Sparkles,
  Target,
  ArrowUpRight,
  FileText,
  Workflow,
  Compass,
  Terminal,
} from 'lucide-react';

interface DedicatedProjectAppProps {
  language: Language;
  onNavigate: (page: PageId) => void;
}

export const DedicatedProjectApp: React.FC<DedicatedProjectAppProps> = ({
  language,
  onNavigate,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const isAr = language === 'ar';

  return (
    <article
      dir={isAr ? 'rtl' : 'ltr'}
      className="w-full bg-[#FAFCFA] dark:bg-[#030604] text-slate-900 dark:text-[#E5E7EB] selection:bg-emerald-500 selection:text-black overflow-hidden relative transition-colors duration-300"
    >
      {/* Ambient soft background lighting (emerald accents without excessive bloom) */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[550px] h-[550px] bg-emerald-500/10 dark:bg-emerald-500/8 rounded-full blur-[140px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-[35%] left-[-80px] w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[150px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-1/4 w-[650px] h-[650px] bg-emerald-500/8 dark:bg-emerald-500/6 rounded-full blur-[170px] pointer-events-none"
      />

      {/* Top Breadcrumb Navigation */}
      <div className="w-full px-6 sm:px-10 lg:px-16 2xl:px-24 pt-8 pb-4 relative z-20">
        <motion.button
          whileHover={shouldReduceMotion ? {} : { x: isAr ? 4 : -4 }}
          transition={{ duration: 0.2, ease: MOTION_EASE }}
          onClick={() => onNavigate('projects')}
          className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-wider text-emerald-700 dark:text-emerald-400/90 hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors cursor-pointer group"
          aria-label={isAr ? 'العودة إلى كافة المشاريع' : 'Return to all projects'}
        >
          {isAr ? (
            <>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              <span>العودة إلى المشاريع</span>
            </>
          ) : (
            <>
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Return to Projects</span>
            </>
          )}
        </motion.button>
      </div>

      {/* ========================================================================= */}
      {/* 01. الواجهة الرئيسية (Hero Section)                                         */}
      {/* ========================================================================= */}
      <section className="relative w-full px-6 sm:px-10 lg:px-16 2xl:px-24 pt-6 pb-20 md:py-24 border-b border-emerald-500/15 dark:border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Column (Right in RTL) */}
          <div className="lg:col-span-7 space-y-6 z-10">
            <ScrollReveal yOffset={16} duration={0.6}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                {isAr ? 'حُجّة | Hujjah' : 'Hujjah | حُجّة'}
              </h2>
            </ScrollReveal>

            <ScrollReveal yOffset={24} duration={0.7} delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-950 dark:text-white tracking-tight leading-[1.2] text-balance">
                {isAr ? 'من المهارة إلى فرصة العمل.' : 'From skill mastery to career opportunity.'}
              </h1>
            </ScrollReveal>

            <ScrollReveal yOffset={28} duration={0.75} delay={0.2}>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl">
                {isAr
                  ? 'منصة لتطوير المهارات التقنية والأكاديمية والفنية والمهنية، تساعد المتدربين على اكتساب المهارات المطلوبة في سوق العمل، وإثبات كفاءتهم، وفتح الطريق أمامهم نحو فرص العمل الحر والشركات المحلية.'
                  : 'A platform dedicated to developing technical, academic, creative, and professional skills. Hujjah empowers learners to acquire in-demand market capabilities, demonstrate proven competence, and unlock clear pathways toward freelancing and local corporate opportunities.'}
              </p>
            </ScrollReveal>
          </div>

          {/* Bespoke Architectural Vector (Left in RTL): Learning -> Skills -> Work */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <ScrollReveal yOffset={30} duration={0.85} delay={0.15} className="w-full">
              <div className="relative border border-emerald-500/25 dark:border-emerald-500/30 bg-white dark:bg-[#070B09] p-6 sm:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_45px_rgba(0,0,0,0.8)]">
                {/* Background grid */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(to_right,#10b98112_1px,transparent_1px),linear-gradient(to_bottom,#10b98112_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"
                />

                <div className="relative z-10 flex items-center justify-between border-b border-emerald-500/20 dark:border-white/10 pb-4 mb-6">
                  <div className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold tracking-wider">
                    {isAr ? 'مخطط التكامل المعماري للمنصة' : 'PLATFORM ARCHITECTURE CONSTRUCT'}
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">HUJJAH // 2026</span>
                </div>

                {/* Vector Diagram: Tri-pillar flow (Learning -> Competency -> Career Opportunities) */}
                <div className="relative z-10 aspect-[4/3] w-full flex items-center justify-center p-2">
                  <svg
                    viewBox="0 0 380 280"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full text-emerald-600 dark:text-emerald-400"
                    aria-hidden="true"
                  >
                    {/* Background orbital rings */}
                    <circle cx="190" cy="140" r="105" stroke="rgba(16, 185, 129, 0.18)" strokeWidth="1" strokeDasharray="4 4" />
                    <circle cx="190" cy="140" r="65" stroke="rgba(16, 185, 129, 0.28)" strokeWidth="1" />

                    {/* Connecting Vector Lines */}
                    <path
                      d="M 95 85 L 190 140 M 190 140 L 285 85 M 190 140 L 190 220"
                      stroke="#10B981"
                      strokeWidth="1.5"
                      strokeOpacity="0.75"
                    />

                    {/* Left Node: Learning & Training */}
                    <g transform="translate(95, 85)">
                      <circle cx="0" cy="0" r="26" fill="rgba(16, 185, 129, 0.08)" stroke="#10B981" strokeWidth="1.5" />
                      <circle cx="0" cy="0" r="6" fill="#10B981" />
                      <text x="0" y="-34" fill="currentColor" fontSize="11" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
                        {isAr ? 'التعلّم والتدريب' : 'Learning'}
                      </text>
                      <text x="0" y="42" fill="#64748B" fontSize="9" fontFamily="sans-serif" textAnchor="middle">
                        {isAr ? 'اكتساب المهارات' : 'Curriculum'}
                      </text>
                    </g>

                    {/* Center Core: Proven Competence */}
                    <g transform="translate(190, 140)">
                      <rect x="-24" y="-24" width="48" height="48" fill="rgba(16, 185, 129, 0.12)" stroke="#10B981" strokeWidth="2" />
                      <rect x="-18" y="-18" width="36" height="36" transform="rotate(45)" fill="none" stroke="rgba(16, 185, 129, 0.6)" strokeWidth="1" />
                      <circle cx="0" cy="0" r="5" fill="#10B981" />
                      <text x="0" y="-32" fill="currentColor" fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
                        {isAr ? 'إثبات الكفاءة' : 'Competence'}
                      </text>
                    </g>

                    {/* Right Node: Local Market */}
                    <g transform="translate(285, 85)">
                      <circle cx="0" cy="0" r="26" fill="rgba(16, 185, 129, 0.08)" stroke="#10B981" strokeWidth="1.5" />
                      <circle cx="0" cy="0" r="6" fill="#10B981" />
                      <text x="0" y="-34" fill="currentColor" fontSize="11" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
                        {isAr ? 'الشركات المحلية' : 'Local Market'}
                      </text>
                      <text x="0" y="42" fill="#64748B" fontSize="9" fontFamily="sans-serif" textAnchor="middle">
                        {isAr ? 'فرص وظيفية' : 'Corporate'}
                      </text>
                    </g>

                    {/* Bottom Node: Freelance & Global Output */}
                    <g transform="translate(190, 220)">
                      <circle cx="0" cy="0" r="24" fill="rgba(16, 185, 129, 0.08)" stroke="#10B981" strokeWidth="1.5" />
                      <circle cx="0" cy="0" r="6" fill="#10B981" />
                      <text x="0" y="38" fill="currentColor" fontSize="11" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
                        {isAr ? 'العمل الحر' : 'Freelancing'}
                      </text>
                      <text x="0" y="50" fill="#64748B" fontSize="9" fontFamily="sans-serif" textAnchor="middle">
                        {isAr ? 'آفاق عالمية' : 'Cross-border'}
                      </text>
                    </g>
                  </svg>
                </div>

                <div className="relative z-10 border-t border-emerald-500/20 dark:border-white/10 pt-4 mt-2 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                  <span>{isAr ? 'مسار واقعي للتأهيل' : 'Applied Qualification Path'}</span>
                  <span className="font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                    {isAr ? 'مستدام' : 'SUSTAINABLE'}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02. المشكلة التي تعالجها حُجّة (The Core Gap Addressed)                      */}
      {/* ========================================================================= */}
      <section className="relative w-full px-6 sm:px-10 lg:px-16 2xl:px-24 py-20 md:py-28 border-b border-emerald-500/15 dark:border-white/5 bg-white dark:bg-[#050806]">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="max-w-3xl space-y-4">
            <ScrollReveal yOffset={24} duration={0.7}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                {isAr
                  ? 'الفجوة ليست في الشهادة وحدها، بل في المهارات.'
                  : 'The gap is not merely in degrees, but in applied skills.'}
              </h2>
            </ScrollReveal>

            <ScrollReveal yOffset={24} duration={0.7} delay={0.1}>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {isAr
                  ? 'يواجه كثير من الخريجين والراغبين في العمل صعوبة في الوصول إلى فرص مناسبة، عندما لا تتوافق مهاراتهم العملية مع متطلبات سوق العمل. ومن هنا تأتي حُجّة لتمنحهم مسارًا للتعلّم والتطوير والاستعداد للمنافسة على الفرص المتاحة.'
                  : 'Many graduates and aspiring professionals struggle to access rewarding opportunities when practical competencies do not align with evolving industry demands. Hujjah bridges this gap by providing a structured pathway for learning, skill refinement, and competitive market readiness.'}
              </p>
            </ScrollReveal>
          </div>

          {/* Visual Gap & Bridge Structure */}
          <ScrollReveal yOffset={32} duration={0.8} delay={0.2}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Side: The Existing Gap */}
              <div className="lg:col-span-5 border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-[#070A08] p-8 space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-slate-500 tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-slate-400" />
                    <span>{isAr ? 'واقع التحدي الحالي' : 'Current Market Reality'}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    {isAr ? 'اتساع الفجوة العملية' : 'The Practical Skill Disconnect'}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {isAr
                      ? 'التركيز على المعرفة النظرية فقط دون ممارسة تطبيقية حقيقية يترك الخريج غير مجهز بمتطلبات الإنتاجية وسوق العمل المعاصر.'
                      : 'Theoretical instruction without real-world execution leaves individuals unprepared for the dynamic demands of modern workplaces.'}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200 dark:border-white/10 text-xs font-mono text-slate-500">
                  {isAr ? 'صعوبة التوظيف وانخفاض الجاهزية' : 'Limited readiness for practical roles'}
                </div>
              </div>

              {/* Center Nexus: Hujjah Bridging Engine */}
              <div className="lg:col-span-2 border border-emerald-500/40 bg-gradient-to-b from-emerald-50 via-white to-emerald-50 dark:from-[#08150E] dark:via-[#050C08] dark:to-[#08150E] p-6 flex flex-col items-center justify-center text-center shadow-[0_0_30px_rgba(16,185,129,0.12)]">
                <div className="w-12 h-12 rounded-full border border-emerald-500/40 bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-700 dark:text-emerald-400 mb-4 shadow-[0_0_15px_rgba(16,185,129,0.25)]">
                  <Workflow className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white font-mono mb-2">
                  {isAr ? 'دور حُجّة' : 'Hujjah Role'}
                </h4>
                <p className="text-xs text-emerald-800 dark:text-emerald-300 font-medium leading-relaxed">
                  {isAr ? 'جسر الربط والتأهيل العملي المستمر' : 'Connecting practical skills to genuine demand'}
                </p>
              </div>

              {/* Right Side: Market Demand Alignment */}
              <div className="lg:col-span-5 border border-emerald-500/30 bg-gradient-to-b from-emerald-50/70 to-white dark:from-[#07130C] dark:to-[#040805] p-8 space-y-5 flex flex-col justify-between shadow-[0_4px_25px_rgba(16,185,129,0.06)]">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-emerald-700 dark:text-emerald-400 font-semibold tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse shadow-[0_0_6px_#10B981]" />
                    <span>{isAr ? 'النتيجة المستهدفة' : 'Target Outcome'}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {isAr ? 'كفاءة جاهزة للمنافسة' : 'Competitive, Market-Aligned Talent'}
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {isAr
                      ? 'متدربون يملكون مهارات واقعية، ملفات أعمال مثبتة، وجاهزية مباشرة لتلبية احتياجات الشركات والعمل الحر محلياً ودولياً.'
                      : 'Professionals equipped with tangible capabilities, evaluated output, and direct readiness to add value across local and global engagements.'}
                  </p>
                </div>
                <div className="pt-4 border-t border-emerald-500/20 text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                  {isAr ? 'استعداد عملي وتنافسي حقيقي' : 'Proven readiness and employability'}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03. مجالات التعلّم (Learning Domains)                                       */}
      {/* ========================================================================= */}
      <section className="relative w-full px-6 sm:px-10 lg:px-16 2xl:px-24 py-20 md:py-28 border-b border-emerald-500/15 dark:border-white/5 bg-[#FAFCFA] dark:bg-[#030604]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-3xl space-y-4">
            <ScrollReveal yOffset={24} duration={0.7}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                {isAr ? 'مهارات في مختلف التخصصات.' : 'Skills across diverse disciplines.'}
              </h2>
            </ScrollReveal>

            <ScrollReveal yOffset={24} duration={0.7} delay={0.1}>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {isAr
                  ? 'تسعى حُجّة إلى توفير فرص تدريب وتعلّم في مجالات متعددة، لتلبية احتياجات المتدربين ومتطلبات سوق العمل.'
                  : 'Hujjah strives to provide applied training and learning opportunities across varied domains, addressing individual aspirations alongside market imperatives.'}
              </p>
            </ScrollReveal>
          </div>

          {/* Four Discipline Cards */}
          <ScrollReveal yOffset={30} duration={0.8} delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1: المهارات التقنية */}
              <div className="border border-slate-200 dark:border-white/10 bg-white dark:bg-[#060A08] p-8 space-y-5 hover:border-emerald-500/50 transition-all duration-300 shadow-sm">
                <div className="w-12 h-12 border border-emerald-500/30 bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                  <Terminal className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {isAr ? 'المهارات التقنية' : 'Technical Skills'}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {isAr ? 'تطوير المهارات التقنية والرقمية.' : 'Developing digital and technical capabilities.'}
                  </p>
                </div>
              </div>

              {/* Card 2: المهارات الأكاديمية */}
              <div className="border border-slate-200 dark:border-white/10 bg-white dark:bg-[#060A08] p-8 space-y-5 hover:border-emerald-500/50 transition-all duration-300 shadow-sm">
                <div className="w-12 h-12 border border-emerald-500/30 bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {isAr ? 'المهارات الأكاديمية' : 'Academic Skills'}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {isAr ? 'دعم التعلّم والتطوير الأكاديمي.' : 'Supporting learning and academic advancement.'}
                  </p>
                </div>
              </div>

              {/* Card 3: المهارات الفنية */}
              <div className="border border-slate-200 dark:border-white/10 bg-white dark:bg-[#060A08] p-8 space-y-5 hover:border-emerald-500/50 transition-all duration-300 shadow-sm">
                <div className="w-12 h-12 border border-emerald-500/30 bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                  <Palette className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {isAr ? 'المهارات الفنية' : 'Creative & Applied Arts'}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {isAr ? 'اكتساب المهارات في المجالات الفنية.' : 'Acquiring hands-on creative and visual skills.'}
                  </p>
                </div>
              </div>

              {/* Card 4: المهارات المهنية */}
              <div className="border border-slate-200 dark:border-white/10 bg-white dark:bg-[#060A08] p-8 space-y-5 hover:border-emerald-500/50 transition-all duration-300 shadow-sm">
                <div className="w-12 h-12 border border-emerald-500/30 bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {isAr ? 'المهارات المهنية' : 'Professional Skills'}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {isAr ? 'الاستعداد لمتطلبات المهن وسوق العمل.' : 'Preparation for professional career standards.'}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Clarification Note as requested */}
          <ScrollReveal yOffset={16} duration={0.6} delay={0.25}>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400 tracking-wide border-t border-slate-200 dark:border-white/10 pt-4">
              {isAr
                ? '※ هذه تصنيفات توضيحية وليست قائمة نهائية بالتخصصات التي توفرها المنصة.'
                : '※ These categories are illustrative and do not represent a final exhaustive catalog of platform tracks.'}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04. رحلة المتدرب (The Learner Journey)                                     */}
      {/* ========================================================================= */}
      <section className="relative w-full px-6 sm:px-10 lg:px-16 2xl:px-24 py-20 md:py-28 border-b border-emerald-500/15 dark:border-white/5 bg-white dark:bg-[#050806]">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="max-w-3xl space-y-4">
            <ScrollReveal yOffset={24} duration={0.7}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                {isAr ? 'رحلتك من التعلّم إلى العمل.' : 'Your journey from learning to employment.'}
              </h2>
            </ScrollReveal>

            <ScrollReveal yOffset={24} duration={0.7} delay={0.1}>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {isAr
                  ? 'يعرض هذا القسم رحلة المتدرب في أربع مراحل مترابطة، تبدأ بالتسجيل والتدريب، مروراً بالتطبيق وإثبات المهارة، وصولاً إلى بناء الملف المهني والانطلاق نحو الفرص.'
                  : 'A coherent four-stage trajectory guiding learners from initial course enrollment through hands-on evaluation, credentialing, and portfolio readiness.'}
              </p>
            </ScrollReveal>
          </div>

          {/* Connected 4-Stage Pathway (Horizontal desktop, Vertical mobile) */}
          <ScrollReveal yOffset={30} duration={0.8} delay={0.2}>
            <div className="relative">
              {/* Horizontal Connecting Guide Line for Desktop */}
              <div
                aria-hidden="true"
                className="hidden lg:block absolute top-7 left-12 right-12 h-[2px] bg-gradient-to-r from-emerald-500/20 via-emerald-500/60 to-emerald-500/20 z-0"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {/* Stage 1 */}
                <div className="border border-slate-200 dark:border-white/10 bg-[#FAFCFA] dark:bg-[#070B09] p-7 space-y-5 relative">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 border border-emerald-500/40 bg-white dark:bg-[#060A08] flex items-center justify-center text-emerald-700 dark:text-emerald-400 font-mono font-bold text-lg shadow-sm">
                      01
                    </div>
                    <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {isAr ? 'التعلّم والتدريب' : 'Learning & Training'}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {isAr
                        ? 'الالتحاق بالدورات المناسبة مقابل رسوم تدريبية.'
                        : 'Enrolling in tailored courses via structured training fees.'}
                    </p>
                  </div>
                </div>

                {/* Stage 2 */}
                <div className="border border-slate-200 dark:border-white/10 bg-[#FAFCFA] dark:bg-[#070B09] p-7 space-y-5 relative">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 border border-emerald-500/40 bg-white dark:bg-[#060A08] flex items-center justify-center text-emerald-700 dark:text-emerald-400 font-mono font-bold text-lg shadow-sm">
                      02
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {isAr ? 'التطبيق والتقييم' : 'Application & Assessment'}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {isAr
                        ? 'دراسة المحتوى وإنجاز الواجبات واجتياز الاختبارات.'
                        : 'Engaging content, completing real tasks, and passing evaluations.'}
                    </p>
                  </div>
                </div>

                {/* Stage 3 */}
                <div className="border border-slate-200 dark:border-white/10 bg-[#FAFCFA] dark:bg-[#070B09] p-7 space-y-5 relative">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 border border-emerald-500/40 bg-white dark:bg-[#060A08] flex items-center justify-center text-emerald-700 dark:text-emerald-400 font-mono font-bold text-lg shadow-sm">
                      03
                    </div>
                    <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {isAr ? 'الشهادة وإثبات المهارات' : 'Certification & Credentialing'}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {isAr
                        ? 'الحصول على شهادة بعد استيفاء متطلبات الدورة.'
                        : 'Earning verified credentials upon completing all course milestones.'}
                    </p>
                  </div>
                </div>

                {/* Stage 4 */}
                <div className="border border-emerald-500/40 bg-gradient-to-b from-emerald-50/70 to-white dark:from-[#09150E] dark:to-[#060C08] p-7 space-y-5 relative shadow-[0_4px_25px_rgba(16,185,129,0.08)]">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 border border-emerald-500/50 bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-800 dark:text-emerald-300 font-mono font-bold text-lg shadow-sm">
                      04
                    </div>
                    <Briefcase className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {isAr ? 'الملف المهني والفرص' : 'Portfolio & Opportunities'}
                    </h3>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {isAr
                        ? 'إنشاء ملف خاص بالمتدرب يتيح له التقدم للوظائف، سواء في الشركات المحلية أو في مجال العمل الحر.'
                        : 'Building a verified candidate profile ready to apply for positions across local companies and remote freelancing.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05. الربط بين المهارات وفرص العمل (Connecting Skills to Opportunities)       */}
      {/* ========================================================================= */}
      <section className="relative w-full px-6 sm:px-10 lg:px-16 2xl:px-24 py-20 md:py-28 border-b border-emerald-500/15 dark:border-white/5 bg-[#FAFCFA] dark:bg-[#030604]">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="max-w-3xl space-y-4">
            <ScrollReveal yOffset={24} duration={0.7}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                {isAr ? 'مهاراتك بوابة لفرص جديدة.' : 'Your skills: A gateway to new opportunities.'}
              </h2>
            </ScrollReveal>

            <ScrollReveal yOffset={24} duration={0.7} delay={0.1}>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {isAr
                  ? 'تطمح حُجّة إلى أن تكون حلقة وصل بين المتدربين والشركات الليبية، من خلال مساعدة الأفراد على تطوير مهاراتهم، وإبراز كفاءاتهم، والوصول إلى فرص عمل تتناسب مع قدراتهم.'
                  : 'Hujjah aspires to serve as an authentic conduit between qualified learners and Libyan businesses, empowering individuals to develop in-demand capabilities, demonstrate verified competence, and connect with commensurate employment.'}
              </p>
            </ScrollReveal>
          </div>

          {/* Tri-Element Visual Pathway: Learner -> Competence -> Opportunities */}
          <ScrollReveal yOffset={32} duration={0.8} delay={0.2}>
            <div className="border border-emerald-500/25 bg-white dark:bg-[#070B09] p-8 sm:p-12 shadow-[0_10px_35px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_45px_rgba(0,0,0,0.8)] space-y-12">
              {/* Core Triad Flow Header */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="border border-slate-200 dark:border-white/10 bg-[#FAFCFA] dark:bg-[#060907] p-6 text-center space-y-2">
                  <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold block uppercase">
                    {isAr ? 'العنصر الأول' : 'ELEMENT 01'}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {isAr ? 'المتدرب' : 'The Learner'}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {isAr ? 'الرغبة في التطور وبناء المستقبل' : 'Aspiring for growth and practical impact'}
                  </p>
                </div>

                <div className="border border-emerald-500/40 bg-emerald-50/50 dark:bg-[#08150E] p-6 text-center space-y-2 relative shadow-sm">
                  <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold block uppercase">
                    {isAr ? 'محور المنظومة' : 'PLATFORM NEXUS'}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {isAr ? 'المهارات والكفاءة' : 'Skills & Competence'}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {isAr ? 'التدريب العملي، التقييم، وإثبات القدرة' : 'Applied training, assessment, and validation'}
                  </p>
                </div>

                <div className="border border-slate-200 dark:border-white/10 bg-[#FAFCFA] dark:bg-[#060907] p-6 text-center space-y-2">
                  <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold block uppercase">
                    {isAr ? 'الوجهة والهدف' : 'ELEMENT 03'}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {isAr ? 'فرص العمل' : 'Career Opportunities'}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {isAr ? 'الاستثمار في القدرات وتحقيق القيمة' : 'Productive contribution and economic value'}
                  </p>
                </div>
              </div>

              {/* Two Distinct Employment Pathways as requested */}
              <div className="border-t border-emerald-500/20 pt-8">
                <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-700 dark:text-emerald-400 font-semibold mb-6 text-center">
                  {isAr ? 'مسارا الانطلاق والفرص المتاحة' : 'TWO COMPLEMENTARY EMPLOYMENT PATHWAYS'}
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Pathway 1: Local Libyan Companies */}
                  <div className="border border-slate-200 dark:border-white/10 bg-[#FAFCFA] dark:bg-[#050806] p-8 space-y-4 relative">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 border border-emerald-500/30 bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <h5 className="text-lg font-bold text-slate-900 dark:text-white">
                        {isAr ? 'العمل في الشركات المحلية' : 'Local Corporate Employment'}
                      </h5>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {isAr
                        ? 'تلبية احتياجات الشركات والمؤسسات الليبية من خلال تزويدها بكفاءات وطنية مدرّبة وجاهزة للإنتاجية والعمل الفعلي في بيئة العمل المحلية.'
                        : 'Fulfilling the talent requirements of Libyan enterprises by equipping candidates with practical competencies suited to domestic business environments.'}
                    </p>
                  </div>

                  {/* Pathway 2: Freelancing Abroad */}
                  <div className="border border-slate-200 dark:border-white/10 bg-[#FAFCFA] dark:bg-[#050806] p-8 space-y-4 relative">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 border border-emerald-500/30 bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                        <Globe className="w-5 h-5" />
                      </div>
                      <h5 className="text-lg font-bold text-slate-900 dark:text-white">
                        {isAr ? 'العمل الحر مع جهات خارج ليبيا' : 'Cross-Border Freelancing'}
                      </h5>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {isAr
                        ? 'تمكين المتدربين من فتح آفاق أوسع للعمل عن بعد والتعاقد الحر مع جهات ومشاريع إقليمية ودولية تثق بجودة مهاراتهم وإتقانهم.'
                        : 'Empowering qualified learners to access remote engagements and cross-border client contracts leveraging verified technical and professional capabilities.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 06. الخاتمة (Closing Section)                                              */}
      {/* ========================================================================= */}
      <section className="relative w-full px-6 sm:px-10 lg:px-16 2xl:px-24 py-24 md:py-32 bg-emerald-50/30 dark:bg-[#020403] overflow-hidden">
        {/* Subtle geometric lines */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,#10b98110_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"
        />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8 flex flex-col items-center">
          {/* Hujjah Brand Headline in Arabic & English */}
          <ScrollReveal yOffset={20} duration={0.7}>
            <div className="inline-flex items-center gap-3 px-6 py-2 border border-emerald-500/30 bg-white dark:bg-[#060A08] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse shadow-[0_0_6px_#10B981]" />
              <span className="text-xl sm:text-2xl font-bold font-mono text-slate-900 dark:text-white">
                حُجّة | Hujjah
              </span>
            </div>
          </ScrollReveal>

          {/* Closing Headings */}
          <ScrollReveal yOffset={24} duration={0.7} delay={0.1} className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
              {isAr ? 'المهارات تصنع الفرق.' : 'Skills make the real difference.'}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {isAr
                ? 'تسعى حُجّة إلى بناء مسار يجمع بين التعلّم والتطوير المهني وفرص العمل، للمساهمة في تقليص الفجوة بين مهارات الأفراد واحتياجات سوق العمل.'
                : 'Hujjah strives to forge a structured pathway uniting education, professional development, and career access, helping close the gap between individual skills and real market needs.'}
            </p>
          </ScrollReveal>

          {/* Return Navigation to all projects */}
          <ScrollReveal yOffset={20} duration={0.65} delay={0.2} className="pt-4">
            <motion.button
              whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              transition={{ duration: 0.2, ease: MOTION_EASE }}
              onClick={() => onNavigate('projects')}
              className="px-8 py-3 text-xs font-semibold tracking-wider text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white bg-white dark:bg-white/[0.04] hover:bg-slate-50 dark:hover:bg-white/[0.08] border border-slate-300 dark:border-white/10 hover:border-emerald-500/60 transition-all rounded-none cursor-pointer inline-flex items-center gap-3 group shadow-sm"
              aria-label={isAr ? 'تصفح باقي المشاريع' : 'Browse other projects'}
            >
              {isAr ? (
                <>
                  <ArrowRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400 transition-transform group-hover:translate-x-1" />
                  <span>تصفح باقي المشاريع</span>
                </>
              ) : (
                <>
                  <ArrowLeft className="w-4 h-4 text-emerald-600 dark:text-emerald-400 transition-transform group-hover:-translate-x-1" />
                  <span>Browse Other Projects</span>
                </>
              )}
            </motion.button>
          </ScrollReveal>
        </div>
      </section>
    </article>
  );
};
