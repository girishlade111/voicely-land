"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Brain, Globe, Shield, Command, Gift } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Transcription",
    description: "Words appear as you speak — no delay, no lag.",
  },
  {
    icon: Brain,
    title: "AI-Powered Accuracy",
    description: "Built on a fine-tuned model. Understands context, not just words.",
  },
  {
    icon: Globe,
    title: "Indian Language Support",
    description: "Speak in Hindi or Marathi. Voicely gets it right.",
  },
  {
    icon: Shield,
    title: "Privacy-First",
    description: "Nothing leaves your device. No cloud. No logs. Ever.",
  },
  {
    icon: Command,
    title: "Custom Voice Commands",
    description: "Say 'new paragraph' or 'send email' — it just works.",
  },
  {
    icon: Gift,
    title: "Free to Start",
    description: "Core features are free, always. Upgrade only when you're ready.",
  },
];

export function FeaturesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="features" className="bg-canvas-parchment py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-widest text-ink-muted-80 mb-4">
            FEATURES
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink">
            Everything You Need, Nothing You Don&apos;t
          </h2>
        </motion.div>

        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}
              className="bg-white shadow-sm rounded-2xl p-6 cursor-default"
            >
              <motion.div
                className="w-10 h-10 rounded-xl bg-apple-blue/10 flex items-center justify-center mb-4"
                whileHover={{ scale: 1.15, backgroundColor: "rgba(0,122,255,0.2)" }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <feature.icon className="h-5 w-5 text-apple-blue" />
              </motion.div>
              <h3 className="text-lg font-semibold text-ink mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-ink-muted-48 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
