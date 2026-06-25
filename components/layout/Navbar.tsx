"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mic, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const handleScroll = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-black"
    >
      <div className="mx-auto flex h-11 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Mic className="h-4 w-4 text-white/80" />
          <span className="text-sm font-semibold text-white/90">Voicely</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleScroll(link.href)}
              className="text-sm font-medium text-white/80 hover:text-white/90 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <Button
            onClick={() => handleScroll("#hero")}
            className="h-8 rounded-full bg-white text-black text-sm px-4 hover:bg-white/90"
          >
            Join Waitlist
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full hover:bg-white/10"
              >
                <Menu className="h-4 w-4 text-white/80" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <Link href="/" className="flex items-center gap-2 mb-6">
                  <Mic className="h-5 w-5 text-apple-blue" />
                  <span className="text-lg font-bold text-ink">Voicely</span>
                </Link>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-4">
                {navLinks.map((link) => (
                  <SheetClose key={link.href} asChild>
                    <button
                      onClick={() => handleScroll(link.href)}
                      className="text-left text-base font-medium text-ink-muted-48 hover:text-ink py-2"
                    >
                      {link.label}
                    </button>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button
                    onClick={() => handleScroll("#hero")}
                    className="mt-4 rounded-full text-sm"
                  >
                    Join Waitlist
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
