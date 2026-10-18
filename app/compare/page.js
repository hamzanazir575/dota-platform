import Link from 'next/link';

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-10 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/heroes"
          className="text-sm font-medium text-neutral-400 transition hover:text-red-400"
        >
          ← Back to Heroes
        </Link>

        <section className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-400">
            Hero Tools
          </p>

          <h1 className="mt-2 text-4xl font-bold">Compare Heroes</h1>

          <p className="mt-3 max-w-2xl leading-7 text-neutral-400">
            Compare two Dota 2 heroes side by side, explore their stats, and see
            where each hero has the advantage.
          </p>
        </section>

        <section className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-900 p-6 sm:p-8">
          <h2 className="text-2xl font-bold">Choose Your Heroes</h2>

          <p className="mt-2 text-neutral-400">
            Hero selectors and comparison results will appear here.
          </p>
        </section>
      </div>
    </main>
  );
}
