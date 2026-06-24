import Link from 'next/link'
import { Mic, Twitter, Linkedin, Send } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Mic className="w-6 h-6 text-indigo-600" />
              <span className="font-heading font-bold text-xl text-zinc-900">Voicely</span>
            </Link>
            <p className="text-zinc-500 text-sm">Voice typing for everyone.</p>
            <p className="text-zinc-400 text-xs">© 2025 Voicely. All rights reserved.</p>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="font-semibold text-zinc-900 mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <span className="text-zinc-400 text-sm cursor-not-allowed relative group">
                  Download
                  <span className="absolute left-0 -top-8 bg-zinc-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Coming Soon
                  </span>
                </span>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-zinc-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="mailto:hello@voicely.app" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">
                  hello@voicely.app
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold text-zinc-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Social Icons */}
        <div className="mt-12 pt-8 border-t border-zinc-200 flex justify-center gap-6">
          <a href="#" className="text-zinc-400 hover:text-zinc-600 transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-zinc-400 hover:text-zinc-600 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-zinc-400 hover:text-zinc-600 transition-colors">
            <Send className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
