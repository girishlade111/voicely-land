'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  {
    question: 'Is Voicely free to use?',
    answer: 'Yes — Voicely has a free Starter plan that includes 30 minutes of voice input per day, support for English and one Indian language, and works with any desktop app. No credit card required. We also offer a Pro plan with unlimited usage and advanced features.'
  },
  {
    question: 'Does Voicely work without an internet connection?',
    answer: 'Our privacy-first architecture processes your voice locally on your device. This means your audio never leaves your computer. An internet connection is only required for initial setup and app updates.'
  },
  {
    question: 'Which apps does Voicely work with?',
    answer: 'Voicely works with any application on your desktop — Gmail, Google Docs, Notion, VS Code, Slack, Microsoft Word, browsers, and more. If you can type in it, Voicely can type in it for you.'
  },
  {
    question: 'Is my voice being recorded or stored?',
    answer: 'Absolutely not. Voicely processes audio on your device in real-time and discards it immediately after transcription. We have no servers storing your voice data. This is a core design principle, not an afterthought.'
  },
  {
    question: 'Does it support Hindi and Marathi?',
    answer: 'Yes — Hindi and Marathi are first-class supported languages in Voicely, not add-ons. We\'ve specifically tuned our model for Indian accents and mixed-language speech (like Hinglish). More Indian languages are in development.'
  },
  {
    question: 'When will Voicely launch? When will I get access?',
    answer: 'We\'re actively building Voicely and targeting a launch in the coming months. Everyone on the waitlist will be notified the moment early access opens, and waitlist users will get priority access and exclusive launch pricing.'
  }
]

export default function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-zinc-900">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-zinc-600">
            Everything you need to know about Voicely
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-zinc-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}