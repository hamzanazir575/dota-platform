import { notFound } from 'next/navigation';
import TournamentsList from '../_components/TournamentsList';

export default async function TournamentsPage() {
  const response = await fetch('https://api.opendota.com/api/leagues');

  if (!response.ok) {
    notFound();
  }

  const leagues = await response.json();

  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-12 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
            Dota 2 Platform
          </p>

          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Dota 2 Tournaments
          </h1>

          <p className="mt-3 max-w-2xl text-neutral-400">
            Explore professional Dota 2 tournaments, their participating teams,
            and competitive matches.
          </p>
        </div>

        <TournamentsList leagues={leagues} />
      </div>
    </main>
  );
}
