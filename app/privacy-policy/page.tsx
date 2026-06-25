import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-white/40 mb-2">Last updated: June 2025</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white/90 mb-8">
            Privacy Policy
          </h1>

          <div className="max-w-none">
            <h2 className="text-xl font-semibold text-white/90 mt-8 mb-4">
              1. Introduction
            </h2>
            <p className="text-white/70 mb-4 leading-relaxed">
              Voicely (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, and safeguard your information
              when you visit our website and use our application.
            </p>

            <h2 className="text-xl font-semibold text-white/90 mt-8 mb-4">
              2. Data We Collect
            </h2>
            <p className="text-white/70 mb-4 leading-relaxed">
              <strong>What we collect:</strong> When you join our waitlist, we collect your email
              address. That is the only personal data we collect from you.
            </p>
            <p className="text-white/70 mb-4 leading-relaxed">
              <strong>Voice data:</strong> Voicely processes your voice entirely on your device.
              Your voice audio never leaves your computer. We do not collect, store, or transmit
              any voice recordings or transcriptions to our servers.
            </p>
            <p className="text-white/70 mb-4 leading-relaxed">
              <strong>Usage data:</strong> We may collect anonymized, non-personal usage
              statistics (such as page visits and feature interactions) through Vercel Analytics
              to help us improve the website and application.
            </p>

            <h2 className="text-xl font-semibold text-white/90 mt-8 mb-4">
              3. How We Use Your Data
            </h2>
            <p className="text-white/70 mb-4 leading-relaxed">
              Your email is used exclusively for:
            </p>
            <ul className="list-disc pl-6 text-white/70 mb-4 space-y-1">
              <li>Sending you a confirmation of your waitlist sign-up</li>
              <li>Notifying you when Voicely launches or early access opens</li>
              <li>Occasional product update emails (no more than once per month)</li>
            </ul>
            <p className="text-white/70 mb-4 leading-relaxed">
              You can unsubscribe from these emails at any time using the link at the bottom of
              any email we send.
            </p>

            <h2 className="text-xl font-semibold text-white/90 mt-8 mb-4">
              4. Cookies
            </h2>
            <p className="text-white/70 mb-4 leading-relaxed">
              We use minimal cookies — only those required for the operation of our website and
              Vercel Analytics. We do not use tracking cookies, advertising cookies, or any
              third-party marketing cookies. You can control cookie preferences through your
              browser settings.
            </p>

            <h2 className="text-xl font-semibold text-white/90 mt-8 mb-4">
              5. Third-Party Services
            </h2>
            <p className="text-white/70 mb-4 leading-relaxed">
              We use the following third-party services, each with their own privacy practices:
            </p>
            <ul className="list-disc pl-6 text-white/70 mb-4 space-y-1">
              <li><strong>Supabase</strong> — stores waitlist email addresses in a secure, encrypted database</li>
              <li><strong>Resend</strong> — sends confirmation and notification emails on our behalf</li>
              <li><strong>Vercel</strong> — hosts our website and provides anonymized analytics</li>
            </ul>

            <h2 className="text-xl font-semibold text-white/90 mt-8 mb-4">
              6. Your Rights
            </h2>
            <p className="text-white/70 mb-4 leading-relaxed">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-white/70 mb-4 space-y-1">
              <li>Request access to the personal data we hold about you</li>
              <li>Request deletion of your email address from our records</li>
              <li>Unsubscribe from our emails at any time</li>
              <li>Object to the processing of your personal data</li>
            </ul>
            <p className="text-white/70 mb-4 leading-relaxed">
              To exercise any of these rights, email us at hello@voicely.app.
            </p>

            <h2 className="text-xl font-semibold text-white/90 mt-8 mb-4">
              7. Data Security
            </h2>
            <p className="text-white/70 mb-4 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your
              personal data. Your email is stored in a Supabase database with encryption at rest
              and in transit. Access is restricted to authorized personnel only.
            </p>

            <h2 className="text-xl font-semibold text-white/90 mt-8 mb-4">
              8. Governing Law
            </h2>
            <p className="text-white/70 mb-4 leading-relaxed">
              This Privacy Policy is governed by the Information Technology Act, 2000 and the
              Information Technology (Reasonable Security Practices and Procedures and Sensitive
              Personal Data or Information) Rules, 2011 of India. Any disputes arising from this
              policy shall be subject to the exclusive jurisdiction of the courts in Maharashtra, India.
            </p>

            <h2 className="text-xl font-semibold text-white/90 mt-8 mb-4">
              9. Contact
            </h2>
            <p className="text-white/70 mb-4 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <a href="mailto:hello@voicely.app" className="text-accent hover:underline">
                hello@voicely.app
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
