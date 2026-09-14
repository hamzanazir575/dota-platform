import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 px-8 py-6 bg-neutral-900 text-white">
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-bold">Dota 2 platform</h2>

        <nav className="flex flex-col gap-1.5 pl-1">
          <Link
            href="/"
            className="hover:text-red-500 transition-colors w-fit text-md text-neutral-300"
          >
            Home
          </Link>
          <Link
            href="/heroes"
            className="hover:text-red-500 transition-colors w-fit text-md text-neutral-300"
          >
            Heroes
          </Link>
        </nav>
      </div>

      <p className="text-sm text-neutral-400 sm:self-end">
        &copy; {new Date().getFullYear()} Hamza Nazir Dota 2 Platform
      </p>
    </footer>
  );
}
