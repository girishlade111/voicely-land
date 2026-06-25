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
    <section className="bg-zinc-950 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-xs font-semibold tracking-widest text-zinc-500 mb-4">
            SPEED
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Speak 3x faster than you can type
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto leading-relaxed">
            The average person types 45 words per minute.
            <br />
            The average person speaks at 130+ words per minute.
            <br />
            Voicely bridges that gap instantly.
          </p>
        </motion.div>

        <div
          ref={ref}
          className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0"
        >
          {/* Background waveform decoration */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.03]">
            <svg viewBox="0 0 600 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-w-[500px]">
              {[0,1,2,3,4,5,6,7,8,9,10,11].map(i => (
                <rect key={i} x={60 + i * 42} y={100 - (i < 6 ? 20 + Math.sin(i) * 10 : 45 + Math.cos(i) * 12)} width="14" height={(i < 6 ? 40 : 90) + Math.floor(Math.sin(i * 1.5) * 15)} rx="4" fill="white"/>
              ))}
            </svg>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:pr-12"
          >
            <p className="text-xs font-semibold tracking-widest text-zinc-500 mb-6 uppercase">
              Without Voicely
            </p>
            {/* Slow waveform — typing */}
            <svg viewBox="0 0 200 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[160px] mb-4 opacity-40">
              {[0,1,2,3,4,5,6,7,8,9].map(i => (
                <rect key={i} x={i * 18} y={12 - [6,10,4,8,12,6,10,4,8,6][i]} width="8" height={[12,20,8,16,24,12,20,8,16,12][i]} rx="3" fill="#A1A1AA"/>
              ))}
            </svg>
            <div className="text-7xl sm:text-8xl font-black text-zinc-300 leading-none mb-2">
              45
            </div>
            <p className="text-sm text-zinc-500 mb-6">
              wpm average typing speed
            </p>
            <div className="h-3 rounded-full bg-zinc-800 w-[30%] mb-3 overflow-hidden">
              <div className="h-full w-full rounded-full bg-zinc-500" />
            </div>
            <p className="text-sm italic text-zinc-500">
              Fighting your keyboard all day long.
            </p>
          </motion.div>

          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-px w-px bg-gradient-to-b from-transparent via-zinc-800 to-transparent">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-xl">
                <circle cx="40" cy="40" r="38" fill="#1C1C1E" stroke="#27272A" strokeWidth="2"/>
                <rect x="26" y="30" width="6" height="20" rx="2" fill="#4F46E5"/>
                <rect x="36" y="26" width="6" height="28" rx="2" fill="#4F46E5" opacity="0.7"/>
                <rect x="46" y="32" width="6" height="16" rx="2" fill="#A5B4FC" opacity="0.5"/>
                <text x="40" y="72" fontFamily="system-ui,sans-serif" fontSize="10" fill="#A5B4FC" fontWeight="700" textAnchor="middle">3×</text>
                <path d="M40 78 L38 74 L42 74 Z" fill="#A5B4FC" opacity="0.5"/>
              </svg>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:pl-12"
          >
            <p className="text-xs font-semibold tracking-widest text-indigo-400 mb-6 uppercase">
              With Voicely
            </p>
            {/* Fast waveform — speaking */}
            <svg viewBox="0 0 200 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[160px] mb-4">
              {[0,1,2,3,4,5,6,7,8,9,10,11,12,13].map(i => (
                <rect key={i} x={i * 14} y={12 - [10,16,22,8,18,24,12,20,14,22,8,18,24,12][i]} width="6" height={[20,32,44,16,36,48,24,40,28,44,16,36,48,24][i]} rx="2" fill="#4F46E5"/>
              ))}
            </svg>
            <div className="text-7xl sm:text-8xl font-black text-indigo-600 leading-none mb-2">
              {count}+
            </div>
            <p className="text-sm text-zinc-500 mb-6">
              wpm speaking speed
            </p>
            <div className="h-3 rounded-full bg-zinc-800 mb-3 overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="h-full rounded-full bg-indigo-600"
              />
            </div>
            <p className="text-sm italic text-zinc-500">
              Just speak. Voicely handles the rest.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpeedComparisonSection;
