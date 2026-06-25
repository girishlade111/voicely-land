import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
