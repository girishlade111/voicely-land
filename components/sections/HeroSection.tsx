"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroMicVisual from "@/components/ui/HeroMicVisual";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCountUp } from "@/lib/use-count-up";

const WAITLIST_COUNT = Number(process.env.NEXT_PUBLIC_WAITLIST_COUNT) || 1200;

function CountUp({ to, label }: { to: number; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const count = useCountUp(to, isInView);
  return (
    <span ref={ref} className="font-semibold text-apple-blue">
      {count.toLocaleString()}+ {label}
    </span>
  );
}

export function HeroSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    const subject = encodeURIComponent("Voicely early access — waitlist signup");
    const body = encodeURIComponent(
      `Please add me to the Voicely waitlist.\n\nEmail: ${email.trim()}`
    );
    window.location.href = `mailto:admin@ladestack.in?subject=${subject}&body=${body}`;
    setStatus("success");
    setMessage("Opening your email app — send the message to join the waitlist.");
  };

  return (
    <section id="hero" className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Badge variant="on-dark" className="mb-6 text-sm px-4 py-1.5">
              🎙️ Now in Early Access
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white/90 leading-tight tracking-tight mb-6">
              Speak. It Types. <br className="hidden sm:block" />
              <span className="text-apple-blue">Anywhere.</span>
            </h1>
            <p className="text-lg text-white/60 max-w-lg mb-8 leading-relaxed">
              Voicely turns your voice into text across every app on your
              Mac &mdash; faster than you can type, smarter than you expect.
              Supports Hindi, Marathi &amp; English. Available on macOS 12+.
            </p>

            {status === "success" ? (
              <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-5 py-4 mb-4 max-w-md">
                <span className="text-green-700 text-sm font-medium">
                  ✅ {message}
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-4 max-w-md">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                  disabled={status === "loading"}
                />
                <Button type="submit" size="lg" disabled={status === "loading"}>
                  {status === "loading" ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/></svg>
                      Processing...
                    </span>
                  ) : (
                    "Claim Early Access →"
                  )}
                </Button>
              </form>
            )}

            {status === "error" && (
              <p className="text-red-500 text-sm mb-4">{message}</p>
            )}

            <p className="text-xs text-white/40 mb-6">
              🔒 No spam. No data stored. Unsubscribe anytime.
            </p>

            <p className="text-sm text-white/60">
              Join{" "}
              <CountUp to={WAITLIST_COUNT} label="people waiting for launch" />
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative flex items-center justify-center w-full h-full py-8 md:py-0"
          >
            <HeroMicVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
