import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function RefundPolicy() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-zinc-400 mb-2">Last updated: June 2025</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-8">
            Refund Policy
          </h1>

          <div className="prose prose-zinc max-w-none">
            <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-4">
              1. Free Plan (Starter)
            </h2>
            <p className="text-zinc-600 mb-4 leading-relaxed">
              The Voicely Starter plan is free of charge. Since no payment is collected for this
              plan, no refunds are applicable. You can use the Starter plan for as long as you
              like, at no cost, with no obligation to upgrade.
            </p>

            <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-4">
              2. Pro Plan (Paid Subscription)
            </h2>
            <p className="text-zinc-600 mb-4 leading-relaxed">
              For users who upgrade to the Pro plan, we offer a <strong>7-day money-back
              guarantee</strong> from the date of your first charge. If you are not satisfied
              with Voicely for any reason, you can request a full refund within 7 days of your
              initial payment.
            </p>

            <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-4">
              3. How to Request a Refund
            </h2>
            <p className="text-zinc-600 mb-4 leading-relaxed">
              To request a refund, please email us at{" "}
              <a href="mailto:hello@voicely.app" className="text-accent hover:underline">
                hello@voicely.app
              </a>{" "}
              with the subject line &quot;Refund Request.&quot; Include the email address you used
              for the purchase and a brief reason for your request (optional).
            </p>

            <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-4">
              4. Processing Time
            </h2>
            <p className="text-zinc-600 mb-4 leading-relaxed">
              Once your refund request is received, we will process it within 5–7 business days.
              The refund will be issued to the original payment method used for the purchase.
              You will receive a confirmation email once the refund has been processed.
            </p>

            <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-4">
              5. What Is Non-Refundable
            </h2>
            <p className="text-zinc-600 mb-4 leading-relaxed">
              After the 7-day refund window has passed, no refunds will be issued for the
              current billing period. However, you may cancel your subscription at any time to
              prevent future charges. Your access will continue until the end of the current
              billing cycle.
            </p>
            <p className="text-zinc-600 mb-4 leading-relaxed">
              Partial months of service used beyond the 7-day window are non-refundable.
            </p>

            <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-4">
              6. Changes to This Policy
            </h2>
            <p className="text-zinc-600 mb-4 leading-relaxed">
              We reserve the right to update this Refund Policy at any time. Changes will be
              posted on this page with an updated &quot;Last updated&quot; date. Your continued use of
              Voicely after changes constitutes acceptance of the updated policy.
            </p>

            <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-4">
              7. Contact
            </h2>
            <p className="text-zinc-600 mb-4 leading-relaxed">
              If you have any questions about this Refund Policy, please contact us at:
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
