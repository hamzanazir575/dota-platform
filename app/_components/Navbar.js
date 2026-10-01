import Link from 'next/link';
import NavLink from './NavLink';
import SignOutButton from './SignOutButton';
import { createClient } from '@/lib/supabase/server';
import MobileMenu from './MobileMenu';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Heroes', href: '/heroes' },
  { name: 'Players', href: '/players' },
  { name: 'Matches', href: '/matches' },
  { name: 'Teams', href: '/teams' },
  { name: 'Tournaments', href: '/tournaments' },
  { name: 'Items', href: '/items' },
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

          <ul className="hidden items-center gap-6 min-[900px]:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink href={link.href}>{link.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden items-center gap-4 border-l border-neutral-800 pl-6 min-[900px]:flex">
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

        <MobileMenu navLinks={navLinks} user={user} displayName={displayName} />
      </div>
    </nav>
  );
}
