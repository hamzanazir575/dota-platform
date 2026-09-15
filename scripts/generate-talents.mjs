import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

import {
  heroes as heroesData,
  hero_abilities,
  abilities as abilityData,
} from 'dotaconstants';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const talentsFilePath = path.join(__dirname, '..', 'app', '_lib', 'talents.js');

function getTalentText(talentName) {
  const talent = abilityData[talentName];

  if (!talent) {
    return null;
  }

  return talent.dname || null;
}

async function generateTalents() {
  console.log('Generating hero talents...\n');

  const result = {};

  for (const hero of Object.values(heroesData)) {
    const heroAbilityData = hero_abilities[hero.name];

    if (!heroAbilityData || !Array.isArray(heroAbilityData.talents)) {
      console.log(`No talent data found for ${hero.localized_name}`);
      continue;
    }

    const heroTalents = {
      level10: [],
      level15: [],
      level20: [],
      level25: [],
    };

    for (const talent of heroAbilityData.talents) {
      const talentName = talent?.name;
      const tier = talent?.level;

      if (!talentName || !tier) {
        continue;
      }

      const text = getTalentText(talentName);

      if (!text) {
        console.log(
          `  Missing talent text for ${hero.localized_name}: ${talentName}`,
        );
        continue;
      }

      const talentData = {
        name: text,
        id: talentName,
      };

      if (tier === 1) {
        heroTalents.level10.push(talentData);
      } else if (tier === 2) {
        heroTalents.level15.push(talentData);
      } else if (tier === 3) {
        heroTalents.level20.push(talentData);
      } else if (tier === 4) {
        heroTalents.level25.push(talentData);
      }
    }

    const hasTalents = Object.values(heroTalents).some(
      (talents) => talents.length > 0,
    );

    if (hasTalents) {
      result[hero.localized_name] = heroTalents;
    }

    console.log(
      `  ${hero.localized_name}: ${Object.values(heroTalents).flat().length} talents`,
    );
  }

  const fileContent = `export const talents = ${JSON.stringify(
    result,
    null,
    2,
  )};\n`;

  await fs.writeFile(talentsFilePath, fileContent);

  console.log('\n-----------------------------------');
  console.log('Talents generated successfully.');
  console.log(`Data: ${talentsFilePath}`);
  console.log('-----------------------------------');
}

generateTalents().catch((error) => {
  console.error('\nSomething went wrong:');
  console.error(error);
  process.exit(1);
});
