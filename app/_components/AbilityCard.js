import Image from 'next/image';

const HIDDEN_ATTRIBUTE_KEYS = new Set([
  'tick_rate',
  'aura_tick_interval',
  'vision_cone',
]);

function hasUsefulValue(value) {
  const values = Array.isArray(value) ? value : [value];

  return values.some(
    (item) =>
      item !== null &&
      item !== undefined &&
      String(item).trim() !== '' &&
      String(item).trim() !== '0',
  );
}

export default function AbilityCard({ ability }) {
  const visibleAttributes = (ability.attributes ?? []).filter(
    (attribute) =>
      attribute.header &&
      !HIDDEN_ATTRIBUTE_KEYS.has(attribute.key) &&
      hasUsefulValue(attribute.value),
  );

  return (
    <article className="mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 p-5 shadow-lg">
      <div className="flex flex-wrap items-center justify-center gap-3">
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

      <div className="mt-5 space-y-6">
        <div className="flex justify-center">
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

          {visibleAttributes.length > 0 && (
            <div className="mt-5 rounded-xl border border-neutral-800 bg-neutral-950/70 p-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-red-400">
                Ability Details
              </h4>

              <dl className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {visibleAttributes.map((attribute) => (
                  <div
                    key={attribute.key ?? attribute.header}
                    className="rounded-lg bg-neutral-900 p-3"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                      {attribute.header.replace(/:$/, '')}
                    </dt>

                    <dd className="mt-1 text-base font-semibold text-white">
                      {Array.isArray(attribute.value)
                        ? attribute.value.join(' / ')
                        : attribute.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

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
