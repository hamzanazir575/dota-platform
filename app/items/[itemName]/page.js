import { notFound } from 'next/navigation';

async function getItems() {
  const response = await fetch('https://api.opendota.com/api/constants/items');

  if (!response.ok) {
    return {};
  }

  return response.json();
}

export default async function ItemPage({ params }) {
  const { itemName } = await params;

  const items = await getItems();
  const item = items[itemName];

  if (!item) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-12 text-white sm:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl">
          <div className="flex h-56 items-center justify-center border-b border-neutral-800 bg-neutral-950">
            {item.img ? (
              <img
                src={`https://cdn.cloudflare.steamstatic.com${item.img}`}
                alt={item.dname}
                className="h-32 w-auto object-contain"
              />
            ) : (
              <span className="text-neutral-500">No image</span>
            )}
          </div>

          <div className="p-6 sm:p-8">
            <div className="flex flex-col gap-4 border-b border-neutral-800 pb-6 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
                  Dota 2 Item
                </p>

                <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
                  {item.dname || 'Unknown Item'}
                </h1>

                {item.notes && (
                  <p className="mt-3 max-w-2xl text-neutral-400">
                    {item.notes}
                  </p>
                )}
              </div>

              {item.qual && (
                <span className="w-fit shrink-0 rounded-md bg-neutral-800 px-3 py-1 text-sm capitalize text-neutral-300">
                  {item.qual}
                </span>
              )}
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                <p className="text-xs uppercase tracking-wide text-neutral-500">
                  Cost
                </p>
                <p className="mt-2 text-xl font-bold text-amber-200">
                  {item.cost ?? 0}g
                </p>
              </div>

              <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                <p className="text-xs uppercase tracking-wide text-neutral-500">
                  Mana Cost
                </p>
                <p className="mt-2 text-xl font-bold text-blue-400">
                  {item.mc ?? 0}
                </p>
              </div>

              <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
                <p className="text-xs uppercase tracking-wide text-neutral-500">
                  Cooldown
                </p>
                <p className="mt-2 text-xl font-bold text-neutral-300">
                  {item.cd ?? 0}s
                </p>
              </div>
            </div>

            {item.abilities?.length > 0 && (
              <section className="mt-8">
                <h2 className="text-xl font-bold">Item Details</h2>

                <div className="mt-4 space-y-4">
                  {item.abilities.map((ability, index) => (
                    <div
                      key={index}
                      className="rounded-xl border border-neutral-800 bg-neutral-950 p-5"
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold text-white">
                          {ability.title}
                        </h3>

                        {ability.type && (
                          <span className="rounded bg-neutral-800 px-2 py-1 text-xs uppercase tracking-wide text-neutral-500">
                            {ability.type}
                          </span>
                        )}
                      </div>

                      {ability.description && (
                        <p className="mt-3 whitespace-pre-line text-sm leading-6 text-neutral-300">
                          {ability.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {item.behavior && (
              <section className="mt-8">
                <h2 className="text-xl font-bold">Behavior</h2>

                <p className="mt-3 text-neutral-300">
                  {Array.isArray(item.behavior)
                    ? item.behavior.join(', ')
                    : item.behavior}
                </p>
              </section>
            )}

            {item.charges && (
              <section className="mt-8">
                <h2 className="text-xl font-bold">Charges</h2>

                <p className="mt-3 text-neutral-300">{item.charges}</p>
              </section>
            )}

            {item.hint?.length > 0 && (
              <section className="mt-8">
                <h2 className="text-xl font-bold">Tips</h2>

                <ul className="mt-3 space-y-2 text-neutral-300">
                  {item.hint.map((tip, index) => (
                    <li
                      key={index}
                      className="rounded-lg border border-neutral-800 bg-neutral-950 p-3"
                    >
                      {tip}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {item.components?.length > 0 && (
              <section className="mt-8">
                <h2 className="text-xl font-bold">Built From</h2>

                <div className="mt-3 flex flex-wrap gap-2">
                  {item.components.map((componentName) => (
                    <span
                      key={componentName}
                      className="rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-300"
                    >
                      {items[componentName]?.dname || componentName}
                    </span>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
