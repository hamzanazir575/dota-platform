import StatCard from './StatCard';
import StatGroup from './StatGroup';

export default function HeroDetails({ stats }) {
  if (!stats.attributes || !stats.stats || !stats.base) {
    return null;
  }

  const attributes = [
    {
      name: 'Strength',
      value: stats.attributes.strength,
      growth: stats.attributes.strengthGain,
    },

    {
      name: 'Agility',
      value: stats.attributes.agility,
      growth: stats.attributes.agilityGain,
    },

    {
      name: 'Intelligence',
      value: stats.attributes.intelligence,
      growth: stats.attributes.intelligenceGain,
    },
  ];

  const combatStats = [
    {
      name: 'Attack Damage',
      value: stats.stats.attackDamage,
    },
    {
      name: 'Base Attack Time',
      value: `${stats.stats.attackRate}s`,
    },
    {
      name: 'Armor',
      value: stats.stats.armor,
    },
    {
      name: 'Magic Resistance',
      value: `${stats.stats.magicResistance}%`,
    },
  ];

  const mobilityStats = [
    {
      name: 'Movement Speed',
      value: stats.stats.movementSpeed,
    },
    {
      name: 'Attack Range',
      value: stats.stats.attackRange,
    },
    {
      name: 'Projectile Speed',
      value: stats.stats.projectileSpeed,
    },
    {
      name: 'Turn Rate',
      value: stats.stats.turnRate ?? 'N/A',
    },
  ];

  const healthManaStats = [
    {
      name: 'Base Health',
      value: stats.base.health,
    },
    {
      name: 'Health Regeneration',
      value: `+${stats.base.healthRegen} / sec`,
    },
    {
      name: 'Base Mana',
      value: stats.base.mana,
    },
    {
      name: 'Mana Regeneration',
      value: `+${stats.base.manaRegen} / sec`,
    },
  ];

  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold">Detailed Hero Stats</h2>

      <h3 className="mt-10 text-2xl font-semibold">Attributes</h3>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {attributes.map((attribute) => (
          <StatCard
            key={attribute.name}
            label={attribute.name}
            value={attribute.value}
            detail={`+${attribute.growth} per level`}
          />
        ))}
      </div>

      <StatGroup title="Combat Stats" stats={combatStats} />
      <StatGroup title="Mobility Stats" stats={mobilityStats} />
      <StatGroup title="Health & Mana" stats={healthManaStats} />
    </section>
  );
}
