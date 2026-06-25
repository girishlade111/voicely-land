"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Download & Install",
    description: "One installer. Built for Mac. Ready in under 2 minutes on macOS 12 Monterey or above.",
  },
  {
    number: "02",
    title: "Press & Speak",
    description: "Hold your custom shortcut key and speak naturally — in any language.",
  },
  {
    number: "03",
    title: "It Types for You",
    description: "Voicely types directly into any open app — Gmail, Notion, VS Code, anywhere.",
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="how-it-works" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-widest text-white/40 mb-4">
            HOW IT WORKS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white/90">
            Up and Running in 2 Minutes
          </h2>
        </motion.div>

        <div
          ref={ref}
          className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-8 lg:gap-0"
        >
          {steps.map((step, i) => (
            <div key={step.number} className="flex items-center w-full lg:w-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center text-center flex-1 lg:flex-none cursor-default"
              >
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.12, backgroundColor: "rgba(79,70,229,0.2)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 12 }}
                >
                  <span className="text-2xl font-bold text-accent">{step.number}</span>
                </motion.div>
                <h3 className="text-lg font-semibold text-white/90 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-white/60 max-w-xs">
                  {step.description}
                </p>
              </motion.div>

              {i < steps.length - 1 && (
                <motion.div
                  className="hidden lg:flex items-center px-8"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.2 }}
                >
                  <motion.div
                    animate={isInView ? { x: [0, 6, 0] } : {}}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 + i * 0.2 }}
                  >
                    <ArrowRight className="h-6 w-6 text-indigo-400" />
                  </motion.div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
