'use client';

import { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import PlayerCard from '../_components/PlayerCard';

export default function Players() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-neutral-950 px-8 py-12 text-white">
          Loading players...
        </main>
      }
    >
      <PlayersPageContent />
    </Suspense>
  );
}

function PlayersPageContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') ?? '';

  return <PlayersSearch key={query} query={query} />;
}

function PlayersSearch({ query }) {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState(query);
  const [error, setError] = useState('');
  const [fetchError, setFetchError] = useState('');
  const [loading, setLoading] = useState(Boolean(query.trim()));
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    const searchQuery = query.trim();

    if (!searchQuery) {
      return;
    }

    const controller = new AbortController();

    async function searchPlayers() {
      try {
        const response = await fetch(
          `https://api.opendota.com/api/search?q=${encodeURIComponent(searchQuery)}`,
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error(`OpenDota returned status ${response.status}`);
        }

        const data = await response.json();

        if (
          !Array.isArray(data) ||
          !data.every(
            (player) =>
              player !== null &&
              typeof player === 'object' &&
              !Array.isArray(player),
          )
        ) {
          throw new Error('Unexpected player search data');
        }

        setResults(data);
        setHasSearched(true);
      } catch (err) {
        if (err.name === 'AbortError') {
          return;
        }

        console.error('Failed to search players:', err);

        setResults([]);
        setHasSearched(true);
        setFetchError('Could not search players. Please try again');
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    searchPlayers();

    return () => controller.abort();
  }, [query]);

  function handleSearch(e) {
    e.preventDefault();
    setError('');

    const searchQuery = searchTerm.trim();

    if (!searchQuery) {
      setError('Please search');
      return;
    }

    router.push(`/players?q=${encodeURIComponent(searchQuery)}`);
  }

  return (
    <main className="min-h-screen bg-neutral-950 px-8 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold">Dota 2 Players</h1>

        <p className="mt-4 max-w-2xl text-neutral-400">
          Search for a <span className="font-bold uppercase">professional</span>{' '}
          Dota 2 player by name
        </p>

        <div className="mt-6">
          <form onSubmit={handleSearch} className="flex gap-3">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 rounded-lg border bg-neutral-900 px-4 py-3 text-white outline-none focus:border-red-500"
              type="text"
              name="search"
              placeholder="Search for a player..."
            />

            <button
              type="submit"
              className="cursor-pointer rounded-lg border border-neutral-900 px-4 py-3 text-xl font-semibold transition-colors hover:text-red-600"
            >
              Search
            </button>
          </form>

          {error && (
            <p className="mt-3 rounded-lg border border-red-800 bg-red-950/40 px-4 py-3 text-sm text-red-300">
              {error}
            </p>
          )}
        </div>

        <section className="mt-6">
          {query && (
            <h2 className="mb-3 text-2xl font-semibold">Matching Players</h2>
          )}

          {fetchError && (
            <p className="mt-3 rounded-lg border border-red-800 bg-red-950/40 px-4 py-3 text-sm text-red-300">
              {fetchError}
            </p>
          )}

          {loading && (
            <div
              role="status"
              aria-label="Loading search results"
              className="flex max-w-2xl items-center justify-center gap-3 py-6"
            >
              <span className="h-10 w-10 animate-spin rounded-full border-4 border-neutral-700 border-t-red-500" />
            </div>
          )}

          {!loading &&
            results.map((player) => (
              <PlayerCard key={player.account_id} player={player} />
            ))}

          {!loading && !fetchError && hasSearched && results.length === 0 && (
            <p>No players found.</p>
          )}
        </section>
      </div>
    </main>
  );
}
