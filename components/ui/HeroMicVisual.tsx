"use client";

import { motion } from "framer-motion";

const BARS = [
  { minH: 4, maxH: 10, dur: 0.38 },
  { minH: 6, maxH: 18, dur: 0.29 },
  { minH: 8, maxH: 22, dur: 0.44 },
  { minH: 4, maxH: 14, dur: 0.33 },
  { minH: 10, maxH: 24, dur: 0.41 },
  { minH: 6, maxH: 16, dur: 0.27 },
  { minH: 8, maxH: 20, dur: 0.36 },
  { minH: 4, maxH: 12, dur: 0.48 },
];

const RINGS = [
  {
    className: "w-[64px] h-[64px] md:w-[80px] md:h-[80px]",
    color: "rgba(99,102,241,0.55)",
    delay: 0,
    scale: 1.75,
  },
  {
    className: "w-[88px] h-[88px] md:w-[112px] md:h-[112px]",
    color: "rgba(139,92,246,0.35)",
    delay: 0.55,
    scale: 1.6,
  },
  {
    className: "w-[112px] h-[112px] md:w-[144px] md:h-[144px]",
    color: "rgba(167,139,250,0.18)",
    delay: 1.1,
    scale: 1.5,
  },
];

export default function HeroMicVisual() {
  return (
    <div
      className="relative w-[320px] h-[304px] md:w-[400px] md:h-[380px]"
      style={{
        background: "rgba(9, 9, 11, 0.97)",
        border: "1px solid rgba(255, 255, 255, 0.07)",
        borderRadius: "24px",
        boxShadow:
          "0 32px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
        overflow: "hidden",
      }}
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          zIndex: 0,
        }}
      />

      {/* Center radial glow */}
      <div
        className="absolute"
        style={{
          width: 200,
          height: 200,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Section 1: Window chrome bar */}
      <div
        className="relative flex items-center justify-between px-4 pt-4 pb-3"
        style={{ zIndex: 2, borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="flex items-center gap-[6px]">
          <div
            className="rounded-full"
            style={{ width: 9, height: 9, background: "#EF4444", opacity: 0.7 }}
          />
          <div
            className="rounded-full"
            style={{ width: 9, height: 9, background: "#F59E0B", opacity: 0.7 }}
          />
          <div
            className="rounded-full"
            style={{ width: 9, height: 9, background: "#22C55E", opacity: 0.7 }}
          />
        </div>
        <span
          className="text-xs font-medium"
          style={{ color: "rgba(255,255,255,0.25)" }}
        >
          Voicely
        </span>
      </div>

      {/* Section 2: Mic visualization area */}
      <div
        className="relative flex flex-col items-center justify-center flex-1 py-6"
        style={{ zIndex: 2, minHeight: 0 }}
      >
        {/* 3 concentric pulsing rings */}
        {RINGS.map((ring, i) => (
          <motion.div
            key={`ring-${i}`}
            className={`absolute rounded-full ${ring.className}`}
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              border: "1px solid transparent",
              borderColor: ring.color,
              background: "transparent",
              pointerEvents: "none",
            }}
            animate={{ scale: [1, ring.scale], opacity: [1, 0] }}
            transition={{
              duration: 2.2,
              delay: ring.delay,
              ease: "easeOut",
              repeat: Infinity,
            }}
          />
        ))}

        {/* Mic button */}
        <motion.div
          className="relative flex items-center justify-center rounded-full w-14 h-14"
          style={{
            zIndex: 3,
            background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
            boxShadow:
              "0 0 0 1px rgba(99,102,241,0.4), 0 8px 24px rgba(79,70,229,0.45)",
          }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="8.5"
              y="2"
              width="7"
              height="12"
              rx="3.5"
              fill="white"
              opacity="0.95"
            />
            <path
              d="M5 11C5 14.866 8.13401 18 12 18C15.866 18 19 14.866 19 11"
              stroke="white"
              strokeWidth="1.75"
              strokeLinecap="round"
              fill="none"
            />
            <line
              x1="12"
              y1="18"
              x2="12"
              y2="22"
              stroke="white"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
            <line
              x1="9"
              y1="22"
              x2="15"
              y2="22"
              stroke="white"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </div>

      {/* Section 3: Waveform + Status */}
      <div
        className="relative flex flex-col items-center mt-5 gap-2"
        style={{ zIndex: 2 }}
      >
        {/* 8 waveform bars */}
        <div className="flex items-end gap-[3px] h-[24px] justify-center">
          {BARS.map((bar, i) => (
            <motion.div
              key={`bar-${i}`}
              className="w-[3px] rounded-full"
              style={{ background: "rgba(99,102,241,0.7)" }}
              animate={{
                height: [bar.minH, bar.maxH, bar.minH],
              }}
              transition={{
                duration: bar.dur,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <p
          className="text-xs font-medium tracking-widest mt-1"
          style={{ color: "rgba(167, 139, 250, 0.7)" }}
        >
          Listening...
        </p>
      </div>

      {/* Section 4: Divider */}
      <div
        className="relative mx-4 mt-4"
        style={{
          zIndex: 2,
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        }}
      />

      {/* Section 5: Stat row */}
      <div
        className="relative flex items-center justify-between px-5 py-4"
        style={{ zIndex: 2 }}
      >
        <div
          className="flex items-center gap-1.5 rounded-full px-2.5 py-1"
          style={{
            background: "rgba(99, 102, 241, 0.12)",
            border: "1px solid rgba(99, 102, 241, 0.2)",
          }}
        >
          <div
            className="rounded-full"
            style={{ width: 6, height: 6, background: "#818CF8" }}
          />
          <span
            className="text-[11px] font-medium"
            style={{ color: "rgba(165, 180, 252, 0.85)" }}
          >
            95% accuracy
          </span>
        </div>

        <div style={{ width: 1, height: 12, background: "rgba(255,255,255,0.08)" }} />

        <div
          className="rounded-full px-2.5 py-1"
          style={{
            background: "rgba(139, 92, 246, 0.1)",
            border: "1px solid rgba(139, 92, 246, 0.2)",
          }}
        >
          <span
            className="text-[11px] font-medium"
            style={{ color: "rgba(196, 181, 253, 0.85)" }}
          >
            Hindi · Marathi · EN
          </span>
        </div>
      </div>
    </div>
  );
}
