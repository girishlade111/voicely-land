'use client'

export default function LanguageSupport() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-indigo-50 to-violet-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-zinc-900">
            Finally, a Voice Tool That Speaks Your Language
          </h2>
          
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Built for India. Works everywhere.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="bg-white rounded-full px-6 py-3 shadow-sm flex items-center gap-2">
              <span className="text-xl">🇮🇳</span>
              <span className="font-medium text-zinc-700">Hindi</span>
            </div>
            
            <div className="bg-white rounded-full px-6 py-3 shadow-sm flex items-center gap-2">
              <span className="text-xl">🇮🇳</span>
              <span className="font-medium text-zinc-700">Marathi</span>
            </div>
            
            <div className="bg-white rounded-full px-6 py-3 shadow-sm flex items-center gap-2">
              <span className="text-xl">🇬🇧</span>
              <span className="font-medium text-zinc-700">English</span>
            </div>
          </div>
          
          <p className="text-sm text-zinc-500 mt-8">
            More languages coming soon — Tamil, Telugu, Bengali
          </p>
        </div>
      </div>
    </section>
  )
}