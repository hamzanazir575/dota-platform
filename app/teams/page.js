import TeamsList from '../_components/TeamsList';

export default async function TeamsPage() {
  let teams = [];
  let hasError = false;

  try {
    const response = await fetch('https://api.opendota.com/api/teams');

    if (!response.ok) {
      throw new Error(`OpenDota returned status ${response.status}`);
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error('Unexpected team data received from OpenDota');
    }

    teams = data;
  } catch (error) {
    console.error('Failed to load teams:', error);
    hasError = true;
  }

  return (
    <main className="min-h-screen bg-neutral-950 px-8 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold">Dota 2 Teams</h1>
        <p className="mt-4 max-w-2xl text-neutral-400">
          Explore professional Dota 2 teams, their rosters, records, and
          matches.
        </p>

        {hasError ? (
          <p>Team data is temporarily unavailable. Please try again later.</p>
        ) : teams.length === 0 ? (
          <p>No team data is currently available</p>
        ) : (
          <TeamsList teams={teams} />
        )}
      </div>
    </main>
  );
}
