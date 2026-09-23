import TeamsList from '../_components/TeamsList';

export default async function TeamsPage() {
  const response = await fetch('https://api.opendota.com/api/teams');
  const teams = await response.json();

  return (
    <main className="min-h-screen bg-neutral-950 px-8 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold">Dota 2 Teams</h1>
        <p className="mt-4 max-w-2xl text-neutral-400">
          Explore professional Dota 2 teams, their rosters, records, and
          matches.
        </p>

        <TeamsList teams={teams} />
      </div>
    </main>
  );
}
