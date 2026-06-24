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
    <section className="py-16 sm:py-24 bg-gradient-to-r from-indigo-50 to-violet-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
            Finally, a Voice Tool That Speaks Your Language
          </h2>
          <p className="text-lg text-zinc-500 mb-10">
            Built for India. Works everywhere.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {languages.map((lang) => (
              <div
                key={lang.label}
                className="bg-white rounded-full shadow-sm px-6 py-3 text-base font-medium text-zinc-800 flex items-center gap-2"
              >
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-zinc-400">
            More languages coming soon &mdash; Tamil, Telugu, Bengali
          </p>
        </motion.div>
      </div>
    </section>
  );
}
