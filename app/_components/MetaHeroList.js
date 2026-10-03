'use client';

import { useState } from 'react';
import MetaHeroCard from './MetaHeroCard';

export default function MetaHeroList({ heroes }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = heroes.filter((hero) =>
    hero.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search heroes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mt-4 w-auto rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 focus:border-red-500 focus:outline-none"
      />

      <div className="mt-6 space-y-3">
        {filtered.map((hero) => (
          <MetaHeroCard key={hero.id} hero={hero} />
        ))}
      </div>
    </>
  );
}
