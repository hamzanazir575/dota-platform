import Link from 'next/link';

export default function TournamentCard({ league }) {
  return (
    <Link
      href={`/tournaments/${league.leagueid}`}
      className="group block rounded-xl border border-neutral-800 bg-neutral-900 p-5 shadow-lg transition duration-200 hover:-translate-y-1 hover:border-red-500 hover:shadow-red-950/20"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
            Tournament
          </p>

          <h3 className="mt-2 text-lg font-bold leading-snug text-white transition-colors group-hover:text-red-400">
            {league.name || 'Unnamed Tournament'}
          </h3>
        </div>

        <span className="shrink-0 rounded-md border border-neutral-700 bg-neutral-800 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-neutral-400">
          {league.tier || 'Unknown'}
        </span>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-neutral-800 pt-4">
        <span className="text-sm text-neutral-500">
          League ID: {league.leagueid}
        </span>

        <span className="text-sm font-medium text-neutral-500 transition-colors group-hover:text-red-400">
          View Tournament →
        </span>
      </div>
    </Link>
  );
}
