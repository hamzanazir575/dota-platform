'use client';

import { useState } from 'react';
import MetaHeroCard from './MetaHeroCard';

export default function MetaHeroList({ heroes, availableRoles }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('pickRate');
  const [minPicks, setMinPicks] = useState('0');
  const [roleFilter, setRoleFilter] = useState('all');

  const filtered = heroes.filter((hero) => {
    const matchesSearch = hero.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesMinPicks = hero.proPicks >= Number(minPicks);
    const matchesRole = roleFilter === 'all' || hero.roles.includes(roleFilter);

    return matchesSearch && matchesMinPicks && matchesRole;
  });

  filtered.sort((a, b) => b[sortBy] - a[sortBy]);

  return (
    <>
      <div className="mt-4 flex flex-wrap items-end gap-3">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="search"
            className="text-xs uppercase tracking-wide text-neutral-500"
          >
            Search
          </label>
          <input
            id="search"
            type="text"
            placeholder="Search heroes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-auto rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 focus:border-red-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="sortBy"
            className="text-xs uppercase tracking-wide text-neutral-500"
          >
            Sort By
          </label>
          <select
            id="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 text-white focus:border-red-500 focus:outline-none cursor-pointer"
          >
            <option value="pickRate">Pick Rate</option>
            <option value="winRate">Win Rate</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="minPicks"
            className="text-xs uppercase tracking-wide text-neutral-500"
          >
            Minimum Pro Picks
          </label>
          <select
            id="minPicks"
            value={minPicks}
            onChange={(e) => setMinPicks(e.target.value)}
            className="rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 text-white focus:border-red-500 focus:outline-none cursor-pointer"
          >
            <option value="0">All</option>
            <option value="5">5+</option>
            <option value="10">10+</option>
            <option value="25">25+</option>
            <option value="50">50+</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="role"
            className="text-xs uppercase tracking-wide text-neutral-500"
          >
            Role
          </label>
          <select
            id="role"
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 text-white focus:border-red-500 focus:outline-none cursor-pointer"
          >
            <option value="all">All Roles</option>
            {availableRoles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {filtered.map((hero) => (
          <MetaHeroCard key={hero.id} hero={hero} />
        ))}
      </div>
    </>
  );
}
