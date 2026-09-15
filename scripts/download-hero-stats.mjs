import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_PATH = path.join(__dirname, '..', 'app', '_lib', 'hero-stats.js');

const API_URL = 'https://api.opendota.com/api/heroStats';

const attributeNames = {
  str: 'Strength',
  agi: 'Agility',
  int: 'Intelligence',
  uni: 'Universal',
};

async function downloadHeroStats() {
  console.log('Getting current hero stats from OpenDota...\n');

  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`OpenDota request failed: ${response.status}`);
  }

  const heroes = await response.json();

  const heroStats = {};

  for (const hero of heroes) {
    const attackMin = hero.base_attack_min ?? 0;
    const attackMax = hero.base_attack_max ?? 0;

    heroStats[hero.localized_name] = {
      primaryAttribute: attributeNames[hero.primary_attr] ?? hero.primary_attr,

      attackType: hero.attack_type,

      roles: hero.roles,

      attributes: {
        strength: hero.base_str,
        strengthGain: hero.str_gain,

        agility: hero.base_agi,
        agilityGain: hero.agi_gain,

        intelligence: hero.base_int,
        intelligenceGain: hero.int_gain,
      },

      stats: {
        attackDamage: `${attackMin}–${attackMax}`,
        attackRate: hero.attack_rate,
        armor: hero.base_armor,
        magicResistance: hero.base_mr,
        attackRange: hero.attack_range,
        projectileSpeed: hero.projectile_speed,
        movementSpeed: hero.move_speed,
        turnRate: hero.turn_rate,
      },

      base: {
        health: hero.base_health,
        healthRegen: hero.base_health_regen,
        mana: hero.base_mana,
        manaRegen: hero.base_mana_regen,
      },
    };
  }

  const fileContent = `export const heroStats = ${JSON.stringify(
    heroStats,
    null,
    2,
  )};\n`;

  await fs.writeFile(OUTPUT_PATH, fileContent);

  console.log('Hero stats generated successfully.');
  console.log(`Data saved to: ${OUTPUT_PATH}`);
  console.log(`Heroes processed: ${heroes.length}`);
}

downloadHeroStats().catch((error) => {
  console.error('Something went wrong:');
  console.error(error);
  process.exit(1);
});
