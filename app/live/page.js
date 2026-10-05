import LiveMatchCard from '../_components/LiveMatchCard';

// TEMPORARY — stand-in data so you can see LiveMatchCard render before
// a real pro match happens to be live. Delete this whole block, and the
// `displayMatches` fallback below, once tested against real live data.
// const FAKE_LIVE_MATCH = {
//   league_id: 17911,
//   leagueName: 'The International 2026',
//   game_time: 1530,
//   delay: 120,
//   spectators: 48213,
//   match_id: '9999999999',
//   team_name_radiant: 'Team Spirit',
//   team_name_dire: 'Team Falcons',
//   team_id_radiant: 7119388,
//   team_id_dire: 8599101,
//   radiant_lead: 4210,
//   radiant_score: 24,
//   dire_score: 18,
//   players: [
//     { account_id: 111111111, hero_id: 1, team_slot: 1, team: 0 },
//     { account_id: 111111112, hero_id: 2, team_slot: 2, team: 0 },
//     { account_id: 111111113, hero_id: 3, team_slot: 3, team: 0 },
//     { account_id: 111111114, hero_id: 4, team_slot: 4, team: 0 },
//     { account_id: 111111115, hero_id: 5, team_slot: 5, team: 0 },
//     { account_id: 222222221, hero_id: 6, team_slot: 1, team: 1 },
//     { account_id: 222222222, hero_id: 7, team_slot: 2, team: 1 },
//     { account_id: 222222223, hero_id: 8, team_slot: 3, team: 1 },
//     { account_id: 222222224, hero_id: 9, team_slot: 4, team: 1 },
//     { account_id: 222222225, hero_id: 10, team_slot: 5, team: 1 },
//   ],
// };

async function getLiveMatches() {
  const response = await fetch('https://api.opendota.com/api/live');

  if (!response.ok) {
    return [];
  }

  return response.json();
}

async function getLeagues() {
  const response = await fetch('https://api.opendota.com/api/leagues');

  if (!response.ok) {
    return [];
  }

  return response.json();
}

async function getHeroes() {
  const response = await fetch('https://api.opendota.com/api/constants/heroes');

  if (!response.ok) {
    return {};
  }

  return response.json();
}

export default async function LiveMatches() {
  const [liveMatches, leagues, heroes] = await Promise.all([
    getLiveMatches(),
    getLeagues(),
    getHeroes(),
  ]);

  const leagueNames = new Map(
    leagues.map((league) => [league.leagueid, league.name]),
  );

  const proLiveMatches = liveMatches
    .filter((match) => match.league_id !== 0)
    .map((match) => ({
      ...match,
      leagueName: leagueNames.get(match.league_id) || 'Unknown League',
    }));

  //   const displayMatches =
  //     proLiveMatches.length > 0 ? proLiveMatches : [FAKE_LIVE_MATCH];

  const displayMatches = proLiveMatches;

  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-12 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
            Dota 2 Platform
          </p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Live Matches</h1>
          <p className="mt-3 max-w-2xl text-neutral-400">
            Professional matches currently in progress.
          </p>
        </div>

        {displayMatches.length === 0 ? (
          <p className="mt-6 text-neutral-400">
            No professional matches are live right now — check back during a
            tournament.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayMatches.map((match) => (
              <LiveMatchCard
                key={match.match_id}
                match={match}
                heroes={heroes}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
