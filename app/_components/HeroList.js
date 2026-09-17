'use client';

import { useState } from 'react';
import HeroCard from './HeroCard';
import { heroImages } from '../_lib/hero-images';

export default function HeroList({ heroes }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = heroes.filter((hero) => {
    return hero.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <input
        type="text"
        placeholder="Search heroes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mt-4 w-auto rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 focus:border-red-500 focus:outline-none"
      />

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((hero) => (
          <HeroCard
            key={hero.name}
            name={hero.name}
            role={hero.role}
            description={hero.description}
            image={heroImages[hero.name]}
          />
        ))}
      </div>
    </>
  );
}
