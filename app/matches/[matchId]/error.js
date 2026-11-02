'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 text-white">
      <h2 className="text-3xl font-bold">Something went wrong!</h2>

      <p className="mt-3 text-neutral-400">
        We couldnt load this match. Please try again.
      </p>

      <button
        onClick={() => reset()}
        className="mt-6 rounded-lg bg-red-600 px-6 py-3 font-semibold transition hover:bg-red-700 cursor-pointer"
      >
        Try Again
      </button>
    </div>
  );
}
