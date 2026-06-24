import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Voicely — Voice to Text for Desktop. Free.',
  description: 'Voicely lets you speak and type anywhere on your desktop. Supports Hindi, Marathi & English. Privacy-first. No data stored. Free to start.',
  keywords: ['voice to text desktop', 'voice typing windows mac', 'hindi voice typing', 'marathi speech to text', 'whisper alternative india', 'dictation software india'],
  openGraph: {
    title: 'Voicely — Voice to Text for Desktop. Free.',
    description: 'Voicely lets you speak and type anywhere on your desktop. Supports Hindi, Marathi & English. Privacy-first. No data stored. Free to start.',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
  },
  metadataBase: new URL('https://voicely.app'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
