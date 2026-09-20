'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/clients';

export default function AccountForm({ userId, initialName, initialBio }) {
  const router = useRouter();

  const [name, setName] = useState(initialName);
  const [bio, setBio] = useState(initialBio);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    setMessage('');
    setError('');

    const trimmedName = name.trim();
    const trimmedBio = bio.trim();

    if (!trimmedName) {
      setError('Name cannot be empty.');
      return;
    }

    setLoading(true);

    const supabase = createClient();

    const { error } = await supabase
      .from('profiles')
      .update({
        display_name: trimmedName,
        bio: trimmedBio || null,
        updated_at: new Date().toISOString(),
      })
      .eq('id', userId);

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    setMessage('Profile updated successfully.');

    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-neutral-200"
        >
          Display Name
        </label>

        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          autoComplete="name"
          className="mt-2 w-full rounded-lg border border-neutral-700 bg-neutral-950 px-4 py-3 text-white outline-none transition focus:border-red-500"
        />
      </div>

      <div>
        <label
          htmlFor="bio"
          className="block text-sm font-medium text-neutral-200"
        >
          Bio
        </label>

        <textarea
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Tell us a little about yourself..."
          rows={4}
          className="mt-2 w-full resize-none rounded-lg border border-neutral-700 bg-neutral-950 px-4 py-3 text-white outline-none transition focus:border-red-500"
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
        className="rounded-lg bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? 'Saving...' : 'Save Changes'}
      </button>
    </form>
  );
}
