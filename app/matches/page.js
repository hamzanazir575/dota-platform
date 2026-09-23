export default async function MatchesPage() {
  const response = await fetch('https://api.opendota.com/api/proMatches');

  if (!response.ok) {
    throw new Error('Failed to load matches');
  }

  const matches = await response.json();

  function formatDuration(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes}:${String(remainingSeconds).padStart(2, '0')}`;
  }

  function formatDate(timestamp) {
    return new Date(timestamp * 1000).toLocaleDateString();
  }

  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-12 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
            Dota 2 Platform
          </p>

          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Dota 2 Matches
          </h1>

          <p className="mt-3 max-w-2xl text-neutral-400">
            Follow recent professional matches, results, and match details.
          </p>
        </div>

        <section>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Recent Matches</h2>

            <span className="text-sm text-neutral-500">
              {matches.length} matches
            </span>
          </div>

          <div className="space-y-4">
            {matches.map((match) => {
              const winner = match.radiant_win
                ? 'Radiant Victory'
                : 'Dire Victory';

              return (
                <div
                  key={match.match_id}
                  className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5 shadow-lg transition hover:border-red-500/60 sm:p-6"
                >
                  <div className="mb-5 flex flex-col gap-2 border-b border-neutral-800 pb-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-red-400">
                        {match.league_name || 'Unknown League'}
                      </p>

                      <p className="mt-1 text-xs text-neutral-500">
                        Match ID: {match.match_id}
                      </p>
                    </div>

                    <p className="text-sm text-neutral-500">
                      {formatDate(match.start_time)}
                    </p>
                  </div>

                  <div className="grid items-center gap-6 sm:grid-cols-[1fr_auto_1fr]">
                    <div
                      className={`text-center sm:text-right ${
                        match.radiant_win ? 'text-white' : 'text-neutral-400'
                      }`}
                    >
                      <p className="text-lg font-bold">
                        {match.radiant_name || 'Radiant'}
                      </p>

                      <p
                        className={`mt-2 text-3xl font-bold ${
                          match.radiant_win
                            ? 'text-green-400'
                            : 'text-neutral-300'
                        }`}
                      >
                        {match.radiant_score}
                      </p>
                    </div>

                    <div className="text-center">
                      <p className="text-sm font-semibold uppercase tracking-widest text-neutral-600">
                        VS
                      </p>

                      <p className="mt-2 text-sm text-red-400">{winner}</p>
                    </div>

                    <div
                      className={`text-center sm:text-left ${
                        !match.radiant_win ? 'text-white' : 'text-neutral-400'
                      }`}
                    >
                      <p className="text-lg font-bold">
                        {match.dire_name || 'Dire'}
                      </p>

                      <p
                        className={`mt-2 text-3xl font-bold ${
                          !match.radiant_win
                            ? 'text-green-400'
                            : 'text-neutral-300'
                        }`}
                      >
                        {match.dire_score}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-2 border-t border-neutral-800 pt-4 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
                    <span>Duration: {formatDuration(match.duration)}</span>

                    <span>Series ID: {match.series_id}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
