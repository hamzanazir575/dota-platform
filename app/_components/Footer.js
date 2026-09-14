import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex items-center justify-between px-8 py-4 bg-neutral-900 text-white">
      <h2>Dota 2 platform</h2>
      <Link href="/">Home</Link>
      <Link href="/heroes">Heroes</Link>
      <p>{new Date().getFullYear()} @copyright Hamza Nazir Dota 2 Platform</p>
    </footer>
  );
}
