"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const SpeedComparisonSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1500;
    const start = performance.now();
    let rafId: number;

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.round(progress * 135));
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isInView]);

  return (
    <section className="py-16 sm:py-24">
      <div ref={ref} className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <span className="text-6xl font-black text-apple-blue/20 absolute -top-10 -left-2 select-none pointer-events-none leading-none">
            02
          </span>
          <p className="text-xs font-semibold tracking-widest text-apple-blue mb-3 relative z-10">
            SPEED
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white/90 mb-4 relative z-10">
            Speak 3x faster than you can type
          </h2>
          <p className="text-white/60 text-sm leading-relaxed max-w-xl mb-12 relative z-10">
            The average person types 45 wpm but speaks at 130+ wpm. Voicely bridges that gap instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#71717A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"/>
                </svg>
              </div>
              <p className="text-sm font-semibold text-white/60">Without Voicely</p>
            </div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-5xl sm:text-6xl font-black text-white/40">45</span>
              <span className="text-sm text-white/40">wpm</span>
            </div>
            <div className="h-2 rounded-full bg-white/10 w-[30%] mb-4 overflow-hidden">
              <div className="h-full w-full rounded-full bg-white/20" />
            </div>
            <p className="text-sm text-white/40">Average typing speed</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="p-6 sm:p-8 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-apple-blue/10 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                  <line x1="12" y1="19" x2="12" y2="23"/>
                  <line x1="8" y1="23" x2="16" y2="23"/>
                </svg>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold text-apple-blue">With Voicely</p>
                <span className="text-[10px] font-bold text-white bg-apple-blue rounded-full px-2 py-0.5">3×</span>
              </div>
            </div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-5xl sm:text-6xl font-black text-apple-blue">{count}+</span>
              <span className="text-sm text-apple-blue">wpm</span>
            </div>
            <div className="h-2 rounded-full bg-apple-blue/10 mb-4 overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="h-full rounded-full bg-apple-blue"
              />
            </div>
            <p className="text-sm text-white/60">Speaking speed — no waiting, just flowing</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpeedComparisonSection;
