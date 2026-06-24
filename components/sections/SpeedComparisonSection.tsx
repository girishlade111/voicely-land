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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:pr-12"
          >
            <p className="text-xs font-semibold tracking-widest text-zinc-500 mb-6 uppercase">
              Without Voicely
            </p>
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

          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-px w-px bg-zinc-800">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="inline-block text-xs font-bold text-white bg-indigo-600 rounded-full px-3 py-1.5 whitespace-nowrap">
                3× FASTER
              </span>
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
