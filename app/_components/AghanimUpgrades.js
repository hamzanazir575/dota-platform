export default function AghanimUpgrades({ upgrades }) {
  const cards = [
    {
      key: 'scepter',
      title: "Aghanim's Scepter",
      upgrade: upgrades?.scepter,
      badgeClass: 'bg-cyan-400/10 text-cyan-300',
    },
    {
      key: 'shard',
      title: "Aghanim's Shard",
      upgrade: upgrades?.shard,
      badgeClass: 'bg-violet-400/10 text-violet-300',
    },
  ].filter(({ upgrade }) => upgrade?.description);

  if (cards.length === 0) {
    return null;
  }

  return (
    <section className="mt-12">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-red-400">
          Upgrade Guide
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white">
          Aghanim&apos;s Upgrades
        </h2>

        <p className="mt-2 text-neutral-400">
          See how Aghanim&apos;s Scepter and Shard change this hero&apos;s
          abilities.
        </p>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {cards.map(({ key, title, upgrade, badgeClass }) => (
          <article
            key={key}
            className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-lg"
          >
            <span
              className={`inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${badgeClass}`}
            >
              {title}
            </span>

            {upgrade.abilityName && (
              <p className="mt-4 text-sm text-neutral-400">
                {upgrade.grantsNewAbility ? 'New ability' : 'Related ability'}:{' '}
                <span className="font-semibold text-white">
                  {upgrade.abilityName}
                </span>
              </p>
            )}

            <p className="mt-4 whitespace-pre-line leading-7 text-neutral-300">
              {upgrade.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
