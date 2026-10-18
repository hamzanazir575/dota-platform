'use client';

import { useState } from 'react';
import Image from 'next/image';
import { heroes } from '@/app/_lib/heroes';
import { heroStats } from '@/app/_lib/hero-stats';
import { heroImages } from '@/app/_lib/hero-images';

const availableHeroes = heroes.filter(
  (hero) => heroStats[hero.name] && heroImages[hero.name],
);

function HeroOverview({ hero }) {
  const stats = heroStats[hero.name];

  const primaryAttribute =
    stats.primaryAttribute === 'all' ? 'Universal' : stats.primaryAttribute;

  return (
    <section className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5 sm:p-6">
      <div className="relative h-44 overflow-hidden rounded-xl bg-neutral-950 sm:h-52">
        <Image
          src={heroImages[hero.name]}
          alt={hero.name}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      <h2 className="mt-5 text-2xl font-bold text-white">{hero.name}</h2>

      <p className="mt-2 text-sm text-red-400">{hero.role}</p>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-neutral-950 p-4">
          <p className="text-xs uppercase tracking-wider text-neutral-400">
            Primary Attribute
          </p>
          <p className="mt-2 font-semibold text-white">{primaryAttribute}</p>
        </div>

        <div className="rounded-xl bg-neutral-950 p-4">
          <p className="text-xs uppercase tracking-wider text-neutral-400">
            Attack Type
          </p>
          <p className="mt-2 font-semibold text-white">{stats.attackType}</p>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm text-neutral-400">Roles</p>

        <div className="mt-2 flex flex-wrap gap-2">
          {stats.roles.map((role) => (
            <span
              key={role}
              className="rounded-full border border-neutral-700 bg-neutral-800 px-3 py-1 text-sm text-neutral-200"
            >
              {role}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HeroCompare() {
  const [heroAName, setHeroAName] = useState('Anti-Mage');
  const [heroBName, setHeroBName] = useState('Axe');

  const heroA =
    availableHeroes.find((hero) => hero.name === heroAName) ??
    availableHeroes[0];

  const heroB =
    availableHeroes.find((hero) => hero.name === heroBName) ??
    availableHeroes[1] ??
    availableHeroes[0];

  return (
    <div className="mt-8">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label
            htmlFor="compare-hero-a"
            className="mb-2 block text-sm font-semibold text-neutral-300"
          >
            First Hero
          </label>

          <select
            id="compare-hero-a"
            value={heroA.name}
            onChange={(event) => setHeroAName(event.target.value)}
            className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-white outline-none focus:border-red-500"
          >
            {availableHeroes.map((hero) => (
              <option key={hero.name} value={hero.name}>
                {hero.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="compare-hero-b"
            className="mb-2 block text-sm font-semibold text-neutral-300"
          >
            Second Hero
          </label>

          <select
            id="compare-hero-b"
            value={heroB.name}
            onChange={(event) => setHeroBName(event.target.value)}
            className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-white outline-none focus:border-red-500"
          >
            {availableHeroes.map((hero) => (
              <option key={hero.name} value={hero.name}>
                {hero.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 grid items-start gap-6 lg:grid-cols-2">
        <HeroOverview hero={heroA} />
        <HeroOverview hero={heroB} />
      </div>
    </div>
  );
}
