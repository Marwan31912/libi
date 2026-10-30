import React, { useRef, useEffect } from 'react';
import { Language, PageId } from '../types';
import { content } from '../content';
import { motion, useReducedMotion } from 'motion/react';
import { MOTION_EASE } from './motion/MotionUtils';
import { ArrowRight } from 'lucide-react';
import heroBg from '../libionix/G.png';

interface HeroProps {
  language: Language;
  onNavigate: (page: PageId) => void;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  alpha: number;
  twinkleSpeed: number;
}

export const Hero: React.FC<HeroProps> = ({ language, onNavigate }) => {
  const t = content[language];
  const shouldReduceMotion = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);
  const mousePosRef = useRef<{ x: number; y: number } | null>(null);
  const isRtl = language === 'ar';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    const particleCount = width < 768 ? 28 : 55;
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height * 0.85,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        radius: Math.random() * 1.5 + 0.6,
        baseAlpha: Math.random() * 0.55 + 0.25,
        alpha: Math.random() * 0.55 + 0.25,
        twinkleSpeed: Math.random() * 0.02 + 0.008,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePosRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mousePosRef.current = null;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    if (shouldReduceMotion) {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(16, 185, 129, ${p.baseAlpha * 0.45})`;
        ctx.fill();
      });
      return () => {
        window.removeEventListener('resize', handleResize);
        if (container) {
          container.removeEventListener('mousemove', handleMouseMove);
          container.removeEventListener('mouseleave', handleMouseLeave);
        }
      };
    }

    let time = 0;
    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      const maxDistance = 95;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${alpha * 0.85})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      const mouse = mousePosRef.current;
      if (mouse) {
        for (let i = 0; i < particles.length; i++) {
          const dx = particles[i].x - mouse.x;
          const dy = particles[i].y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.45;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(52, 211, 153, ${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const currentAlpha = p.baseAlpha + Math.sin(time + idx) * 0.25;
        const clampedAlpha = Math.max(0.15, Math.min(1, currentAlpha));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(52, 211, 153, ${clampedAlpha * 0.85})`;
        ctx.shadowColor = '#10B981';
        ctx.shadowBlur = p.radius > 1.2 ? 6 : 2;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [shouldReduceMotion]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[580px] sm:min-h-[640px] md:min-h-[680px] flex items-center bg-[#FAFCFA] dark:bg-[#050806] text-slate-900 dark:text-white pt-28 sm:pt-32 md:pt-36 pb-20 md:pb-28 overflow-hidden select-none border-b border-emerald-500/20 transition-colors duration-300"
    >
      {/* Background Image G from libionix folder */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        {/* Soft overlays to guarantee high contrast for text while letting the glowing emblem shine in both modes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAFCFA] via-white/50 to-white/70 dark:from-[#050806] dark:via-transparent dark:to-[#040605]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-[#FAFCFA] rtl:from-white/70 rtl:via-[#FAFCFA]/85 rtl:to-[#FAFCFA]/95 dark:from-black/40 dark:via-transparent dark:to-[#050806]/80 dark:rtl:from-black/30 dark:rtl:via-[#050806]/40 dark:rtl:to-[#050806]/85" />
      </div>

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40"
      />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#FAFCFA] dark:from-[#050806] to-transparent pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col justify-center">
        <div className={`w-full max-w-2xl ${isRtl ? 'mr-0 ml-auto text-right items-start' : 'ml-auto mr-0 text-right items-end'} flex flex-col`}>
          <motion.h1
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: MOTION_EASE }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-950 dark:text-white tracking-tight leading-[1.25] sm:leading-[1.2] mb-6 drop-shadow-none dark:drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)]"
            style={{ textWrap: 'balance' }}
          >
            {isRtl ? 'حلول تقنية تصنع فرقًا حقيقيًا.' : 'Technology solutions making a real difference.'}
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: MOTION_EASE }}
            className="text-slate-700 dark:text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed mb-10 font-normal drop-shadow-none dark:drop-shadow-[0_1px_10px_rgba(0,0,0,0.8)]"
            style={{ textWrap: 'balance' }}
          >
            {isRtl
              ? 'نطوّر مشاريع تقنية تهدف إلى معالجة التحديات الواقعية، وابتكار حلول تواكب احتياجات الأفراد والأعمال، وتفتح آفاقًا جديدة للمستقبل.'
              : 'We develop technology projects aimed at addressing real-world challenges, innovating solutions that meet the needs of individuals and businesses, and opening new horizons for the future.'}
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease: MOTION_EASE }}
            className={`flex flex-wrap items-center gap-4 sm:gap-5 ${isRtl ? 'justify-start' : 'justify-end'}`}
          >
            <motion.button
              whileHover={shouldReduceMotion ? {} : { scale: 1.03, y: -2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
              transition={{ duration: 0.2, ease: MOTION_EASE }}
              onClick={() => onNavigate('projects')}
              className="px-8 sm:px-9 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-bold text-[#040806] bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400 hover:from-emerald-300 hover:to-emerald-200 shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:shadow-[0_0_45px_rgba(16,185,129,0.7)] transition-all cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>{isRtl ? 'اكتشف مشاريعنا' : 'Explore Our Projects'}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 text-black" />
            </motion.button>
            <motion.button
              whileHover={shouldReduceMotion ? {} : { scale: 1.03, y: -2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
              transition={{ duration: 0.2, ease: MOTION_EASE }}
              onClick={() => onNavigate('about')}
              className="px-8 sm:px-9 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold text-emerald-900 dark:text-emerald-300 hover:text-emerald-950 dark:hover:text-white bg-white/90 dark:bg-[#090F0C]/80 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 border border-emerald-600/30 dark:border-emerald-500/30 hover:border-emerald-500 shadow-[0_2px_15px_rgba(16,185,129,0.1)] dark:shadow-[0_0_20px_rgba(16,185,129,0.12)] transition-all cursor-pointer flex items-center justify-center gap-2 backdrop-blur-md"
            >
              <span>{isRtl ? 'تعرّف على الشركة' : 'About the Company'}</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
