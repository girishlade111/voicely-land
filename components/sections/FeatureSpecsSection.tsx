"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mic, ArrowDown, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const commands = [
  { phrase: "new paragraph", action: "Insert paragraph break" },
  { phrase: "undo that", action: "Delete last sentence" },
  { phrase: "add my email", action: "Insert: hello@voicely.app" },
  { phrase: "sign off", action: "Insert email signature" },
];

const punctuationBefore = "hey can you send me the report today also check if the meeting is confirmed\nI have a question about the budget";

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
            <div className="bg-white rounded-2xl shadow-lg border border-zinc-100 overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 pt-3.5 pb-2 border-b border-zinc-100">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="text-sm font-medium text-zinc-500 ml-2">
                  My Voice Commands
                </span>
              </div>
              <div className="p-4 space-y-3">
                {commands.map((cmd, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
                      <Mic className="h-3.5 w-3.5 text-indigo-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-zinc-900">
                        &ldquo;{cmd.phrase}&rdquo;
                      </p>
                    </div>
                    <ArrowDown className="h-3.5 w-3.5 text-zinc-300 shrink-0 rotate-[-90deg]" />
                    <p className="text-sm text-zinc-500 truncate">
                      {cmd.action}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-zinc-100 px-4 py-2.5">
                <button className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-600 hover:text-indigo-700 transition-colors">
                  <Plus className="h-3.5 w-3.5" />
                  Add Command
                </button>
              </div>
            </div>
            <span className="absolute -top-2.5 -right-2.5 text-xs font-bold text-white bg-indigo-600 rounded-full px-3 py-1 shadow-sm">
              Unlimited Commands
            </span>
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
            <div className="bg-white rounded-2xl shadow-lg border border-zinc-100 overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 pt-3.5 pb-2 border-b border-zinc-100">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="text-sm font-medium text-zinc-500 ml-2">
                  Shortcut Settings
                </span>
              </div>
              <div className="p-5 space-y-5">
                <div className="bg-zinc-950 rounded-xl p-4 flex items-center justify-center gap-2.5 flex-wrap">
                  <span className="inline-flex items-center justify-center min-w-[2rem] h-8 px-2.5 rounded-md bg-white/10 text-white text-sm font-semibold shadow-inner">
                    ⌘
                  </span>
                  <span className="text-zinc-500 text-sm">+</span>
                  <span className="inline-flex items-center justify-center min-w-[2rem] h-8 px-2.5 rounded-md bg-white/10 text-white text-sm font-semibold shadow-inner">
                    ⇧
                  </span>
                  <span className="text-zinc-500 text-sm">+</span>
                  <span className="inline-flex items-center justify-center min-w-[2rem] h-8 px-3 rounded-md bg-white/10 text-white text-sm font-semibold shadow-inner">
                    Space
                  </span>
                  <div className="w-px h-6 bg-zinc-700 mx-1" />
                  <span className="text-sm text-indigo-400 font-medium">
                    Activate Voicely
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-500">Current mode: Hold to talk</span>
                  <div className="w-10 h-5 rounded-full bg-indigo-600 relative cursor-pointer shrink-0">
                    <div className="w-4 h-4 rounded-full bg-white absolute top-0.5 right-0.5 shadow-sm" />
                  </div>
                </div>
                <p className="text-xs text-zinc-400 text-center">
                  Works in any app. No focus required.
                </p>
              </div>
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

  const renderHighlighted = () => (
    <>
      <span>Hey</span>
      <span className="bg-indigo-100 rounded-sm px-0.5">,</span>
      <span> can you send me the report today</span>
      <span className="bg-indigo-100 rounded-sm px-0.5">?</span>
      <span> Also</span>
      <span className="bg-indigo-100 rounded-sm px-0.5">,</span>
      <span> check if the meeting is</span>
      <br />
      <span>confirmed</span>
      <span className="bg-indigo-100 rounded-sm px-0.5">.</span>
      <span> I have a question about the budget</span>
      <span className="bg-indigo-100 rounded-sm px-0.5">.</span>
    </>
  );

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
            <div className="bg-white rounded-2xl shadow-lg border border-zinc-100 overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 pt-3.5 pb-2 border-b border-zinc-100">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="text-sm font-medium text-zinc-500 ml-2">
                  Auto-Punctuation Preview
                </span>
              </div>
              <div className="p-4 space-y-4">
                <div>
                  <p className="text-xs font-semibold tracking-widest text-zinc-400 mb-2 uppercase">
                    You said:
                  </p>
                  <p className="text-sm italic text-zinc-500 leading-relaxed">
                    {punctuationBefore}
                  </p>
                </div>
                <div className="flex justify-center">
                  <ArrowDown className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest text-zinc-400 mb-2 uppercase">
                    Voicely typed:
                  </p>
                  <p className="text-sm text-zinc-900 leading-relaxed">
                    {renderHighlighted()}
                  </p>
                </div>
              </div>
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
