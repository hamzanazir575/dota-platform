import Link from 'next/link';

export default function HomeSectionHeader({ title, href }) {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-semibold text-red-300 mb-4">{title}</h2>
      <Link
        href={href}
        className="mb-4 inline-block text-red-400 font-bold hover:text-red-300 transition-colors"
      >
        View all →
      </Link>
    </div>
  );
}
