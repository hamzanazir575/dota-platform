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

const abilitiesFilePath = path.join(
  __dirname,
  '..',
  'app',
  '_lib',
  'abilities.js',
);

const abilitiesImagesDirectory = path.join(
  __dirname,
  '..',
  'public',
  'images',
  'abilities',
);

const CDN_BASE_URL = 'https://cdn.cloudflare.steamstatic.com';

const HERO_DATA_URL =
  'https://www.dota2.com/datafeed/herodata?language=english&hero_id=';

function formatValues(values) {
  if (!Array.isArray(values) || values.length === 0) {
    return '';
  }

  return values.join(' / ');
}

async function downloadAbilities() {
  console.log('Generating hero abilities...\n');

  await fs.mkdir(abilitiesImagesDirectory, {
    recursive: true,
  });

  const result = {};

  for (const hero of Object.values(heroesData)) {
    console.log(`Processing ${hero.localized_name}...`);

    const heroAbilityData = hero_abilities[hero.name];

    if (!heroAbilityData || !Array.isArray(heroAbilityData.abilities)) {
      console.log(`  No ability mapping found for ${hero.localized_name}`);
      continue;
    }

    /*
      Get detailed hero data from Valve.
      This gives us cooldowns and mana costs.
    */
    let valveHero = null;

    try {
      const response = await fetch(`${HERO_DATA_URL}${hero.id}`);

      if (response.ok) {
        const json = await response.json();

        valveHero = json?.result?.data?.heroes?.[0] ?? null;
      }
    } catch (error) {
      console.log(`  Could not get Valve data: ${error.message}`);
    }

    const valveAbilities = valveHero?.abilities ?? [];

    const heroAbilities = [];

    for (const abilityId of heroAbilityData.abilities) {
      if (typeof abilityId !== 'string') {
        continue;
      }

      if (
        abilityId === 'generic_hidden' ||
        abilityId.startsWith('special_bonus_')
      ) {
        continue;
      }

      /*
        dotaconstants gives us:
        - display name
        - description
        - official image path
      */
      const staticAbility = abilityData[abilityId];

      if (!staticAbility) {
        console.log(`  Missing ability data: ${abilityId}`);
        continue;
      }

      if (!staticAbility.dname) {
        continue;
      }

      /*
        Valve gives us:
        - cooldowns
        - mana_costs

        Match the Valve ability using its internal name.
      */
      const valveAbility = valveAbilities.find(
        (ability) => ability.name === abilityId,
      );
      console.log(abilityId, valveAbility);

      let image = '';

      /*
        IMPORTANT:
        Use the image path supplied by Dota's data.
        This fixes abilities such as One Man Army.
      */

      if (staticAbility.is_innate) {
        image = '/images/abilities/innate_icon.png';
      } else if (staticAbility.img) {
        try {
          const imageUrl = new URL(staticAbility.img, CDN_BASE_URL);

          const fileName = path.basename(imageUrl.pathname);

          const filePath = path.join(abilitiesImagesDirectory, fileName);

          const imageResponse = await fetch(imageUrl);

          if (imageResponse.ok) {
            const imageBuffer = Buffer.from(await imageResponse.arrayBuffer());

            await fs.writeFile(filePath, imageBuffer);

            image = `/images/abilities/${fileName}`;
          } else {
            console.log(`  Image unavailable: ${abilityId}`);
          }
        } catch (error) {
          console.log(`  Image download failed: ${abilityId}`);
        }
      }

      const manaCost = formatValues(valveAbility?.mana_costs);

      const cooldown = formatValues(valveAbility?.cooldowns);

      heroAbilities.push({
        name: staticAbility.dname,
        image,
        isInnate: staticAbility.is_innate ?? false,
        isUltimate: valveAbility?.type === 1,
        description: staticAbility.desc ?? '',
        manaCost,
        cooldown,
      });
    }

    if (heroAbilities.length > 0) {
      result[hero.localized_name] = heroAbilities;
    }

    console.log(`  Added ${heroAbilities.length} abilities`);
  }

  const fileContent = `export const abilities = ${JSON.stringify(
    result,
    null,
    2,
  )};\n`;

  await fs.writeFile(abilitiesFilePath, fileContent);

  console.log('\n-----------------------------------');
  console.log('Abilities generated successfully.');
  console.log(`Data: ${abilitiesFilePath}`);
  console.log(`Images: ${abilitiesImagesDirectory}`);
  console.log('-----------------------------------');
}

downloadAbilities().catch((error) => {
  console.error('\nSomething went wrong:');
  console.error(error);
  process.exit(1);
});
