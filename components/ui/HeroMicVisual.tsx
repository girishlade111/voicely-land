"use client";

import { motion } from "framer-motion";

const dots = [
  { top: "15%", left: "20%", duration: 2.4 },
  { top: "25%", right: "18%", duration: 3.0 },
  { top: "65%", left: "15%", duration: 2.8 },
  { top: "70%", right: "22%", duration: 3.6 },
  { top: "40%", left: "8%", duration: 2.2 },
  { top: "55%", right: "10%", duration: 4.0 },
];

const rings = [
  { size: 120, delay: 0, borderOpacity: 0.8, scaleEnd: 1.8 },
  { size: 170, delay: 0.6, borderOpacity: 0.6, scaleEnd: 1.7 },
  { size: 220, delay: 1.2, borderOpacity: 0.4, scaleEnd: 1.6 },
  { size: 270, delay: 1.8, borderOpacity: 0.25, scaleEnd: 1.5 },
];

const badges = [
  {
    content: "\uD83C\uDF99\uFE0F Listening...",
    className:
      "bg-white text-indigo-700 rounded-full px-3 py-1 text-xs font-medium shadow-lg",
    top: "12%",
    right: "-8%",
    delay: 0,
    duration: 3,
  },
  {
    content: "\u2713 95% Accurate",
    className:
      "bg-indigo-600 text-white rounded-full px-3 py-1 text-xs font-medium shadow-lg",
    top: "45%",
    left: "-14%",
    delay: 0.8,
    duration: 3.5,
  },
  {
    content: "\uD83C\uDDEE\uD83C\uDDF3 Hindi \u00B7 Marathi",
    className:
      "bg-violet-600 text-white rounded-full px-3 py-1 text-xs font-medium shadow-lg",
    bottom: "10%",
    right: "-10%",
    delay: 1.4,
    duration: 4,
  },
];

export default function HeroMicVisual() {
  return (
    <div className="relative flex items-center justify-center">
      <div
        className="relative rounded-full flex items-center justify-center
                   w-[280px] h-[280px] md:w-[380px] md:h-[380px]"
        style={{
          background:
            "radial-gradient(circle at center, #4F46E5 0%, #6D28D9 60%, #5B21B6 100%)",
          boxShadow:
            "0 0 60px rgba(99,102,241,0.4), 0 0 120px rgba(109,40,217,0.2)",
          overflow: "visible",
        }}
      >
        {rings.map((ring, i) => (
          <motion.div
            key={`ring-${i}`}
            className="absolute rounded-full border"
            style={{
              width: ring.size,
              height: ring.size,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderColor: `rgba(167, 139, 250, ${ring.borderOpacity})`,
              borderWidth: "1.5px",
              zIndex: 0,
            }}
            animate={{
              scale: [1, ring.scaleEnd],
              opacity: [ring.borderOpacity, 0],
            }}
            transition={{
              duration: 2.4,
              delay: ring.delay,
              ease: "easeOut",
              repeat: Infinity,
            }}
          />
        ))}

        <div
          className="absolute rounded-full"
          style={{
            width: 90,
            height: 90,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(165,180,252,0.4) 0%, transparent 70%)",
            zIndex: 1,
          }}
        />

        <motion.div
          className="absolute rounded-full flex items-center justify-center"
          style={{
            width: 80,
            height: 80,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            border: "1.5px solid rgba(255, 255, 255, 0.3)",
            boxShadow:
              "inset 0 1px 1px rgba(255,255,255,0.2), 0 8px 32px rgba(79,70,229,0.3)",
            zIndex: 2,
          }}
          animate={{ scale: [1, 1.06, 1] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            style={{ filter: "drop-shadow(0 2px 8px rgba(255,255,255,0.3))" }}
          >
            <rect
              x="11"
              y="2"
              width="10"
              height="18"
              rx="5"
              fill="white"
              opacity="0.95"
            />
            <path
              d="M7 17C7 22.5228 11.4772 27 16 27C20.5228 27 25 22.5228 25 17"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.95"
            />
            <line
              x1="16"
              y1="27"
              x2="16"
              y2="31"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.95"
            />
            <line
              x1="11"
              y1="31"
              x2="21"
              y2="31"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.95"
            />
          </svg>
        </motion.div>

        {dots.map((dot, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute rounded-full"
            style={{
              width: 4,
              height: 4,
              top: dot.top,
              left: dot.left,
              right: "right" in dot ? dot.right : undefined,
              background: "rgba(255,255,255,0.4)",
              zIndex: 3,
            }}
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {badges.map((badge, i) => (
        <motion.div
          key={`badge-${i}`}
          className={`absolute ${badge.className}`}
          style={
            {
              top: "top" in badge ? badge.top : undefined,
              left: "left" in badge ? badge.left : undefined,
              right: "right" in badge ? badge.right : undefined,
              bottom: "bottom" in badge ? badge.bottom : undefined,
              zIndex: 10,
            } as React.CSSProperties
          }
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: badge.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: badge.delay,
          }}
        >
          {badge.content}
        </motion.div>
      ))}
    </div>
  );
}
