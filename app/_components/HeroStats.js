import Image from 'next/image';

export default function HeroStats({ stats }) {
  const attributeIcons = {
    Strength: '/images/attributes/hero_strength.png',
    Agility: '/images/attributes/hero_agility.png',
    Intelligence: '/images/attributes/hero_intelligence.png',
    Universal: '/images/attributes/hero_universal.png',
  };

  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold">Hero Overview</h2>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5 shadow-lg">
          <p className="text-sm uppercase tracking-wider text-neutral-400">
            Primary Attribute
          </p>

          <div className="mt-4 flex items-center gap-3">
            <Image
              src={attributeIcons[stats.primaryAttribute]}
              alt={stats.primaryAttribute}
              width={40}
              height={40}
            />

            <p className="text-2xl font-bold text-white">
              {stats.primaryAttribute}
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5 shadow-lg">
          <p className="text-sm uppercase tracking-wider text-neutral-400">
            Attack Type
          </p>

          <p className="mt-4 text-2xl font-bold text-white">
            {stats.attackType}
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5 shadow-lg">
          <p className="text-sm uppercase tracking-wider text-neutral-400">
            Roles
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {stats.roles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-neutral-700 bg-neutral-800 px-3 py-1.5 text-sm font-medium text-neutral-200"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
