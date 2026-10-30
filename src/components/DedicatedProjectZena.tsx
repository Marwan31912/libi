import React from 'react';
import { Language, PageId } from '../types';
import { motion, useReducedMotion } from 'motion/react';
import { ScrollReveal, MOTION_EASE } from './motion/MotionUtils';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Network,
  GraduationCap,
  Search,
  MessageSquare,
  FileText,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Compass,
  Layers,
  Database,
  BarChart3,
  HelpCircle,
  Sparkles,
  ArrowUpRight,
  BookmarkCheck,
  Library,
  BookMarked,
} from 'lucide-react';
import zenaLogoImg from '../icon/Zena AI.png';
import zenaKnowledgeGraphImg from '../assets/images/zeina_knowledge_graph_1793367141339.jpg';

interface DedicatedProjectZenaProps {
  language: Language;
  onNavigate: (page: PageId) => void;
}

export const DedicatedProjectZena: React.FC<DedicatedProjectZenaProps> = ({
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
      {/* Ambient background academic emerald lighting */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[550px] h-[550px] bg-emerald-500/10 dark:bg-emerald-500/8 rounded-full blur-[140px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-[35%] left-[-80px] w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[160px] pointer-events-none"
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
          {/* Text Column (Right in RTL) */}
          <div className="lg:col-span-7 space-y-6 z-10">
            <ScrollReveal yOffset={16} duration={0.6}>
              <div className="flex items-center gap-4">
                <img
                  src={zenaLogoImg}
                  alt="Zena AI"
                  className="h-10 sm:h-12 w-auto object-contain select-none"
                />
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {isAr ? 'زينة AI | Zeina AI' : 'Zeina AI | زينة AI'}
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal yOffset={24} duration={0.7} delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-950 dark:text-white tracking-tight leading-[1.2] text-balance">
                {isAr ? 'رحلتك الأكاديمية، بذكاء أكبر.' : 'Your academic journey, with greater intelligence.'}
              </h1>
            </ScrollReveal>

            <ScrollReveal yOffset={28} duration={0.75} delay={0.2}>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl">
                {isAr
                  ? 'أداة ذكاء اصطناعي متخصصة في دعم البحث العلمي والمشاريع الأكاديمية، تساعد الطلبة على تطوير أبحاثهم، وفهم منهجية إعدادها، والوصول إلى المراجع العلمية، والاستعداد للمناقشات الأكاديمية.'
                  : 'A specialized artificial intelligence platform supporting scientific inquiry and academic dissertations—empowering students to develop rigorous research, master methodology, access verified literature, and prepare confidently for thesis defense.'}
              </p>
            </ScrollReveal>
          </div>

          {/* Academic Knowledge Graph Image / Concept Visual (Left in RTL) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <ScrollReveal yOffset={30} duration={0.85} delay={0.15} className="w-full">
              <div className="relative group">
                {/* Emerald ambient halo behind manuscript */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-emerald-400/10 to-transparent rounded-2xl blur-2xl transform scale-95 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                />

                {/* Conceptual Knowledge Graph Container */}
                <div className="relative border border-emerald-500/30 bg-[#060A07]/90 rounded-none overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)] p-2">
                  <div className="relative aspect-[4/3] w-full overflow-hidden flex items-center justify-center bg-black">
                    <img
                      src={zenaKnowledgeGraphImg}
                      alt={isAr ? 'شبكة المراجع والمستند الأكاديمي' : 'Zeina AI Knowledge Graph Network'}
                      className="w-full h-full object-cover filter contrast-105 brightness-105 transition-transform duration-700 group-hover:scale-[1.02]"
                      loading="eager"
                      referrerPolicy="no-referrer"
                    />

                    {/* Corner technical markers */}
                    <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-emerald-400/70" />
                    <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-emerald-400/70" />
                    <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-emerald-400/70" />
                    <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-emerald-400/70" />
                  </div>

                  {/* Caption line */}
                  <div className="p-3 bg-[#050806] border-t border-emerald-500/20 flex items-center justify-between text-xs font-mono text-emerald-400 tracking-wider">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#10B981]" />
                      <span>{isAr ? 'شبكة المعرفة الأكاديمية' : 'ACADEMIC KNOWLEDGE GRAPH'}</span>
                    </span>
                    <span className="text-slate-400">ZEINA // 2026</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02. المشكلة التي تعالجها زينة AI (The Academic Research Challenge)          */}
      {/* ========================================================================= */}
      <section className="relative w-full px-6 sm:px-10 lg:px-16 2xl:px-24 py-20 md:py-28 border-b border-emerald-500/15 dark:border-white/5 bg-white dark:bg-[#050806]">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="max-w-3xl space-y-4">
            <ScrollReveal yOffset={24} duration={0.7}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                {isAr
                  ? 'البحث العلمي يحتاج إلى أكثر من إجابة جاهزة.'
                  : 'Scientific inquiry requires far more than ready-made answers.'}
              </h2>
            </ScrollReveal>

            <ScrollReveal yOffset={24} duration={0.7} delay={0.1} className="space-y-4">
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {isAr
                  ? 'يواجه كثير من طلبة البكالوريوس والدراسات العليا صعوبات في إعداد مشاريعهم الأكاديمية، بدءًا من فهم منهجية البحث وتحديد المشكلة البحثية، وصولًا إلى مراجعة المحتوى العلمي والعثور على المراجع والاستعداد للمناقشة.'
                  : 'Undergraduate and postgraduate candidates encounter formidable challenges when structuring dissertations—ranging from articulating the research problem to reviewing literature, validating citations, and defending arguments before committees.'}
              </p>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {isAr
                  ? 'وقد تدفع هذه الصعوبات بعض الطلبة إلى الاعتماد المفرط على أدوات الذكاء الاصطناعي العامة، دون امتلاك فهم كافٍ للمعلومات أو القدرة على التحقق من دقتها.'
                  : 'These hurdles often push students toward superficial reliance on generic chatbots without genuine comprehension or rigorous verification of underlying assertions.'}
              </p>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {isAr
                  ? 'من هنا جاءت زينة AI، لتقدم بيئة متخصصة تساعد الطالب على تطوير مشروعه، وفهم خطواته، وتحسين عمله الأكاديمي، مع الحفاظ على دوره الأساسي في البحث والتعلّم.'
                  : 'Hence Zeina AI: a specialized academic ecosystem designed to guide the candidate in refining their project, understanding each methodology step, and elevating their scholarly rigor—while anchoring the student at the core of discovery.'}
              </p>
            </ScrollReveal>
          </div>

          {/* Three Core Challenges Around Zeina AI Nexus */}
          <ScrollReveal yOffset={32} duration={0.8} delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Challenge 1 */}
              <div className="border border-slate-200 dark:border-white/10 bg-[#FAFCFA] dark:bg-[#070B09] p-8 space-y-4 hover:border-emerald-500/50 transition-all duration-300 shadow-sm">
                <div className="w-12 h-12 border border-emerald-500/30 bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {isAr ? 'صعوبة فهم منهجية البحث' : 'Research Methodology Gaps'}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {isAr
                    ? 'الارتباك في صياغة الفرضيات، وتحديد المشكلة البحثية، وربط الإطار النظري بالنتائج بصورة علمية متسقة.'
                    : 'Uncertainty when structuring hypotheses, theoretical frameworks, and coherent scientific logic.'}
                </p>
              </div>

              {/* Challenge 2 */}
              <div className="border border-slate-200 dark:border-white/10 bg-[#FAFCFA] dark:bg-[#070B09] p-8 space-y-4 hover:border-emerald-500/50 transition-all duration-300 shadow-sm">
                <div className="w-12 h-12 border border-emerald-500/30 bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {isAr ? 'هدر الوقت في العثور على المراجع' : 'Literature Discovery Friction'}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {isAr
                    ? 'التشتت بين عشرات المنصات العالمية، وصعوبة استخلاص الدراسات الموثوقة ذات الصلة المباشرة بموضوع البحث.'
                    : 'Scattered manual searches across isolated platforms, losing precious weeks finding primary papers.'}
                </p>
              </div>

              {/* Challenge 3 */}
              <div className="border border-slate-200 dark:border-white/10 bg-[#FAFCFA] dark:bg-[#070B09] p-8 space-y-4 hover:border-emerald-500/50 transition-all duration-300 shadow-sm">
                <div className="w-12 h-12 border border-emerald-500/30 bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {isAr ? 'الحاجة لمراجعة المشروع ومحاكاته' : 'Defense Readiness & Critique'}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {isAr
                    ? 'غياب التقييم الموضوعي المسبق قبل مواجهة لجان التحكيم، ونقص التدرب العملي على أسئلة المناقشة المتوقعة.'
                    : 'Absence of constructive prior critique and mock questioning before presenting to thesis examiners.'}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03. المرشد الذكي (Smart Academic Reviewer)                                  */}
      {/* ========================================================================= */}
      <section className="relative w-full px-6 sm:px-10 lg:px-16 2xl:px-24 py-20 md:py-28 border-b border-emerald-500/15 dark:border-white/5 bg-[#FAFCFA] dark:bg-[#030604]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-3xl space-y-4">
            <ScrollReveal yOffset={24} duration={0.7}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                {isAr ? 'مراجعة أكاديمية بمعايير متخصصة.' : 'Academic review evaluated against scholarly standards.'}
              </h2>
            </ScrollReveal>

            <ScrollReveal yOffset={24} duration={0.7} delay={0.1} className="space-y-4">
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {isAr
                  ? 'يوفّر المرشد الذكي في زينة AI دعمًا للطالب أثناء العمل على مشروعه الأكاديمي، من خلال مراجعة المحتوى وتقييمه وفق معايير أكاديمية متخصصة، وتوضيح الجوانب التي تحتاج إلى تصحيح أو تحسين.'
                  : 'Zeina AI’s smart reviewer provides constructive academic oversight, analyzing manuscript content against rigorous scholarly standards and pointing out specific areas requiring refinement or methodological correction.'}
              </p>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {isAr
                  ? 'بدلًا من الاكتفاء بملاحظات عامة، تهدف الأداة إلى مساعدة الطالب على فهم مواضع القوة والقصور في عمله، وتوجيهه نحو تحسينه بصورة منهجية.'
                  : 'Moving beyond vague observations, the tool illuminates exact strengths, deficiencies, and structured improvement paths for the researcher.'}
              </p>
            </ScrollReveal>
          </div>

          {/* Academic Evaluation Model Component */}
          <ScrollReveal yOffset={30} duration={0.8} delay={0.2}>
            <div className="border border-emerald-500/25 bg-white dark:bg-[#070B09] p-6 sm:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_45px_rgba(0,0,0,0.8)]">
              <div className="border-b border-emerald-500/20 pb-4 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
                <span className="text-emerald-700 dark:text-emerald-400 font-semibold tracking-wider">
                  {isAr ? 'لوحة المراجعة والتقييم الأكاديمي (نموذج توضيحي)' : 'ACADEMIC REVIEW DASHBOARD (ILLUSTRATIVE MODEL)'}
                </span>
                <span className="text-slate-500">RUBRIC EVALUATION // v2.6</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Research Document Representation */}
                <div className="lg:col-span-5 border border-slate-200 dark:border-white/10 bg-[#FAFCFA] dark:bg-[#050806] p-6 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold border-b border-slate-200 dark:border-white/10 pb-3">
                    <FileText className="w-4 h-4" />
                    <span>{isAr ? 'مسودة البحث الأكاديمي' : 'Manuscript Draft'}</span>
                  </div>
                  <div className="space-y-2 text-xs font-mono text-slate-500">
                    <div className="h-3 w-3/4 bg-slate-200 dark:bg-white/10 rounded-none" />
                    <div className="h-3 w-full bg-slate-200 dark:bg-white/10 rounded-none" />
                    <div className="h-3 w-5/6 bg-slate-200 dark:bg-white/10 rounded-none" />
                    <div className="h-3 w-2/3 bg-slate-200 dark:bg-white/10 rounded-none" />
                  </div>
                  <div className="border-t border-slate-200 dark:border-white/10 pt-4 space-y-2">
                    <span className="text-[11px] font-mono text-slate-600 dark:text-slate-400 block">
                      {isAr ? 'الفصول المشمولة بالتدقيق:' : 'Audited Sections:'}
                    </span>
                    <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                      <li>• {isAr ? 'المقدمة وصياغة المشكلة' : 'Introduction & Problem Formulation'}</li>
                      <li>• {isAr ? 'الإطار النظري والدراسات السابقة' : 'Literature Review & Theoretical Base'}</li>
                      <li>• {isAr ? 'منهجية البحث وأدوات القياس' : 'Research Methodology & Instrumentation'}</li>
                    </ul>
                  </div>
                </div>

                {/* 3 Academic Evaluation Pillars (Strengths, Revisions, Recommendations) */}
                <div className="lg:col-span-7 space-y-4">
                  {/* Pillar 1: Strengths */}
                  <div className="border border-emerald-500/30 bg-emerald-50/40 dark:bg-[#08150E] p-5 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400 uppercase">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span>{isAr ? 'نقاط القوة الأكاديمية' : 'Academic Strengths'}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {isAr
                        ? 'اتساق التسلسل المنطقي بين الأهداف والفرضيات، ودقة ربط التساؤلات البحثية بالمحاور الرئيسية.'
                        : 'Cohesive logical progression between objectives and hypotheses, with clear conceptual framing.'}
                    </p>
                  </div>

                  {/* Pillar 2: Revision Areas */}
                  <div className="border border-amber-500/30 bg-amber-50/30 dark:bg-[#151008] p-5 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-700 dark:text-amber-400 uppercase">
                      <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                      <span>{isAr ? 'الجوانب التي تحتاج إلى مراجعة' : 'Areas Requiring Revision'}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {isAr
                        ? 'ضرورة تحديث مراجع الإطار النظري لدعم التحليل ببيانات حديثة، وتوثيق أداة القياس الميداني.'
                        : 'Theoretical framework references require updated citations and expanded instrument validation.'}
                    </p>
                  </div>

                  {/* Pillar 3: Improvement Notes */}
                  <div className="border border-slate-200 dark:border-white/10 bg-[#FAFCFA] dark:bg-[#060907] p-5 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase">
                      <Lightbulb className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span>{isAr ? 'ملاحظات التوجيه والتحسين' : 'Improvement Recommendations'}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {isAr
                        ? 'إعادة صياغة الخاتمة لربط النتائج بالتوصيات العملية، وإبراز المساهمة العلمية للأطروحة بوضوح.'
                        : 'Synthesize the discussion to articulate the unique scientific contribution and future implications.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Clarification Disclaimer as requested */}
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400 tracking-wide border-t border-slate-200 dark:border-white/10 pt-4 mt-6">
                {isAr
                  ? '※ هذا النموذج توضيحي؛ فالتقييم الآلي أداة مساعدة ولا يضمن قبول البحث أكاديميًا أو يُغني عن إشراف ومراجعة الأساتذة المتخصصين.'
                  : '※ This panel is an illustrative model. Automated review is an advisory aid and does not guarantee thesis acceptance or substitute professional academic supervision.'}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04. المرشد المعلّم (Teaching Mentor Learning Path)                          */}
      {/* ========================================================================= */}
      <section className="relative w-full px-6 sm:px-10 lg:px-16 2xl:px-24 py-20 md:py-28 border-b border-emerald-500/15 dark:border-white/5 bg-white dark:bg-[#050806]">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="max-w-3xl space-y-4">
            <ScrollReveal yOffset={24} duration={0.7}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                {isAr ? 'تعلّم كيف تُنجز بحثك بنفسك.' : 'Learn how to master your research independently.'}
              </h2>
            </ScrollReveal>

            <ScrollReveal yOffset={24} duration={0.7} delay={0.1}>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {isAr
                  ? 'لا تقتصر زينة AI على مساعدة الطالب في مراجعة مشروعه، بل تهدف أيضًا إلى تعليمه كيفية إعداد البحث العلمي من البداية. يساعد المرشد المعلّم الطالب على فهم المفاهيم الأساسية، مثل المشكلة البحثية والإطار النظري، والتعرّف على خطوات إعداد المشروع وتنظيم أجزائه، بما يعزز قدرته على إنجاز عمله بصورة أكثر استقلالية ووعيًا بالمنهجية الأكاديمية.'
                  : 'Zeina AI does not merely assist in auditing existing drafts; it teaches the foundational craft of academic research. The teaching mentor clarifies core tenets—from defining research gaps to organizing chapters—fostering authentic autonomy and methodological maturity.'}
              </p>
            </ScrollReveal>
          </div>

          {/* 5-Stage Learning Path */}
          <ScrollReveal yOffset={30} duration={0.8} delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* Step 1 */}
              <div className="border border-slate-200 dark:border-white/10 bg-[#FAFCFA] dark:bg-[#070B09] p-6 space-y-4 relative shadow-sm">
                <span className="w-8 h-8 rounded-none border border-emerald-500/40 bg-white dark:bg-[#060A08] flex items-center justify-center font-mono font-bold text-xs text-emerald-800 dark:text-emerald-400">
                  01
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {isAr ? 'اختيار الموضوع' : 'Topic Selection'}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {isAr ? 'استكشاف الأفكار العلمية وتحديد مجالات الاهتمام القابلة للبحث.' : 'Exploring viable scientific domains and formulating focus themes.'}
                </p>
              </div>

              {/* Step 2 */}
              <div className="border border-slate-200 dark:border-white/10 bg-[#FAFCFA] dark:bg-[#070B09] p-6 space-y-4 relative shadow-sm">
                <span className="w-8 h-8 rounded-none border border-emerald-500/40 bg-white dark:bg-[#060A08] flex items-center justify-center font-mono font-bold text-xs text-emerald-800 dark:text-emerald-400">
                  02
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {isAr ? 'تحديد المشكلة البحثية' : 'Problem Definition'}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {isAr ? 'صياغة التساؤلات الأساسية ورسم أهداف البحث وفرضياته بدقة.' : 'Articulating the core research question, objectives, and scope.'}
                </p>
              </div>

              {/* Step 3 */}
              <div className="border border-slate-200 dark:border-white/10 bg-[#FAFCFA] dark:bg-[#070B09] p-6 space-y-4 relative shadow-sm">
                <span className="w-8 h-8 rounded-none border border-emerald-500/40 bg-white dark:bg-[#060A08] flex items-center justify-center font-mono font-bold text-xs text-emerald-800 dark:text-emerald-400">
                  03
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {isAr ? 'إعداد الإطار النظري' : 'Theoretical Framework'}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {isAr ? 'تنظيم الدراسات السابقة واستخلاص المفاهيم المرجعية المرتبطة.' : 'Synthesizing literature reviews and foundational academic citations.'}
                </p>
              </div>

              {/* Step 4 */}
              <div className="border border-slate-200 dark:border-white/10 bg-[#FAFCFA] dark:bg-[#070B09] p-6 space-y-4 relative shadow-sm">
                <span className="w-8 h-8 rounded-none border border-emerald-500/40 bg-white dark:bg-[#060A08] flex items-center justify-center font-mono font-bold text-xs text-emerald-800 dark:text-emerald-400">
                  04
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {isAr ? 'تطوير الجوانب العملية' : 'Methodology & Data'}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {isAr ? 'تطبيق المنهج، جمع البيانات، وتحليل النتائج وفق أسس علمية.' : 'Deploying research instruments, collecting data, and analyzing findings.'}
                </p>
              </div>

              {/* Step 5 */}
              <div className="border border-emerald-500/40 bg-gradient-to-b from-emerald-50/70 to-white dark:from-[#09150E] dark:to-[#060C08] p-6 space-y-4 relative shadow-[0_4px_25px_rgba(16,185,129,0.08)]">
                <span className="w-8 h-8 rounded-none border border-emerald-500/50 bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center font-mono font-bold text-xs text-emerald-800 dark:text-emerald-300">
                  05
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {isAr ? 'مراجعة المشروع وتحسينه' : 'Review & Final Polish'}
                </h3>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {isAr ? 'التدقيق النهائي، معالجة أوجه القصور، والاستعداد لمناقشة الأطروحة.' : 'Final comprehensive auditing, addressing critiques, and thesis defense preparation.'}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Path note as requested */}
          <ScrollReveal yOffset={16} duration={0.6} delay={0.25}>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400 tracking-wide border-t border-slate-200 dark:border-white/10 pt-4">
              {isAr
                ? '※ هذه المراحل تمثل مسارًا توضيحيًا عامًا، وليست بالضرورة ترتيبًا إلزاميًا لجميع التخصصات أو أنواع الأبحاث.'
                : '※ These milestones illustrate a general academic roadmap and do not impose an unvarying sequence across all disciplines.'}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05. محرك البحث الأكاديمي (Academic Search Engine)                           */}
      {/* ========================================================================= */}
      <section className="relative w-full px-6 sm:px-10 lg:px-16 2xl:px-24 py-20 md:py-28 border-b border-emerald-500/15 dark:border-white/5 bg-[#FAFCFA] dark:bg-[#030604]">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="max-w-3xl space-y-4">
            <ScrollReveal yOffset={24} duration={0.7}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                {isAr ? 'مصادر علمية متعددة، من نقطة وصول واحدة.' : 'Multiple scholarly repositories, accessible through a unified portal.'}
              </h2>
            </ScrollReveal>

            <ScrollReveal yOffset={24} duration={0.7} delay={0.1} className="space-y-4">
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {isAr
                  ? 'تجمع زينة AI محركًا للبحث الأكاديمي يتيح الوصول إلى مصادر علمية عبر مجموعة من قواعد البيانات العالمية، بهدف تسهيل العثور على الكتب والمراجعات والمراجع اللازمة لإعداد البحوث والمشاريع الجامعية.'
                  : 'Zeina AI incorporates an integrated scholarly discovery engine bridging access across international academic repositories, accelerating discovery of peer-reviewed articles, books, and systematic surveys.'}
              </p>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {isAr
                  ? 'وبحسب وصف المشروع، يرتبط المحرك بنحو 25 إلى 27 قاعدة بيانات، ما يساعد الطالب على البحث عبر واجهة واحدة بدلًا من التنقل يدويًا بين منصات متعددة.'
                  : 'Project specifications link the engine across approximately 25 to 27 databases, enabling researchers to search unified indexes rather than navigating disparate portals individually.'}
              </p>
            </ScrollReveal>
          </div>

          {/* Centralized Search Architecture Diagram */}
          <ScrollReveal yOffset={32} duration={0.8} delay={0.2}>
            <div className="border border-emerald-500/25 bg-white dark:bg-[#070B09] p-8 sm:p-12 shadow-[0_10px_35px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_45px_rgba(0,0,0,0.8)] space-y-10">
              {/* Center Conceptual Search Bar */}
              <div className="max-w-2xl mx-auto border border-emerald-500/40 bg-[#FAFCFA] dark:bg-[#050806] p-4 flex items-center justify-between gap-4 shadow-sm">
                <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                  <Search className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-xs sm:text-sm font-mono">
                    {isAr ? 'البحث الدلالي الموحّد عبر قواعد البيانات...' : 'Unified semantic index query across repositories...'}
                  </span>
                </div>
                <span className="text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 px-3 py-1 bg-emerald-500/10">
                  25 — 27 {isAr ? 'قاعدة بيانات' : 'DATABASES'}
                </span>
              </div>

              {/* 4 Connected Source Categories */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                {/* Source 1 */}
                <div className="border border-slate-200 dark:border-white/10 bg-[#FAFCFA] dark:bg-[#060907] p-6 space-y-3">
                  <div className="w-10 h-10 border border-emerald-500/30 bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-800 dark:text-emerald-400">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {isAr ? 'الكتب العلمية' : 'Academic Books'}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {isAr ? 'المراجع النظرية والمصنفات التخصصية المعتمدة في مختلف التخصصات.' : 'Core foundational literature and university monographs.'}
                  </p>
                </div>

                {/* Source 2 */}
                <div className="border border-slate-200 dark:border-white/10 bg-[#FAFCFA] dark:bg-[#060907] p-6 space-y-3">
                  <div className="w-10 h-10 border border-emerald-500/30 bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-800 dark:text-emerald-400">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {isAr ? 'الأوراق البحثية' : 'Research Papers'}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {isAr ? 'المقالات والأبحاث المحكّمة المنشورة في المجلات والدوريات العلمية.' : 'Peer-reviewed articles from international academic journals.'}
                  </p>
                </div>

                {/* Source 3 */}
                <div className="border border-slate-200 dark:border-white/10 bg-[#FAFCFA] dark:bg-[#060907] p-6 space-y-3">
                  <div className="w-10 h-10 border border-emerald-500/30 bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-800 dark:text-emerald-400">
                    <BookmarkCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {isAr ? 'المراجعات العلمية' : 'Systematic Reviews'}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {isAr ? 'الدراسات المسحية التي تلخص آخر ما توصلت إليه المعرفة في الموضوع.' : 'Meta-analyses and surveys capturing current states-of-the-art.'}
                  </p>
                </div>

                {/* Source 4 */}
                <div className="border border-slate-200 dark:border-white/10 bg-[#FAFCFA] dark:bg-[#060907] p-6 space-y-3">
                  <div className="w-10 h-10 border border-emerald-500/30 bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-800 dark:text-emerald-400">
                    <Database className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {isAr ? 'قواعد البيانات الأكاديمية' : 'Scholarly Repositories'}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {isAr ? 'فهارس بيانات شاملة تتيح استكشاف الملخصات والأرقام المعيارية الدولية.' : 'Comprehensive indexing datasets for abstracts, metadata, and DOIs.'}
                  </p>
                </div>
              </div>

              {/* Note on database availability as requested */}
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400 tracking-wide border-t border-slate-200 dark:border-white/10 pt-4">
                {isAr
                  ? '※ تتيح المنصة البحث في البيانات الوصفية والملخصات والمصادر المفتوحة؛ وتخضع إتاحة النصوص الكاملة لشروط وقواعد حقوق النشر الخاصة بكل ناشر.'
                  : '※ The engine searches metadata, abstracts, and open literature; full-text access adheres to publisher licensing parameters.'}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 06. محاكاة المناقشات الأكاديمية (Defense Simulation & Viva Exam)            */}
      {/* ========================================================================= */}
      <section className="relative w-full px-6 sm:px-10 lg:px-16 2xl:px-24 py-20 md:py-28 border-b border-emerald-500/15 dark:border-white/5 bg-white dark:bg-[#050806]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-3xl space-y-4">
            <ScrollReveal yOffset={24} duration={0.7}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                {isAr ? 'استعد للمناقشة قبل يومها.' : 'Prepare for your defense well before the day.'}
              </h2>
            </ScrollReveal>

            <ScrollReveal yOffset={24} duration={0.7} delay={0.1} className="space-y-4">
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {isAr
                  ? 'تتيح ميزة محاكاة المناقشات الأكاديمية للطالب التدرب على الأسئلة المتعلقة بمحتوى رسالته أو مشروع تخرجه. بعد رفع المشروع، يمكن للأداة إنشاء مجموعة من الأسئلة التي تساعد الطالب على اختبار فهمه للمحتوى، والتعرّف على الجوانب التي تحتاج إلى مراجعة قبل المناقشة الفعلية.'
                  : 'The thesis defense simulation feature lets candidates practice rigorous cross-examination tailored to their specific dissertation. After uploading draft chapters, the system synthesizes challenging questions that probe deep comprehension and highlight vulnerabilities.'}
              </p>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {isAr
                  ? 'وبحسب وصف المشروع، يمكن أن يتجاوز عدد الأسئلة 60 سؤالًا، مع توفير إحصائيات عن الإجابات الصحيحة والخاطئة لمساعدة الطالب على تقييم استعداده.'
                  : 'Project benchmarks support question banks exceeding 60 customized queries alongside response analytics, allowing researchers to gauge readiness objectively.'}
              </p>
            </ScrollReveal>
          </div>

          {/* Interactive Simulation Layout Component */}
          <ScrollReveal yOffset={30} duration={0.8} delay={0.2}>
            <div className="border border-emerald-500/25 bg-[#FAFCFA] dark:bg-[#070B09] p-6 sm:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_45px_rgba(0,0,0,0.8)] space-y-8">
              <div className="border-b border-emerald-500/20 pb-4 flex items-center justify-between text-xs font-mono">
                <span className="text-emerald-700 dark:text-emerald-400 font-semibold tracking-wider flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>{isAr ? 'نموذج محاكاة جلسة المناقشة الأكاديمية' : 'ACADEMIC VIVA SIMULATION WORKBENCH'}</span>
                </span>
                <span className="text-slate-500">60+ {isAr ? 'سؤال تحليلي محتمل' : 'PROSPECTIVE DEFENSE INQUIRIES'}</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Question & Defense Simulation Area */}
                <div className="lg:col-span-8 space-y-5">
                  <div className="border border-emerald-500/30 bg-white dark:bg-[#060907] p-6 space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-emerald-700 dark:text-emerald-400 font-semibold">
                        {isAr ? 'سؤال المناقشة المولد رقم 14' : 'DEFENSE QUERY #14'}
                      </span>
                      <span className="text-slate-500">{isAr ? 'محور المنهجية والأدوات' : 'Methodology & Instrument'}</span>
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white leading-relaxed">
                      {isAr
                        ? '«ما المبرر العلمي لاختيار العينة بهذه الكيفية، وكيف تم ضبط المتغيرات الدخيلة أثناء إجراء التجربة؟»'
                        : '"What theoretical justification governed your sample stratification, and how were confounding variables accounted for during validation?"'}
                    </p>
                  </div>

                  {/* Simulated Candidate Response & Feedback Box */}
                  <div className="border border-slate-200 dark:border-white/10 bg-white dark:bg-[#050806] p-6 space-y-3">
                    <span className="text-xs font-mono text-slate-500 block">
                      {isAr ? 'مساحة الإجابة والتحليل الذاتي:' : 'Candidate Response Synthesis:'}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {isAr
                        ? 'تتيح الأداة للطالب تدوين إجابته ومقارنتها بالمعايير النموذجية، مع إبراز الحجج العلمية الداعمة لسلامة المنهج.'
                        : 'Students articulate structured answers and benchmark them against rigorous counter-critiques to solidify defense readiness.'}
                    </p>
                  </div>
                </div>

                {/* Performance Analytics Panel */}
                <div className="lg:col-span-4 border border-slate-200 dark:border-white/10 bg-white dark:bg-[#060907] p-6 space-y-5">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-slate-600 dark:text-slate-400 font-semibold">
                    <BarChart3 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>{isAr ? 'مؤشرات الجاهزية الأكاديمية' : 'Readiness Metrics'}</span>
                  </div>

                  <div className="space-y-4">
                    {/* Progress Bar 1: Comprehension */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-slate-600 dark:text-slate-400">{isAr ? 'فهم المنهجية' : 'Methodology Command'}</span>
                        <span className="text-emerald-700 dark:text-emerald-400 font-semibold">{isAr ? 'مكتمل' : 'Solid'}</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 dark:bg-white/10 overflow-hidden">
                        <div className="h-full bg-emerald-500 w-[85%]" />
                      </div>
                    </div>

                    {/* Progress Bar 2: Literature depth */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-slate-600 dark:text-slate-400">{isAr ? 'قوة الاستشهاد بالمراجع' : 'Citation Defense'}</span>
                        <span className="text-emerald-700 dark:text-emerald-400 font-semibold">{isAr ? 'جيد جدًا' : 'Strong'}</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 dark:bg-white/10 overflow-hidden">
                        <div className="h-full bg-emerald-500 w-[78%]" />
                      </div>
                    </div>

                    {/* Progress Bar 3: Question Coverage */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-slate-600 dark:text-slate-400">{isAr ? 'تغطية بنك الأسئلة (60+)' : 'Questions Covered'}</span>
                        <span className="text-emerald-700 dark:text-emerald-400 font-semibold">{isAr ? 'قيد التدريب' : 'Active'}</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 dark:bg-white/10 overflow-hidden">
                        <div className="h-full bg-emerald-500 w-[62%]" />
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-200 dark:border-white/10 pt-4 text-[11px] font-mono text-slate-500">
                    {isAr ? 'مخطط توضيحي لتقييم الاستعداد الذاتي' : 'Self-assessment illustrative dashboard'}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 07. أداة للطالب المبتدئ والمتمكن (Tailored to Academic Need)                 */}
      {/* ========================================================================= */}
      <section className="relative w-full px-6 sm:px-10 lg:px-16 2xl:px-24 py-20 md:py-28 border-b border-emerald-500/15 dark:border-white/5 bg-[#FAFCFA] dark:bg-[#030604]">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="max-w-3xl space-y-4">
            <ScrollReveal yOffset={24} duration={0.7}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                {isAr ? 'دعم يناسب احتياجاتك الأكاديمية.' : 'Support tailored to your academic needs.'}
              </h2>
            </ScrollReveal>

            <ScrollReveal yOffset={24} duration={0.7} delay={0.1}>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {isAr
                  ? 'تخدم زينة AI احتياجات مختلفة؛ فالطالب الذي يحتاج إلى إرشاد في إعداد بحثه يستطيع الاستفادة من أدوات التعلّم والمراجعة، بينما يمكن للطالب المتمكن استخدام محرك البحث الأكاديمي للوصول إلى المراجع والمصادر التي تدعم عمله. بهذا، لا تقتصر فائدة الأداة على من يواجهون صعوبات في البحث العلمي، بل تمتد إلى الطلبة الذين يرغبون في تسهيل الوصول إلى المعرفة وتنظيم جهودهم الأكاديمية.'
                  : 'Zeina AI accommodates diverse researcher profiles: students needing scaffolding benefit from methodology mentors and rubrics, while seasoned researchers leverage advanced federated search to streamline literature collection.'}
              </p>
            </ScrollReveal>
          </div>

          {/* Two Distinct Complementary Tracks */}
          <ScrollReveal yOffset={30} duration={0.8} delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Track 1: Learning & Development */}
              <div className="border border-slate-200 dark:border-white/10 bg-white dark:bg-[#070B09] p-8 sm:p-10 space-y-6 shadow-sm">
                <div className="flex items-center gap-3 border-b border-slate-200 dark:border-white/10 pb-4">
                  <div className="w-10 h-10 border border-emerald-500/40 bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-800 dark:text-emerald-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 uppercase block font-semibold">
                      {isAr ? 'المسار الأول' : 'TRACK 01'}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {isAr ? 'مسار التعلّم والتطوير' : 'Learning & Development Track'}
                    </h3>
                  </div>
                </div>

                <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{isAr ? 'فهم منهجية البحث العلمي وخطوات إعداد الأطروحة خطوة بخطوة.' : 'Mastering scientific methodology and chapter-by-chapter structuring.'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{isAr ? 'مراجعة مسودة المشروع وتقييمها وفق المعايير الأكاديمية المعتمدة.' : 'Auditing draft manuscripts against formal rubrics and critique standards.'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{isAr ? 'الاستعداد للمناقشة والتدرب على أسئلة لجان التحكيم الجامعية.' : 'Preparing for oral examinations through comprehensive question simulations.'}</span>
                  </li>
                </ul>
              </div>

              {/* Track 2: Research & Literature Access */}
              <div className="border border-emerald-500/40 bg-gradient-to-b from-emerald-50/70 to-white dark:from-[#09150E] dark:to-[#060C08] p-8 sm:p-10 space-y-6 shadow-[0_4px_25px_rgba(16,185,129,0.08)]">
                <div className="flex items-center gap-3 border-b border-emerald-500/20 pb-4">
                  <div className="w-10 h-10 border border-emerald-500/50 bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-800 dark:text-emerald-300">
                    <Library className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 uppercase block font-semibold">
                      {isAr ? 'المسار الثاني' : 'TRACK 02'}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {isAr ? 'مسار البحث والوصول إلى المعرفة' : 'Research & Literature Track'}
                    </h3>
                  </div>
                </div>

                <ul className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{isAr ? 'البحث عن المراجع والأوراق العلمية من نقطة وصول موحدة.' : 'Searching verified references across federated global repositories.'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{isAr ? 'استكشاف المصادر والكتب والدراسات المسحية ذات الصلة الوثيقة.' : 'Discovering systematic reviews, books, and seminal citations efficiently.'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{isAr ? 'دعم إعداد وتوثيق المشاريع الأكاديمية بجودة واحترافية عالية.' : 'Elevating academic citation integrity and thesis rigor for proficient researchers.'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 08. الخاتمة (Closing Section)                                              */}
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
          {/* Zeina AI Official Logo & Title */}
          <ScrollReveal yOffset={20} duration={0.7}>
            <div className="flex flex-col items-center justify-center p-3 gap-3">
              <img
                src={zenaLogoImg}
                alt="زينة AI | Zeina AI"
                className="h-16 sm:h-20 w-auto max-w-[280px] object-contain filter drop-shadow-[0_0_25px_rgba(16,185,129,0.25)] select-none"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-700 dark:text-emerald-400 font-semibold">
                LIBYONICS ACADEMIC AI INITIATIVE
              </span>
            </div>
          </ScrollReveal>

          {/* Closing Headings */}
          <ScrollReveal yOffset={24} duration={0.7} delay={0.1} className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
              {isAr ? 'افهم بحثك. طوّر أفكارك. واستعد لمناقشتها.' : 'Understand your research. Refine your ideas. Defend with confidence.'}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {isAr
                ? 'تسعى زينة AI إلى جعل العمل الأكاديمي أكثر وضوحًا وتنظيمًا، من خلال الجمع بين الإرشاد المتخصص، والتعلّم، والبحث عن المراجع، والتدرب على المناقشات، بما يساعد الطالب على تطوير قدراته وإنجاز مشروعه بوعي أكبر.'
                : 'Zeina AI makes scholarly research clearer and more structured by uniting specialized guidance, learning, literature discovery, and defense simulations—empowering students to master their craft with deep intellectual ownership.'}
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
