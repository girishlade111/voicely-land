import { describe, expect, it } from "vitest";
import { isValidEmail } from "@/lib/validation";

describe("isValidEmail", () => {
  it.each([
    "user@example.com",
    "user.name+tag@domain.co.in",
    "a@b.io",
    "UPPER@CASE.COM",
  ])("accepts valid email %s", (email) => {
    expect(isValidEmail(email)).toBe(true);
  });

  it.each([
    "",
    "plainaddress",
    "@missing-local.com",
    "missing-at-sign.com",
    "user@",
    "user @spaces.com",
    "user@no tld",
    "user@.com",
    "user name@example.com",
  ])("rejects invalid email %s", (email) => {
    expect(isValidEmail(email)).toBe(false);
  });
});
