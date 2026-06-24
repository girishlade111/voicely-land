'use client'

import { motion } from 'framer-motion'
import { Badge } from 'lucide-react'
import WaitlistForm from './WaitlistForm'

export default function HeroSection() {
  return (
    <section className="relative pt-16 md:pt-24 pb-20 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Copy + Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Badge className="bg-indigo-50 text-indigo-700 border-indigo-200 rounded-full px-4 py-1.5 text-sm font-medium">
              🎙️ Now in Early Access
            </Badge>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 leading-tight">
              Speak. It Types. Anywhere.
            </h1>

            <p className="text-lg text-zinc-500 max-w-lg">
              Voicely turns your voice into text across every app on your desktop — faster than you can
              type, smarter than you expect. Supports Hindi, Marathi & English.
            </p>

            <div id="waitlist-form">
              <WaitlistForm variant="hero" />
            </div>

            <p className="text-sm text-zinc-400">
              🔒 No spam. No data stored. Unsubscribe anytime.
            </p>

            <motion.p
              className="text-sm font-medium text-zinc-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Join {process.env.NEXT_PUBLIC_WAITLIST_COUNT || '1,200'}+ people waiting for launch
            </motion.p>
          </motion.div>

          {/* Right Column - Mockup Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-8 md:p-12 shadow-sm">
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-white rounded-full px-4 py-2 shadow-md text-sm font-medium text-zinc-700"
              >
                🇮🇳 Hindi · Marathi · English
              </motion.div>

              {/* Microphone illustration */}
              <div className="flex items-center justify-center">
                <div className="relative">
                  {/* Sound waves */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full border-2 border-indigo-200 animate-ping opacity-20" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full border-2 border-indigo-300 animate-ping opacity-30" style={{ animationDelay: '0.5s' }} />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border-2 border-indigo-400 animate-ping opacity-40" style={{ animationDelay: '1s' }} />
                  </div>
                  
                  {/* Microphone icon */}
                  <div className="relative w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
