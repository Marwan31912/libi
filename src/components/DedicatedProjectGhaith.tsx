import React from 'react';
import { Language, PageId } from '../types';
import { motion, useReducedMotion } from 'motion/react';
import { ScrollReveal, MOTION_EASE } from './motion/MotionUtils';
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, Layers, Eye, Smartphone } from 'lucide-react';
import ghaithModelImg from '../libionix/G.png';
import ghaithLogoImg from '../icon/GHAITH.png';

interface DedicatedProjectGhaithProps {
  language: Language;
  onNavigate: (page: PageId) => void;
}

export const DedicatedProjectGhaith: React.FC<DedicatedProjectGhaithProps> = ({
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
      {/* Ambient background grid and green glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-[40%] left-[-100px] w-[500px] h-[500px] bg-emerald-600/5 dark:bg-emerald-600/5 rounded-full blur-[160px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-emerald-500/8 dark:bg-emerald-500/8 rounded-full blur-[180px] pointer-events-none"
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
      {/* 01. مقدمة الجهاز (Hero Section)                                           */}
      {/* ========================================================================= */}
      <section className="relative w-full px-6 sm:px-10 lg:px-16 2xl:px-24 pt-6 pb-20 md:py-24 border-b border-emerald-500/15 dark:border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text on Right in RTL */}
          <div className="lg:col-span-7 space-y-6 z-10">
            <ScrollReveal yOffset={16} duration={0.6}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                {isAr ? 'غيث | Ghaith' : 'Ghaith | غيث'}
              </h2>
            </ScrollReveal>

            <ScrollReveal yOffset={24} duration={0.7} delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-950 dark:text-white tracking-tight leading-[1.2] text-balance">
                {isAr ? 'هاتف يعيد تصور تجربة الاستخدام.' : 'A phone reimagining the user experience.'}
              </h1>
            </ScrollReveal>

            <ScrollReveal yOffset={28} duration={0.75} delay={0.2}>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl">
                {isAr
                  ? 'غيث هو اختراع لجهاز هاتف جديد، يهدف إلى إعادة التفكير في الهيكلية التقليدية للهواتف، وتقديم تجربة استخدام مختلفة، مع التركيز على احتياجات المكفوفين وذوي الاحتياجات الخاصة.'
                  : 'Ghaith is a novel phone invention designed to rethink the traditional architecture of mobile devices and deliver an entirely different interaction experience, centered on the needs of the visually impaired and individuals with special needs.'}
              </p>
            </ScrollReveal>
          </div>

          {/* Device 3D Model Image on Left in RTL */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <ScrollReveal yOffset={30} duration={0.85} delay={0.15} className="w-full">
              <div className="relative group">
                {/* Emerald ambient halo behind device */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-emerald-400/10 to-transparent rounded-3xl blur-2xl transform scale-95 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                />

                {/* Device container with technical framing */}
                <div className="relative border border-emerald-500/30 bg-[#060A07]/90 rounded-none overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)] p-2">
                  <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden flex items-center justify-center bg-black">
                    <img
                      src={ghaithModelImg}
                      alt={isAr ? 'مجسم جهاز غيث التقني' : 'Ghaith Hardware Model'}
                      className="w-full h-full object-cover filter contrast-105 brightness-105 transition-transform duration-700 group-hover:scale-[1.02]"
                      loading="eager"
                      referrerPolicy="no-referrer"
                    />

                    {/* Subtle optical corner markers */}
                    <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-emerald-400/70" />
                    <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-emerald-400/70" />
                    <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-emerald-400/70" />
                    <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-emerald-400/70" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02. التعريف بالجهاز (About Ghaith)                                         */}
      {/* ========================================================================= */}
      <section className="relative w-full px-6 sm:px-10 lg:px-16 2xl:px-24 py-20 md:py-28 border-b border-emerald-500/15 dark:border-white/5 bg-white dark:bg-[#050806]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Column (Right in RTL) */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal yOffset={24} duration={0.7}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                {isAr ? 'أكثر من مجرد هاتف تقليدي.' : 'More than just a conventional phone.'}
              </h2>
            </ScrollReveal>

            <ScrollReveal yOffset={28} duration={0.75} delay={0.1} className="space-y-5">
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {isAr
                  ? 'غيث هو اختراع لجهاز هاتف جديد، صُمم بهدف إعادة التفكير في الهيكلية التقليدية لعمل الهواتف، وتقديم تجربة مختلفة تضع احتياجات المستخدم في مقدمة التصميم.'
                  : 'Ghaith is a new phone invention conceived to challenge the conventional architecture of how phones operate, delivering an experience that places user needs at the forefront of design.'}
              </p>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {isAr
                  ? 'ويركز الجهاز بشكل أساسي على المكفوفين وذوي الاحتياجات الخاصة، من خلال توجه يهدف إلى تغيير الطريقة التي اعتاد الناس على التعامل بها مع الهواتف خلال العشرين سنة الماضية.'
                  : 'The device focuses primarily on the visually impaired and individuals with special needs, advancing an approach that aims to transform how people have interacted with mobile phones over the past twenty years.'}
              </p>
            </ScrollReveal>
          </div>

          {/* Technical Schematic Illustration (Left in RTL) */}
          <div className="lg:col-span-5">
            <ScrollReveal yOffset={28} duration={0.8} delay={0.15}>
              <div className="border border-emerald-500/25 bg-emerald-50/40 dark:bg-[#070B08] p-6 sm:p-8 relative overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
                {/* Background grid texture */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(to_right,#10b98115_1px,transparent_1px),linear-gradient(to_bottom,#10b98115_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"
                />

                <div className="relative z-10 flex items-center justify-between border-b border-emerald-500/20 dark:border-white/10 pb-4 mb-6">
                  <div className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold tracking-wider">
                    {isAr ? 'مخطط تحليلي للهيكلية التفاعلية' : 'INTERACTION SCHEMATIC'}
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">REV. 2026</span>
                </div>

                {/* SVG Technical Blueprint */}
                <div className="relative z-10 aspect-[4/3] w-full flex items-center justify-center p-2">
                  <svg
                    viewBox="0 0 400 300"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full text-emerald-600 dark:text-emerald-400"
                    aria-hidden="true"
                  >
                    {/* Concentric technical circles */}
                    <circle cx="200" cy="150" r="120" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="1" strokeDasharray="4 4" />
                    <circle cx="200" cy="150" r="80" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1" />
                    <circle cx="200" cy="150" r="40" stroke="rgba(16, 185, 129, 0.45)" strokeWidth="1" />

                    {/* Coordinate axes */}
                    <line x1="200" y1="10" x2="200" y2="290" stroke="rgba(16, 185, 129, 0.25)" strokeWidth="1" />
                    <line x1="20" y1="150" x2="380" y2="150" stroke="rgba(16, 185, 129, 0.25)" strokeWidth="1" />
                    <line x1="60" y1="40" x2="340" y2="260" stroke="rgba(16, 185, 129, 0.15)" strokeWidth="1" strokeDasharray="2 4" />
                    <line x1="60" y1="260" x2="340" y2="40" stroke="rgba(16, 185, 129, 0.15)" strokeWidth="1" strokeDasharray="2 4" />

                    {/* Central Ghaith Geometric Symmetry Symbol */}
                    <g transform="translate(200, 150)">
                      <rect x="-24" y="-24" width="48" height="48" fill="rgba(16, 185, 129, 0.12)" stroke="#10B981" strokeWidth="1.5" />
                      <rect x="-18" y="-18" width="36" height="36" transform="rotate(45)" fill="none" stroke="rgba(16, 185, 129, 0.7)" strokeWidth="1" />
                      <circle cx="0" cy="0" r="5" fill="#10B981" />
                    </g>

                    {/* Four Quadrant Nodes */}
                    {/* Top Node */}
                    <circle cx="200" cy="70" r="4" fill="#10B981" />
                    <line x1="200" y1="70" x2="200" y2="126" stroke="#10B981" strokeWidth="1.5" />
                    <text x="200" y="55" fill="currentColor" fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
                      {isAr ? 'الوصول المباشر' : 'Direct Access'}
                    </text>

                    {/* Bottom Node */}
                    <circle cx="200" cy="230" r="4" fill="#10B981" />
                    <line x1="200" y1="230" x2="200" y2="174" stroke="#10B981" strokeWidth="1.5" />
                    <text x="200" y="250" fill="currentColor" fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
                      {isAr ? 'التفاعل الفيزيائي' : 'Tactile Coherence'}
                    </text>

                    {/* Left Node */}
                    <circle cx="100" cy="150" r="4" fill="#10B981" />
                    <line x1="100" y1="150" x2="176" y2="150" stroke="#10B981" strokeWidth="1.5" />
                    <text x="75" y="154" fill="currentColor" fontSize="10" fontFamily="sans-serif" textAnchor="end" fontWeight="bold">
                      {isAr ? 'الشمولية' : 'Inclusivity'}
                    </text>

                    {/* Right Node */}
                    <circle cx="300" cy="150" r="4" fill="#10B981" />
                    <line x1="300" y1="150" x2="224" y2="150" stroke="#10B981" strokeWidth="1.5" />
                    <text x="325" y="154" fill="currentColor" fontSize="10" fontFamily="sans-serif" textAnchor="start" fontWeight="bold">
                      {isAr ? 'سهولة الاستخدام' : 'Effortless UX'}
                    </text>
                  </svg>
                </div>

                <div className="relative z-10 border-t border-emerald-500/20 dark:border-white/10 pt-4 mt-2 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                  <span>{isAr ? 'محور التصميم الإنساني' : 'Human-Centered Axis'}</span>
                  <span className="font-mono text-emerald-700 dark:text-emerald-400 font-semibold">{isAr ? 'معيار مبتكر' : 'Novel Standard'}</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03. فكرة الابتكار (The Innovation)                                        */}
      {/* ========================================================================= */}
      <section className="relative w-full px-6 sm:px-10 lg:px-16 2xl:px-24 py-20 md:py-28 border-b border-emerald-500/15 dark:border-white/5 bg-[#FAFCFA] dark:bg-[#030604]">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="max-w-3xl space-y-4">
            <ScrollReveal yOffset={24} duration={0.7}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                {isAr ? 'إعادة التفكير في هيكلية الهاتف.' : 'Rethinking the phone architecture.'}
              </h2>
            </ScrollReveal>

            <ScrollReveal yOffset={24} duration={0.7} delay={0.1}>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {isAr
                  ? 'تعتمد الهواتف التقليدية على هيكلية استخدام استمرت لسنوات طويلة، لكن هذه الطريقة لا تلبي بالضرورة احتياجات جميع المستخدمين.'
                  : 'Conventional smartphones rely on an interaction architecture that has persisted for decades, yet this model does not necessarily serve the requirements of all users.'}
              </p>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mt-3">
                {isAr
                  ? 'من هنا جاءت فكرة غيث: ابتكار جهاز هاتف يعيد النظر في هذه الهيكلية، ويقدم تصورًا مختلفًا لتجربة استخدام التكنولوجيا، مع وضع المكفوفين وذوي الاحتياجات الخاصة في صميم هذا الابتكار.'
                  : 'Hence the genesis of Ghaith: an inventive phone that reconsiders this underlying paradigm, presenting an alternative vision for experiencing technology with accessibility at its core.'}
              </p>
            </ScrollReveal>
          </div>

          {/* Conceptual Comparison Schematic (Traditional vs Ghaith Architecture) */}
          <ScrollReveal yOffset={32} duration={0.8} delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Traditional Model Card */}
              <div className="border border-slate-200 dark:border-white/10 bg-white dark:bg-[#060907] p-8 space-y-6 relative shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-none border border-slate-300 dark:border-white/20 bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-slate-400">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-slate-500 uppercase block">2006 — 2026</span>
                      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
                        {isAr ? 'الهيكلية التقليدية السائدة' : 'Prevailing Conventional Model'}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500 mt-2 shrink-0" />
                    <p>
                      {isAr
                        ? 'اعتماد كلي على شاشات بصرية مسطحة ملساء تفتقر للتوجيه الحسي الطبيعي.'
                        : 'Complete reliance on flat, visual-centric glass screens lacking tactile guidance.'}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500 mt-2 shrink-0" />
                    <p>
                      {isAr
                        ? 'معاملة ميزات إمكانية الوصول كحلول ثانوية ملحقة بدلاً من كونها أساس التصميم.'
                        : 'Accessibility treated as secondary overlay patches rather than the design foundation.'}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500 mt-2 shrink-0" />
                    <p>
                      {isAr
                        ? 'نمط استخدام متطابق منذ عقدين يفرض شروطه على المستخدم ولا يتكيف مع قدراته.'
                        : 'Two decades of rigid patterns that demand the user adapt to the device.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Ghaith Innovation Model Card */}
              <div className="border border-emerald-500/40 bg-gradient-to-b from-emerald-50/80 to-white dark:from-[#07130C] dark:to-[#040805] p-8 space-y-6 relative shadow-[0_4px_25px_rgba(16,185,129,0.08)] dark:shadow-[0_0_40px_rgba(16,185,129,0.08)]">
                {/* Emerald accent hairline glow */}
                <div className="absolute top-0 right-0 left-0 h-[2px] bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500" />

                <div className="flex items-center justify-between border-b border-emerald-500/20 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-none border border-emerald-500/40 bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-700 dark:text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 uppercase block font-semibold">LIBYONICS ARCHITECTURE</span>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {isAr ? 'مفهوم غيث المبتكر' : 'The Ghaith Paradigm'}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 mt-2 shrink-0 shadow-[0_0_8px_#10B981]" />
                    <p>
                      {isAr
                        ? 'إعادة صياغة هيكلية الجهاز من الأساس لتلائم احتياجات المكفوفين بصورة متكاملة.'
                        : 'Rebuilding device architecture from the ground up for seamless tactile accessibility.'}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 mt-2 shrink-0 shadow-[0_0_8px_#10B981]" />
                    <p>
                      {isAr
                        ? 'التكنولوجيا في خدمة الإنسان: وضع متطلبات ذوي الاحتياجات الخاصة كمنطلق ابتكاري أصيل.'
                        : 'Human-first philosophy: placing special needs at the heart of technological innovation.'}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 mt-2 shrink-0 shadow-[0_0_8px_#10B981]" />
                    <p>
                      {isAr
                        ? 'فتح آفاق جديدة لتجربة استخدام أوسع، أسهل، وأكثر شمولية لكافة فئات المجتمع.'
                        : 'Pioneering an interaction standard that is more inclusive and effortless for everyone.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04. الاختبارات والتطوير (Testing & Development)                            */}
      {/* ========================================================================= */}
      <section className="relative w-full px-6 sm:px-10 lg:px-16 2xl:px-24 py-20 md:py-28 border-b border-emerald-500/15 dark:border-white/5 bg-white dark:bg-[#050806]">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="max-w-3xl space-y-4">
            <ScrollReveal yOffset={24} duration={0.7}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                {isAr ? 'خطوات نحو ابتكار جديد.' : 'Steps toward a novel invention.'}
              </h2>
            </ScrollReveal>

            <ScrollReveal yOffset={24} duration={0.7} delay={0.1} className="space-y-4">
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {isAr
                  ? 'غيث مشروع اختراعي يعمل على تقديم تصور جديد لأجهزة الهاتف، وقد أشار صاحب المشروع إلى وجود اختبارات مرتبطة بـ USPTO.'
                  : 'Ghaith is an inventive project advancing a new paradigm for mobile phone hardware, with project milestones noting examinations associated with the USPTO.'}
              </p>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {isAr
                  ? 'ويمثل ذلك جزءًا من مسار تطوير الابتكار والتحقق منه.'
                  : 'This constitutes a foundational component of the innovation’s structured validation and development trajectory.'}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05. الفئة المستهدفة (Designed With Accessibility in Mind)                  */}
      {/* ========================================================================= */}
      <section className="relative w-full px-6 sm:px-10 lg:px-16 2xl:px-24 py-20 md:py-28 border-b border-emerald-500/15 dark:border-white/5 bg-[#FAFCFA] dark:bg-[#030604]">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="max-w-3xl space-y-4">
            <ScrollReveal yOffset={24} duration={0.7}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                {isAr ? 'التكنولوجيا يجب أن تكون متاحة للجميع.' : 'Technology must be accessible to everyone.'}
              </h2>
            </ScrollReveal>

            <ScrollReveal yOffset={24} duration={0.7} delay={0.1}>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {isAr
                  ? 'يركز جهاز غيث بشكل أساسي على المكفوفين وذوي الاحتياجات الخاصة، وينطلق من فكرة إعادة التفكير في تجربة استخدام الهاتف، بحيث تكون احتياجات المستخدم جزءًا أساسيًا من الابتكار والتصميم.'
                  : 'Project Ghaith focuses fundamentally on the visually impaired and individuals with special needs, grounded in rethinking the phone experience so that human accessibility is built into the core invention from day one.'}
              </p>
            </ScrollReveal>
          </div>

          {/* Accessibility Pillars Cards */}
          <ScrollReveal yOffset={30} duration={0.8} delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pillar 1 */}
              <div className="border border-slate-200 dark:border-white/10 bg-white dark:bg-[#060A08] p-8 space-y-4 hover:border-emerald-500/50 transition-colors duration-300 shadow-sm">
                <div className="w-12 h-12 border border-emerald-500/30 bg-emerald-100 dark:bg-emerald-950/40 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {isAr ? 'المكفوفون في قلب التصميم' : 'Centering the Visually Impaired'}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {isAr
                    ? 'بدلاً من الشاشات المسطحة المعتمدة حصراً على الرؤية، يُبنى غيث ليجعل التفاعل أكثر شمولاً واستقلالية.'
                    : 'Moving beyond flat, visual-only interfaces to ensure complete autonomy and natural engagement.'}
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="border border-slate-200 dark:border-white/10 bg-white dark:bg-[#060A08] p-8 space-y-4 hover:border-emerald-500/50 transition-colors duration-300 shadow-sm">
                <div className="w-12 h-12 border border-emerald-500/30 bg-emerald-100 dark:bg-emerald-950/40 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {isAr ? 'ذوو الاحتياجات الخاصة' : 'Diverse Needs & Abilities'}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {isAr
                    ? 'هيكلية استخدام تعيد تقدير الفروق الفردية وتقدم تجربة سلسة تتجاوز قيود التصاميم التقليدية.'
                    : 'An interaction architecture acknowledging unique human needs beyond traditional constraints.'}
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="border border-slate-200 dark:border-white/10 bg-white dark:bg-[#060A08] p-8 space-y-4 hover:border-emerald-500/50 transition-colors duration-300 shadow-sm">
                <div className="w-12 h-12 border border-emerald-500/30 bg-emerald-100 dark:bg-emerald-950/40 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {isAr ? 'الشمولية للجميع' : 'Universal Utility'}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {isAr
                    ? 'التصميم الموجه لأصحاب الاحتياجات يثمر دائماً عن أجهزة أسهل وأكثر راحة لجميع المستخدمين بلا استثناء.'
                    : 'Designing for accessibility naturally results in a more ergonomic, resilient phone for all.'}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 06. الخاتمة (Closing Section)                                              */}
      {/* ========================================================================= */}
      <section className="relative w-full px-6 sm:px-10 lg:px-16 2xl:px-24 py-24 md:py-32 bg-emerald-50/40 dark:bg-[#020403] overflow-hidden">
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
          {/* Ghaith Official Logo */}
          <ScrollReveal yOffset={20} duration={0.7}>
            <div className="flex items-center justify-center p-3">
              <img
                src={ghaithLogoImg}
                alt="غيث | Ghaith Logo"
                className="h-14 sm:h-16 w-auto max-w-[280px] object-contain filter drop-shadow-[0_0_25px_rgba(16,185,129,0.25)]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </ScrollReveal>

          {/* Closing Headings */}
          <ScrollReveal yOffset={24} duration={0.7} delay={0.1} className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
              {isAr ? 'بداية مختلفة لتجربة الهاتف.' : 'A distinct beginning for the phone experience.'}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {isAr
                ? 'ابتكار يهدف إلى إعادة تصور الطريقة التي نستخدم بها الهواتف، وفتح آفاق جديدة لتجربة تقنية أكثر شمولًا.'
                : 'An invention conceived to rethink the way we engage with mobile phones, forging new frontiers for a truly inclusive technological experience.'}
            </p>
          </ScrollReveal>

          {/* Simple Return Navigation */}
          <ScrollReveal yOffset={20} duration={0.65} delay={0.2} className="pt-6">
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
