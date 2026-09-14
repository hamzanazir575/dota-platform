import Image from 'next/image';
import Link from 'next/link';

export default function HeroCard({ name, role, description, image }) {
  const heroName = name.toLowerCase().replaceAll(' ', '-');
  return (
    <Link
      href={`/heroes/${heroName}`}
      className=" cursor-pointer overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 shadow-lg transition hover:-translate-y-1 hover:border-red-500"
    >
      <div className="relative h-48 overflow-hidden bg-neutral-800">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="mt-2 text-sm text-red-400">{role}</p>
        <p className="mt-3 text-sm text-neutral-400">{description}</p>
      </div>
    </Link>
  );
}
