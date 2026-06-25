"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is Voicely free to use?",
    a: "Yes — Voicely has a free Starter plan that includes 30 minutes of voice input per day, support for English and one Indian language, and works with any desktop app. No credit card required. We also offer a Pro plan with unlimited usage and advanced features.",
  },
  {
    q: "Does Voicely work without an internet connection?",
    a: "Our privacy-first architecture processes your voice locally on your device. This means your audio never leaves your computer. An internet connection is only required for initial setup and app updates.",
  },
  {
    q: "Which apps does Voicely work with?",
    a: "Voicely works with any application on your Mac — Gmail, Google Docs, Notion, VS Code, Slack, Microsoft Word, Safari, Chrome, and more. If you can type in it on a Mac, Voicely can type in it for you.",
  },
  {
    q: "What Mac do I need to run Voicely?",
    a: "Voicely requires macOS 12 Monterey or later. It works on all Apple Silicon Macs (M1, M2, M3, M4) and Intel-based Macs with a Core i5 processor or better, and at least 4 GB of RAM. No special microphone or hardware required — your Mac's built-in microphone works perfectly.",
  },
  {
    q: "Is my voice being recorded or stored?",
    a: "Absolutely not. Voicely processes audio on your device in real-time and discards it immediately after transcription. We have no servers storing your voice data. This is a core design principle, not an afterthought.",
  },
  {
    q: "Does it support Hindi and Marathi?",
    a: "Yes — Hindi and Marathi are first-class supported languages in Voicely, not add-ons. We've specifically tuned our model for Indian accents and mixed-language speech (like Hinglish). More Indian languages are in development.",
  },
  {
    q: "When will Voicely launch? When will I get access?",
    a: "We're actively building Voicely and targeting a launch in the coming months. Everyone on the waitlist will be notified the moment early access opens, and waitlist users will get priority access and exclusive launch pricing.",
  },
];

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-widest text-white/40 mb-4">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white/90">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
