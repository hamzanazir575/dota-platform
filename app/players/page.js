'use client';

import { useEffect, useState } from 'react';
import PlayerCard from '../_components/PlayerCard';

export default function Players() {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');
  const [fetchError, setFetchError] = useState('');
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    async function fetchPlayers() {
      setLoading(true);

      try {
        const response = await fetch('https://api.opendota.com/api/proPlayers');
        const data = await response.json();
        setPlayers(data);
      } catch (err) {
        console.log(err);
        setFetchError('Could not load players. Please try again');
      } finally {
        setLoading(false);
      }
    }
    fetchPlayers();
  }, []);

  function handleSearch(e) {
    e.preventDefault();
    setError('');

    if (!searchTerm.trim()) {
      setError('Please search');
      return;
    }

    const query = searchTerm.trim().toLowerCase();

    const filtered = players.filter((player) => {
      return (
        player.personaname && player.personaname.toLowerCase().includes(query)
      );
    });
    setResults(filtered);
    setHasSearched(true);
  }

  return (
    <main className="min-h-screen bg-neutral-950 px-8 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold">Dota 2 Players</h1>

        <p className="mt-4 max-w-2xl text-neutral-400">
          Search for a Dota 2 player by name
        </p>

        <div className="mt-6">
          <form onSubmit={handleSearch} className="flex gap-3">
            <input
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              className="flex-1 rounded-lg border bg-neutral-900 px-4 py-3 text-white focus:border-red-500 outline-none"
              type="text"
              name="search"
              placeholder="Search for a player..."
            />
            <button
              type="submit"
              className="hover:text-red-600 transition-colors cursor-pointer text-xl font-semibold px-4 py-3 rounded-lg border border-neutral-900"
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
          <h2 className="text-2xl font-semibold mb-3">Search Results</h2>
          {fetchError && (
            <p className="mt-3 rounded-lg border border-red-800 bg-red-950/40 px-4 py-3 text-sm text-red-300">
              {fetchError}
            </p>
          )}
          {loading && <p>Loading players...</p>}

          {!loading &&
            results.map((player) => {
              return <PlayerCard key={player.account_id} player={player} />;
            })}

          {!loading && !fetchError && hasSearched && results.length === 0 && (
            <p>No players found.</p>
          )}
        </section>
      </div>
    </main>
  );
}
