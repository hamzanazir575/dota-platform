import MetaHeroList from '../_components/MetaHeroList';
import { heroImages } from '../_lib/hero-images';

async function getHeroStats() {
  const response = await fetch('https://api.opendota.com/api/heroStats');

  if (!response.ok) {
    return [];
  }
  return response.json();
}

const HERO_NAME_OVERRIDES = {
  'Outworld Devourer': 'Outworld Destroyer',
  'Ring Master': 'Ringmaster',
};

function normalizeHeroName(name) {
  return HERO_NAME_OVERRIDES[name] ?? name;
}

export default async function HeroMeta() {
  const heroStats = await getHeroStats();

  const totalProPicks = heroStats.reduce(
    (total, hero) => total + hero.pro_pick,
    0,
  );

  const metaHeroes = heroStats.map((hero) => {
    const name = normalizeHeroName(hero.localized_name);
    return {
      id: hero.id,
      name,
      image: heroImages[name],
      pickRate: (hero.pro_pick / totalProPicks) * 100,
      winRate: hero.pro_pick > 0 ? (hero.pro_win / hero.pro_pick) * 100 : 0,
      proPicks: hero.pro_pick,
      roles: hero.roles,
    };
  });

  metaHeroes.sort((a, b) => b.pickRate - a.pickRate);

  const availableRoles = [
    ...new Set(metaHeroes.flatMap((hero) => hero.roles)),
  ].sort();

  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-12 text-white sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
            Dota 2 Platform
          </p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Hero Meta Dashboard
          </h1>
          <p className="mt-3 max-w-2xl text-neutral-400">
            Professional pick rates, highest to lowest.
          </p>
        </div>

        <MetaHeroList heroes={metaHeroes} availableRoles={availableRoles} />
      </div>
    </main>
  );
}
