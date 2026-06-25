"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const badges = [
  { icon: "🔒", label: "On-Device Processing" },
  { icon: "🚫", label: "No Data Stored" },
  { icon: "✅", label: "GDPR-Ready" },
];

export function PrivacyBadge() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="bg-canvas-parchment py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-4">
            Your voice never leaves your device.
          </h2>
          <p className="text-ink-muted-48 text-lg mb-10 max-w-2xl mx-auto">
            No cloud processing. No data sold. No surveillance. Just you and your words.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {badges.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.15, ease: "easeOut" }}
                whileHover={{ scale: 1.06, backgroundColor: "#f0f0f0" }}
                className="inline-flex items-center gap-2 bg-white shadow-sm text-ink rounded-full px-4 py-2 text-sm font-medium cursor-default"
              >
                <motion.span
                  animate={isInView ? { rotate: [0, -10, 10, 0] } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                >
                  {badge.icon}
                </motion.span>
                <span>{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
