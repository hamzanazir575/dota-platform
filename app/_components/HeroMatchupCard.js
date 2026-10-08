import Link from 'next/link';

export default function HeroMatchupCard({ matchup, type }) {
  const winRateColor = type === 'strong' ? 'text-green-400' : 'text-red-400';
  const slug = matchup.name.toLowerCase().replaceAll(' ', '-');

  return (
    <Link
      href={`/heroes/${slug}`}
      className="flex items-center gap-4 rounded-xl border border-neutral-800 bg-neutral-900 p-3 transition hover:-translate-y-1 hover:border-red-300"
    >
      {matchup.image ? (
        <img
          src={matchup.image}
          alt={matchup.name}
          className="h-10 w-16 shrink-0 rounded-md bg-neutral-800 object-cover"
        />
      ) : (
        <div className="flex h-10 w-16 shrink-0 items-center justify-center rounded-md bg-neutral-800 text-[10px] text-neutral-500">
          No image
        </div>
      )}

      <p className="min-w-0 flex-1 truncate font-semibold text-white">
        {matchup.name}
      </p>

      <div className="text-right">
        <p className={`text-lg font-bold ${winRateColor}`}>
          {matchup.winRate.toFixed(1)}%
        </p>
        <p className="text-xs text-neutral-500">
          {matchup.gamesPlayed.toLocaleString()} games
        </p>
      </div>
    </Link>
  );
}
