import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://voicely.app"),
  title: "Voicely — Voice to Text for Desktop. Free.",
  description:
    "Voicely lets you speak and type anywhere on your desktop. Supports Hindi, Marathi & English. Privacy-first. No data stored. Free to start.",
  keywords: [
    "voice to text desktop",
    "voice typing windows mac",
    "hindi voice typing",
    "marathi speech to text",
    "whisper alternative india",
    "dictation software india",
  ],
  openGraph: {
    title: "Voicely — Voice to Text for Desktop. Free.",
    description:
      "Voicely lets you speak and type anywhere on your desktop. Supports Hindi, Marathi & English. Privacy-first. No data stored.",
    url: "https://voicely.app",
    siteName: "Voicely",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voicely — Voice to Text for Desktop. Free.",
    description:
      "Voicely lets you speak and type anywhere on your desktop. Supports Hindi, Marathi & English.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Script id="strip-ext-attributes" strategy="beforeInteractive">{`new MutationObserver(function(ms){for(var i=0;i<ms.length;i++){var m=ms[i];if(m.type==="attributes"&&m.attributeName==="fdprocessedid"){m.target.removeAttribute("fdprocessedid")}};if(document.querySelector("[fdprocessedid]")){document.querySelectorAll("[fdprocessedid]").forEach(function(e){e.removeAttribute("fdprocessedid")})}}).observe(document.documentElement,{attributes:true,subtree:true,attributeFilter:["fdprocessedid"]});document.querySelectorAll("[fdprocessedid]").forEach(function(e){e.removeAttribute("fdprocessedid")})`}</Script>
        {children}
      </body>
    </html>
  );
}
