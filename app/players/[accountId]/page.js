import { notFound } from 'next/navigation';

export default async function PlayerPage({ params }) {
  const { accountId } = await params;

  const response = await fetch(
    `https://api.opendota.com/api/players/${accountId}`,
  );

  const data = await response.json();

  if (!data.profile) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-12 text-white sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
            Dota 2 Platform
          </p>

          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Player Profile
          </h1>

          <p className="mt-3 text-neutral-400">
            Player information, rank, and estimated MMR.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl">
          <div className="border-b border-neutral-800 bg-gradient-to-r from-neutral-900 via-neutral-900 to-red-950/30 p-6 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="h-28 w-28 shrink-0 overflow-hidden rounded-full border-4 border-neutral-700 bg-neutral-800 shadow-xl">
                {data.profile.avatarfull ? (
                  <img
                    src={data.profile.avatarfull}
                    alt={data.profile.personaname || 'Player avatar'}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-sm text-neutral-500">
                    No avatar
                  </div>
                )}
              </div>

              <div>
                <h2 className="text-3xl font-bold sm:text-4xl">
                  {data.profile.personaname || 'Unknown Player'}
                </h2>

                <p className="mt-2 text-red-400">
                  {data.profile.team_name || 'Free agent'}
                </p>

                <p className="mt-2 text-sm text-neutral-500">
                  Account ID: {data.profile.account_id}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-px bg-neutral-800 sm:grid-cols-2">
            <div className="bg-neutral-900 p-6 sm:p-8">
              <p className="text-sm font-medium uppercase tracking-wider text-neutral-500">
                Rank Tier
              </p>

              <p className="mt-2 text-3xl font-bold text-white">
                {data.rank_tier ?? 'Unknown'}
              </p>
            </div>

            <div className="bg-neutral-900 p-6 sm:p-8">
              <p className="text-sm font-medium uppercase tracking-wider text-neutral-500">
                Estimated MMR
              </p>

              <p className="mt-2 text-3xl font-bold text-red-400">
                {data.mmr_estimate?.estimate ?? 'Unknown'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
