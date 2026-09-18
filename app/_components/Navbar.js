// import Link from 'next/link';
// import NavLink from './NavLink';
// import SignOutButton from './SignOutButton';
// import { createClient } from '@/lib/supabase/clients';

// const navLinks = [
//   { name: 'Home', href: '/' },
//   { name: 'Heroes', href: '/heroes' },
// ];

// export default async function Navbar() {
//   const supabase = await createClient();
//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   return (
//     <nav className="flex items-center justify-between px-8 py-4 bg-neutral-900 text-white">
//       <Link
//         href="/"
//         className="text-xl font-bold hover:text-red-500 transition-colors"
//       >
//         Dota 2 Platform
//       </Link>
//       <ul className="flex gap-6">
//         {navLinks.map((link) => {
//           return (
//             <li key={link.name}>
//               <NavLink href={link.href}>{link.name}</NavLink>
//             </li>
//           );
//         })}
//         {user ? (
//           <>
//             <li className="text-sm text-neutral-400">{user.email}</li>
//             <li>
//               <SignOutButton />
//             </li>
//           </>
//         ) : (
//           <>
//             <li>
//               <NavLink href="/signin">Sign In</NavLink>
//             </li>
//             <li>
//               <NavLink href="/signup">Sign Up</NavLink>
//             </li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// }

import Link from 'next/link';
import NavLink from './NavLink';
import SignOutButton from './SignOutButton';
import { createClient } from '@/lib/supabase/server';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Heroes', href: '/heroes' },
];

export default async function Navbar() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-900/95 text-white backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight transition-colors hover:text-red-500"
        >
          Dota 2 Platform
        </Link>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink href={link.href}>{link.name}</NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 border-l border-neutral-800 pl-6">
            {user ? (
              <>
                <span className="max-w-[160px] truncate text-sm text-neutral-400">
                  {user.email}
                </span>
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
        </div>
      </div>
    </nav>
  );
}
