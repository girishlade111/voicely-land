'use client'

import WaitlistForm from './WaitlistForm'

export default function FooterCTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Stop Typing. Start Speaking.
          </h2>
          
          <p className="text-lg md:text-xl text-white/90">
            Join the waitlist. Get early access + exclusive launch pricing.
          </p>
          
          <div id="waitlist-form" className="max-w-2xl mx-auto">
            <WaitlistForm variant="footer" />
          </div>
          
          <p className="text-sm text-white/80">
            Join 1,200+ people already on the list
          </p>
        </div>
      </div>
    </section>
  )
}