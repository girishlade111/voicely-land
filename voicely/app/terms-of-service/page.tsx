import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-2">Terms of Service</h1>
            <p className="text-zinc-500">Last updated: June 24, 2026</p>
          </div>
          
          <div className="prose prose-zinc max-w-none space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-zinc-900 mb-3">Acceptance of Terms</h2>
              <p className="text-zinc-600 leading-relaxed">
                By accessing or using Voicely, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our service.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-zinc-900 mb-3">Permitted Use</h2>
              <p className="text-zinc-600 leading-relaxed">
                You may use Voicely for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc pl-6 text-zinc-600 space-y-2 mt-3">
                <li>Use the service in any way that violates any applicable federal, state, local, or international law or regulation</li>
                <li>Use the service to infringe upon the rights of others</li>
                <li>Attempt to reverse engineer, decompile, or disassemble any part of the service</li>
                <li>Use the service to transmit malicious code, viruses, or harmful content</li>
                <li>Access the service without authorization or through unauthorized means</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-zinc-900 mb-3">Intellectual Property</h2>
              <p className="text-zinc-600 leading-relaxed">
                The service and its original content, features, and functionality are owned by Voicely and are protected by international copyright, trademark, and other intellectual property laws. You may not copy, modify, create derivative works, publicly display, or exploit any part of the service without our express written permission.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-zinc-900 mb-3">User Accounts</h2>
              <p className="text-zinc-600 leading-relaxed">
                When you create an account with us, you must provide accurate, complete, and current information. You are responsible for safeguarding your password and for all activities that occur under your account. We reserve the right to suspend or terminate accounts that violate these Terms.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-zinc-900 mb-3">Disclaimer of Warranties</h2>
              <p className="text-zinc-600 leading-relaxed">
                The service is provided on an "as is" and "as available" basis, without any warranties of any kind, either express or implied. We do not warrant that the service will be uninterrupted, error-free, or secure.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-zinc-900 mb-3">Limitation of Liability</h2>
              <p className="text-zinc-600 leading-relaxed">
                In no event shall Voicely, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, or business interruption, arising out of or in connection with the use or inability to use the service.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-zinc-900 mb-3">Termination</h2>
              <p className="text-zinc-600 leading-relaxed">
                We may terminate or suspend your account and access to the service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-zinc-900 mb-3">Governing Law</h2>
              <p className="text-zinc-600 leading-relaxed">
                These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Our failure to enforce any right or provision shall not be considered a waiver.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-zinc-900 mb-3">Changes to Terms</h2>
              <p className="text-zinc-600 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will provide notice of significant changes by updating the date at the top of this document. Your continued use of the service after such changes constitutes your acceptance of the new Terms.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-zinc-900 mb-3">Contact Us</h2>
              <p className="text-zinc-600 leading-relaxed">
                If you have any questions about these Terms, please contact us:
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