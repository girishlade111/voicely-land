"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroMicVisual from "@/components/ui/HeroMicVisual";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function CountUp({ to, label }: { to: number; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const display = isInView ? to : 0;
  return (
    <span ref={ref} className="font-semibold text-accent">
      {display.toLocaleString()}+ {label}
    </span>
  );
}

export function HeroSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage(data.message);
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
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
            <Badge variant="default" className="mb-6 text-sm px-4 py-1.5">
              🎙️ Now in Early Access
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white/90 leading-tight tracking-tight mb-6">
              Speak. It Types. <br className="hidden sm:block" />
              <span className="text-accent">Anywhere.</span>
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

            <p className="text-xs text-zinc-400 mb-6">
              🔒 No spam. No data stored. Unsubscribe anytime.
            </p>

            <p className="text-sm text-zinc-500">
              Join{" "}
              <CountUp to={1200} label="people waiting for launch" />
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
