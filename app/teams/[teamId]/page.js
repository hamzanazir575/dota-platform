import Link from 'next/link';
import { notFound } from 'next/navigation';

async function getTeam(teamId) {
  const response = await fetch(`https://api.opendota.com/api/teams/${teamId}`);

  if (!response.ok) {
    notFound();
  }

  const data = await response.json();

  if (!data || !data.team_id) {
    notFound();
  }

  return data;
}

async function getTeamRoster(teamId) {
  const response = await fetch(
    `https://api.opendota.com/api/teams/${teamId}/players`,
  );

  if (!response.ok) {
    return [];
  }

  const players = await response.json();

  return players.filter((player) => player.is_current_team_member);
}

async function getTeamMatches(teamId) {
  const response = await fetch(
    `https://api.opendota.com/api/teams/${teamId}/matches`,
  );

  if (!response.ok) {
    return [];
  }

  return response.json();
}

function formatDuration(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes}:${String(remainingSeconds).padStart(2, '0')}`;
}

function formatDate(timestamp) {
  return new Date(timestamp * 1000).toLocaleDateString();
}

export default async function TeamPage({ params }) {
  const { teamId } = await params;

  const [team, roster, matches] = await Promise.all([
    getTeam(teamId),
    getTeamRoster(teamId),
    getTeamMatches(teamId),
  ]);

  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-12 text-white sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
            Dota 2 Platform
          </p>

          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Team Profile</h1>

          <p className="mt-3 text-neutral-400">
            Team information, competitive record, roster, and recent matches.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl">
          <div className="border-b border-neutral-800 bg-gradient-to-r from-neutral-900 via-neutral-900 to-red-950/30 p-6 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-800 p-4 shadow-xl">
                {team.logo_url ? (
                  <img
                    src={team.logo_url}
                    alt={team.name || 'Team logo'}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <span className="text-sm text-neutral-500">No logo</span>
                )}
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-3xl font-bold sm:text-4xl">
                    {team.name || 'Unnamed Team'}
                  </h2>

                  {team.tag && (
                    <span className="rounded-md border border-neutral-700 bg-neutral-800 px-3 py-1 text-sm font-semibold text-neutral-400">
                      {team.tag}
                    </span>
                  )}
                </div>

                <p className="mt-3 text-sm text-neutral-500">
                  Team ID: {team.team_id}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-px bg-neutral-800 sm:grid-cols-3">
            <div className="bg-neutral-900 p-6 sm:p-8">
              <p className="text-sm font-medium uppercase tracking-wider text-neutral-500">
                Rating
              </p>

              <p className="mt-2 text-3xl font-bold text-red-400">
                {Math.round(team.rating ?? 0)}
              </p>
            </div>

            <div className="bg-neutral-900 p-6 sm:p-8">
              <p className="text-sm font-medium uppercase tracking-wider text-neutral-500">
                Wins
              </p>

              <p className="mt-2 text-3xl font-bold text-green-400">
                {team.wins ?? 0}
              </p>
            </div>

            <div className="bg-neutral-900 p-6 sm:p-8">
              <p className="text-sm font-medium uppercase tracking-wider text-neutral-500">
                Losses
              </p>

              <p className="mt-2 text-3xl font-bold text-red-400">
                {team.losses ?? 0}
              </p>
            </div>
          </div>
        </div>

        <section className="mt-10">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Current Roster</h2>

              <p className="mt-1 text-sm text-neutral-500">
                Players currently listed on the team.
              </p>
            </div>

            <span className="rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-sm text-neutral-400">
              {roster.length} players
            </span>
          </div>

          {roster.length === 0 ? (
            <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 text-neutral-400">
              No current roster information available.
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {roster.map((player) => {
                const winRate =
                  player.games_played > 0
                    ? Math.round((player.wins / player.games_played) * 100)
                    : 0;

                return (
                  <Link
                    key={player.account_id}
                    href={`/players/${player.account_id}`}
                    className="group rounded-xl border border-neutral-800 bg-neutral-900 p-5 transition hover:-translate-y-1 hover:border-red-500"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-bold group-hover:text-red-400">
                          {player.name || 'Unknown Player'}
                        </h3>

                        <p className="mt-1 text-sm text-neutral-500">
                          Account ID: {player.account_id}
                        </p>
                      </div>

                      <span className="rounded-md bg-red-950/40 px-2 py-1 text-xs font-semibold text-red-400">
                        Current
                      </span>
                    </div>

                    <div className="mt-5 grid grid-cols-3 gap-3">
                      <div className="rounded-lg bg-neutral-800 p-3">
                        <p className="text-xs uppercase tracking-wide text-neutral-500">
                          Games
                        </p>

                        <p className="mt-1 font-semibold">
                          {player.games_played ?? 0}
                        </p>
                      </div>

                      <div className="rounded-lg bg-neutral-800 p-3">
                        <p className="text-xs uppercase tracking-wide text-neutral-500">
                          Wins
                        </p>

                        <p className="mt-1 font-semibold text-green-400">
                          {player.wins ?? 0}
                        </p>
                      </div>

                      <div className="rounded-lg bg-neutral-800 p-3">
                        <p className="text-xs uppercase tracking-wide text-neutral-500">
                          Win Rate
                        </p>

                        <p className="mt-1 font-semibold text-red-400">
                          {winRate}%
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-sm font-medium text-neutral-500 group-hover:text-red-400">
                      View Player Profile →
                    </p>
                  </Link>
                );
              })}
            </div>
          )}
        </section>

        <section className="mt-10">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">Recent Matches</h2>

            <p className="mt-1 text-sm text-neutral-500">
              Recent competitive matches played by this team.
            </p>
          </div>

          {matches.length === 0 ? (
            <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 text-neutral-400">
              No recent matches available.
            </div>
          ) : (
            <div className="space-y-4">
              {matches.slice(0, 10).map((match) => {
                const teamWon = match.radiant
                  ? match.radiant_win
                  : !match.radiant_win;

                const opponent = match.opposing_team_name;

                const teamScore = match.radiant
                  ? match.radiant_score
                  : match.dire_score;

                const opponentScore = match.radiant
                  ? match.dire_score
                  : match.radiant_score;

                return (
                  <div
                    key={match.match_id}
                    className="rounded-xl border border-neutral-800 bg-neutral-900 p-5 transition hover:border-neutral-700"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm font-semibold text-red-400">
                          {match.league_name || 'Unknown League'}
                        </p>

                        <p className="mt-1 text-xs text-neutral-500">
                          {formatDate(match.start_time)} · Match{' '}
                          {match.match_id}
                        </p>
                      </div>

                      <span
                        className={`w-fit rounded-md px-3 py-1 text-sm font-semibold ${
                          teamWon
                            ? 'bg-green-950/50 text-green-400'
                            : 'bg-red-950/50 text-red-400'
                        }`}
                      >
                        {teamWon ? 'Victory' : 'Defeat'}
                      </span>
                    </div>

                    <div className="mt-5 grid items-center gap-4 sm:grid-cols-[1fr_auto_1fr]">
                      <div className="text-center sm:text-right">
                        <p className="font-semibold text-white">{team.name}</p>

                        <p className="mt-1 text-3xl font-bold">{teamScore}</p>
                      </div>

                      <div className="text-center text-sm font-semibold text-neutral-600">
                        VS
                      </div>

                      <div className="text-center sm:text-left">
                        <p className="font-semibold text-neutral-400">
                          {opponent || 'Unknown opponent'}
                        </p>

                        <p className="mt-1 text-3xl font-bold text-neutral-400">
                          {opponentScore}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 border-t border-neutral-800 pt-4 text-sm text-neutral-500">
                      Duration: {formatDuration(match.duration)}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
