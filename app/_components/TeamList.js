'use client';

import { useState } from 'react';
import TeamCard from './TeamCard';

export default function TeamsList({ teams }) {
  const [searchTerm, setSearchTerm] = useState('');
  const query = searchTerm.trim().toLowerCase();

  const filtered = query
    ? teams.filter((team) => team.name?.toLowerCase().includes(query))
    : teams.slice(0, 20);

  return (
    <div className="mt-6">
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search teams..."
        className="w-full rounded-lg border border-neutral-700 bg-neutral-950 px-4 py-3 text-white outline-none transition focus:border-red-500 sm:max-w-md"
      />

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((team) => (
          <TeamCard key={team.team_id} team={team} />
        ))}
      </div>

      {query && filtered.length === 0 && (
        <p className="mt-6 text-neutral-400">No teams found.</p>
      )}
    </div>
  );
}
