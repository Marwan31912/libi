import React from 'react';
import { Language, PageId } from '../types';
import { motion, useReducedMotion } from 'motion/react';
import { ScrollReveal, MOTION_EASE } from './motion/MotionUtils';
import {
  ArrowLeft,
  ArrowRight,
  TrendingDown,
  Recycle,
  Leaf,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  DollarSign,
  ShoppingBag,
  Sparkles,
  Utensils,
  Hotel,
  Scissors,
  Sparkle,
  HardHat,
  Truck,
  RotateCw,
  Box,
  Layers,
  CircleDot,
  ThermometerSnowflake,
} from 'lucide-react';
import monqithLogoImg from '../icon/منقذ.png';

interface DedicatedProjectMunqidhProps {
  language: Language;
  onNavigate: (page: PageId) => void;
}

export const DedicatedProjectMunqidh: React.FC<DedicatedProjectMunqidhProps> = ({
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
      {/* Ambient background environmental soft emerald lighting */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[550px] h-[550px] bg-emerald-500/10 dark:bg-emerald-500/8 rounded-full blur-[140px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-[40%] left-[-80px] w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[160px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-1/4 w-[650px] h-[650px] bg-emerald-500/8 dark:bg-emerald-500/6 rounded-full blur-[180px] pointer-events-none"
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
          {/* Text on Right in RTL */}
          <div className="lg:col-span-7 space-y-6 z-10">
            <ScrollReveal yOffset={16} duration={0.6}>
              <div className="flex items-center gap-4">
                <img
                  src={monqithLogoImg}
                  alt="منقذ | Munqidh"
                  className="h-10 sm:h-12 w-auto object-contain select-none"
                />
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {isAr ? 'منقذ | Munqidh' : 'Munqidh | منقذ'}
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal yOffset={24} duration={0.7} delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-950 dark:text-white tracking-tight leading-[1.2] text-balance">
                {isAr ? 'نقلّل الهدر، ونصنع قيمة من جديد.' : 'Minimizing waste, regenerating value.'}
              </h1>
            </ScrollReveal>

            <ScrollReveal yOffset={28} duration={0.75} delay={0.2}>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl">
                {isAr
                  ? 'منصة تهدف إلى الحد من هدر المنتجات والسلع، من خلال إتاحة المنتجات المعرضة للتلف أو التي اقتربت من انتهاء صلاحيتها بأسعار أقل، لتصل إلى المستهلكين بدلًا من أن تتحول إلى خسائر ونفايات.'
                  : 'A platform dedicated to reducing product and goods waste by offering items nearing expiry or vulnerable to discard at accessible discounted prices—connecting them to active consumers instead of becoming economic loss and environmental refuse.'}
              </p>
            </ScrollReveal>
          </div>

          {/* Visual Vector on Left in RTL: Transition from Waste to Value */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <ScrollReveal yOffset={30} duration={0.85} delay={0.15} className="w-full">
              <div className="relative border border-emerald-500/25 dark:border-emerald-500/30 bg-white dark:bg-[#070B09] p-6 sm:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_45px_rgba(0,0,0,0.8)]">
                {/* Background grid */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(to_right,#10b98112_1px,transparent_1px),linear-gradient(to_bottom,#10b98112_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"
                />

                <div className="relative z-10 flex items-center justify-between border-b border-emerald-500/20 dark:border-white/10 pb-4 mb-6">
                  <div className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold tracking-wider flex items-center gap-2">
                    <RotateCw className="w-3.5 h-3.5" />
                    <span>{isAr ? 'مسار استعادة القيمة الاقتصادية' : 'VALUE RECOVERY FLOW'}</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">MUNQIDH // 2026</span>
                </div>

                {/* SVG Visual: Clean schematic of goods transitioning from waste risk to consumer value */}
                <div className="relative z-10 aspect-[4/3] w-full flex items-center justify-center p-2">
                  <svg
                    viewBox="0 0 380 280"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full text-emerald-600 dark:text-emerald-400"
                    aria-hidden="true"
                  >
                    {/* Outer Circular Economy Ring */}
                    <circle cx="190" cy="140" r="100" stroke="rgba(16, 185, 129, 0.15)" strokeWidth="1" strokeDasharray="4 4" />
                    <circle cx="190" cy="140" r="60" stroke="rgba(16, 185, 129, 0.25)" strokeWidth="1" />

                    {/* Left: Goods at risk of waste */}
                    <g transform="translate(85, 140)">
                      <rect x="-35" y="-35" width="70" height="70" fill="rgba(239, 68, 68, 0.05)" stroke="#EF4444" strokeWidth="1.2" strokeDasharray="3 3" />
                      {/* Box silhouette */}
                      <path d="M -16 -10 L 0 -18 L 16 -10 L 16 12 L 0 20 L -16 12 Z" stroke="#EF4444" strokeWidth="1.5" fill="none" />
                      <path d="M 0 -18 L 0 20" stroke="#EF4444" strokeWidth="1" opacity="0.6" />
                      <text x="0" y="52" fill="#EF4444" fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
                        {isAr ? 'خطر الهدر والتلف' : 'Discard Risk'}
                      </text>
                    </g>

                    {/* Transition Flow Arrow / Munqidh Intervention Engine */}
                    <path
                      d="M 125 140 L 155 140"
                      stroke="#10B981"
                      strokeWidth="2"
                      markerEnd="url(#arrow)"
                    />
                    <path
                      d="M 225 140 L 255 140"
                      stroke="#10B981"
                      strokeWidth="2"
                    />

                    {/* Center Core: Munqidh Platform Nexus */}
                    <g transform="translate(190, 140)">
                      <circle cx="0" cy="0" r="30" fill="rgba(16, 185, 129, 0.12)" stroke="#10B981" strokeWidth="2" />
                      {/* Recycle node */}
                      <path
                        d="M -10 -12 L 0 -18 L 10 -12 M 14 0 L 16 12 L 6 14 M -6 14 L -16 12 L -14 0"
                        stroke="#10B981"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="0" cy="0" r="4" fill="#10B981" />
                      <text x="0" y="-38" fill="currentColor" fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
                        {isAr ? 'منصة منقذ' : 'Munqidh Nexus'}
                      </text>
                      <text x="0" y="44" fill="#10B981" fontSize="9" fontFamily="sans-serif" textAnchor="middle">
                        {isAr ? 'إعادة التوجيه' : 'Redistribution'}
                      </text>
                    </g>

                    {/* Right: Consumer Value & Environmental Saving */}
                    <g transform="translate(295, 140)">
                      <rect x="-35" y="-35" width="70" height="70" fill="rgba(16, 185, 129, 0.1)" stroke="#10B981" strokeWidth="1.5" />
                      {/* Saved Box */}
                      <path d="M -16 -10 L 0 -18 L 16 -10 L 16 12 L 0 20 L -16 12 Z" stroke="#10B981" strokeWidth="1.8" fill="rgba(16, 185, 129, 0.15)" />
                      <path d="M 0 -18 L 0 20" stroke="#10B981" strokeWidth="1" />
                      <circle cx="0" cy="0" r="3" fill="#10B981" />
                      <text x="0" y="52" fill="currentColor" fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
                        {isAr ? 'استفادة وقيمة للمستهلك' : 'Active Utility'}
                      </text>
                    </g>

                    {/* Upward Eco Halo */}
                    <g transform="translate(190, 50)">
                      <circle cx="0" cy="0" r="4" fill="#10B981" />
                      <text x="0" y="-8" fill="#64748B" fontSize="9" fontFamily="sans-serif" textAnchor="middle">
                        {isAr ? 'حماية بيئية واقتصادية' : 'Eco & Fiscal Balance'}
                      </text>
                    </g>
                  </svg>
                </div>

                <div className="relative z-10 border-t border-emerald-500/20 dark:border-white/10 pt-4 mt-2 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                  <span>{isAr ? 'اقتصاد دائري مسؤول' : 'Circular Economy Architecture'}</span>
                  <span className="font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                    {isAr ? 'استدامة حقيقية' : 'SUSTAINABLE'}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02. المشكلة التي يعالجها منقذ (The Problem)                                 */}
      {/* ========================================================================= */}
      <section className="relative w-full px-6 sm:px-10 lg:px-16 2xl:px-24 py-20 md:py-28 border-b border-emerald-500/15 dark:border-white/5 bg-white dark:bg-[#050806]">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="max-w-3xl space-y-4">
            <ScrollReveal yOffset={24} duration={0.7}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                {isAr
                  ? 'كل منتج مهدور يعني خسارة يمكن تجنّبها.'
                  : 'Every wasted product represents a preventable loss.'}
              </h2>
            </ScrollReveal>

            <ScrollReveal yOffset={24} duration={0.7} delay={0.1} className="space-y-4">
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {isAr
                  ? 'تتعرض كميات من المنتجات والسلع للهدر نتيجة تلفها أو اقتراب انتهاء صلاحيتها قبل بيعها أو الاستفادة منها. ويؤدي ذلك إلى خسائر مالية يتحملها التجار والمستهلكون والاقتصاد، فضلًا عن الأعباء البيئية وتكاليف جمع النفايات ومعالجتها.'
                  : 'Significant quantities of goods and products face discard due to impending expiry or supply chain delays prior to sale. This triggers financial losses borne by retailers, consumers, and the broader economy, alongside compounding environmental burdens and waste management costs.'}
              </p>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {isAr
                  ? 'يسعى منقذ إلى تقليل هذه الخسائر من خلال إيجاد فرصة للاستفادة من المنتجات قبل أن تتحول إلى نفايات.'
                  : 'Munqidh mitigates these losses by creating a timely window to capture the product’s utility before it is needlessly consigned to waste.'}
              </p>
            </ScrollReveal>
          </div>

          {/* Three Interconnected Problem Facets */}
          <ScrollReveal yOffset={30} duration={0.8} delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Facet 1: Financial losses */}
              <div className="border border-slate-200 dark:border-white/10 bg-[#FAFCFA] dark:bg-[#070B09] p-8 space-y-5 hover:border-emerald-500/50 transition-all duration-300 shadow-sm">
                <div className="w-12 h-12 border border-emerald-500/30 bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                  <TrendingDown className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {isAr ? 'خسائر اقتصادية' : 'Economic Loss'}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {isAr
                      ? 'منتجات وسلع صالحة للاستخدام لا تُباع، فتتحول إلى تكلفة مالية وخسارة مباشرة على التاجر والمجتمع.'
                      : 'Usable commercial goods that remain unsold, turning into direct write-offs and financial losses.'}
                  </p>
                </div>
              </div>

              {/* Facet 2: Resource waste */}
              <div className="border border-slate-200 dark:border-white/10 bg-[#FAFCFA] dark:bg-[#070B09] p-8 space-y-5 hover:border-emerald-500/50 transition-all duration-300 shadow-sm">
                <div className="w-12 h-12 border border-emerald-500/30 bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                  <Recycle className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {isAr ? 'هدر الموارد' : 'Resource Depletion'}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {isAr
                      ? 'ضياع الطاقة، والجهد، والمواد الخام المستثمرة في تصنيع المنتجات ونقلها وتخزينها عند إتلافها دون نفع.'
                      : 'The loss of energy, labor, and raw materials invested across manufacturing, logistics, and storage.'}
                  </p>
                </div>
              </div>

              {/* Facet 3: Environmental burdens */}
              <div className="border border-slate-200 dark:border-white/10 bg-[#FAFCFA] dark:bg-[#070B09] p-8 space-y-5 hover:border-emerald-500/50 transition-all duration-300 shadow-sm">
                <div className="w-12 h-12 border border-emerald-500/30 bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                  <Leaf className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {isAr ? 'أعباء بيئية' : 'Environmental Burdens'}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {isAr
                      ? 'تراكم النفايات الإضافية، وارتفاع تكاليف الجمع والمعالجة والفرز، وما يسببه ذلك من أثر بيئي سلبي.'
                      : 'Surging landfill loads, elevated municipal waste management expenses, and avoidable emissions.'}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03. كيف يعمل منقذ؟ (How It Works)                                          */}
      {/* ========================================================================= */}
      <section className="relative w-full px-6 sm:px-10 lg:px-16 2xl:px-24 py-20 md:py-28 border-b border-emerald-500/15 dark:border-white/5 bg-[#FAFCFA] dark:bg-[#030604]">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="max-w-3xl space-y-4">
            <ScrollReveal yOffset={24} duration={0.7}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                {isAr ? 'بدلًا من الهدر، فرصة للاستفادة.' : 'Turning potential waste into mutual value.'}
              </h2>
            </ScrollReveal>

            <ScrollReveal yOffset={24} duration={0.7} delay={0.1}>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {isAr
                  ? 'تقوم فكرة منقذ على إتاحة المنتجات المعرضة للهدر بأسعار مخفضة، بما يتيح للتجار تقليل خسائرهم ويمنح المستهلكين فرصة للحصول على منتجات بأسعار أقل.'
                  : 'Munqidh operates on matching products at risk of discard with conscious consumers at reduced price points, enabling merchants to curb revenue loss while giving households accessible savings.'}
              </p>
            </ScrollReveal>
          </div>

          {/* Connected 4-Stage Visual Pathway */}
          <ScrollReveal yOffset={30} duration={0.8} delay={0.2}>
            <div className="relative">
              {/* Connecting Horizontal Line on Desktop */}
              <div
                aria-hidden="true"
                className="hidden lg:block absolute top-7 left-12 right-12 h-[2px] bg-gradient-to-r from-emerald-500/20 via-emerald-500/60 to-emerald-500/20 z-0"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {/* Stage 1 */}
                <div className="border border-slate-200 dark:border-white/10 bg-white dark:bg-[#070B09] p-7 space-y-5 relative shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 border border-emerald-500/40 bg-emerald-50 dark:bg-[#060A08] flex items-center justify-center text-emerald-800 dark:text-emerald-400 font-mono font-bold text-lg shadow-sm">
                      01
                    </div>
                    <Box className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {isAr ? 'منتجات معرضة للهدر' : 'Products at Risk'}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {isAr
                        ? 'سلع اقتربت من انتهاء صلاحيتها أو تواجه احتمال عدم بيعها قبل خروجها من نافذة الاستخدام.'
                        : 'Goods nearing expiration or facing unsold inventory risks despite remaining fully sound.'}
                    </p>
                  </div>
                </div>

                {/* Stage 2 */}
                <div className="border border-slate-200 dark:border-white/10 bg-white dark:bg-[#070B09] p-7 space-y-5 relative shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 border border-emerald-500/40 bg-emerald-50 dark:bg-[#060A08] flex items-center justify-center text-emerald-800 dark:text-emerald-400 font-mono font-bold text-lg shadow-sm">
                      02
                    </div>
                    <DollarSign className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {isAr ? 'إتاحة المنتجات' : 'Accessible Listing'}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {isAr
                        ? 'عرض المنتجات المناسبة للاستفادة منها بسعر أقل من سعرها الأصلي لتسريع وصولها للمستهلك.'
                        : 'Listing vetted products at discounted price points to facilitate rapid consumer discovery.'}
                    </p>
                  </div>
                </div>

                {/* Stage 3 */}
                <div className="border border-slate-200 dark:border-white/10 bg-white dark:bg-[#070B09] p-7 space-y-5 relative shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 border border-emerald-500/40 bg-emerald-50 dark:bg-[#060A08] flex items-center justify-center text-emerald-800 dark:text-emerald-400 font-mono font-bold text-lg shadow-sm">
                      03
                    </div>
                    <ShoppingBag className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {isAr ? 'استفادة المستهلك' : 'Consumer Utilization'}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {isAr
                        ? 'إتاحة فرصة شراء المنتجات بأسعار مناسبة بدلًا من التخلص منها دون استهلاك.'
                        : 'Affording buyers direct savings on viable commodities rather than seeing them discarded.'}
                    </p>
                  </div>
                </div>

                {/* Stage 4 */}
                <div className="border border-emerald-500/40 bg-gradient-to-b from-emerald-50/70 to-white dark:from-[#09150E] dark:to-[#060C08] p-7 space-y-5 relative shadow-[0_4px_25px_rgba(16,185,129,0.08)]">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 border border-emerald-500/50 bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-800 dark:text-emerald-300 font-mono font-bold text-lg shadow-sm">
                      04
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {isAr ? 'تقليل الخسائر والهدر' : 'Waste & Loss Reduction'}
                    </h3>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {isAr
                        ? 'الاستفادة من قيمة المنتجات وتقليل النفايات الناتجة عنها لصالح التاجر والبيئة.'
                        : 'Preserving product economic value while shrinking the municipal waste footprint.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Technical Scope Note as requested */}
          <ScrollReveal yOffset={16} duration={0.6} delay={0.25}>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400 tracking-wide border-t border-slate-200 dark:border-white/10 pt-4">
              {isAr
                ? '※ هذه المراحل تشرح الفكرة الأساسية للمشروع، وليست تأكيدًا على تفاصيل تقنية نهائية للتطبيق.'
                : '※ These stages explain the core architectural model, and do not represent final technical specifications of the application.'}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04. القطاعات التي يستهدفها منقذ (Target Sectors)                           */}
      {/* ========================================================================= */}
      <section className="relative w-full px-6 sm:px-10 lg:px-16 2xl:px-24 py-20 md:py-28 border-b border-emerald-500/15 dark:border-white/5 bg-white dark:bg-[#050806]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-3xl space-y-4">
            <ScrollReveal yOffset={24} duration={0.7}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                {isAr ? 'من الغذاء إلى مختلف قطاعات السوق.' : 'From food to broad market sectors.'}
              </h2>
            </ScrollReveal>

            <ScrollReveal yOffset={24} duration={0.7} delay={0.1}>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {isAr
                  ? 'يبدأ منقذ بالتركيز على المنتجات الغذائية وقطاع المطاعم والفنادق، مع التوجه إلى توسيع نطاق الاستفادة مستقبلًا ليشمل قطاعات أخرى تتعرض منتجاتها للهدر.'
                  : 'Munqidh launches with a primary focus on food retail, hospitality, and restaurants, with strategic roadmaps to extend coverage across other commercial sectors vulnerable to inventory waste.'}
              </p>
            </ScrollReveal>
          </div>

          {/* Sectors Grid with clear phase indicators */}
          <ScrollReveal yOffset={30} duration={0.8} delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Sector 1: Food & Groceries (Initial Point) */}
              <div className="border border-emerald-500/40 bg-gradient-to-b from-emerald-50/70 to-white dark:from-[#09150E] dark:to-[#060C08] p-8 space-y-5 relative shadow-[0_4px_25px_rgba(16,185,129,0.08)]">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 border border-emerald-500/40 bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-800 dark:text-emerald-300">
                    <Utensils className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 border border-emerald-500/30 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 uppercase">
                    {isAr ? 'نقطة الانطلاق الرئيسية' : 'INITIAL LAUNCH FOCUS'}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {isAr ? 'الأغذية والمأكولات' : 'Food & Groceries'}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {isAr
                      ? 'المنتجات الغذائية المناسبة للبيع والاستهلاك قبل انتهاء صلاحيتها.'
                      : 'Packaged and fresh food products fit for consumption prior to their expiry threshold.'}
                  </p>
                </div>
              </div>

              {/* Sector 2: Restaurants & Hotels (Initial Point) */}
              <div className="border border-emerald-500/40 bg-gradient-to-b from-emerald-50/70 to-white dark:from-[#09150E] dark:to-[#060C08] p-8 space-y-5 relative shadow-[0_4px_25px_rgba(16,185,129,0.08)]">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 border border-emerald-500/40 bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-800 dark:text-emerald-300">
                    <Hotel className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 border border-emerald-500/30 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 uppercase">
                    {isAr ? 'نقطة الانطلاق الرئيسية' : 'INITIAL LAUNCH FOCUS'}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {isAr ? 'المطاعم والفنادق' : 'Hospitality & Dining'}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {isAr
                      ? 'المنتجات الفائضة أو المعرضة للهدر التي يمكن الاستفادة منها بأمان تام وفق معايير الجودة.'
                      : 'Surplus culinary preparations and batch items ready for safe, compliant distribution.'}
                  </p>
                </div>
              </div>

              {/* Sector 3: Tailoring & Textiles (Future expansion) */}
              <div className="border border-slate-200 dark:border-white/10 bg-[#FAFCFA] dark:bg-[#060A08] p-8 space-y-5 hover:border-emerald-500/40 transition-colors shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 border border-slate-300 dark:border-white/20 bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-700 dark:text-slate-300">
                    <Scissors className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                    {isAr ? 'توسّع مستقبلي' : 'FUTURE EXPANSION'}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {isAr ? 'الخياطة والتفصيل' : 'Textiles & Apparel'}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {isAr
                      ? 'المنتجات والسلع والأقمشة التي تواجه احتمال التلف أو عدم البيع الموسمي.'
                      : 'Fabric surplus, end-of-season garments, and tailoring supplies subject to inventory deadstock.'}
                  </p>
                </div>
              </div>

              {/* Sector 4: Cleaning Supplies (Future expansion) */}
              <div className="border border-slate-200 dark:border-white/10 bg-[#FAFCFA] dark:bg-[#060A08] p-8 space-y-5 hover:border-emerald-500/40 transition-colors shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 border border-slate-300 dark:border-white/20 bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-700 dark:text-slate-300">
                    <Sparkle className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                    {isAr ? 'توسّع مستقبلي' : 'FUTURE EXPANSION'}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {isAr ? 'مواد التنظيف' : 'Cleaning Supplies'}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {isAr
                      ? 'السلع التي يمكن بيعها والاستفادة منها وفق شروط السلامة والتخزين المعتمدة.'
                      : 'Household and commercial cleaning supplies handled safely under designated shelf standards.'}
                  </p>
                </div>
              </div>

              {/* Sector 5: Construction Materials (Future expansion) */}
              <div className="border border-slate-200 dark:border-white/10 bg-[#FAFCFA] dark:bg-[#060A08] p-8 space-y-5 hover:border-emerald-500/40 transition-colors shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 border border-slate-300 dark:border-white/20 bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-700 dark:text-slate-300">
                    <HardHat className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                    {isAr ? 'توسّع مستقبلي' : 'FUTURE EXPANSION'}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {isAr ? 'مواد البناء والمقاولات' : 'Building Materials'}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {isAr
                      ? 'المنتجات ومواد البناء الفائضة التي قد تتعرض للتلف أو تبقى دون استخدام في المشاريع.'
                      : 'Overstocked finishes, materials, and hardware susceptible to damage if left unutilized.'}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Clarity disclaimer about sectors availability */}
          <ScrollReveal yOffset={16} duration={0.6} delay={0.25}>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400 tracking-wide border-t border-slate-200 dark:border-white/10 pt-4">
              {isAr
                ? '※ يبدأ المشروع بقطاعي الأغذية والمطاعم؛ أما القطاعات الأخرى فهي ضمن خطط التوسع المستقبلية المدروسة.'
                : '※ Munqidh launches with food and hospitality; other sectors are planned in future expansion phases.'}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05. الأثر الاقتصادي والبيئي (Economic & Environmental Impact)               */}
      {/* ========================================================================= */}
      <section className="relative w-full px-6 sm:px-10 lg:px-16 2xl:px-24 py-20 md:py-28 border-b border-emerald-500/15 dark:border-white/5 bg-[#FAFCFA] dark:bg-[#030604]">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="max-w-3xl space-y-4">
            <ScrollReveal yOffset={24} duration={0.7}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                {isAr ? 'قيمة أكبر، وهدر أقل.' : 'Greater value, minimal waste.'}
              </h2>
            </ScrollReveal>

            <ScrollReveal yOffset={24} duration={0.7} delay={0.1}>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {isAr
                  ? 'لا تقتصر فائدة تقليل الهدر على استعادة قيمة المنتجات التي كان من الممكن التخلص منها، بل تمتد إلى الحد من النفايات وتقليل الأعباء المرتبطة بجمعها ومعالجتها. ويسعى منقذ إلى تحقيق استفادة أفضل من الموارد المتاحة، بما يخدم المستهلك والتاجر والبيئة.'
                  : 'Waste minimization goes beyond recapturing the monetary value of products that would otherwise be discarded; it curtails the municipal burden of waste collection and disposal. Munqidh fosters optimal stewardship of resources for merchant, consumer, and ecological well-being alike.'}
              </p>
            </ScrollReveal>
          </div>

          {/* Three Integrated Pillars */}
          <ScrollReveal yOffset={32} duration={0.8} delay={0.2}>
            <div className="border border-emerald-500/25 bg-white dark:bg-[#070B09] p-8 sm:p-12 shadow-[0_10px_35px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_45px_rgba(0,0,0,0.8)] space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* For Merchant */}
                <div className="border border-slate-200 dark:border-white/10 bg-[#FAFCFA] dark:bg-[#060907] p-8 space-y-4">
                  <div className="w-10 h-10 border border-emerald-500/30 bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-800 dark:text-emerald-400">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {isAr ? 'للتاجر' : 'For Merchants'}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {isAr
                      ? 'فرصة حقيقية لتقليل الخسائر الناتجة عن المنتجات غير المباعة، واستعادة جزء من رأس المال المستثمر بدلاً من شطبها بالكامل.'
                      : 'Recovering working capital from surplus inventory and preventing total write-offs.'}
                  </p>
                </div>

                {/* For Consumer */}
                <div className="border border-slate-200 dark:border-white/10 bg-[#FAFCFA] dark:bg-[#060907] p-8 space-y-4">
                  <div className="w-10 h-10 border border-emerald-500/30 bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-800 dark:text-emerald-400">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {isAr ? 'للمستهلك' : 'For Consumers'}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {isAr
                      ? 'فرصة للحصول على سلع ومنتجات سليمة ومناسبة بأسعار مخفضة، بما يخفف من الأعباء المعيشية ويعزز ترشيد الإنفاق.'
                      : 'Accessing safe, high-quality products at accessible rates, supporting household budgets.'}
                  </p>
                </div>

                {/* For Environment */}
                <div className="border border-emerald-500/30 bg-emerald-50/50 dark:bg-[#08150E] p-8 space-y-4 shadow-sm">
                  <div className="w-10 h-10 border border-emerald-500/40 bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-800 dark:text-emerald-300">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {isAr ? 'للبيئة' : 'For the Environment'}
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {isAr
                      ? 'المساهمة في تقليل حجم المنتجات المهدرة والنفايات العضوية والصناعية، وتخفيف الضغط على المكبات ومرافق المعالجة.'
                      : 'Directly diverting viable commodities away from landfills and curbing secondary processing loads.'}
                  </p>
                </div>
              </div>

              <div className="border-t border-emerald-500/20 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 gap-3">
                <span>{isAr ? 'توازن اقتصادي وبيئي متكامل' : 'Ecosystemic Balance: Fiscal & Environmental'}</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-semibold">
                  {isAr ? 'أثر مستدام وقابل للتوسع' : 'SCALABLE IMPACT'}
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 06. السلامة قبل البيع (Safety Before Sale)                                 */}
      {/* ========================================================================= */}
      <section className="relative w-full px-6 sm:px-10 lg:px-16 2xl:px-24 py-20 md:py-28 border-b border-emerald-500/15 dark:border-white/5 bg-white dark:bg-[#050806]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-700 dark:text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{isAr ? 'معايير الجودة الصارمة' : 'RIGOROUS QUALITY STANDARDS'}</span>
            </div>
            <ScrollReveal yOffset={24} duration={0.7}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                {isAr ? 'تقليل الهدر لا يعني التنازل عن السلامة.' : 'Waste reduction never compromises safety.'}
              </h2>
            </ScrollReveal>

            <ScrollReveal yOffset={24} duration={0.7} delay={0.1}>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {isAr
                  ? 'تعتمد الاستفادة من المنتجات المعرضة للهدر على التأكد من سلامتها وصلاحيتها للاستخدام. فالسعر المخفض لا يبرر بيع منتج قد يضر بالمستهلك، ويجب التعامل مع كل فئة وفق متطلبات التخزين والنقل والسلامة الخاصة بها.'
                  : 'Recapturing utility from goods nearing expiry is strictly contingent upon verified soundness. Discounted pricing never excuses compromised standards; every category must observe rigorous storage, handling, and safety controls.'}
              </p>
            </ScrollReveal>
          </div>

          {/* Three Calm, Disciplined Safety Pillars */}
          <ScrollReveal yOffset={30} duration={0.8} delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Element 1 */}
              <div className="border border-slate-200 dark:border-white/10 bg-[#FAFCFA] dark:bg-[#070B09] p-8 space-y-4">
                <div className="w-10 h-10 border border-emerald-500/30 bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {isAr ? 'التحقق من الصلاحية والسلامة' : 'Validity & Soundness Verification'}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {isAr
                    ? 'فحص سلامة العبوات، ومطابقة تواريخ الإنتاج والصلاحية، والتأكد من مطابقة السلع لشروط الاستخدام الصحي.'
                    : 'Auditing packaging integrity, expiration dates, and physical suitability for active consumption.'}
                </p>
              </div>

              {/* Element 2 */}
              <div className="border border-slate-200 dark:border-white/10 bg-[#FAFCFA] dark:bg-[#070B09] p-8 space-y-4">
                <div className="w-10 h-10 border border-emerald-500/30 bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                  <Truck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {isAr ? 'شروط التخزين والنقل المناسبة' : 'Appropriate Storage & Transport'}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {isAr
                    ? 'مراعاة درجات الحرارة والرطوبة وطرق النقل بما يحافظ على جودة المنتج وعدم تعرضه للتلف أثناء التداول.'
                    : 'Maintaining temperature, humidity, and handling standards to prevent degradation during transfer.'}
                </p>
              </div>

              {/* Element 3 */}
              <div className="border border-slate-200 dark:border-white/10 bg-[#FAFCFA] dark:bg-[#070B09] p-8 space-y-4">
                <div className="w-10 h-10 border border-emerald-500/30 bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {isAr ? 'الالتزام بمتطلبات كل فئة' : 'Category-Specific Requirements'}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {isAr
                    ? 'تطبيق القواعد الفنية والاشتراطات المحددة لكل نوع من السلع، لضمان عدم بيع أي صنف دون معاييره المطلوبة.'
                    : 'Enforcing specific regulatory requirements suited to individual merchandise categories.'}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 07. الخاتمة (Closing Section)                                              */}
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
          {/* Munqidh Official Logo in Arabic & English */}
          <ScrollReveal yOffset={20} duration={0.7}>
            <div className="flex flex-col items-center justify-center p-3 gap-3">
              <img
                src={monqithLogoImg}
                alt="منقذ | Munqidh Logo"
                className="h-16 sm:h-20 w-auto max-w-[280px] object-contain filter drop-shadow-[0_0_25px_rgba(16,185,129,0.25)] select-none"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-700 dark:text-emerald-400 font-semibold">
                LIBYONICS SUSTAINABILITY INITIATIVE
              </span>
            </div>
          </ScrollReveal>

          {/* Closing Headings */}
          <ScrollReveal yOffset={24} duration={0.7} delay={0.1} className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
              {isAr ? 'لا تجعل المنتج الجيد يتحول إلى نفايات.' : 'Do not let viable products turn into waste.'}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {isAr
                ? 'يسعى منقذ إلى تحويل المنتجات المعرضة للهدر إلى فرص للاستفادة، وتقليل الخسائر الاقتصادية والأثر البيئي، من خلال ربط المنتجات المناسبة بمن يستطيع الاستفادة منها.'
                : 'Munqidh turns products at risk of discard into viable opportunities, mitigating fiscal loss and environmental consequences by connecting surplus goods with those who benefit most.'}
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
