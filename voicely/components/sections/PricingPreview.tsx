'use client'

import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Starter',
    price: '₹0',
    suffix: '/forever',
    description: 'Everything you need to get started',
    features: [
      '30 minutes of voice input per day',
      'English + 1 Indian language',
      'Works with any desktop app',
      'Basic voice commands',
      'No account required'
    ],
    cta: 'Join Waitlist Free',
    variant: 'outline'
  },
  {
    name: 'Pro',
    price: 'Coming Soon',
    description: 'For power users who live by their voice',
    features: [
      'Everything in Starter',
      'Unlimited voice input',
      'All supported languages (Hindi, Marathi, English + more)',
      'Custom voice commands & shortcuts',
      'Priority AI model (faster + more accurate)',
      'Early access to new languages'
    ],
    cta: 'Get Notified',
    variant: 'filled',
    popular: true
  }
]

export default function PricingPreview() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-zinc-900">
            Simple Pricing. No Surprises.
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Start free. Upgrade when you're ready.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-3xl p-8 border-2 transition-all duration-300 ${plan.popular
                ? 'border-indigo-500 shadow-xl bg-indigo-50/50'
                : 'border-zinc-200 bg-white hover:border-indigo-200 hover:shadow-lg'
              }`}
            >
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading text-2xl font-bold text-zinc-900">
                      {plan.name}
                    </h3>
                    {plan.popular && (
                      <span className="bg-indigo-100 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <span className="font-heading text-4xl font-bold text-zinc-900">
                      {plan.price}
                    </span>
                    {plan.suffix && (
                      <span className="text-zinc-500 ml-2">
                        {plan.suffix}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-zinc-600">
                    {plan.description}
                  </p>
                </div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-zinc-600 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-4 px-6 rounded-full font-semibold transition-all duration-200 ${plan.variant === 'filled'
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'border-2 border-zinc-300 text-zinc-700 hover:border-indigo-500 hover:text-indigo-600 bg-white'
                  }`}
                >
                  {plan.cta}
                </button>
                
                {plan.popular && (
                  <p className="text-sm text-zinc-500 text-center">
                    🎁 Early waitlist users get exclusive launch pricing
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}