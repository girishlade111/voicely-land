import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-2">Privacy Policy</h1>
            <p className="text-zinc-500">Last updated: June 24, 2026</p>
          </div>
          
          <div className="prose prose-zinc max-w-none space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-zinc-900 mb-3">Data Collection</h2>
              <p className="text-zinc-600 leading-relaxed">
                Voicely is designed with privacy at its core. We collect minimal data necessary for providing our service:
              </p>
              <ul className="list-disc pl-6 text-zinc-600 space-y-2 mt-3">
                <li>Email addresses from users who join our waitlist</li>
                <li>Basic usage analytics to improve the app experience</li>
                <li>No voice recordings or audio data are ever stored</li>
                <li>No personal identification information beyond email</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-zinc-900 mb-3">How We Use Your Data</h2>
              <p className="text-zinc-600 leading-relaxed">
                Your data is used solely for:
              </p>
              <ul className="list-disc pl-6 text-zinc-600 space-y-2 mt-3">
                <li>Notifying you when Voicely launches</li>
                <li>Sending important updates about the service</li>
                <li>Providing exclusive early access benefits</li>
                <li>Improving our voice recognition technology (with your consent)</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-zinc-900 mb-3">Data Storage & Security</h2>
              <p className="text-zinc-600 leading-relaxed">
                Your data is stored securely in Supabase with industry-standard encryption. We never share your data with third parties for marketing purposes. Your voice data never leaves your device — we process it locally on your machine.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-zinc-900 mb-3">Your Rights</h2>
              <p className="text-zinc-600 leading-relaxed">
                You have full control over your data:
              </p>
              <ul className="list-disc pl-6 text-zinc-600 space-y-2 mt-3">
                <li>Access, update, or delete your data at any time</li>
                <li>Unsubscribe from communications with one click</li>
                <li>Request data portability</li>
                <li>Lodge complaints with regulatory authorities</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-zinc-900 mb-3">Third-Party Services</h2>
              <p className="text-zinc-600 leading-relaxed">
                We use the following services to operate our app:
              </p>
              <ul className="list-disc pl-6 text-zinc-600 space-y-2 mt-3">
                <li>Supabase for database storage and authentication</li>
                <li>Resend for email communications</li>
                <li>Vercel for deployment and hosting</li>
                <li>Google Fonts for typography</li>
              </ul>
              <p className="text-zinc-600 leading-relaxed mt-3">
                These services are GDPR-compliant and follow strict data protection standards.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-zinc-900 mb-3">Contact Us</h2>
              <p className="text-zinc-600 leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
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