import Link from 'next/link';
import ItemBuild from './ItemBuild';

export default function MatchPlayerRow({ player, team, hero, items }) {
  function formatNumber(value) {
    return new Intl.NumberFormat('en-US').format(value ?? 0);
  }

  return (
    <Link
      href={player.account_id ? `/players/${player.account_id}` : '#'}
      className="grid grid-cols-[minmax(180px,1.5fr)_minmax(160px,1.2fr)_repeat(9,70px)] items-center gap-4 border-t border-neutral-800 px-4 py-4 transition hover:bg-neutral-800/50"
    >
      <div className="min-w-0">
        <p className="truncate font-semibold text-white">
          {player.name || 'Unknown Player'}
        </p>

        <p
          className={`mt-1 text-xs font-medium ${
            team === 'Radiant' ? 'text-green-400' : 'text-red-400'
          }`}
        >
          {team}
        </p>
      </div>

      <div className="flex min-w-0 items-center gap-3">
        <div className="h-10 w-16 shrink-0 overflow-hidden rounded-md bg-neutral-800">
          {hero.image ? (
            <img
              src={hero.image}
              alt={hero.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-[10px] text-neutral-600">
              No image
            </div>
          )}
        </div>

        <span className="truncate text-sm text-neutral-300">{hero.name}</span>
      </div>

      <Stat label="LVL" value={player.level ?? 0} className="text-orange-400" />

      <Stat label="K" value={player.kills ?? 0} className="text-green-400" />

      <Stat label="D" value={player.deaths ?? 0} className="text-red-400" />

      <Stat label="A" value={player.assists ?? 0} className="text-blue-400" />

      <Stat label="LH" value={player.last_hits ?? 0} className="text-white" />

      <Stat
        label="DN"
        value={player.denies ?? 0}
        className="text-neutral-300"
      />

      <Stat
        label="GPM"
        value={player.gold_per_min ?? 0}
        className="text-yellow-400"
      />

      <Stat
        label="XPM"
        value={player.xp_per_min ?? 0}
        className="text-purple-400"
      />

      <Stat
        label="NET"
        value={formatNumber(player.net_worth)}
        className="text-green-400"
      />
      <ItemBuild items={items} />
    </Link>
  );
}

function Stat({ label, value, className }) {
  return (
    <div className="text-center">
      <p className="text-xs uppercase tracking-wide text-neutral-600">
        {label}
      </p>

      <p className={`mt-1 font-semibold ${className}`}>{value}</p>
    </div>
  );
}
