import Image from 'next/image';
import Link from 'next/link';

const IMAGE_BASE = 'https://cdn.cloudflare.steamstatic.com';

const PHASES = [
  {
    key: 'start_game',
    keys: ['start_game', 'start_game_items'],
    title: 'Starting Items',
    timing: 'Before the game starts',
  },
  {
    key: 'early_game',
    keys: ['early_game', 'early_game_items'],
    title: 'Early Game',
    timing: '0–10 minutes',
  },
  {
    key: 'mid_game',
    keys: ['mid_game', 'mid_game_items'],
    title: 'Mid Game',
    timing: '10–25 minutes',
  },
  {
    key: 'late_game',
    keys: ['late_game', 'late_game_items'],
    title: 'Late Game',
    timing: '25+ minutes',
  },
];

function getRawEntries(phaseData) {
  if (Array.isArray(phaseData)) {
    return phaseData.map((entry) => {
      const embeddedItem =
        entry?.item && typeof entry.item === 'object' ? entry.item : null;

      const rawKey =
        entry?.key ??
        entry?.item_key ??
        entry?.item_name ??
        (typeof entry?.item === 'string' || typeof entry?.item === 'number'
          ? entry.item
          : null) ??
        embeddedItem?.key ??
        embeddedItem?.name ??
        embeddedItem?.id ??
        embeddedItem?.dname ??
        entry?.name;

      return {
        rawKey,
        embeddedItem,
        purchases: Number(
          entry?.purchases ?? entry?.count ?? entry?.value ?? 0,
        ),
      };
    });
  }

  if (!phaseData || typeof phaseData !== 'object') {
    return [];
  }

  return Object.entries(phaseData).map(([rawKey, value]) => ({
    rawKey,
    embeddedItem:
      value && typeof value === 'object'
        ? value.item && typeof value.item === 'object'
          ? value.item
          : value.dname
            ? value
            : null
        : null,
    purchases: Number(
      value && typeof value === 'object'
        ? (value.purchases ?? value.count ?? value.value ?? 0)
        : value,
    ),
  }));
}

function getPhaseItems(
  popularity,
  phase,
  itemConstants,
  itemsById,
  itemsByName,
) {
  const phaseData =
    phase.keys
      .map((key) => popularity?.[key])
      .find(
        (value) =>
          value &&
          (Array.isArray(value)
            ? value.length > 0
            : Object.keys(value).length > 0),
      ) ?? {};

  return getRawEntries(phaseData)
    .map((entry) => {
      const rawKey = String(entry.rawKey ?? '');

      let resolved = itemConstants[rawKey]
        ? { key: rawKey, item: itemConstants[rawKey] }
        : itemsById.get(rawKey);

      if (!resolved) {
        const itemName =
          entry.embeddedItem?.dname ??
          entry.embeddedItem?.descriptive_name ??
          entry.embeddedItem?.name ??
          rawKey;

        resolved = itemsByName.get(String(itemName).toLowerCase());
      }

      if (
        !resolved ||
        !resolved.item?.dname ||
        !Number.isFinite(entry.purchases) ||
        entry.purchases <= 0
      ) {
        return null;
      }

      return {
        ...resolved,
        purchases: entry.purchases,
      };
    })
    .filter(Boolean)
    .sort((a, b) => b.purchases - a.purchases)
    .slice(0, 8);
}

export default function HeroBuilds({ popularity, itemConstants }) {
  const itemEntries = Object.entries(itemConstants ?? {});

  const itemsById = new Map(
    itemEntries
      .filter(([, item]) => item?.id != null)
      .map(([key, item]) => [String(item.id), { key, item }]),
  );

  const itemsByName = new Map(
    itemEntries
      .filter(([, item]) => item?.dname)
      .map(([key, item]) => [item.dname.toLowerCase(), { key, item }]),
  );

  const builds = PHASES.map((phase) => ({
    ...phase,
    items: getPhaseItems(
      popularity,
      phase,
      itemConstants ?? {},
      itemsById,
      itemsByName,
    ),
  }));

  const hasAnyItems = builds.some((phase) => phase.items.length > 0);

  return (
    <section className="mt-12">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-red-400">
          Item Guide
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white">
          Popular Hero Builds
        </h2>

        <p className="mt-2 text-neutral-400">
          Explore the items commonly purchased for this hero at different stages
          of a match.
        </p>
      </div>

      {!hasAnyItems ? (
        <p className="mt-6 rounded-xl border border-neutral-800 bg-neutral-900 p-5 text-neutral-400">
          Item build data is currently unavailable for this hero. Please try
          again later.
        </p>
      ) : (
        <div className="mt-6 grid items-start gap-6 md:grid-cols-2">
          {builds.map((phase) => (
            <article
              key={phase.key}
              className="self-start rounded-2xl border border-neutral-800 bg-neutral-900 p-5"
            >
              <div>
                <h3 className="text-xl font-bold text-white">{phase.title}</h3>

                <p className="mt-1 text-sm text-neutral-400">{phase.timing}</p>
              </div>

              {phase.items.length > 0 ? (
                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {phase.items.map(({ key, item, purchases }) => (
                    <Link
                      key={key}
                      href={`/items/${key}`}
                      title={`View ${item.dname}`}
                      className="flex min-w-0 items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-950 p-3 transition hover:border-red-500"
                    >
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-neutral-800">
                        {item.img ? (
                          <Image
                            src={`${IMAGE_BASE}${item.img}`}
                            alt={item.dname}
                            width={88}
                            height={64}
                            className="max-h-12 max-w-12 object-contain"
                          />
                        ) : (
                          <span className="text-xs text-neutral-500">
                            No image
                          </span>
                        )}
                      </div>

                      <div className="min-w-0">
                        <p className="wrap-break-word text-sm font-semibold text-white">
                          {item.dname}
                        </p>

                        {Number(item.cost) > 0 && (
                          <p className="mt-1 text-xs text-amber-200">
                            {Number(item.cost).toLocaleString()} gold
                          </p>
                        )}

                        <p className="mt-1 text-xs text-neutral-500">
                          {purchases.toLocaleString()} purchases
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="mt-5 text-sm text-neutral-500">
                  No purchase data is available for this stage.
                </p>
              )}
            </article>
          ))}
        </div>
      )}

      <p className="mt-4 text-xs leading-5 text-neutral-500">
        Item popularity is based on OpenDota purchase data from parsed matches.
        Popularity does not guarantee that an item is the best choice for every
        game.
      </p>
    </section>
  );
}
