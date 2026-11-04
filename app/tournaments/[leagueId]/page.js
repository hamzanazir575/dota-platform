import TeamCard from '@/app/_components/TeamCard';
import { notFound } from 'next/navigation';

async function getLeague(leagueId) {
  const response = await fetch(
    `https://api.opendota.com/api/leagues/${leagueId}`,
  );

  if (response.status === 404) {
    notFound();
  }

  if (!response.ok) {
    throw new Error(`OpenDota returned status ${response.status}`);
  }

  const text = await response.text();

  if (!text.trim()) {
    throw new Error('OpenDota returned an empty tournament response.');
  }

  let data;

  try {
    data = JSON.parse(text);
  } catch (error) {
    console.error('Failed to parse tournament data:', error);
    throw new Error('OpenDota returned an invalid tournament response.');
  }

  return data;
}

async function getLeagueTeams(leagueId) {
  const response = await fetch(
    `https://api.opendota.com/api/leagues/${leagueId}/teams`,
  );

  if (!response.ok) {
    console.error(`Failed to load tournament teams: HTTP ${response.status}`);
    return [];
  }

  const text = await response.text();

  if (!text.trim()) {
    console.error('OpenDota returned an empty teams response.');
    return [];
  }

  let teams;

  try {
    teams = JSON.parse(text);
  } catch (error) {
    console.error('Failed to parse tournament teams:', error);
    return [];
  }

  if (!Array.isArray(teams)) {
    console.error('Expected an array of tournament teams.');
    return [];
  }

  return teams;
}

export default async function TournamentPage({ params }) {
  const { leagueId } = await params;

  const [league, teams] = await Promise.all([
    getLeague(leagueId),
    getLeagueTeams(leagueId),
  ]);

  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-12 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <section className="rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl">
          <div className="bg-gradient-to-r from-neutral-900 via-neutral-900 to-red-950/30 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
              Dota 2 Tournament
            </p>

            <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
              {league.name || 'Unknown Tournament'}
            </h1>

            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <span className="rounded-md border border-neutral-700 bg-neutral-800 px-3 py-1.5 text-neutral-300">
                Tier: {league.tier || 'Unknown'}
              </span>

              <span className="rounded-md border border-neutral-700 bg-neutral-800 px-3 py-1.5 text-neutral-400">
                League ID: {league.leagueid}
              </span>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">Participating Teams</h2>

            <p className="mt-1 text-sm text-neutral-500">
              Teams associated with this tournament.
            </p>
          </div>

          {teams.length === 0 ? (
            <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 text-neutral-400">
              No team data available for this tournament.
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {teams.map((team) => (
                <TeamCard key={team.team_id} team={team} />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
