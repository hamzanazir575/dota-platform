import { heroImages } from '@/app/_lib/hero-images';
import { heroes } from '@/app/_lib/heroes';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { abilities } from '@/app/_lib/abilities';
import AbilityCard from '@/app/_components/AbilityCard';
import { heroStats } from '@/app/_lib/hero-stats';
import HeroStats from '@/app/_components/HeroStats';
import { talents } from '@/app/_lib/talents';
import TalentTree from '@/app/_components/TalentTree';
import { normalizeHeroName } from '@/app/_lib/hero-name-overrides';
import HeroMatchups from '@/app/_components/HeroMatchups';

async function getHeroes() {
  const response = await fetch('https://api.opendota.com/api/constants/heroes');

  if (!response.ok) {
    return {};
  }

  return response.json();
}
async function getHeroMatchups(heroId) {
  const response = await fetch(
    `https://api.opendota.com/api/heroes/${heroId}/matchups`,
  );

  if (!response.ok) {
    return [];
  }

  return response.json();
}

export default async function HeroPage({ params }) {
  const { hero: heroSlug } = await params;

  const currentHero = heroes.find((hero) => {
    return hero.name.toLowerCase().replaceAll(' ', '-') === heroSlug;
  });

  if (!currentHero) {
    notFound();
  }

  const openDotaHeroes = await getHeroes();

  const heroIdByName = new Map(
    Object.values(openDotaHeroes).map((hero) => [
      normalizeHeroName(hero.localized_name),
      hero.id,
    ]),
  );

  const heroById = new Map(
    Object.values(openDotaHeroes).map((hero) => [
      hero.id,
      normalizeHeroName(hero.localized_name),
    ]),
  );

  const openDotaHeroId = heroIdByName.get(currentHero.name);

  const HERO_DATA_FALLBACKS = {
    'Outworld Destroyer': 'Outworld Devourer',
    Ringmaster: 'Ring Master',
  };

  const heroMatchups = openDotaHeroId
    ? await getHeroMatchups(openDotaHeroId)
    : [];

  const matchupData = heroMatchups.map((matchup) => {
    const opponentName = heroById.get(matchup.hero_id);

    return {
      id: matchup.hero_id,
      name: opponentName,
      image: heroImages[opponentName],
      gamesPlayed: matchup.games_played,
      winRate: matchup.games_played
        ? (matchup.wins / matchup.games_played) * 100
        : 0,
    };
  });

  const reliableMatchups = matchupData.filter(
    (matchup) => matchup.gamesPlayed >= 25,
  );

  const strongestMatchups = [...reliableMatchups].sort(
    (a, b) => b.winRate - a.winRate,
  );

  const weakestMatchups = [...reliableMatchups].sort(
    (a, b) => a.winRate - b.winRate,
  );

  const image = heroImages[currentHero.name];
  const currentAbilities = abilities[currentHero.name] ?? [];
  const currentStats = heroStats[currentHero.name] ??
    heroStats[HERO_DATA_FALLBACKS[currentHero.name]] ?? {
      primaryAttribute: 'Universal',
      attackType: 'Unknown',
      roles: [],
    };
  const currentTalents = talents[currentHero.name] ??
    talents[HERO_DATA_FALLBACKS[currentHero.name]] ?? {
      level10: [],
      level15: [],
      level20: [],
      level25: [],
    };

  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-10 text-white sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/heroes"
          className="inline-flex items-center text-xl text-red-300 font-medium text-neutral-400 transition hover:text-red-400"
        >
          ← Back to all heroes
        </Link>

        <section className="mt-8 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl">
          <div className="relative h-72 overflow-hidden sm:h-96">
            <Image
              src={image}
              alt={currentHero.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 1200px"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

            <div className="absolute bottom-0 left-0 p-6 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
                Dota 2 Hero
              </p>

              <h1 className="mt-2 text-4xl font-bold sm:text-6xl">
                {currentHero.name}
              </h1>
            </div>
          </div>

          <div className="grid gap-8 p-6 sm:p-10 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-sm uppercase tracking-widest text-neutral-500">
                Role
              </p>

              <p className="mt-2 text-2xl font-semibold text-red-400">
                {currentHero.role}
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-widest text-neutral-500">
                Description
              </p>

              <p className="mt-2 max-w-3xl text-base leading-7 text-neutral-300">
                {currentHero.description}
              </p>
            </div>
          </div>
        </section>

        <HeroStats stats={currentStats} />
        <TalentTree talents={currentTalents} />
        <section className="mt-12">
          <h2 className="text-3xl font-bold">Abilities</h2>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {currentAbilities.map((ability, index) => (
              <AbilityCard key={`${ability.name}-${index}`} ability={ability} />
            ))}
          </div>

          <HeroMatchups
            strongestMatchups={strongestMatchups}
            weakestMatchups={weakestMatchups}
          />
        </section>
      </div>
    </main>
  );
}
