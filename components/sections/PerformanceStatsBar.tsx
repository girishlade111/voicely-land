"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface StatConfig {
  target: number;
  suffix: string;
  prefix?: string;
  label: string;
  sublabel: string;
}

const stats: StatConfig[] = [
  { target: 95, suffix: "%+", label: "Transcription Accuracy", sublabel: "across English, Hindi & Marathi" },
  { target: 500, suffix: "ms", prefix: "<", label: "Response Latency", sublabel: "near real-time transcription" },
  { target: 3, suffix: "×", label: "Faster Than Typing", sublabel: "speak at 130+ wpm vs 45 wpm typing" },
  { target: 100, suffix: "%", label: "On-Device Processing", sublabel: "zero audio sent to the cloud" },
];

interface StatBlockProps {
  config: StatConfig;
  isInView: boolean;
  delay: number;
  hasDivider: boolean;
}

const StatBlock = ({ config, isInView, delay, hasDivider }: StatBlockProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1500;
    const start = performance.now();
    let rafId: number;

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.round(progress * config.target));
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    const timeoutId = setTimeout(() => {
      rafId = requestAnimationFrame(step);
    }, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(rafId);
    };
  }, [isInView, delay, config.target]);

  return (
    <div
      className={`flex flex-col items-center text-center py-4 ${
        hasDivider ? "md:border-r md:border-indigo-500" : ""
      }`}
    >
      <div className="text-5xl font-black text-white mb-1">
        {config.prefix}{count}{config.suffix}
      </div>
      <p className="text-sm text-indigo-200 mb-0.5">{config.label}</p>
      <p className="text-xs text-indigo-300">{config.sublabel}</p>
    </div>
  );
};

const PerformanceStatsBar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="bg-indigo-600 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
            {stats.map((stat, i) => (
              <StatBlock
                key={stat.label}
                config={stat}
                isInView={isInView}
                delay={i * 0.15}
                hasDivider={i < stats.length - 1}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 pt-4 border-t border-indigo-500 text-center">
          <p className="text-sm text-indigo-200">
            Based on internal benchmarks. Accuracy may vary by accent and background noise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PerformanceStatsBar;
