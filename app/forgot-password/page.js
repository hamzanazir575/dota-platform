'use client';

import { useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/clients';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    setMessage('');
    setError('');

    if (!email.trim()) {
      setError('Please enter your email address.');
      return;
    }

    setLoading(true);

    const supabase = createClient();

    const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: `${window.location.origin}/auth/callback?next=/update-password`,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    setMessage(
      'If an account exists for that email, you will receive a password reset email.',
    );
  }

  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-md">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-2xl sm:p-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
              Dota 2 Platform
            </p>

            <h1 className="mt-3 text-3xl font-bold">Forgot your password?</h1>

            <p className="mt-2 text-sm text-neutral-400">
              Enter your email and we&apos;ll send you a reset link.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-neutral-200"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                className="w-full rounded-lg border border-neutral-700 bg-neutral-950 px-4 py-3 text-white outline-none transition focus:border-red-500"
              />
            </div>

            {error && (
              <p className="rounded-lg border border-red-800 bg-red-950/40 px-4 py-3 text-sm text-red-300">
                {error}
              </p>
            )}

            {message && (
              <p className="rounded-lg border border-green-800 bg-green-950/40 px-4 py-3 text-sm text-green-300">
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-red-600 px-4 py-3 font-semibold text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send reset link'}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-neutral-400">
            Remember your password?{' '}
            <Link
              href="/signin"
              className="text-red-400 transition-colors hover:text-red-300"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
