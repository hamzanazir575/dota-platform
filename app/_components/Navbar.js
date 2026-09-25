import Link from 'next/link';
import NavLink from './NavLink';
import SignOutButton from './SignOutButton';
import { createClient } from '@/lib/supabase/server';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Heroes', href: '/heroes' },
  { name: 'Players', href: '/players' },
  { name: 'Matches', href: '/matches' },
  { name: 'Teams', href: '/teams' },
  { name: 'Tournaments', href: '/tournaments' },
];

export default async function Navbar() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  let profile = null;

  if (user) {
    const { data } = await supabase
      .from('profiles')
      .select('display_name')
      .eq('id', user.id)
      .single();

    profile = data;
  }

  const displayName = profile?.display_name || user?.email;

  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-900/95 text-white backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight transition-colors hover:text-red-500"
          >
            Dota 2 Platform
          </Link>

          <ul className="hidden items-center gap-6 min[900]:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink href={link.href}>{link.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden items-center gap-4 border-l border-neutral-800 pl-6 min[900]:flex">
          {user ? (
            <>
              <NavLink href="/account">{displayName}</NavLink>

              <SignOutButton />
            </>
          ) : (
            <>
              <NavLink href="/signin">Sign In</NavLink>

              <Link
                href="/signup"
                className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold transition-colors hover:bg-red-500"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        <details className="group min-[900px]:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-center rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-neutral-300 transition hover:border-neutral-500 hover:text-white [&::-webkit-details-marker]:hidden">
            <span className="text-xl leading-none">☰</span>
          </summary>

          <div className="absolute right-6 top-full mt-2 w-60 rounded-xl border border-neutral-800 bg-neutral-900 p-4 shadow-2xl sm:right-8">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-sm text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="my-3 border-t border-neutral-800" />

            <div className="space-y-2">
              {user ? (
                <>
                  <Link
                    href="/account"
                    className="block rounded-md px-3 py-2 text-sm text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white"
                  >
                    {displayName}
                  </Link>

                  <div className="px-3 py-2">
                    <SignOutButton />
                  </div>
                </>
              ) : (
                <>
                  <Link
                    href="/signin"
                    className="block rounded-md px-3 py-2 text-sm text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white"
                  >
                    Sign In
                  </Link>

                  <Link
                    href="/signup"
                    className="block rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold transition-colors hover:bg-red-500"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </details>
      </div>
    </nav>
  );
}
