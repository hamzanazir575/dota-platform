import Link from 'next/link';
import NavLink from './NavLink';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Heroes', href: '/heroes' },
];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-neutral-900 text-white">
      <Link
        href="/"
        className="text-xl font-bold hover:text-red-500 transition-colors"
      >
        Dota 2 Platform
      </Link>
      <ul className="flex gap-6">
        {navLinks.map((link) => {
          return (
            <li key={link.name}>
              <NavLink href={link.href}>{link.name}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
