import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-2">Refund Policy</h1>
            <p className="text-zinc-500">Last updated: June 24, 2026</p>
          </div>
          
          <div className="prose prose-zinc max-w-none space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-zinc-900 mb-3">Free Starter Plan</h2>
              <p className="text-zinc-600 leading-relaxed">
                Voicely's Starter plan is completely free and includes:
              </p>
              <ul className="list-disc pl-6 text-zinc-600 space-y-2 mt-3">
                <li>30 minutes of voice input per day</li>
                <li>Support for English and one Indian language</li>
                <li>Works with any desktop app</li>
                <li>Basic voice commands</li>
                <li>No account required</li>
              </ul>
              <p className="text-zinc-600 leading-relaxed mt-3">
                Since the Starter plan is free, no refunds are applicable for this plan.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-zinc-900 mb-3">Pro Plan Refunds</h2>
              <p className="text-zinc-600 leading-relaxed">
                Voicely's Pro plan is currently in development. Once launched, the following refund policy will apply:
              </p>
              <ul className="list-disc pl-6 text-zinc-600 space-y-2 mt-3">
                <li>Full refunds available within 7 days of your first payment</li>
                <li>Refunds processed within 5-7 business days after approval</li>
                <li>No refunds after the 7-day period</li>
                <li>Partial refunds not applicable</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-zinc-900 mb-3">How to Request a Refund</h2>
              <p className="text-zinc-600 leading-relaxed">
                To request a refund, please email us at:
              </p>
              <div className="bg-zinc-50 rounded-lg p-4 mt-3">
                <p className="text-zinc-600">Subject: Refund Request</p>
                <p className="text-zinc-600">Email: hello@voicely.app</p>
                <p className="text-zinc-600">Include your name, email address, and Voicely account details</p>
              </div>
              <p className="text-zinc-600 leading-relaxed mt-3">
                Our team will review your request within 48 hours and process your refund if you qualify.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-zinc-900 mb-3">Non-Refundable Items</h2>
              <p className="text-zinc-600 leading-relaxed">
                The following items are not eligible for refunds:
              </p>
              <ul className="list-disc pl-6 text-zinc-600 space-y-2 mt-3">
                <li>Partial months used beyond the 7-day period</li>
                <li>Custom development or enterprise services</li>
                <li>Third-party services integrated with Voicely</li>
                <li>Services used beyond the refund eligibility period</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-zinc-900 mb-3">Changes to Refund Policy</h2>
              <p className="text-zinc-600 leading-relaxed">
                We reserve the right to modify this Refund Policy at any time. We will provide notice of significant changes by updating the date at the top of this document. Your continued use of the service after such changes constitutes your acceptance of the new Refund Policy.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-zinc-900 mb-3">Contact Us</h2>
              <p className="text-zinc-600 leading-relaxed">
                If you have any questions about our Refund Policy, please contact us:
              </p>
              <div className="bg-zinc-50 rounded-lg p-4 mt-3">
                <p className="text-zinc-600">Email: hello@voicely.app</p>
                <p className="text-zinc-600">We aim to respond to all inquiries within 48 hours.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}