"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

type Phase = 0 | 1 | 2 | 3 | 4 | 5;

const PHASE_COUNT = 6;

const DEMO_WORDS = [
  "Hey,", "can", "you", "schedule", "a", "team", "meeting",
  "for", "Thursday", "at", "3", "PM?", "Also", "remind",
  "me", "to", "review", "the", "quarterly", "report",
  "before", "the", "call.",
];

const WORD_INTERVAL = 250;

const PHASE_DURATIONS: Record<Phase, number> = {
  0: 1000,
  1: 600,
  2: 800,
  3: DEMO_WORDS.length * WORD_INTERVAL,
  4: 1500,
  5: 800,
};

const BAR_HEIGHTS = [6, 8, 6, 8, 6];
const ACTIVE_BAR_PEAKS = [14, 20, 18, 16, 12];
const ACTIVE_BAR_DURATIONS = [0.4, 0.3, 0.5, 0.35, 0.45];
const IDLE_BAR_DURATIONS = [0.5, 0.7, 0.55, 0.75, 0.6];

export default function AnimatedDemoSection() {
  const [phase, setPhase] = useState<Phase>(0);
  const [typedWords, setTypedWords] = useState<string[]>([]);
  const [isActive, setIsActive] = useState(false);
  const [showDone, setShowDone] = useState(false);

  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearAllTimeouts = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  }, []);

  useEffect(() => {
    clearAllTimeouts();

    const at = (delayMs: number, fn: () => void) => {
      timeoutsRef.current.push(setTimeout(fn, delayMs));
    };

    at(0, () => {
      if (phase < 2) {
        setTypedWords([]);
      }
      setIsActive(phase === 2 || phase === 3);
      setShowDone(phase === 4);
    });

    if (phase === 3) {
      DEMO_WORDS.forEach((_, index) => {
        at(index * WORD_INTERVAL, () => setTypedWords(DEMO_WORDS.slice(0, index + 1)));
      });
    }

    if (phase === 4) {
      at(1200, () => setShowDone(false));
    }

    at(PHASE_DURATIONS[phase], () => setPhase(((phase + 1) % PHASE_COUNT) as Phase));

    return clearAllTimeouts;
  }, [phase, clearAllTimeouts]);

  const totalWords = DEMO_WORDS.length;
  const isRecording = phase >= 1 && phase <= 3;
  const showCursor = isRecording && typedWords.length < totalWords;

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
                      {showCursor && (
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
                isRecording
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
                    isRecording
                      ? { scale: [1, 1.8, 1], opacity: [0.4, 0, 0] }
                      : {}
                  }
                  transition={{ duration: 0.6, times: [0, 0.5, 1], repeat: Infinity }}
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
                    isRecording
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
                {BAR_HEIGHTS.map((baseHeight, i) => (
                  <motion.div
                    key={i}
                    className="w-[3px] rounded-full"
                    animate={
                      isActive
                        ? {
                            height: [baseHeight, ACTIVE_BAR_PEAKS[i], baseHeight],
                            backgroundColor: "rgb(129 140 248)",
                          }
                        : {
                            height: [baseHeight, baseHeight],
                            backgroundColor: "rgb(113 113 122)",
                          }
                    }
                    transition={
                      isActive
                        ? {
                            duration: ACTIVE_BAR_DURATIONS[i],
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                          }
                        : { duration: IDLE_BAR_DURATIONS[i] }
                    }
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <span
                  className={`text-xs transition-colors duration-300 ${
                    isRecording ? "text-apple-blue" : "text-zinc-500"
                  }`}
                >
                  {isRecording ? "Listening..." : "⌘⇧Space"}
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
