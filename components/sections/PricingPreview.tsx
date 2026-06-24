"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const starterFeatures = [
  "30 minutes of voice input per day",
  "English + 1 Indian language",
  "Works with any desktop app",
  "Basic voice commands",
  "No account required",
];

const proFeatures = [
  "Everything in Starter",
  "Unlimited voice input",
  "All supported languages (Hindi, Marathi, English + more)",
  "Custom voice commands & shortcuts",
  "Priority AI model (faster + more accurate)",
  "Early access to new languages",
];

export function PricingPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const scrollToHero = () => {
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
            Simple Pricing. No Surprises.
          </h2>
          <p className="text-lg text-zinc-500">
            Start free. Upgrade when you&apos;re ready.
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white border border-zinc-200 rounded-2xl p-8 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-zinc-900 mb-1">Starter</h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-4xl font-bold text-zinc-900">₹0</span>
              <span className="text-zinc-400 text-sm">/forever</span>
            </div>
            <p className="text-sm text-zinc-500 mb-6">
              Everything you need to get started
            </p>
            <ul className="space-y-3 mb-8">
              {starterFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-zinc-600">
                  <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Button
              variant="outline"
              className="w-full"
              onClick={scrollToHero}
            >
              Join Waitlist Free
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white border-2 border-accent rounded-2xl p-8 shadow-xl relative"
          >
            <div className="absolute -top-3 right-6">
              <Badge variant="default" className="text-xs px-3 py-1">
                Most Popular
              </Badge>
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 mb-1">Pro</h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-4xl font-bold text-zinc-900">Coming Soon</span>
            </div>
            <p className="text-sm text-zinc-500 mb-6">
              For power users who live by their voice
            </p>
            <ul className="space-y-3 mb-8">
              {proFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-zinc-600">
                  <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full" onClick={scrollToHero}>
              Get Notified
            </Button>
            <p className="text-xs text-zinc-400 text-center mt-4">
              Early waitlist users get exclusive launch pricing 🎁
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
