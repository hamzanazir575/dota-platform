import Link from 'next/link';

export default function TeamCard({ team }) {
  return (
    <Link
      href={`/teams/${team.team_id}`}
      className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 shadow-lg transition hover:-translate-y-1 hover:border-red-500 cursor-pointer
    "
    >
      <div className="flex h-32 items-center justify-center bg-neutral-800">
        {team.logo_url ? (
          <img
            src={team.logo_url}
            alt={team.name}
            className="h-full w-full object-contain p-4"
          />
        ) : (
          <span className="text-neutral-500">No logo</span>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold">{team.name || 'Unnamed Team'}</h3>
        <p className="mt-1 text-sm text-neutral-500">{team.tag}</p>

        <div className="mt-3 flex items-center justify-between text-sm">
          <span className="text-red-400">
            Rating: {Math.round(team.rating ?? 0)}
          </span>
          <span className="text-neutral-400">
            {team.wins ?? 0}W – {team.losses ?? 0}L
          </span>
        </div>
      </div>
    </Link>
  );
}
