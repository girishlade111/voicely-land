"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const languages = [
  { flag: "🇮🇳", label: "Hindi" },
  { flag: "🇮🇳", label: "Marathi" },
  { flag: "🇬🇧", label: "English" },
];

export function LanguageSupport() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white/90 mb-4">
            Finally, a Voice Tool That Speaks Your Language
          </h2>
          <p className="text-lg text-white/60 mb-10">
            Built for India. Works everywhere.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {languages.map((lang, i) => (
              <motion.div
                key={lang.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.15, ease: "easeOut" }}
                whileHover={{ scale: 1.08, transition: { type: "spring", stiffness: 400, damping: 12 } }}
                className="glass rounded-full px-6 py-3 text-base font-medium text-white/90 flex items-center gap-2 cursor-default"
              >
                <motion.span
                  animate={isInView ? { rotate: [0, 10, 0] } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                >
                  {lang.flag}
                </motion.span>
                <span>{lang.label}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-sm text-white/40">
            More languages coming soon &mdash; Tamil, Telugu, Bengali
          </p>
        </motion.div>
      </div>
    </section>
  );
}
