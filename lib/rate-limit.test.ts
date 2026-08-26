import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { checkRateLimit } from "@/lib/rate-limit";

describe("checkRateLimit", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-01-01T00:00:00Z"));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("allows requests below the limit", () => {
    for (let i = 0; i < 5; i++) {
      expect(checkRateLimit("ip:a")).toBe(true);
    }
  });

  it("blocks requests beyond the limit within the window", () => {
    for (let i = 0; i < 5; i++) {
      checkRateLimit("ip:b");
    }
    expect(checkRateLimit("ip:b")).toBe(false);
  });

  it("tracks keys independently", () => {
    for (let i = 0; i < 5; i++) {
      checkRateLimit("ip:c");
    }
    expect(checkRateLimit("ip:c")).toBe(false);
    expect(checkRateLimit("ip:d")).toBe(true);
  });

  it("allows again after the window elapses", () => {
    for (let i = 0; i < 5; i++) {
      checkRateLimit("ip:e");
    }
    expect(checkRateLimit("ip:e")).toBe(false);

    vi.advanceTimersByTime(61_000);
    expect(checkRateLimit("ip:e")).toBe(true);
  });
});
