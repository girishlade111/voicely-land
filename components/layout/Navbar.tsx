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
      className="fixed top-0 left-0 right-0 z-50 glass-nav"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Mic className="h-6 w-6 text-accent" />
          <span className="text-xl font-bold text-white/90">Voicely</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleScroll(link.href)}
              className="text-sm font-medium text-white/60 hover:text-white/90 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button onClick={() => handleScroll("#hero")} size="default">
            Join Waitlist
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5 text-white/60" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <Link href="/" className="flex items-center gap-2 mb-6">
                  <Mic className="h-5 w-5 text-accent" />
                  <span className="text-lg font-bold text-white/90">Voicely</span>
                </Link>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-4">
                {navLinks.map((link) => (
                  <SheetClose key={link.href} asChild>
                    <button
                      onClick={() => handleScroll(link.href)}
                      className="text-left text-base font-medium text-white/60 hover:text-white/90 py-2"
                    >
                      {link.label}
                    </button>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button
                    onClick={() => handleScroll("#hero")}
                    className="mt-4"
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
