import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-900 px-6 py-10 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className=' grid sm:grid-cols-2 gap-10 lg:grid-cols-3"'>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold">Dota 2 Platform</h2>
            <p className="max-w-sm text-sm leading-6 text-neutral-400 mb-4">
              {' '}
              Explore heroes, items, professional matches, players, and
              competitive statistics — all in one place.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-300">
              Explore
            </h3>

            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="w-fit text-sm text-neutral-400 transition-colors hover:text-white"
              >
                Home
              </Link>
              <Link
                href="/heroes"
                className="w-fit text-sm text-neutral-400 transition-colors hover:text-white"
              >
                Heroes
              </Link>
              <Link
                href="/items"
                className="w-fit text-sm text-neutral-400 transition-colors hover:text-white"
              >
                Items
              </Link>
              <Link
                href="/meta"
                className="w-fit text-sm text-neutral-400 transition-colors hover:text-white"
              >
                Meta Heroes
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-300">
              Competitive
            </h3>

            <nav className="flex flex-col gap-2">
              <Link
                href="/matches"
                className="w-fit text-sm text-neutral-400 transition-colors hover:text-white"
              >
                Matches
              </Link>
              <Link
                href="/live"
                className="w-fit text-sm text-neutral-400 transition-colors hover:text-white"
              >
                Live Matches
              </Link>
              <Link
                href="/players"
                className="w-fit text-sm text-neutral-400 transition-colors hover:text-white"
              >
                Players
              </Link>
              <Link
                href="/teams"
                className="w-fit text-sm text-neutral-400 transition-colors hover:text-white"
              >
                Teams
              </Link>
              <Link
                href="/tournaments"
                className="w-fit text-sm text-neutral-400 transition-colors hover:text-white"
              >
                Tournaments
              </Link>
            </nav>
          </div>

          <p className="mt-10 border-t border-neutral-800 pt-6 text-sm text-neutral-400">
            &copy; {new Date().getFullYear()} Hamza Nazir Dota 2 Platform
          </p>
        </div>
      </div>
    </footer>
  );
}
