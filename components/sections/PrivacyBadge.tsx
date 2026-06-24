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
    <section className="py-16 sm:py-20 bg-zinc-900 text-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Your voice never leaves your device.
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
            No cloud processing. No data sold. No surveillance. Just you and your words.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {badges.map((badge) => (
              <div
                key={badge.label}
                className="inline-flex items-center gap-2 bg-zinc-800 text-white rounded-full px-4 py-2 text-sm font-medium"
              >
                <span>{badge.icon}</span>
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
