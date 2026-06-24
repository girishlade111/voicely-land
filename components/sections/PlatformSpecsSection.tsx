"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Monitor, Cpu, Database, HardDrive } from "lucide-react";

const requirements = [
  { icon: Cpu, text: "Apple M1 / Intel Core i5 or better" },
  { icon: Database, text: "4 GB RAM minimum, 8 GB recommended" },
  { icon: HardDrive, text: "200 MB disk space" },
];

const PlatformSpecsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="bg-zinc-50 border-y border-zinc-100 py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
            <div className="text-center md:text-left md:pr-12">
              <p className="text-xs font-semibold tracking-widest text-zinc-400 mb-6">
                AVAILABLE ON
              </p>
              <Monitor className="h-10 w-10 text-zinc-700 mx-auto md:mx-0 mb-3" />
              <p className="text-lg font-semibold text-zinc-900 mb-2">
                macOS
              </p>
              <span className="inline-block text-sm text-zinc-600 bg-zinc-100 rounded-full px-3 py-1 mb-3">
                macOS 12 Monterey and above
              </span>
              <p className="text-sm text-zinc-400 mt-2">
                Windows version coming soon
              </p>
            </div>

            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-px w-px bg-zinc-200" />

            <div className="text-center md:text-left md:pl-12">
              <p className="text-xs font-semibold tracking-widest text-zinc-400 mb-6">
                SYSTEM REQUIREMENTS
              </p>
              <div className="flex flex-col gap-3 items-center md:items-start">
                {requirements.map((req, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3"
                  >
                    <req.icon className="h-4 w-4 text-indigo-500 shrink-0" />
                    <span className="text-sm text-zinc-600">
                      {req.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-sm text-zinc-400 text-center mt-10">
            🎧 Works with any built-in or external microphone. No special hardware required.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformSpecsSection;
