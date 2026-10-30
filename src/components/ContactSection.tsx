import React, { useState } from 'react';
import { Language } from '../types';
import { content } from '../content';
import { motion, useReducedMotion } from 'motion/react';
import { ScrollReveal, MOTION_EASE } from './motion/MotionUtils';
import { ArrowRight, CircleCheck } from 'lucide-react';

interface ContactSectionProps {
  language: Language;
  isStandalonePage?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  language,
  isStandalonePage = false,
}) => {
  const c = content[language].contact;
  const shouldReduceMotion = useReducedMotion();

  const [formState, setFormState] = useState({
    name: '',
    organization: '',
    email: '',
    subject: c.form.subjectOptions[0],
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setErrorMessage(
        language === 'ar'
          ? 'يرجى استكمال جميع الحقول الإلزامية (الاسم، البريد الإلكتروني، ونص الرسالة).'
          : 'Please complete all required fields (Name, Email, and Message).'
      );
      return;
    }

    if (!formState.email.includes('@') || !formState.email.includes('.')) {
      setErrorMessage(
        language === 'ar'
          ? 'يرجى إدخال عنوان بريد إلكتروني صحيح.'
          : 'Please enter a valid email address.'
      );
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 850);
  };

  const handleReset = () => {
    setFormState({
      name: '',
      organization: '',
      email: '',
      subject: c.form.subjectOptions[0],
      message: '',
    });
    setIsSubmitted(false);
    setErrorMessage('');
  };

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
              {c.kicker}
            </span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <ScrollReveal yOffset={24} duration={0.7} className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15] drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
              {c.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {c.intro}
            </p>
            <div className="p-6 border border-emerald-500/25 bg-[#090F0C] space-y-4 shadow-[0_0_20px_rgba(0,0,0,0.6)]">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block font-semibold">
                {language === 'ar' ? 'معايير السرية المؤسسية' : 'Corporate Confidentiality'}
              </span>
              <p className="text-xs text-slate-400 leading-relaxed">
                {c.form.confidentialityNote}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal yOffset={24} duration={0.7} delay={0.15} className="lg:col-span-7">
            <div className="border border-emerald-500/30 bg-[#090F0C] p-8 sm:p-10 shadow-[0_0_30px_rgba(0,0,0,0.6)]">
              {isSubmitted ? (
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1 } : { scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, ease: MOTION_EASE }}
                  className="py-8 text-center"
                >
                  <motion.div
                    initial={shouldReduceMotion ? {} : { scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  >
                    <CircleCheck className="w-7 h-7" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                    {c.form.successTitle}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed max-w-lg mx-auto mb-8">
                    {c.form.successMessage}
                  </p>
                  <motion.button
                    whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                    onClick={handleReset}
                    className="px-8 py-3 text-xs font-mono font-semibold tracking-wider uppercase text-emerald-300 border border-emerald-500/40 hover:bg-emerald-950/40 transition-colors cursor-pointer rounded-full shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                  >
                    {c.form.reset}
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 text-xs font-mono text-red-400 bg-red-950/40 border border-red-500/40"
                    >
                      {errorMessage}
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-emerald-400/90 mb-2 font-medium">
                        {c.form.nameLabel} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder={c.form.namePlaceholder}
                        className="w-full px-4 py-3 text-sm bg-[#050806] text-white placeholder:text-slate-500 border border-emerald-500/30 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/40 focus:outline-none transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-emerald-400/90 mb-2 font-medium">
                        {c.form.orgLabel}
                      </label>
                      <input
                        type="text"
                        value={formState.organization}
                        onChange={(e) =>
                          setFormState({ ...formState, organization: e.target.value })
                        }
                        placeholder={c.form.orgPlaceholder}
                        className="w-full px-4 py-3 text-sm bg-[#050806] text-white placeholder:text-slate-500 border border-emerald-500/30 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/40 focus:outline-none transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-emerald-400/90 mb-2 font-medium">
                        {c.form.emailLabel} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder={c.form.emailPlaceholder}
                        className="w-full px-4 py-3 text-sm bg-[#050806] text-white placeholder:text-slate-500 border border-emerald-500/30 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/40 focus:outline-none transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-emerald-400/90 mb-2 font-medium">
                        {c.form.subjectLabel}
                      </label>
                      <select
                        value={formState.subject}
                        onChange={(e) =>
                          setFormState({ ...formState, subject: e.target.value })
                        }
                        className="w-full px-4 py-3 text-sm bg-[#050806] text-white border border-emerald-500/30 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/40 focus:outline-none transition-all cursor-pointer shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]"
                      >
                        {c.form.subjectOptions.map((opt: string, i: number) => (
                          <option key={i} value={opt} className="bg-[#090F0C] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-emerald-400/90 mb-2 font-medium">
                      {c.form.messageLabel} *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder={c.form.messagePlaceholder}
                      className="w-full px-4 py-3 text-sm bg-[#050806] text-white placeholder:text-slate-500 border border-emerald-500/30 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/40 focus:outline-none transition-all resize-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]"
                    />
                  </div>

                  <div className="pt-2">
                    <motion.button
                      whileHover={
                        shouldReduceMotion || isSubmitting
                          ? {}
                          : { scale: 1.02, y: -2 }
                      }
                      whileTap={shouldReduceMotion || isSubmitting ? {} : { scale: 0.98 }}
                      transition={{ duration: 0.2, ease: MOTION_EASE }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-9 py-4 text-xs font-bold tracking-wider uppercase text-slate-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400 hover:from-emerald-300 hover:to-emerald-200 disabled:opacity-50 transition-all cursor-pointer inline-flex items-center justify-center gap-3 group rounded-full shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] focus-visible:outline-2 focus-visible:outline-emerald-400"
                    >
                      <span>{isSubmitting ? c.form.submitting : c.form.submit}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 text-black" />
                    </motion.button>
                  </div>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
