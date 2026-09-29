import Link from 'next/link';
import { formatDuration } from '../_lib/format';

export default function MatchCard({ match }) {
  return (
    <Link
      href={`/matches/${match.match_id}`}
      className="block rounded-2xl border border-neutral-800 bg-neutral-900 p-5 shadow-lg transition hover:border-red-500/60"
    >
      <div className="mb-4 flex items-center justify-between border-b border-neutral-800 pb-3">
        <p className="truncate text-sm font-semibold text-red-400">
          {match.league_name || 'Unknown League'}
        </p>
        <p className="text-xs text-neutral-500">
          {formatDuration(match.duration)}
        </p>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div>
          <p
            className={`text-base font-bold ${
              match.radiant_win ? 'text-white' : 'text-neutral-400'
            }`}
          >
            {match.radiant_name || 'Radiant'}
          </p>
          <p
            className={`mt-1 text-2xl font-bold ${
              match.radiant_win ? 'text-green-400' : 'text-neutral-500'
            }`}
          >
            {match.radiant_score ?? 0}
          </p>
        </div>

        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-600">
          VS
        </p>

        <div className="text-right">
          <p
            className={`text-base font-bold ${
              !match.radiant_win ? 'text-white' : 'text-neutral-400'
            }`}
          >
            {match.dire_name || 'Dire'}
          </p>
          <p
            className={`mt-1 text-2xl font-bold ${
              !match.radiant_win ? 'text-green-400' : 'text-neutral-500'
            }`}
          >
            {match.dire_score ?? 0}
          </p>
        </div>
      </div>
    </Link>
  );
}
