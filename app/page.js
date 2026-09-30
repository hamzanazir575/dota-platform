import Link from 'next/link';
import HeroCard from './_components/HeroCard';
import { heroes } from './_lib/heroes';
import { heroImages } from './_lib/hero-images';
import MatchCard from './_components/MatchCard';
import PlayerCard from './_components/PlayerCard';
import TeamCard from './_components/TeamCard';

const featuredNames = ['Troll Warlord', 'Chaos Knight', 'Rubick', 'Arc Warden'];
const featuredHeroes = heroes.filter((hero) =>
  featuredNames.includes(hero.name),
);

async function getRecentMatches() {
  const response = await fetch('https://api.opendota.com/api/proMatches');

  if (!response.ok) {
    return [];
  }

  const data = await response.json();

  if (!data) {
    return [];
  }

  return data;
}

async function getProPlayers() {
  const response = await fetch('https://api.opendota.com/api/proPlayers');

  if (!response.ok) {
    return [];
  }

  return response.json();
}

async function getTeams() {
  const response = await fetch('https://api.opendota.com/api/teams');

  if (!response.ok) {
    return [];
  }
  return response.json();
}

export default async function Home() {
  const [matches, players, teams] = await Promise.all([
    getRecentMatches(),
    getProPlayers(),
    getTeams(),
  ]);
  return (
    <main className="min-h-screen bg-neutral-950 px-8 py-12 text-white">
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="text-5xl font-bold">Dota 2 platform</h1>

        <p className="mt-4 text-lg text-neutral-400">
          Explore Dota 2 heroes, matches, players, teams, statistics,
          tournaments, and more — all in one place.
        </p>

        <Link
          href="/heroes"
          className="mt-8 inline-block text-red-400 hover:text-red-300 text-2xl font-semibold transition-colors"
        >
          See all heroes →
        </Link>

        <section className="mt-16 text-left">
          <h2 className="text-2xl font-semibold">Featured Heroes</h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredHeroes.map((hero) => (
              <HeroCard
                key={hero.name}
                name={hero.name}
                role={hero.role}
                description={hero.description}
                image={heroImages[hero.name]}
              />
            ))}
          </div>
        </section>
        <section className="mt-16 text-left">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-red-300 mb-4">
              Recent Matches
            </h2>
            <Link
              href="/matches"
              className="mb-4 inline-block text-red-400 font-bold hover:text-red-300 transition-colors"
            >
              View all →
            </Link>
          </div>

          {matches.length === 0 ? (
            <p className="mt-6 text-neutral-400">No recent matches available</p>
          ) : (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {matches.slice(0, 6).map((match) => {
                return <MatchCard key={match.match_id} match={match} />;
              })}
            </div>
          )}
        </section>
        <section className="mt-16 text-left">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-red-300 mb-4">
              Top Professional Players
            </h2>
            <Link
              href="/players"
              className="mb-4 inline-block text-red-400 font-bold hover:text-red-300 transition-colors"
            >
              View all →
            </Link>
          </div>

          {players.length === 0 ? (
            <p className="mt-6 text-neutral-400">No player data available</p>
          ) : (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {players.slice(0, 6).map((player) => (
                <PlayerCard key={player.account_id} player={player} />
              ))}
            </div>
          )}
        </section>

        <section className="mt-16 text-left">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-red-300 mb-4">
              Top Professional Teams
            </h2>
            <Link
              href="/teams"
              className="mb-4 inline-block text-red-400 font-bold hover:text-red-300 transition-colors"
            >
              View all →
            </Link>
          </div>

          {teams.length === 0 ? (
            <p className="mt-6 text-neutral-400">No team data available</p>
          ) : (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {teams.slice(0, 6).map((team) => (
                <TeamCard key={team.team_id} team={team} />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
