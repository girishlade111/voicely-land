"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const CommandsSvg = () => (
  <svg viewBox="0 0 340 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="0" y="0" width="340" height="280" rx="16" fill="white" />
    <rect x="0" y="0" width="340" height="280" rx="16" stroke="#E4E4E7" strokeWidth="1" />
    <rect x="16" y="14" width="8" height="8" rx="4" fill="#F87171" />
    <rect x="30" y="14" width="8" height="8" rx="4" fill="#FBBF24" />
    <rect x="44" y="14" width="8" height="8" rx="4" fill="#34D399" />
    <text x="68" y="21" fontFamily="system-ui,sans-serif" fontSize="11" fill="#71717A" fontWeight="600">Voice Commands</text>
    <line x1="0" y1="34" x2="340" y2="34" stroke="#E4E4E7" strokeWidth="1" />
    {[
      { icon: "new paragraph", label: "Insert\nparagraph break" },
      { icon: "undo that", label: "Delete last\nsentence" },
      { icon: "add email", label: "Insert\nhello@voicely.app" },
      { icon: "sign off", label: "Insert email\nsignature" },
    ].map((cmd, i) => (
      <g key={i}>
        <rect x="16" y={48 + i * 48} width="24" height="24" rx="8" fill="#EEF2FF" />
        <path d={["M22 56C24 54 28 58 28 62C28 66 24 62 22 62L16 62", "M22 56C24 54 28 58 28 62C28 66 24 62 22 62L16 62", "M22 56C24 54 28 58 28 62C28 66 24 62 22 62L16 62", "M22 56C24 54 28 58 28 62C28 66 24 62 22 62L16 62"][i]} stroke="#4F46E5" strokeWidth="1.5" fill="none" />
        <text x="50" y={63 + i * 48} fontFamily="system-ui,sans-serif" fontSize="12" fill="#18181B" fontWeight="600">&ldquo;{cmd.icon}&rdquo;</text>
        <path d={`M${240} ${60 + i * 48} L${244} ${64 + i * 48} L${240} ${68 + i * 48}`} stroke="#D4D4D8" strokeWidth="1.5" fill="none" />
        <text x="254" y={64 + i * 48} fontFamily="system-ui,sans-serif" fontSize="11" fill="#71717A">{cmd.label}</text>
        {i < 3 && <line x1="16" y1={88 + i * 48} x2="324" y2={88 + i * 48} stroke="#F4F4F5" strokeWidth="1" />}
      </g>
    ))}
    <rect x="16" y="244" width="308" height="24" rx="8" fill="#F4F4F5" />
    <rect x="16" y="244" width="308" height="24" rx="8" stroke="#E4E4E7" strokeWidth="1" strokeDasharray="4 2" />
    <text x="170" y="259" fontFamily="system-ui,sans-serif" fontSize="11" fill="#4F46E5" fontWeight="600" textAnchor="middle">+ Add Command</text>
    <rect x="232" y="6" width="92" height="22" rx="11" fill="#4F46E5" />
    <text x="278" y="21" fontFamily="system-ui,sans-serif" fontSize="10" fill="white" fontWeight="700" textAnchor="middle">Unlimited Commands</text>
  </svg>
);

const ShortcutsSvg = () => (
  <svg viewBox="0 0 340 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="0" y="0" width="340" height="280" rx="16" fill="white" />
    <rect x="0" y="0" width="340" height="280" rx="16" stroke="#E4E4E7" strokeWidth="1" />
    <rect x="16" y="14" width="8" height="8" rx="4" fill="#F87171" />
    <rect x="30" y="14" width="8" height="8" rx="4" fill="#FBBF24" />
    <rect x="44" y="14" width="8" height="8" rx="4" fill="#34D399" />
    <text x="68" y="21" fontFamily="system-ui,sans-serif" fontSize="11" fill="#71717A" fontWeight="600">Shortcut Settings</text>
    <line x1="0" y1="34" x2="340" y2="34" stroke="#E4E4E7" strokeWidth="1" />
    <rect x="16" y="48" width="308" height="128" rx="12" fill="#09090B" />
    {[
      { key: "⌘", plus: false },
      { key: "+", plus: false },
      { key: "⇧", plus: false },
      { key: "+", plus: false },
      { key: "Space", plus: false },
    ].map((k, i) => (
      <rect
        key={i}
        x={42 + i * 56}
        y={72}
        width={k.key === "Space" ? 52 : 38}
        height={32}
        rx="6"
        fill="white"
        fillOpacity="0.08"
        stroke="white"
        strokeOpacity="0.12"
        strokeWidth="1"
      />
    ))}
    <text x="50" y="92" fontFamily="system-ui,sans-serif" fontSize="13" fill="white" fontWeight="600">⌘</text>
    <text x="94" y="92" fontFamily="system-ui,sans-serif" fontSize="13" fill="#71717A">+</text>
    <text x="150" y="92" fontFamily="system-ui,sans-serif" fontSize="13" fill="white" fontWeight="600">⇧</text>
    <text x="204" y="92" fontFamily="system-ui,sans-serif" fontSize="13" fill="#71717A">+</text>
    <text x="248" y="92" fontFamily="system-ui,sans-serif" fontSize="12" fill="white" fontWeight="600">Space</text>
    <text x="170" y="144" fontFamily="system-ui,sans-serif" fontSize="11" fill="#A5B4FC" textAnchor="middle">Activate Voicely</text>
    <rect x="16" y="190" width="308" height="24" rx="6" fill="#F4F4F5" />
    <text x="28" y="206" fontFamily="system-ui,sans-serif" fontSize="11" fill="#71717A">Current mode:</text>
    <text x="106" y="206" fontFamily="system-ui,sans-serif" fontSize="11" fill="#18181B" fontWeight="600">Hold to talk</text>
    <rect x="278" y="193" width="36" height="18" rx="9" fill="#4F46E5" />
    <rect x="300" y="196" width="12" height="12" rx="6" fill="white" />
    <text x="170" y="248" fontFamily="system-ui,sans-serif" fontSize="10" fill="#A1A1AA" textAnchor="middle">Works in any app. No focus required.</text>
    {/* Small key indicators */}
    <rect x="140" y="228" width="52" height="18" rx="4" fill="#F4F4F5" stroke="#E4E4E7" strokeWidth="1" />
    <text x="166" y="240" fontFamily="system-ui,sans-serif" fontSize="9" fill="#71717A" textAnchor="middle">Fn + F6</text>
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

const FeatureBlockOne = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div className="bg-white py-20">
      <div ref={ref} className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative">
              <span className="text-6xl font-black text-indigo-100 absolute -top-8 -left-2 select-none pointer-events-none leading-none">
                01
              </span>
              <p className="text-xs font-semibold tracking-widest text-indigo-600 mb-3 relative z-10">
                VOICE COMMANDS
              </p>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4 relative z-10">
                Your words. Your rules.
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6 max-w-md">
                Train Voicely to respond to your own custom phrases.
                Say &apos;start new paragraph&apos;, &apos;delete last sentence&apos;, or &apos;add signature&apos; &mdash;
                Voicely executes it instantly, in any app.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">New Paragraph</Badge>
                <Badge variant="secondary">Delete Last Word</Badge>
                <Badge variant="secondary">Add Signature</Badge>
                <Badge variant="secondary">Send Email</Badge>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="w-full max-w-md mx-auto drop-shadow-lg">
              <CommandsSvg />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const FeatureBlockTwo = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div className="bg-zinc-50 py-20">
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
              <h3 className="text-2xl font-bold text-zinc-900 mb-4 relative z-10">
                One key. Instant dictation.
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6 max-w-md md:ml-auto">
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
    <div className="bg-white py-20">
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
              <h3 className="text-2xl font-bold text-zinc-900 mb-4 relative z-10">
                Speak naturally. Read perfectly.
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6 max-w-md">
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
            <p className="text-xs font-semibold tracking-widest text-zinc-400 mb-4">
              BUILT FOR POWER USERS
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
              Made for the way you work
            </h2>
            <p className="text-zinc-500 text-sm max-w-lg mx-auto">
              Three features that separate Voicely from every other dictation tool.
            </p>
          </motion.div>
        </div>
      </div>

      <FeatureBlockOne />
      <FeatureBlockTwo />
      <FeatureBlockThree />
    </section>
  );
};

export default FeatureSpecsSection;
