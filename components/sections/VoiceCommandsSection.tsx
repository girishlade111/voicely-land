"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const commands = [
  { say: "new paragraph", action: "Inserted paragraph break", icon: "↵" },
  { say: "delete that", action: "Removed last sentence", icon: "⌫" },
  { say: "add signature", action: "Pasted email signature", icon: "✉" },
  { say: "send email", action: "Composed & sent draft", icon: "⇧" },
  { say: "capitalize that", action: "Capitalized selection", icon: "Aa" },
  { say: "undo", action: "Reverted last action", icon: "↩" },
];

const categories = [
  "Editing", "Navigation", "Formatting", "Composing",
  "Punctuation", "Apps", "Shortcuts",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

function CommandCard({
  cmd,
  index,
  isInView,
}: {
  cmd: (typeof commands)[0];
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      variants={itemVariants}
      className="relative flex items-center gap-3 glass rounded-xl px-4 py-3"
    >
      <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 text-xs font-bold shrink-0">
        {cmd.icon}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="text-[10px] font-semibold tracking-widest text-white/40 uppercase">
            You said
          </span>
          <motion.span
            className="text-xs font-medium text-white/70"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: index * 0.15 + 0.3 }}
          >
            &ldquo;{cmd.say}&rdquo;
          </motion.span>
        </div>
        <div className="flex items-center gap-2">
          <motion.div
            className="h-px flex-1 bg-gradient-to-r from-indigo-400 to-transparent"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: index * 0.15 + 0.5, duration: 0.4, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />
          <motion.span
            className="text-xs font-semibold text-indigo-600 shrink-0"
            initial={{ opacity: 0, y: 6 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.15 + 0.6, duration: 0.3 }}
          >
            {cmd.action}
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}

export default function VoiceCommandsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const badgeRef = useRef(null);
  const badgesInView = useInView(badgeRef, { once: true, amount: 0.5 });

  return (
    <section className="py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-widest text-white/40 mb-4">
            VOICE COMMANDS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white/90 mb-4">
            Speak. It Does.
          </h2>
          <p className="text-white/60 text-sm max-w-lg mx-auto">
            Voicely responds to natural phrases &mdash; edit, format, compose,
            and navigate without lifting a finger.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            <motion.div
              className="glass rounded-2xl p-5"
              whileHover={{ boxShadow: "0 8px 40px rgba(0,0,0,0.06)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-2 mb-4 px-1">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="text-[10px] font-semibold tracking-widest text-white/40 ml-2 uppercase">
                  Command Log
                </span>
                <motion.div
                  className="ml-auto flex items-center gap-1.5"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="text-[10px] text-emerald-400 font-medium">
                    Listening
                  </span>
                </motion.div>
              </div>

              <motion.div
                className="space-y-2.5"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {commands.map((cmd, i) => (
                  <CommandCard
                    key={cmd.say}
                    cmd={cmd}
                    index={i}
                    isInView={isInView}
                  />
                ))}
              </motion.div>

              <motion.div
                className="mt-3 pt-3 border-t border-white/10"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <div className="flex items-center justify-between px-1">
                  <span className="text-xs text-white/40">
                    + Add your own custom command
                  </span>
                  <div className="flex items-center gap-1.5 text-indigo-600 text-xs font-semibold">
                    <span>50+ built-in</span>
                    <span className="text-white/30">·</span>
                    <span>Unlimited custom</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.div
                className="relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p className="text-xs font-semibold tracking-widest text-indigo-600 mb-3">
                  HOW IT WORKS
                </p>
                <h3 className="text-2xl font-bold text-white/90 mb-4">
                  Your voice is the remote control.
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  Dictation is just the start. Say things like
                  &ldquo;select that&rdquo;, &ldquo;bold this&rdquo;, or
                  &ldquo;open Chrome&rdquo; &mdash; Voicely turns every spoken
                  phrase into an action, across any app on your Mac.
                </p>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 gap-3 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.55 }}
              >
                {[
                  { label: "Smart Actions", desc: "Context-aware phrase detection" },
                  { label: "Per-App Rules", desc: "Different commands per app" },
                  { label: "Instant Reply", desc: "No wake word needed" },
                  { label: "Fuzzy Match", desc: "Understands variations" },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    className="glass rounded-xl p-4"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-sm font-semibold text-white/90 mb-0.5">
                      {stat.label}
                    </p>
                    <p className="text-[11px] text-white/60">{stat.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                ref={badgeRef}
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={badgesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                {categories.map((cat, i) => (
                  <motion.span
                    key={cat}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={badgesInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.25, delay: i * 0.05 }}
                    className="inline-block px-3 py-1.5 rounded-full text-xs font-medium glass text-white/70"
                    whileHover={{
                      scale: 1.05,
                      borderColor: "#818CF8",
                      color: "#4F46E5",
                    }}
                  >
                    {cat}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
