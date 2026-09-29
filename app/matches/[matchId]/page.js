import { notFound } from 'next/navigation';
import { heroImages } from '@/app/_lib/hero-images';
import MatchPlayerRow from '@/app/_components/MatchPlayerRow';
import { formatDate, formatDuration } from '@/app/_lib/format';

async function getMatch(matchId) {
  const response = await fetch(
    `https://api.opendota.com/api/matches/${matchId}`,
  );

  if (!response.ok) {
    notFound();
  }

  const data = await response.json();

  if (!data || !data.match_id) {
    notFound();
  }

  return data;
}

async function getHeroes() {
  const response = await fetch('https://api.opendota.com/api/constants/heroes');

  if (!response.ok) {
    return {};
  }

  return response.json();
}

async function getItems() {
  const response = await fetch('https://api.opendota.com/api/constants/items');

  if (!response.ok) {
    return {};
  }

  return response.json();
}

async function getItemIds() {
  const response = await fetch(
    'https://api.opendota.com/api/constants/item_ids',
  );

  if (!response.ok) {
    return {};
  }

  return response.json();
}

export default async function MatchPage({ params }) {
  const { matchId } = await params;

  const [match, heroes, items, itemIds] = await Promise.all([
    getMatch(matchId),
    getHeroes(),
    getItems(),
    getItemIds(),
  ]);

  const radiantPlayers = match.players.filter(
    (player) => player.player_slot < 128,
  );

  const direPlayers = match.players.filter(
    (player) => player.player_slot >= 128,
  );

  function getHeroInfo(heroId) {
    const hero = heroes[String(heroId)];

    return {
      name: hero?.localized_name || 'Unknown Hero',
      image: heroImages[hero?.localized_name] || null,
    };
  }

  function getItemInfo(itemId) {
    if (!itemId) {
      return null;
    }

    const itemName = itemIds[String(itemId)];

    if (!itemName) {
      return null;
    }

    return items[itemName] ?? null;
  }

  const radiantWon = match.radiant_win;

  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-12 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
            Dota 2 Platform
          </p>

          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Match Details</h1>

          <p className="mt-3 text-neutral-400">Match #{match.match_id}</p>
        </div>

        <section className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl">
          <div className="border-b border-neutral-800 bg-gradient-to-r from-neutral-900 via-neutral-900 to-red-950/30 p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-red-400">
                  {match.league_name || 'Unknown League'}
                </p>

                <p className="mt-1 text-sm text-neutral-500">
                  Match ID: {match.match_id}
                </p>
              </div>

              <p className="text-sm text-neutral-500">
                {formatDate(match.start_time)}
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-10">
            <div className="grid items-center gap-8 sm:grid-cols-[1fr_auto_1fr]">
              <div
                className={`text-center sm:text-right ${
                  radiantWon ? 'text-white' : 'text-neutral-500'
                }`}
              >
                <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
                  Radiant
                </p>

                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                  {match.radiant_name || 'Radiant'}
                </h2>

                <p
                  className={`mt-4 text-5xl font-black ${
                    radiantWon ? 'text-green-400' : 'text-neutral-300'
                  }`}
                >
                  {match.radiant_score ?? 0}
                </p>
              </div>

              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-600">
                  VS
                </p>

                <div
                  className={`mt-3 inline-flex rounded-full px-4 py-2 text-sm font-bold ${
                    radiantWon
                      ? 'bg-green-950/50 text-green-400'
                      : 'bg-red-950/50 text-red-400'
                  }`}
                >
                  {radiantWon ? 'Radiant Victory' : 'Dire Victory'}
                </div>
              </div>

              <div
                className={`text-center sm:text-left ${
                  !radiantWon ? 'text-white' : 'text-neutral-500'
                }`}
              >
                <p className="text-sm font-semibold uppercase tracking-widest text-red-400">
                  Dire
                </p>

                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                  {match.dire_name || 'Dire'}
                </h2>

                <p
                  className={`mt-4 text-5xl font-black ${
                    !radiantWon ? 'text-green-400' : 'text-neutral-300'
                  }`}
                >
                  {match.dire_score ?? 0}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-px bg-neutral-800 sm:grid-cols-3">
            <div className="bg-neutral-900 p-6 text-center">
              <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                Duration
              </p>

              <p className="mt-2 text-xl font-bold">
                {formatDuration(match.duration)}
              </p>
            </div>

            <div className="bg-neutral-900 p-6 text-center">
              <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                Games Played
              </p>

              <p className="mt-2 text-xl font-bold">
                {match.game_mode ?? 'Unknown'}
              </p>
            </div>

            <div className="bg-neutral-900 p-6 text-center">
              <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                Series
              </p>

              <p className="mt-2 text-xl font-bold">
                {match.series_id ?? 'N/A'}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">Players</h2>

            <p className="mt-1 text-sm text-neutral-500">
              Full player performance from this match.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-neutral-800 bg-neutral-900 shadow-xl">
            <div className="min-w-[1100px]">
              <div className="grid grid-cols-[minmax(180px,1.5fr)_minmax(160px,1.2fr)_repeat(9,70px)] items-center gap-4 bg-neutral-950 px-4 py-4 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                <span>Player</span>
                <span>Hero</span>
                <span className="text-center">LVL</span>
                <span className="text-center">K</span>
                <span className="text-center">D</span>
                <span className="text-center">A</span>
                <span className="text-center">LH</span>
                <span className="text-center">DN</span>
                <span className="text-center">GPM</span>
                <span className="text-center">XPM</span>
                <span className="text-center">Net Worth</span>
              </div>

              <div className="bg-green-950/10 mb-4">
                <div className="border-b border-neutral-800 bg-green-950/20 px-4 py-3">
                  <p className="text-sm font-bold text-green-400">
                    Radiant — {match.radiant_name || 'Radiant'}
                  </p>
                </div>

                {radiantPlayers.map((player) => (
                  <MatchPlayerRow
                    key={player.account_id || player.player_slot}
                    player={player}
                    team="Radiant"
                    hero={getHeroInfo(player.hero_id)}
                    items={[
                      player.item_0,
                      player.item_1,
                      player.item_2,
                      player.item_3,
                      player.item_4,
                      player.item_5,
                    ].map(getItemInfo)}
                  />
                ))}
              </div>

              <div className="bg-red-950/10">
                <div className="border-b border-neutral-800 bg-red-950/20 px-4 py-3">
                  <p className="text-sm font-bold text-red-400">
                    Dire — {match.dire_name || 'Dire'}
                  </p>
                </div>

                {direPlayers.map((player) => (
                  <MatchPlayerRow
                    key={player.account_id || player.player_slot}
                    player={player}
                    team="Dire"
                    hero={getHeroInfo(player.hero_id)}
                    items={[
                      player.item_0,
                      player.item_1,
                      player.item_2,
                      player.item_3,
                      player.item_4,
                      player.item_5,
                    ].map(getItemInfo)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
