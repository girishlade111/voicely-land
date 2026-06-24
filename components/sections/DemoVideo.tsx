"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function DemoVideo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-16 sm:py-24 bg-zinc-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-xs font-semibold tracking-widest text-zinc-400 mb-4">
            SEE IT IN ACTION
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
            See Voicely in Action
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl"
        >
          <video
            controls
            preload="none"
            poster="/poster-placeholder.svg"
            className="w-full aspect-video bg-zinc-900"
          >
            <source
              src={process.env.NEXT_PUBLIC_DEMO_VIDEO_URL || ""}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        <p className="text-center text-zinc-500 mt-6 text-sm">
          Speak in Hindi, Marathi, or English &mdash; Voicely types it, instantly.
        </p>
      </div>
    </section>
  );
}
