import Link from 'next/link';
import { formatDuration } from '../_lib/format';
import { heroImages } from '../_lib/hero-images';

function formatGoldLead(radiantLead) {
  if (radiantLead === 0) return 'Even gold';

  const leadingTeam = radiantLead > 0 ? 'Radiant' : 'Dire';
  const amount = Math.abs(radiantLead);
  const formatted = amount >= 1000 ? `${(amount / 1000).toFixed(1)}k` : amount;

  return `${leadingTeam} +${formatted}g`;
}

function getHeroInfo(heroes, heroId) {
  const hero = heroes[String(heroId)];
  const name = hero?.localized_name;

  return {
    name: name || 'Unknown Hero',
    image: heroImages[name] || null,
  };
}

export default function LiveMatchCard({ match, heroes }) {
  const radiantPlayers = match.players.filter((player) => {
    return player.team === 0;
  });

  const direPlayers = match.players.filter((player) => {
    return player.team === 1;
  });

  return (
    <Link
      href={`/matches/${match.match_id}`}
      className="block rounded-2xl border border-neutral-800 bg-neutral-900 p-5 shadow-lg transition hover:border-red-500/60"
    >
      <p className="mb-2 text-sm font-semibold text-red-400">
        {match.leagueName}
      </p>

      <div className="mb-4 flex items-center justify-between border-b border-neutral-800 pb-3">
        <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-red-400">
          <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
          Live · ~{match.delay}s delay
        </span>
        <span className="text-xs text-neutral-500">
          {match.spectators.toLocaleString()} watching
        </span>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-base font-bold text-white">
            {match.team_name_radiant || 'Radiant'}
          </p>
          <p className="mt-1 text-2xl font-bold text-green-400">
            {match.radiant_score}
          </p>
        </div>

        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-600">
          VS
        </p>

        <div className="text-right">
          <p className="text-base font-bold text-white">
            {match.team_name_dire || 'Dire'}
          </p>
          <p className="mt-1 text-2xl font-bold text-red-400">
            {match.dire_score}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex flex-wrap gap-3">
          {radiantPlayers.map((player) => {
            const hero = getHeroInfo(heroes, player.hero_id);

            return hero.image ? (
              <img
                key={player.account_id}
                src={hero.image}
                alt={hero.name}
                className="h-6 w-6 rounded-md border border-neutral-700 object-cover min-[1000px]:h-8 min-[1000px]:w-8"
              />
            ) : (
              <div
                key={player.account_id}
                className="flex h-6 w-6 items-center justify-center rounded-md border border-neutral-700 bg-neutral-800 text-[8px] text-neutral-500 min-[1000px]:h-8 min-[1000px]:w-8"
              >
                ?
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-3">
          {direPlayers.map((player) => {
            const hero = getHeroInfo(heroes, player.hero_id);

            return hero.image ? (
              <img
                key={player.account_id}
                src={hero.image}
                alt={hero.name}
                className="h-6 w-6 rounded-md border border-neutral-700 object-cover min-[1000px]:h-8 min-[1000px]:w-8"
              />
            ) : (
              <div
                key={player.account_id}
                className="flex h-6 w-6 items-center justify-center rounded-md border border-neutral-700 bg-neutral-800 text-[8px] text-neutral-500 min-[1000px]:h-8 min-[1000px]:w-8"
              >
                ?
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-neutral-800 pt-3 text-sm text-neutral-400">
        <span>{formatDuration(match.game_time)}</span>
        <span className="text-amber-300">
          {formatGoldLead(match.radiant_lead)}
        </span>
      </div>
    </Link>
  );
}
