import Link from 'next/link';
import HeroCard from './_components/HeroCard';
import { heroes } from './_lib/heroes';
import { heroImages } from './_lib/hero-images';
import MatchCard from './_components/MatchCard';
import PlayerCard from './_components/PlayerCard';
import TeamCard from './_components/TeamCard';
import HomeSectionHeader from './_components/HomeSectionHeader';
import HomeCardGrid from './_components/HomeCardGrid';

const featuredNames = ['Troll Warlord', 'Chaos Knight', 'Rubick', 'Arc Warden'];
const featuredHeroes = heroes.filter((hero) =>
  featuredNames.includes(hero.name),
);

async function getArrayData(url, resourceName) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`OpenDota returned status ${response.status}`);
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error(`Unexpected ${resourceName} data received from OpenDota`);
    }

    if (
      !data.every(
        (item) =>
          item !== null && typeof item === 'object' && !Array.isArray(item),
      )
    ) {
      throw new Error(
        `Unexpected ${resourceName} entry received from OpenDota`,
      );
    }

    return data;
  } catch (error) {
    console.error(`Failed to load ${resourceName}:`, error);
    return [];
  }
}

export default async function Home() {
  const [matches, players, teams] = await Promise.all([
    getArrayData('https://api.opendota.com/api/proMatches', 'recent matches'),
    getArrayData('https://api.opendota.com/api/proPlayers', 'players'),
    getArrayData('https://api.opendota.com/api/teams', 'teams'),
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
          className="mt-8 inline-block text-red-400 hover:text-red-300 hover:-translate-y-1 text-2xl font-semibold transition-all"
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
          <HomeSectionHeader title="Recent Matches" href="/matches" />

          <HomeCardGrid
            items={matches}
            emptyMessage="No recent matches available"
            getKey={(match) => match.match_id}
            limit={6}
            renderItem={(match) => <MatchCard match={match} />}
          />
        </section>
        <section className="mt-16 text-left">
          <HomeSectionHeader title="Top Professional Players" href="/players" />

          <HomeCardGrid
            items={players}
            emptyMessage="No player data available"
            getKey={(player) => player.account_id}
            limit={6}
            renderItem={(player) => <PlayerCard player={player} />}
          />
        </section>

        <section className="mt-16 text-left">
          <HomeSectionHeader title="Top Professional Teams" href="/teams" />

          <HomeCardGrid
            items={teams}
            emptyMessage="No team data available"
            getKey={(team) => team.team_id}
            limit={6}
            renderItem={(team) => <TeamCard team={team} />}
          />
        </section>
      </div>
    </main>
  );
}
