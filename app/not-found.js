import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 px-6 text-center text-white">
      <p className="text-sm font-semibold uppercase tracking-widest text-red-400">
        Error 404
      </p>

      <h1 className="mt-3 text-5xl font-bold">Page Not Found</h1>

      <p className="mt-4 max-w-md text-neutral-400">
        The page you&apos;re looking for doesn&apos;t exist or may have been
        moved.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-lg bg-red-600 px-6 py-3 font-semibold transition hover:bg-red-700"
      >
        Back to Home
      </Link>
    </main>
  );
}
