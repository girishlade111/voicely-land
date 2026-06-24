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
    <section id="features" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-widest text-zinc-400 mb-4">
            FEATURES
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900">
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
              className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <feature.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
