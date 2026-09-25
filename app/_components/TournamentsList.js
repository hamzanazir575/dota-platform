'use client';

import { useState } from 'react';
import TournamentCard from './TournamentCard';

export default function TournamentsList({ leagues }) {
  const [searchTerm, setSearchTerm] = useState('');

  const query = searchTerm.trim().toLowerCase();

  const filtered = query
    ? leagues.filter((league) => league.name?.toLowerCase().includes(query))
    : leagues.slice(0, 20);

  return (
    <div className="mt-8">
      <div className="max-w-xl">
        <label
          htmlFor="tournament-search"
          className="mb-2 block text-sm font-medium text-neutral-300"
        >
          Search tournaments
        </label>

        <input
          id="tournament-search"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by tournament name..."
          className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-white placeholder:text-neutral-600 outline-none transition focus:border-red-500 focus:ring-1 focus:ring-red-500"
        />
      </div>

      <div className="mt-8">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Tournaments</h2>

          <span className="text-sm text-neutral-500">
            {filtered.length} {filtered.length === 1 ? 'result' : 'results'}
          </span>
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-8 text-center">
            <p className="text-neutral-400">
              No tournaments found for "{searchTerm}".
            </p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((league) => (
              <TournamentCard key={league.leagueid} league={league} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
