import TournamentsList from '../_components/TournamentsList';

export default async function TournamentsPage() {
  let leagues = [];
  let hasError = false;

  try {
    const response = await fetch('https://api.opendota.com/api/leagues');

    if (!response.ok) {
      throw new Error(`OpenDota returned status ${response.status}`);
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error('Unexpected tournament data received from OpenDota');
    }

    if (
      !data.every(
        (league) =>
          typeof league === 'object' &&
          league !== null &&
          !Array.isArray(league),
      )
    ) {
      throw new Error('Unexpected tournament entry received from OpenDota');
    }

    leagues = data;
  } catch (error) {
    console.error('Failed to load tournaments', error);
    hasError = true;
  }

  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-12 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
            Dota 2 Platform
          </p>

          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Dota 2 Tournaments
          </h1>

          <p className="mt-3 max-w-2xl text-neutral-400">
            Explore professional Dota 2 tournaments, their participating teams,
            and competitive matches.
          </p>
        </div>
        {hasError ? (
          <p>
            Tournament data is temporarily unavailable. Please try again later.
          </p>
        ) : leagues.length === 0 ? (
          <p>No tournament data is currently available.</p>
        ) : (
          <TournamentsList leagues={leagues} />
        )}
      </div>
    </main>
  );
}
