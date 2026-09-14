import Link from 'next/link';
import HeroCard from './_components/HeroCard';
import { heroes } from './_lib/heroes';
import { heroImages } from './_lib/hero-images';

const featuredNames = ['Troll Warlord', 'Chaos Knight', 'Rubick', 'Arc Warden'];
const featuredHeroes = heroes.filter((hero) =>
  featuredNames.includes(hero.name),
);

export default function Home() {
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
          className="mt-8 inline-block text-red-400 hover:text-red-300 text-2xl font-semibold"
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
      </div>
    </main>
  );
}
