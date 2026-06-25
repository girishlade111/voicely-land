import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Mic } from "lucide-react";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Mic className="h-6 w-6 text-indigo-600" />
            <span className="text-sm font-semibold tracking-widest text-zinc-400">
              ABOUT
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-8">
            We believe typing is a bottleneck. Your voice should move as fast as your thoughts.
          </h1>

          <div className="prose prose-zinc max-w-none">
            <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-4">
              The Problem
            </h2>
            <p className="text-zinc-600 mb-4 leading-relaxed">
              The average person types at 40 words per minute. The average person speaks at 150
              words per minute. Thats a 3x gap &mdash; and every day, millions of people sit at
              their desks trying to close it with nothing but a keyboard.
            </p>
            <p className="text-zinc-600 mb-4 leading-relaxed">
              Existing voice typing solutions are either tied to specific apps, require constant
              internet connectivity, or fail with Indian accents &mdash; mishearing common names,
              mixing up languages, or refusing to work offline.
            </p>
            <p className="text-zinc-600 mb-4 leading-relaxed">
              We built Voicely to fix this. No subscription. No data leaving your machine. And
              it actually understands Hindi, Marathi, and English &mdash; switching between them
              as you speak.
            </p>

            <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-4">
              The Solution
            </h2>
            <p className="text-zinc-600 mb-4 leading-relaxed">
              Voicely is a desktop app for macOS that lets you speak and type anywhere. Press a
              shortcut, start talking, and Voicely transcribes your speech into text &mdash;
              directly into any application: Gmail, Notion, VS Code, Slack, WhatsApp, or your
              browser.
            </p>
            <div className="bg-zinc-50 rounded-xl p-6 my-6 border border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-2">How it works</p>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold mt-0.5">01</span>
                  <span>Download and install Voicely on your Mac</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold mt-0.5">02</span>
                  <span>Press the global shortcut (&#x2318;&#x21E7;Space) in any app</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold mt-0.5">03</span>
                  <span>Speak naturally &mdash; Voicely types it in real-time</span>
                </li>
              </ul>
            </div>
            <p className="text-zinc-600 mb-4 leading-relaxed">
              All processing happens on-device using a locally-running AI model. Your voice
              never touches the internet. No account, no cloud, no monthly bill.
            </p>

            <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-4">
              Why On-Device?
            </h2>
            <p className="text-zinc-600 mb-4 leading-relaxed">
              Privacy is not a feature. It is a right. Every voice typing product on the market
              sends your audio to a cloud server, processes it, and typically stores it &mdash;
              creating a permanent record of everything you have ever dictated.
            </p>
            <p className="text-zinc-600 mb-4 leading-relaxed">
              Voicely runs entirely on your Mac. Your audio data is processed and discarded in
              real-time. Nothing leaves your computer. No recordings. No transcripts. No cloud.
              This also means Voicely works offline &mdash; on a plane, in a remote area, or
              anywhere without internet.
            </p>

            <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-4">
              Built for Indian Languages
            </h2>
            <p className="text-zinc-600 mb-4 leading-relaxed">
              Most voice typing tools are built with English speakers in mind. We are building
              Voicely for India &mdash; a country where millions of people speak and work in
              multiple languages, often switching mid-sentence.
            </p>
            <p className="text-zinc-600 mb-4 leading-relaxed">
              Voicely supports Hindi, Marathi, and English right out of the box, with more
              Indian languages &mdash; Tamil, Telugu, Bengali, and others &mdash; on the
              roadmap. The models have been tuned specifically for Indian accents and
              code-switching patterns.
            </p>

            <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-4">
              Our Values
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 my-6">
              <div className="bg-zinc-50 rounded-xl p-5 border border-zinc-200">
                <p className="font-semibold text-zinc-900 mb-1">Privacy First</p>
                <p className="text-sm text-zinc-600">Your voice stays on your device. Always. We never collect, store, or transmit your audio.</p>
              </div>
              <div className="bg-zinc-50 rounded-xl p-5 border border-zinc-200">
                <p className="font-semibold text-zinc-900 mb-1">Free to Start</p>
                <p className="text-sm text-zinc-600">30 minutes of daily voice typing at no cost. No credit card. No time limit.</p>
              </div>
              <div className="bg-zinc-50 rounded-xl p-5 border border-zinc-200">
                <p className="font-semibold text-zinc-900 mb-1">Works Offline</p>
                <p className="text-sm text-zinc-600">No internet required. Voicely processes everything locally on your machine.</p>
              </div>
              <div className="bg-zinc-50 rounded-xl p-5 border border-zinc-200">
                <p className="font-semibold text-zinc-900 mb-1">Indian-First</p>
                <p className="text-sm text-zinc-600">Built for Indian languages and accents. Hindi, Marathi, English &mdash; with more coming.</p>
              </div>
            </div>

            <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-4">
              The Team
            </h2>
            <p className="text-zinc-600 mb-4 leading-relaxed">
              We are a small, focused team based in India, building tools that make technology
              more accessible. We believe the next billion users will interact with computers
              through their voice, not a keyboard &mdash; and we are building the foundation
              for that future.
            </p>

            <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-4">
              Roadmap
            </h2>
            <ul className="space-y-3 text-zinc-600 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold shrink-0 mt-0.5">Q3 2025</span>
                <span>Public beta for macOS. Hindi, Marathi, English support. Free tier goes live.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold shrink-0 mt-0.5">Q4 2025</span>
                <span>Pro plan. Custom voice commands. Advanced punctuation. Tamil and Telugu support.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold shrink-0 mt-0.5">H1 2026</span>
                <span>Windows release. Additional Indian languages. Enterprise features.</span>
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-4">
              Contact
            </h2>
            <p className="text-zinc-600 mb-4 leading-relaxed">
              Have questions, feedback, or ideas? We would love to hear from you.
              <br />
              Email us at{" "}
              <a href="mailto:hello@voicely.app" className="text-indigo-600 hover:underline">
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
