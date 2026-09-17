import HeroList from '../_components/HeroList';
import { heroes } from '../_lib/heroes';

export default function Heroes() {
  return (
    <main className="min-h-screen bg-neutral-950 px-8 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold">Dota 2 Heroes</h1>

        <p className="mt-3 max-w-2xl text-neutral-400">
          Explore all Dota 2 heroes, their abilities, stats, roles, and more.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">All Heroes</h2>

          <HeroList heroes={heroes} />
        </section>
      </div>
    </main>
  );
}
