'use client'

export default function PrivacyBadge() {
  return (
    <section className="py-16 md:py-24 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Your voice never leaves your device.
          </h2>
          
          <p className="text-lg text-zinc-300 leading-relaxed">
            No cloud processing. No data sold. No surveillance. Just you and your words.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <div className="bg-zinc-800 rounded-full px-6 py-3">
              <span className="text-sm font-medium">🔒 On-Device Processing</span>
            </div>
            
            <div className="bg-zinc-800 rounded-full px-6 py-3">
              <span className="text-sm font-medium">🚫 No Data Stored</span>
            </div>
            
            <div className="bg-zinc-800 rounded-full px-6 py-3">
              <span className="text-sm font-medium">✅ GDPR-Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}