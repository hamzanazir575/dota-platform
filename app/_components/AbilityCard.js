import Image from 'next/image';

export default function AbilityCard({ ability }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 p-5 shadow-lg">
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="text-xl font-bold text-white">{ability.name}</h3>

        {ability.isInnate && (
          <span className="rounded-full border border-neutral-700 bg-neutral-800 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-300">
            Innate
          </span>
        )}

        {ability.isUltimate && (
          <span className="rounded-full border border-neutral-700 bg-neutral-800 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-300">
            Ultimate
          </span>
        )}
      </div>

      <div className="mt-5 grid gap-6 md:grid-cols-[200px_1fr]">
        <div className="flex justify-center md:block">
          {ability.image ? (
            <Image
              src={ability.image}
              alt={ability.name}
              width={200}
              height={200}
              className="h-auto w-full max-w-[200px] rounded-xl object-cover"
            />
          ) : (
            <div className="flex aspect-square w-full max-w-[200px] items-center justify-center rounded-xl bg-neutral-800 text-sm text-neutral-500">
              Image unavailable
            </div>
          )}
        </div>

        <div className="space-y-4">
          <p className="leading-7 text-neutral-300">{ability.description}</p>

          {ability.manaCost && (
            <p className="text-sm text-neutral-400">
              <span className="font-semibold text-white">Mana Cost:</span>{' '}
              {ability.manaCost}
            </p>
          )}

          {ability.cooldown && (
            <p className="text-sm text-neutral-400">
              <span className="font-semibold text-white">Cooldown:</span>{' '}
              {ability.cooldown}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
