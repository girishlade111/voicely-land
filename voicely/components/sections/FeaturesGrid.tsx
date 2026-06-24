'use client'

import { motion } from 'framer-motion'
import { Zap, Brain, Globe, Shield, Command, Gift } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Instant Transcription',
    description: 'Words appear as you speak — no delay, no lag.'
  },
  {
    icon: Brain,
    title: 'AI-Powered Accuracy',
    description: 'Built on a fine-tuned model. Understands context, not just words.'
  },
  {
    icon: Globe,
    title: 'Indian Language Support',
    description: 'Speak in Hindi or Marathi. Voicely gets it right.'
  },
  {
    icon: Shield,
    title: 'Privacy-First',
    description: 'Nothing leaves your device. No cloud. No logs. Ever.'
  },
  {
    icon: Command,
    title: 'Custom Voice Commands',
    description: 'Say "new paragraph" or "send email" — it just works.'
  },
  {
    icon: Gift,
    title: 'Free to Start',
    description: 'Core features are free, always. Upgrade only when you\'re ready.'
  }
]

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-zinc-900">
            Everything You Need to Go Voice-First
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Powerful features designed for productivity, privacy, and Indian languages
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white border border-zinc-200 rounded-2xl p-6 md:p-8 hover:shadow-md transition-shadow duration-300"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-indigo-600" />
                </div>
                
                <h3 className="font-heading text-xl font-semibold text-zinc-900">
                  {feature.title}
                </h3>
                
                <p className="text-zinc-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}