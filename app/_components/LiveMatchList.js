'use client';

import { useEffect, useState } from 'react';
import LiveMatchCard from './LiveMatchCard';
import { transformLiveMatches } from '@/lib/live-matches';

function getSecondsAgo(lastUpdated, now) {
  if (!lastUpdated) {
    return null;
  }

  return Math.floor((now - lastUpdated) / 1000);
}

export default function LiveMatchList({ initialMatches, leagues, heroes }) {
  const [matches, setMatches] = useState(initialMatches);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    async function refreshMatches() {
      const response = await fetch('https://api.opendota.com/api/live');

      if (!response.ok) {
        return;
      }

      const liveMatches = await response.json();
      const freshMatches = transformLiveMatches(liveMatches, leagues);

      setMatches(freshMatches);
      setLastUpdated(new Date());
    }

    refreshMatches();

    const refreshId = setInterval(refreshMatches, 30000);

    return () => clearInterval(refreshId);
  }, [leagues]);

  useEffect(() => {
    const tickId = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(tickId);
  }, []);

  return (
    <>
      {lastUpdated && (
        <p className="mt-1 flex items-center gap-2 text-sm text-neutral-400">
          <span className="flex items-center gap-1.5 font-semibold text-red-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
            Live data
          </span>
          · Updated {getSecondsAgo(lastUpdated, now)}s ago
        </p>
      )}

      {matches.length === 0 ? (
        <p className="mt-6 text-neutral-400">
          No professional matches are live right now — check back during a
          tournament.
        </p>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {matches.map((match) => (
            <LiveMatchCard key={match.match_id} match={match} heroes={heroes} />
          ))}
        </div>
      )}
    </>
  );
}
