"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
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

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 leading-tight tracking-tight mb-6">
              Speak. It Types. <br className="hidden sm:block" />
              <span className="text-accent">Anywhere.</span>
            </h1>

            <p className="text-lg text-zinc-500 max-w-lg mb-8 leading-relaxed">
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
            className="relative"
          >
            <div className="relative rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-8 sm:p-12 flex items-center justify-center min-h-[300px] sm:min-h-[400px] overflow-hidden">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="44" y="20" width="32" height="48" rx="16" fill="#4F46E5" fillOpacity="0.15" stroke="#4F46E5" strokeWidth="2"/>
                  <path d="M36 52C36 65.3 46.7 76 60 76C73.3 76 84 65.3 84 52" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M60 76V88" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M48 88H72" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="100" cy="30" r="12" fill="#22C55E" fillOpacity="0.15" stroke="#22C55E" strokeWidth="1.5"/>
                  <path d="M96 30L99 33L104 27" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M40 56 Q60 64 80 56" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.4"/>
                  <path d="M36 64 Q60 74 84 64" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.25"/>
                </svg>
              </motion.div>

              <div className="absolute bottom-4 left-4 right-4 flex justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm flex items-center gap-2 text-sm font-medium text-zinc-700">
                  <span>🇮🇳</span>
                  <span>Hindi</span>
                  <span className="text-zinc-300">·</span>
                  <span>Marathi</span>
                  <span className="text-zinc-300">·</span>
                  <span>English</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
