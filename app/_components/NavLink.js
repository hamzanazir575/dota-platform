import Link from 'next/link';

export default function NavLink({ href, children }) {
  return (
    <Link href={href} className="hover:text-red-500 transition-colors">
      {children}
    </Link>
  );
}
