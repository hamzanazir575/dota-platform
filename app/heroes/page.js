import HeroCard from '../_components/HeroCard';
import { heroImages } from '../_lib/hero-images';
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

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {heroes.map((hero) => {
              return (
                <HeroCard
                  key={hero.name}
                  name={hero.name}
                  role={hero.role}
                  description={hero.description}
                  image={heroImages[hero.name]}
                />
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
