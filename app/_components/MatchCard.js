import Link from 'next/link';
import { formatDuration, formatDate } from '../_lib/format';

export default function MatchCard({ match }) {
  return (
    <Link
      href={`/matches/${match.match_id}`}
      className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-red-500/60 transition-colors"
    >
      <div className="flex justify-between mb-8">
        <p>{match.league_name}</p>
        <p>{formatDuration(match.duration)}</p>
      </div>
      <div className="flex justify-between">
        <p>{match.radiant_name || 'Radiant'}</p>
        <p>{match.dire_name || 'Dire'}</p>
      </div>
      <div className="flex justify-between">
        <p
          className={
            match.radiant_win ? 'text-green-400 font-bold' : 'text-neutral-400'
          }
        >
          {match.radiant_score ?? 0}
        </p>
        <p
          className={!match.radiant_win ? 'text-green-400' : 'text-neutral-400'}
        >
          {match.dire_score ?? 0}
        </p>
      </div>
    </Link>
  );
}
