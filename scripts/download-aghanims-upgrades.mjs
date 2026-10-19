import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { aghs_desc, heroes as heroesData } from 'dotaconstants';
import { normalizeHeroName } from '../app/_lib/hero-name-overrides.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputPath = path.join(
  __dirname,
  '..',
  'app',
  '_lib',
  'aghanims-upgrades.js',
);

function cleanText(value) {
  if (typeof value !== 'string') {
    return '';
  }

  return value
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .trim();
}

function createUpgrade(isAvailable, abilityName, description, newAbility) {
  if (!isAvailable) {
    return null;
  }

  const cleanedDescription = cleanText(description);

  if (!cleanedDescription) {
    return null;
  }

  return {
    abilityName: cleanText(abilityName) || 'Ability Upgrade',
    description: cleanedDescription,
    grantsNewAbility: Boolean(newAbility),
  };
}

async function generateAghanimUpgrades() {
  console.log("Generating Aghanim's Scepter and Shard data...\n");

  if (!Array.isArray(aghs_desc)) {
    throw new Error(
      'The dotaconstants aghs_desc dataset was not found or is invalid.',
    );
  }

  const heroById = new Map(
    Object.values(heroesData).map((hero) => [Number(hero.id), hero]),
  );

  const result = {};
  let skippedHeroes = 0;

  for (const entry of aghs_desc) {
    const hero = heroById.get(Number(entry.hero_id));

    if (!hero?.localized_name) {
      console.warn(`Skipping unknown hero ID: ${entry.hero_id}`);
      skippedHeroes++;
      continue;
    }

    const heroName = normalizeHeroName(hero.localized_name);

    result[heroName] = {
      scepter: createUpgrade(
        entry.has_scepter,
        entry.scepter_skill_name,
        entry.scepter_desc,
        entry.scepter_new_skill,
      ),

      shard: createUpgrade(
        entry.has_shard,
        entry.shard_skill_name,
        entry.shard_desc,
        entry.shard_new_skill,
      ),
    };
  }

  if (Object.keys(result).length === 0) {
    throw new Error(
      'No hero upgrade data was generated. Check the source dataset.',
    );
  }

  const scepterCount = Object.values(result).filter(
    (hero) => hero.scepter !== null,
  ).length;

  const shardCount = Object.values(result).filter(
    (hero) => hero.shard !== null,
  ).length;

  const fileContent = `export const aghanimUpgrades = ${JSON.stringify(
    result,
    null,
    2,
  )};\n`;

  await fs.mkdir(path.dirname(outputPath), {
    recursive: true,
  });

  await fs.writeFile(outputPath, fileContent, 'utf8');

  console.log('Aghanim upgrades generated successfully!');
  console.log(`Heroes processed: ${Object.keys(result).length}`);
  console.log(`Scepter upgrades: ${scepterCount}`);
  console.log(`Shard upgrades: ${shardCount}`);
  console.log(`Heroes skipped: ${skippedHeroes}`);
  console.log(`Output file: ${outputPath}`);
}

generateAghanimUpgrades().catch((error) => {
  console.error('\nFailed to generate Aghanim upgrades:');
  console.error(error);
  process.exitCode = 1;
});
