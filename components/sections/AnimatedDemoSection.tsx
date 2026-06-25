"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

type Phase = 0 | 1 | 2 | 3 | 4 | 5;

const DEMO_WORDS = [
  "Hey,", "can", "you", "schedule", "a", "team", "meeting",
  "for", "Thursday", "at", "3", "PM?", "Also", "remind",
  "me", "to", "review", "the", "quarterly", "report",
  "before", "the", "call.",
];

const PHASE_DURATIONS: Record<Phase, number> = {
  0: 1000,
  1: 600,
  2: 800,
  3: DEMO_WORDS.length * 250,
  4: 1500,
  5: 800,
};

const WORD_INTERVAL = 250;

export default function AnimatedDemoSection() {
  const [phase, setPhase] = useState<Phase>(0);
  const [typedWords, setTypedWords] = useState<string[]>([]);
  const [isActive, setIsActive] = useState(false);
  const [showDone, setShowDone] = useState(false);

  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const clearAllTimeouts = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  }, []);

  const setSafeTimeout = useCallback((fn: () => void, ms: number) => {
    const id = setTimeout(fn, ms);
    timeoutsRef.current.push(id);
    return id;
  }, []);

  useEffect(() => {
    clearAllTimeouts();
    setTypedWords([]);
    setIsActive(false);
    setShowDone(false);

    switch (phase) {
      case 0: {
        break;
      }
      case 1: {
        break;
      }
      case 2: {
        setIsActive(true);
        break;
      }
      case 3: {
        setIsActive(true);
        DEMO_WORDS.forEach((_, index) => {
          setSafeTimeout(() => {
            setTypedWords(DEMO_WORDS.slice(0, index + 1));
          }, index * WORD_INTERVAL);
        });
        break;
      }
      case 4: {
        setShowDone(true);
        setSafeTimeout(() => setShowDone(false), 1200);
        break;
      }
      case 5: {
        break;
      }
    }

    const advanceTimeout = setSafeTimeout(() => {
      setPhase((prev) => {
        const next = ((prev + 1) % 6) as Phase;
        return next;
      });
    }, PHASE_DURATIONS[phase]);

    return () => {
      clearTimeout(advanceTimeout);
    };
  }, [phase, clearAllTimeouts, setSafeTimeout]);

  useEffect(() => {
    return () => clearAllTimeouts();
  }, [clearAllTimeouts]);

  const totalWords = DEMO_WORDS.length;

  return (
    <section className="bg-white py-16 sm:py-24" id="demo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest text-ink-muted-80 mb-4">
            SEE IT IN ACTION
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-4">
            See Voicely in Action
          </h2>
          <p className="text-ink-muted-48 max-w-lg mx-auto">
            Press a shortcut. Speak naturally. Watch it type.
          </p>
        </div>

        <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 bg-zinc-950 relative">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 80%, rgba(99,102,241,0.08), transparent 70%)`,
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(1deg, transparent 1px, transparent 1px), linear-gradient(90deg, transparent 1px, transparent 1px)`,
              backgroundSize: `32px 32px`,
            }}
          />
          <div className="absolute top-6 right-8 flex gap-2">
            <div className="w-1 h-1 rounded-full bg-zinc-700" />
            <div className="w-1 h-1 rounded-full bg-zinc-700" />
            <div className="w-1 h-1 rounded-full bg-zinc-700" />
          </div>

          <div className="relative z-10 p-8 pb-6 sm:p-8 sm:pb-6">
            <div className="mx-auto w-[90%]">
              <div className="rounded-xl overflow-hidden bg-white/[0.07] backdrop-blur-lg border border-white/10 shadow-sm">
                <div className="flex items-center px-4 h-9 bg-white/[0.05] border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <div className="w-[10px] h-[10px] rounded-full" style={{ backgroundColor: "#EF4444" }} />
                    <div className="w-[10px] h-[10px] rounded-full" style={{ backgroundColor: "#F59E0B" }} />
                    <div className="w-[10px] h-[10px] rounded-full" style={{ backgroundColor: "#22C55E" }} />
                  </div>
                  <span className="text-xs text-white/40 mx-auto">New Document</span>
                  <div className="w-12" />
                </div>

                <div className="p-4 sm:p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-2 rounded bg-white/20" />
                    <div className="w-6 h-2 rounded bg-white/20" />
                    <div className="w-10 h-2 rounded bg-white/20" />
                    <div className="w-7 h-2 rounded bg-white/20" />
                  </div>
                  <div className="h-px bg-white/10 mb-3" />

                  <div className="space-y-2 mb-4">
                    <div className="h-2 w-full rounded bg-white/20" />
                    <div className="h-2 w-3/4 rounded bg-white/20" />
                  </div>

                  <div className="min-h-[5rem] sm:min-h-[6rem]">
                    <p className="text-sm sm:text-sm text-white/80 leading-relaxed">
                      {typedWords.map((word, i) => (
                        <motion.span
                          key={`${word}-${i}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.15 }}
                          className="inline"
                        >
                          {word}{" "}
                        </motion.span>
                      ))}
                      {phase >= 1 && typedWords.length < totalWords && (
                        <span className="inline-block w-[2px] h-[1.1em] bg-white/80 align-middle" />
                      )}
                      {phase === 0 && (
                        <span className="inline-block w-[2px] h-[1.1em] bg-white/40 align-middle animate-pulse" />
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 pb-8 sm:pb-8 flex justify-center">
            <motion.div
              className={`flex items-center gap-3 px-4 py-2 rounded-full border transition-colors duration-300 ${
                phase >= 1 && phase <= 3
                  ? "bg-zinc-800/80 border-apple-blue/40"
                  : "bg-zinc-900 border-zinc-700"
              }`}
              animate={
                phase === 1
                  ? {
                      scale: [1, 1.02, 1],
                      transition: { duration: 0.3 },
                    }
                  : {}
              }
            >
              <div className="relative">
                <motion.div
                  animate={
                    phase >= 1 && phase <= 3
                      ? { scale: [1, 1.8, 1], opacity: [0.4, 0, 0] }
                      : {}
                  }
                  transition={{ duration: 0.6, times: [0, 0.5, 1] }}
                  className="absolute inset-0 rounded-full bg-apple-blue/30"
                  style={{ width: 24, height: 24, top: -4, left: -4 }}
                />
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={
                    phase >= 1 && phase <= 3
                      ? "text-apple-blue relative"
                      : "text-zinc-500 relative"
                  }
                >
                  <rect x="6" y="2" width="12" height="18" rx="4" />
                  <line x1="8" y1="10" x2="8" y2="14" />
                  <line x1="16" y1="10" x2="16" y2="14" />
                  <line x1="10" y1="18" x2="14" y2="18" />
                  <line x1="12" y1="2" x2="12" y2="2" />
                  <line x1="10" y1="2" x2="14" y2="2" />
                  <line x1="12" y1="18" x2="12" y2="22" />
                  <line x1="8" y1="22" x2="16" y2="22" />
                </svg>
              </div>

              <div className="flex items-center gap-1">
                {[0, 1, 2, 3, 4].map((i) => {
                  const heights = {
                    idle: [6, 8, 6, 8, 6],
                    mobileIdle: [6, 8, 6],
                  };
                  const mobile = false;

                  if (mobile && (i === 1 || i === 3)) return null;

                  const idx = mobile
                    ? i > 2
                      ? i - 2
                      : i
                    : i;
                  const isMobileHidden = i === 1 || i === 3;

                  return (
                    <motion.div
                      key={i}
                      className="w-[3px] rounded-full bg-current"
                      style={{
                        display: isMobileHidden ? "none" : "block",
                      }}
                      animate={
                        isActive
                          ? {
                              height: [
                                heights.idle[idx % heights.idle.length],
                                [14, 20, 18, 16, 12][idx],
                                heights.idle[idx % heights.idle.length],
                              ],
                              opacity: 1,
                            }
                          : {
                              height: [heights.idle[idx % heights.idle.length]],
                            }
                      }
                      transition={
                        isActive
                          ? {
                              duration: [0.4, 0.3, 0.5, 0.35, 0.45][idx],
                              repeat: Infinity,
                              repeatType: "reverse",
                              ease: "easeInOut",
                            }
                          : { duration: 0.3 }
                      }
                      color={
                        isActive ? "rgb(129 140 248)" : "rgb(113 113 122)"
                      }
                    />
                  );
                })}
              </div>

              <div className="flex items-center gap-2">
                <span
                  className={`text-xs transition-colors duration-300 ${
                    phase >= 1 && phase <= 3
                      ? "text-apple-blue"
                      : "text-zinc-500"
                  }`}
                >
                  {phase >= 1 && phase <= 3 ? "Listening..." : "⌘⇧Space"}
                </span>
                {showDone && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.2, times: [0, 0.2, 1] }}
                    className="text-xs text-emerald-400"
                  >
                    ✓ Done
                  </motion.span>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        <p className="text-center text-ink-muted-48 mt-6 text-sm">
          Speak in English, Hindi, or Marathi &mdash; Voicely types it instantly.
        </p>
      </div>
    </section>
  );
}
