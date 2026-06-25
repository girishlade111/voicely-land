"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const ShortcutsSvg = () => (
  <svg viewBox="0 0 340 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="kbdGlow" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#18181B"/>
        <stop offset="100%" stopColor="#27272A"/>
      </linearGradient>
      <linearGradient id="keyGlow" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="white" stopOpacity="0.12"/>
        <stop offset="100%" stopColor="white" stopOpacity="0.06"/>
      </linearGradient>
      <filter id="kbdShadow">
        <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#000" floodOpacity="0.3"/>
      </filter>
    </defs>
    <rect x="0" y="0" width="340" height="280" rx="18" fill="white" />
    <rect x="0" y="0" width="340" height="280" rx="18" stroke="#E4E4E7" strokeWidth="1" />
    {/* Window controls */}
    <rect x="16" y="16" width="8" height="8" rx="4" fill="#F87171" />
    <rect x="30" y="16" width="8" height="8" rx="4" fill="#FBBF24" />
    <rect x="44" y="16" width="8" height="8" rx="4" fill="#34D399" />
    <text x="140" y="23" fontFamily="system-ui,sans-serif" fontSize="11" fill="#A1A1AA" fontWeight="500" textAnchor="middle">Shortcut Settings</text>
    {/* Keyboard card */}
    <rect x="16" y="40" width="308" height="150" rx="14" fill="url(#kbdGlow)" filter="url(#kbdShadow)"/>
    {/* Keyboard outline */}
    <rect x="28" y="56" width="284" height="94" rx="8" fill="none" stroke="white" strokeOpacity="0.06" strokeWidth="1"/>
    {/* Key row — combo display */}
    <rect x="12" y="12" width="0" height="0" />
    {[
      { key: "⌘", label: "Command", x: 38, w: 42 },
      { key: "⇧", label: "Shift", x: 96, w: 42 },
      { key: "H", label: "Hotkey", x: 154, w: 42 },
    ].map((k, i) => (
      <g key={i}>
        <rect x={k.x} y={68} width={k.w} height={34} rx="7" fill="url(#keyGlow)" stroke="white" strokeOpacity="0.1" strokeWidth="1"/>
        <text x={k.x + k.w / 2} y="91" fontFamily="system-ui,sans-serif" fontSize="14" fill="white" fontWeight="700" textAnchor="middle">{k.key}</text>
        <text x={k.x + k.w / 2} y="130" fontFamily="system-ui,sans-serif" fontSize="9" fill="#71717A" textAnchor="middle" fontWeight="500">{k.label}</text>
      </g>
    ))}
    {/* Plus signs */}
    <text x="88" y="91" fontFamily="system-ui,sans-serif" fontSize="13" fill="#52525B" fontWeight="600" textAnchor="middle">+</text>
    <text x="146" y="91" fontFamily="system-ui,sans-serif" fontSize="13" fill="#52525B" fontWeight="600" textAnchor="middle">+</text>
    {/* Separator */}
    <line x1="101" y1="140" x2="133" y2="140" stroke="white" strokeOpacity="0.08" strokeWidth="1"/>
    <text x="170" y="165" fontFamily="system-ui,sans-serif" fontSize="10" fill="#A5B4FC" textAnchor="middle" fontWeight="500">⇢ Activate Voicely</text>
    {/* Profile badges */}
    <rect x="16" y="200" width="148" height="28" rx="8" fill="#FAFAFA" stroke="#E4E4E7" strokeWidth="1"/>
    <text x="24" y="218" fontFamily="system-ui,sans-serif" fontSize="10" fill="#71717A">Current mode:</text>
    <text x="88" y="218" fontFamily="system-ui,sans-serif" fontSize="10" fill="#18181B" fontWeight="600">Hold to talk</text>
    <rect x="172" y="200" width="64" height="28" rx="8" fill="#FAFAFA" stroke="#E4E4E7" strokeWidth="1"/>
    <text x="204" y="218" fontFamily="system-ui,sans-serif" fontSize="9" fill="#71717A" textAnchor="middle" fontWeight="500">Toggle</text>
    {/* Toggle switch */}
    <rect x="272" y="203" width="34" height="22" rx="11" fill="#4F46E5"/>
    <circle cx="289" cy="214" r="8" fill="white" filter="url(#kbdShadow)"/>
    <text x="170" y="254" fontFamily="system-ui,sans-serif" fontSize="9" fill="#A1A1AA" textAnchor="middle">Works in any app · No focus required</text>
    {/* Fn key hint */}
    <rect x="139" y="260" width="62" height="16" rx="6" fill="white" stroke="#E4E4E7" strokeWidth="1"/>
    <text x="170" y="272" fontFamily="system-ui,sans-serif" fontSize="8" fill="#71717A" textAnchor="middle" fontWeight="500">Alternative: Fn + F6</text>
  </svg>
);

const PunctuationSvg = () => (
  <svg viewBox="0 0 340 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="0" y="0" width="340" height="300" rx="16" fill="white" />
    <rect x="0" y="0" width="340" height="300" rx="16" stroke="#E4E4E7" strokeWidth="1" />
    <rect x="16" y="14" width="8" height="8" rx="4" fill="#F87171" />
    <rect x="30" y="14" width="8" height="8" rx="4" fill="#FBBF24" />
    <rect x="44" y="14" width="8" height="8" rx="4" fill="#34D399" />
    <text x="68" y="21" fontFamily="system-ui,sans-serif" fontSize="11" fill="#71717A" fontWeight="600">Auto-Punctuation Preview</text>
    <line x1="0" y1="34" x2="340" y2="34" stroke="#E4E4E7" strokeWidth="1" />
    <text x="16" y="58" fontFamily="system-ui,sans-serif" fontSize="10" fill="#A1A1AA" fontWeight="600" letterSpacing="1.5">YOU SAID</text>
    <text x="16" y="80" fontFamily="system-ui,sans-serif" fontSize="11" fill="#71717A" fontStyle="italic">
      <tspan x="16" dy="0">hey can you send me the report today</tspan>
      <tspan x="16" dy="16">also check if the meeting is confirmed</tspan>
      <tspan x="16" dy="16">i have a question about the budget</tspan>
    </text>
    {/* Arrow */}
    <rect x="152" y="116" width="36" height="22" rx="6" fill="#EEF2FF" />
    <path d="M166 122L172 127L166 132" stroke="#4F46E5" strokeWidth="1.5" fill="none" />
    <path d="M170 127L152 127" stroke="#4F46E5" strokeWidth="1.5" />
    <text x="170" y="158" fontFamily="system-ui,sans-serif" fontSize="10" fill="#A1A1AA" fontWeight="600" textAnchor="middle" letterSpacing="1.5">VOICELY TYPED</text>
    <text x="16" y="182" fontFamily="system-ui,sans-serif" fontSize="11" fill="#18181B">
      <tspan x="16" dy="0">Hey</tspan>
      <tspan dx="2" fill="#4F46E5" fontWeight="700">,</tspan>
      <tspan> can you send me the report today</tspan>
      <tspan dx="2" fill="#4F46E5" fontWeight="700">?</tspan>
    </text>
    <text x="16" y="200" fontFamily="system-ui,sans-serif" fontSize="11" fill="#18181B">
      <tspan x="16" dy="0">Also</tspan>
      <tspan dx="2" fill="#4F46E5" fontWeight="700">,</tspan>
      <tspan> check if the meeting is</tspan>
    </text>
    <text x="16" y="218" fontFamily="system-ui,sans-serif" fontSize="11" fill="#18181B">
      <tspan x="16" dy="0">confirmed</tspan>
      <tspan dx="2" fill="#4F46E5" fontWeight="700">.</tspan>
      <tspan> I have a question about the budget</tspan>
      <tspan dx="2" fill="#4F46E5" fontWeight="700">.</tspan>
    </text>
    {/* Highlight legend */}
    <rect x="16" y="260" width="8" height="8" rx="2" fill="#EEF2FF" />
    <text x="30" y="268" fontFamily="system-ui,sans-serif" fontSize="10" fill="#71717A">Punctuation added by Voicely</text>
    {/* Pause indicator */}
    <rect x="16" y="278" width="8" height="8" rx="2" fill="#F4F4F5" stroke="#D4D4D8" strokeWidth="1" />
    <text x="30" y="286" fontFamily="system-ui,sans-serif" fontSize="10" fill="#71717A">Auto-paragraph on long pause</text>
  </svg>
);

const FeatureBlockTwo = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div className="py-20">
      <div ref={ref} className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:order-2"
          >
            <div className="relative md:text-right">
              <span className="text-6xl font-black text-indigo-100 absolute -top-8 -right-2 select-none pointer-events-none leading-none md:block hidden">
                02
              </span>
              <span className="text-6xl font-black text-indigo-100 absolute -top-8 -left-2 select-none pointer-events-none leading-none md:hidden">
                02
              </span>
              <p className="text-xs font-semibold tracking-widest text-indigo-600 mb-3 relative z-10">
                SHORTCUTS
              </p>
              <h3 className="text-2xl font-bold text-white/90 mb-4 relative z-10">
                One key. Instant dictation.
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-md md:ml-auto">
                Assign any keyboard shortcut to activate Voicely.
                Hold your shortcut, speak, release &mdash; your words appear instantly
                in the active app. No switching windows. No clicking. Just speak.
              </p>
              <div className="flex flex-wrap gap-2 md:justify-end">
                <Badge variant="secondary">Global Hotkey</Badge>
                <Badge variant="secondary">Hold-to-Talk</Badge>
                <Badge variant="secondary">Toggle Mode</Badge>
                <Badge variant="secondary">Per-App Shortcuts</Badge>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="md:order-1"
          >
            <div className="w-full max-w-md mx-auto drop-shadow-lg">
              <ShortcutsSvg />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const FeatureBlockThree = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div className="py-20">
      <div ref={ref} className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative">
              <span className="text-6xl font-black text-indigo-100 absolute -top-8 -left-2 select-none pointer-events-none leading-none">
                03
              </span>
              <p className="text-xs font-semibold tracking-widest text-indigo-600 mb-3 relative z-10">
                AUTO-PUNCTUATION
              </p>
              <h3 className="text-2xl font-bold text-white/90 mb-4 relative z-10">
                Speak naturally. Read perfectly.
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-md">
                Voicely automatically adds commas, periods, question marks,
                and paragraph breaks based on your speech patterns and pauses &mdash;
                no manual editing needed. Works in English, Hindi, and Marathi.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Smart Commas</Badge>
                <Badge variant="secondary">Pause Detection</Badge>
                <Badge variant="secondary">Question Marks</Badge>
                <Badge variant="secondary">Hindi Support</Badge>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div className="w-full max-w-md mx-auto drop-shadow-lg">
              <PunctuationSvg />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const FeatureSpecsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="features-deep">
      <div ref={ref}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 pb-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold tracking-widest text-white/40 mb-4">
              BUILT FOR POWER USERS
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white/90 mb-4">
              Made for the way you work
            </h2>
            <p className="text-white/60 text-sm max-w-lg mx-auto">
              Three features that separate Voicely from every other dictation tool.
            </p>
          </motion.div>
        </div>
      </div>

      <FeatureBlockTwo />
      <FeatureBlockThree />
    </section>
  );
};

export default FeatureSpecsSection;
