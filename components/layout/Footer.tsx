"use client";

import Link from "next/link";
import { Mic } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-zinc-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <Mic className="h-5 w-5 text-accent" />
              <span className="text-lg font-bold text-zinc-900">Voicely</span>
            </Link>
            <p className="text-sm text-zinc-500 mb-4">Voice typing for everyone.</p>
            <p className="text-xs text-zinc-400">
              &copy; {currentYear} Voicely. All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-zinc-900 mb-4">Product</h4>
            <ul className="space-y-3">
              <li><button onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })} className="text-sm text-zinc-500 hover:text-zinc-900">Features</button></li>
              <li><button onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })} className="text-sm text-zinc-500 hover:text-zinc-900">How It Works</button></li>
              <li><button onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })} className="text-sm text-zinc-500 hover:text-zinc-900">Pricing</button></li>
              <li><span className="text-sm text-zinc-300 cursor-not-allowed" title="Coming Soon">Download</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-zinc-900 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-zinc-300 cursor-not-allowed">About</span></li>
              <li><span className="text-sm text-zinc-300 cursor-not-allowed">Blog</span></li>
              <li><a href="mailto:hello@voicely.app" className="text-sm text-zinc-500 hover:text-zinc-900">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-zinc-900 mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy-policy" className="text-sm text-zinc-500 hover:text-zinc-900">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-sm text-zinc-500 hover:text-zinc-900">Terms of Service</Link></li>
              <li><Link href="/refund-policy" className="text-sm text-zinc-500 hover:text-zinc-900">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-400">
            &copy; {currentYear} Voicely. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://x.com/voicelyapp" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-600 transition-colors" aria-label="X / Twitter">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M13.3174 10.4031L19.9187 3H18.3874L12.6402 9.42666L8.04231 3H2.71875L9.66174 13.2194L2.71875 21H4.25008L10.3387 14.196L15.1861 21H20.5097L13.3171 10.4031H13.3174ZM11.1031 13.2677L10.3988 12.2249L4.80196 4.16933H7.28746L11.7288 10.6117L12.4331 11.6545L18.3881 19.8737H15.9026L11.1031 13.268V13.2677Z"/></svg>
            </a>
            <a href="https://linkedin.com/company/voicely" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-600 transition-colors" aria-label="LinkedIn">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://producthunt.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-600 transition-colors" aria-label="Product Hunt">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M13.6 8.4H10.8v3.2h2.8c.9 0 1.6-.7 1.6-1.6s-.7-1.6-1.6-1.6zM12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm3.2 12c0 1.8-1.4 3.2-3.2 3.2H10.8V17c0 .4-.3.8-.8.8s-.8-.3-.8-.8v-5.2V8.2c0-.4.3-.8.8-.8h3.2c1.8 0 3.2 1.4 3.2 3.2V12z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
