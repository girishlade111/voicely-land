import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-white/40 mb-2">Last updated: June 2025</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white/90 mb-8">
            Terms of Service
          </h1>

          <div className="max-w-none">
            <h2 className="text-xl font-semibold text-white/90 mt-8 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-white/70 mb-4 leading-relaxed">
              By accessing or using Voicely (&quot;the Software&quot;), you agree to be bound by these
              Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, do not use the
              Software.
            </p>

            <h2 className="text-xl font-semibold text-white/90 mt-8 mb-4">
              2. Description of Service
            </h2>
            <p className="text-white/70 mb-4 leading-relaxed">
              Voicely is a desktop voice-to-text application that transcribes speech into text
              across various applications on your computer. The Software processes audio locally
              on your device and does not transmit voice data to external servers.
            </p>

            <h2 className="text-xl font-semibold text-white/90 mt-8 mb-4">
              3. Permitted Use
            </h2>
            <p className="text-white/70 mb-4 leading-relaxed">
              You are granted a non-exclusive, non-transferable, revocable license to use the
              Software for personal or professional purposes, subject to these Terms. You agree
              to use the Software in compliance with all applicable local, state, national, and
              international laws and regulations.
            </p>

            <h2 className="text-xl font-semibold text-white/90 mt-8 mb-4">
              4. Restrictions
            </h2>
            <p className="text-white/70 mb-4 leading-relaxed">You may not:</p>
            <ul className="list-disc pl-6 text-white/70 mb-4 space-y-1">
              <li>Reverse engineer, decompile, or disassemble the Software</li>
              <li>Modify, adapt, or create derivative works based on the Software</li>
              <li>Redistribute, sublicense, rent, or lease the Software to third parties</li>
              <li>Use the Software for any unlawful purpose or in violation of any applicable laws</li>
              <li>Remove or alter any proprietary notices or labels on the Software</li>
            </ul>

            <h2 className="text-xl font-semibold text-white/90 mt-8 mb-4">
              5. Intellectual Property
            </h2>
            <p className="text-white/70 mb-4 leading-relaxed">
              Voicely, including all intellectual property rights therein, is owned by Voicely
              and its licensors. The Software is protected by copyright, trademark, and other
              intellectual property laws. This license does not grant you any ownership rights
              to the Software.
            </p>

            <h2 className="text-xl font-semibold text-white/90 mt-8 mb-4">
              6. Privacy
            </h2>
            <p className="text-white/70 mb-4 leading-relaxed">
              Your use of the Software is also governed by our Privacy Policy, which explains
              how we collect, use, and protect your information. By using the Software, you
              consent to the practices described in the Privacy Policy.
            </p>

            <h2 className="text-xl font-semibold text-white/90 mt-8 mb-4">
              7. Disclaimer of Warranties
            </h2>
            <p className="text-white/70 mb-4 leading-relaxed">
              THE SOFTWARE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE,&quot; WITHOUT WARRANTY OF ANY
              KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT
              GUARANTEE THAT THE SOFTWARE WILL BE UNINTERRUPTED, ERROR-FREE, OR MEET YOUR
              SPECIFIC REQUIREMENTS.
            </p>

            <h2 className="text-xl font-semibold text-white/90 mt-8 mb-4">
              8. Limitation of Liability
            </h2>
            <p className="text-white/70 mb-4 leading-relaxed">
              IN NO EVENT SHALL VOICELY BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
              CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS,
              DATA, OR USE, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SOFTWARE,
              WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY.
            </p>

            <h2 className="text-xl font-semibold text-white/90 mt-8 mb-4">
              9. Termination
            </h2>
            <p className="text-white/70 mb-4 leading-relaxed">
              We reserve the right to terminate or suspend your access to the Software at any
              time, without prior notice, for any reason, including violation of these Terms.
              Upon termination, your license to use the Software immediately ceases.
            </p>

            <h2 className="text-xl font-semibold text-white/90 mt-8 mb-4">
              10. Governing Law and Jurisdiction
            </h2>
            <p className="text-white/70 mb-4 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of
              India. Any disputes arising from these Terms shall be subject to the exclusive
              jurisdiction of the courts in Maharashtra, India.
            </p>

            <h2 className="text-xl font-semibold text-white/90 mt-8 mb-4">
              11. Changes to Terms
            </h2>
            <p className="text-white/70 mb-4 leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes will be effective
              immediately upon posting. Your continued use of the Software after changes
              constitutes acceptance of the new Terms.
            </p>

            <h2 className="text-xl font-semibold text-white/90 mt-8 mb-4">
              12. Contact
            </h2>
            <p className="text-white/70 mb-4 leading-relaxed">
              For questions about these Terms, contact us at:
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
