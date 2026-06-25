"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Mic } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function About() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.2 });
  const roadmapRef = useRef(null);
  const roadmapInView = useInView(roadmapRef, { once: true, amount: 0.2 });

  const values = [
    { title: "Privacy First", desc: "Your voice stays on your device. Always. We never collect, store, or transmit your audio." },
    { title: "Free to Start", desc: "30 minutes of daily voice typing at no cost. No credit card. No time limit." },
    { title: "Works Offline", desc: "No internet required. Voicely processes everything locally on your machine." },
    { title: "Indian-First", desc: "Built for Indian languages and accents. Hindi, Marathi, English — with more coming." },
  ];

  const roadmapItems = [
    { period: "Q3 2025", text: "Public beta for macOS. Hindi, Marathi, English support. Free tier goes live." },
    { period: "Q4 2025", text: "Pro plan. Custom voice commands. Advanced punctuation. Tamil and Telugu support." },
    { period: "H1 2026", text: "Windows release. Additional Indian languages. Enterprise features." },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={heroRef}
            initial="initial"
            animate={heroInView ? "animate" : "initial"}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Mic className="h-6 w-6 text-indigo-600" />
              </motion.div>
              <span className="text-sm font-semibold tracking-widest text-zinc-400">
                ABOUT
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-8"
            >
              We believe typing is a bottleneck. Your voice should move as fast as your thoughts.
            </motion.h1>

            <motion.div variants={fadeUp} className="prose prose-zinc max-w-none">
              <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-4">The Problem</h2>
              <p className="text-zinc-600 mb-4 leading-relaxed">
                The average person types at 40 words per minute. The average person speaks at 150
                words per minute. Thats a 3x gap — and every day, millions of people sit at
                their desks trying to close it with nothing but a keyboard.
              </p>
              <p className="text-zinc-600 mb-4 leading-relaxed">
                Existing voice typing solutions are either tied to specific apps, require constant
                internet connectivity, or fail with Indian accents — mishearing common names,
                mixing up languages, or refusing to work offline.
              </p>
              <p className="text-zinc-600 mb-4 leading-relaxed">
                We built Voicely to fix this. No subscription. No data leaving your machine. And
                it actually understands Hindi, Marathi, and English — switching between them
                as you speak.
              </p>

              <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-4">The Solution</h2>
              <p className="text-zinc-600 mb-4 leading-relaxed">
                Voicely is a desktop app for macOS that lets you speak and type anywhere. Press a
                shortcut, start talking, and Voicely transcribes your speech into text —
                directly into any application: Gmail, Notion, VS Code, Slack, WhatsApp, or your
                browser.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-zinc-50 rounded-xl p-6 my-6 border border-zinc-200"
          >
            <p className="text-sm font-semibold text-zinc-900 mb-2">How it works</p>
            <ul className="space-y-2 text-sm text-zinc-600">
              {[
                { num: "01", text: "Download and install Voicely on your Mac" },
                { num: "02", text: "Press the global shortcut (⌘⇧Space) in any app" },
                { num: "03", text: "Speak naturally — Voicely types it in real-time" },
              ].map((item, i) => (
                <motion.li
                  key={item.num}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.12 }}
                  className="flex items-start gap-2"
                >
                  <motion.span
                    className="text-indigo-600 font-bold mt-0.5 shrink-0"
                    whileHover={{ scale: 1.2, color: "#4F46E5" }}
                  >
                    {item.num}
                  </motion.span>
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="initial"
            animate={heroInView ? "animate" : "initial"}
            className="prose prose-zinc max-w-none"
          >
            <p className="text-zinc-600 mb-4 leading-relaxed">
              All processing happens on-device using a locally-running AI model. Your voice
              never touches the internet. No account, no cloud, no monthly bill.
            </p>

            <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-4">Why On-Device?</h2>
            <p className="text-zinc-600 mb-4 leading-relaxed">
              Privacy is not a feature. It is a right. Every voice typing product on the market
              sends your audio to a cloud server, processes it, and typically stores it —
              creating a permanent record of everything you have ever dictated.
            </p>
            <p className="text-zinc-600 mb-4 leading-relaxed">
              Voicely runs entirely on your Mac. Your audio data is processed and discarded in
              real-time. Nothing leaves your computer. No recordings. No transcripts. No cloud.
              This also means Voicely works offline — on a plane, in a remote area, or
              anywhere without internet.
            </p>

            <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-4">Built for Indian Languages</h2>
            <p className="text-zinc-600 mb-4 leading-relaxed">
              Most voice typing tools are built with English speakers in mind. We are building
              Voicely for India — a country where millions of people speak and work in
              multiple languages, often switching mid-sentence.
            </p>
            <p className="text-zinc-600 mb-4 leading-relaxed">
              Voicely supports Hindi, Marathi, and English right out of the box, with more
              Indian languages — Tamil, Telugu, Bengali, and others — on the
              roadmap. The models have been tuned specifically for Indian accents and
              code-switching patterns.
            </p>
          </motion.div>

          <div ref={valuesRef}>
            <motion.h2
              className="text-xl font-semibold text-zinc-900 mt-8 mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            >
              Our Values
            </motion.h2>
            <motion.div
              className="grid sm:grid-cols-2 gap-4 my-6"
              initial="initial"
              animate={valuesInView ? "animate" : "initial"}
              variants={stagger}
            >
              {values.map((v) => (
                <motion.div
                  key={v.title}
                  variants={fadeUp}
                  whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}
                  className="bg-zinc-50 rounded-xl p-5 border border-zinc-200 cursor-default"
                >
                  <p className="font-semibold text-zinc-900 mb-1">{v.title}</p>
                  <p className="text-sm text-zinc-600">{v.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div ref={roadmapRef}>
            <motion.h2
              className="text-xl font-semibold text-zinc-900 mt-8 mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={roadmapInView ? { opacity: 1, y: 0 } : {}}
            >
              Roadmap
            </motion.h2>
            <motion.ul
              className="space-y-3 text-zinc-600 mb-4"
              initial="initial"
              animate={roadmapInView ? "animate" : "initial"}
              variants={stagger}
            >
              {roadmapItems.map((item) => (
                <motion.li
                  key={item.period}
                  variants={fadeUp}
                  className="flex items-start gap-3"
                >
                  <motion.span
                    className="text-indigo-600 font-bold shrink-0 mt-0.5"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.period}
                  </motion.span>
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="prose prose-zinc max-w-none"
          >
            <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-4">The Team</h2>
            <p className="text-zinc-600 mb-4 leading-relaxed">
              We are a small, focused team based in India, building tools that make technology
              more accessible. We believe the next billion users will interact with computers
              through their voice, not a keyboard — and we are building the foundation
              for that future.
            </p>

            <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-4">Contact</h2>
            <p className="text-zinc-600 mb-4 leading-relaxed">
              Have questions, feedback, or ideas? We would love to hear from you.
              <br />
              Email us at{" "}
              <a href="mailto:hello@voicely.app" className="text-indigo-600 hover:underline">
                hello@voicely.app
              </a>
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
