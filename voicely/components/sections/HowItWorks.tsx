'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Download & Install',
    description: 'One installer. Works on Mac and Windows. Ready in under 2 minutes.'
  },
  {
    number: '02',
    title: 'Press & Speak',
    description: 'Hold your custom shortcut key and speak naturally — in any language.'
  },
  {
    number: '03',
    title: 'It Types for You',
    description: 'Voicely types directly into any open app — Gmail, Notion, VS Code, anywhere.'
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-zinc-900">
            Up and Running in 2 Minutes
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Three simple steps to transform your voice into text across any application
          </p>
        </div>
        
        {/* Desktop Layout */}
        <div className="hidden md:block relative">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex-1 text-center space-y-4"
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-indigo-600 font-bold text-xl">
                      {step.number}
                    </span>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="absolute top-8 left-full w-full h-0.5 bg-indigo-200 -z-10" />
                  )}
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-heading text-xl font-semibold text-zinc-900">
                    {step.title}
                  </h3>
                  <p className="text-zinc-600 max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Mobile Layout */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-indigo-600 font-bold text-lg">
                  {step.number}
                </span>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-heading text-xl font-semibold text-zinc-900">
                  {step.title}
                </h3>
                <p className="text-zinc-600">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}