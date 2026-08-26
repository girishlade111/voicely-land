"use client";

import { useEffect, useState } from "react";

export function useCountUp(
  target: number,
  active: boolean,
  durationMs = 1500,
  delayMs = 0
): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    let rafId = 0;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      setValue(Math.round(progress * target));
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    const timeoutId = setTimeout(() => {
      rafId = requestAnimationFrame(step);
    }, delayMs);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(rafId);
    };
  }, [target, active, durationMs, delayMs]);

  return value;
}
