'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/clients';

export default function SignInPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    setError('');

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    setLoading(true);

    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    router.push('/');
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-md">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-2xl sm:p-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
              Dota 2 Platform
            </p>

            <h1 className="mt-3 text-3xl font-bold">Welcome back</h1>

            <p className="mt-2 text-sm text-neutral-400">
              Sign in to your account.
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

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-neutral-200"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
                autoComplete="current-password"
                className="w-full rounded-lg border border-neutral-700 bg-neutral-950 px-4 py-3 text-white outline-none transition focus:border-red-500"
              />
              <div className="mt-2 flex justify-end">
                <Link
                  href="/forgot-password"
                  className="text-sm text-neutral-400 transition-colors hover:text-red-400"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            {error && (
              <p className="rounded-lg border border-red-800 bg-red-950/40 px-4 py-3 text-sm text-red-300">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-red-600 px-4 py-3 font-semibold text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-neutral-400">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="text-red-400 hover:text-red-300">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

// import { useState } from 'react';
// import SignupForm from '../components/SignupForm'

// export default function SignupForm() {
//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [confirmPassword, setConfirmPassword] = useState('')
//     const [error, setError] = useState('')

//     const handleSubmit = (e) =>  {
//         e.preventDefault()

//         setError('')

//         if (!name || !password || !confirmPassword || !email)
//         setError('Please fill in all fields.')
//         return

//         if(password.length < 8 )
//         setError('Password must be at least 8 characters.')
//         return

//         if(password !== confirmPassword )
//         setError('Passwords must match')
//         return
//     }

//     return (
//         <div className='bg-black'>
//         <form onSubmit={handleSubmit}>
//             <input
//             type='text'
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             />

//             <input
//             type='email'
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//             type='password'
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             />
//             <input
//             type='password'
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             />

//             {error && <p>{error}</p>}
//             </form>
//             </div>
//     )
// }
