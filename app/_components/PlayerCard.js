export default function PlayerCard({ player }) {
  return (
    <div className="my-8 cursor-pointer overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 shadow-lg transition hover:-translate-y-1 hover:border-red-500">
      <div className="flex h-40 items-center justify-center bg-neutral-800">
        {player.avatarfull ? (
          <img
            src={player.avatarfull}
            alt={player.personaname}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-neutral-500">No photo</span>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold">{player.personaname}</h3>
        <p className="mt-2 text-sm text-red-400">
          {player.team_name || 'Free agent'}
        </p>
      </div>
    </div>
  );
}
