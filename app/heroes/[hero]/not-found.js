import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-950 px-6 text-white">
      <div className="text-center">
        <p className="text-4xl font-semibold uppercase tracking-widest text-red-400">
          404
        </p>

        <h1 className="mt-3 text-4xl font-bold">Hero Not Found</h1>

        <p className="mt-4 text-neutral-400">
          The hero you are looking for does not exist.
        </p>

        <Link
          href="/heroes"
          className="mt-8 inline-block rounded-lg bg-red-600 px-5 py-3 font-semibold transition hover:bg-red-500"
        >
          ← Back to all heroes
        </Link>
      </div>
    </main>
  );
}
