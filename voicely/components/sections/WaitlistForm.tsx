'use client'

import { useState } from 'react'
import { ArrowRight, Loader2, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface WaitlistFormProps {
  variant?: 'hero' | 'footer'
}

export default function WaitlistForm({ variant = 'hero' }: WaitlistFormProps) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || 'Something went wrong')
      }

      setSuccess(true)
      setEmail('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to join waitlist')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-3 rounded-lg">
        <CheckCircle2 className="w-5 h-5" />
        <span className="text-sm font-medium">You&apos;re on the list! We&apos;ll notify you at launch.</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className={variant === 'hero' ? 'flex flex-col sm:flex-row gap-3' : 'flex flex-col sm:flex-row gap-3'}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={cn(
            "flex-1 h-12 px-4 rounded-full border border-zinc-200",
            "focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20",
            "disabled:opacity-50 disabled:cursor-not-allowed"
          )}
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading}
          className={cn(
            "h-12 px-6 rounded-full bg-indigo-600 hover:bg-indigo-700",
            "text-white font-semibold whitespace-nowrap transition-colors",
            "disabled:opacity-50 disabled:cursor-not-allowed"
          )}
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin mx-auto" />
          ) : (
            <div className="flex items-center">
              {variant === 'hero' ? 'Claim Early Access' : 'Join Waitlist'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          )}
        </button>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </form>
  )
}
