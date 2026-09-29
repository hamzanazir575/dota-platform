'use client';

import Link from 'next/link';
import SignOutButton from './SignOutButton';

function closeMenu(event) {
  event.currentTarget.closest('details')?.removeAttribute('open');
}

export default function MobileMenu({ navLinks, user, displayName }) {
  return (
    <details className="group min-[900px]:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-center rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-neutral-300 transition hover:border-neutral-500 hover:text-white [&::-webkit-details-marker]:hidden">
        <span className="text-xl leading-none">☰</span>
      </summary>

      <div className="absolute right-6 top-full mt-2 w-60 rounded-xl border border-neutral-800 bg-neutral-900 p-4 shadow-2xl sm:right-8">
        <div className="space-y-2">
          {navLinks.map((link) => (
            <Link
              onClick={closeMenu}
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
                onClick={closeMenu}
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
                onClick={closeMenu}
                href="/signin"
                className="block rounded-md px-3 py-2 text-sm text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white"
              >
                Sign In
              </Link>

              <Link
                onClick={closeMenu}
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
  );
}
