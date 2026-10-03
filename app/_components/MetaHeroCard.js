import Link from 'next/link';

export default function MetaHeroCard({ hero }) {
  const slug = hero.name.toLowerCase().replaceAll(' ', '-');

  return (
    <Link
      href={`/heroes/${slug}`}
      className="flex items-center gap-4 rounded-xl border border-neutral-800 bg-neutral-900 p-4 shadow-lg transition hover:border-red-500"
    >
      {hero.image ? (
        <img
          src={hero.image}
          alt={hero.name}
          className="h-14 w-22 rounded-md bg-neutral-800 object-cover"
        />
      ) : (
        <div className="flex h-14 w-14 items-center justify-center rounded-md bg-neutral-800 text-[10px] text-neutral-500">
          No image
        </div>
      )}

      <p className="flex-1 font-semibold text-white">{hero.name}</p>

      <div className="flex items-center gap-6 text-right">
        <div>
          <p className="text-[10px] uppercase tracking-wide text-neutral-500">
            Pick Rate
          </p>
          <p className="text-lg font-bold text-red-400">
            {hero.pickRate.toFixed(2)}%
          </p>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-wide text-neutral-500">
            Win Rate
          </p>
          <p className="text-lg font-bold text-green-400">
            {hero.winRate.toFixed(2)}%
          </p>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-wide text-neutral-500">
            Pro Picks
          </p>
          <p className="text-lg font-bold text-amber-100 text-center">
            {hero.proPicks}
          </p>
        </div>
      </div>
    </Link>
  );
}
