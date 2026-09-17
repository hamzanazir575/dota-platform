import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import * as VDF from 'vdf-parser';

import {
  heroes as heroesData,
  hero_abilities,
  abilities as abilityData,
} from 'dotaconstants';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const talentsFilePath = path.join(__dirname, '..', 'app', '_lib', 'talents.js');

const HERO_FILE_BASE_URL =
  'https://raw.githubusercontent.com/dotabuff/d2vpkr/master/dota/scripts/npc/heroes/';

const heroFileCache = new Map();

/*
  Converts values from the VDF file into strings.

  Example:
  +85  -> "85" when the talent text already has "+"
  -5   -> "5" when the talent text already has "-"
*/
function cleanBonusValue(value) {
  if (value === null || value === undefined) {
    return null;
  }

  if (Array.isArray(value)) {
    if (value.length === 0) {
      return null;
    }

    value = value[value.length - 1];
  }

  if (typeof value === 'object' && value !== null) {
    if ('value' in value) {
      value = value.value;
    } else {
      return null;
    }
  }

  return String(value);
}

/*
  The VDF structure looks like:

  "radius"
  {
      "value" "315"
      "special_bonus_unique_axe_2" "+85"
  }

  So the talent ID lives inside the object whose key
  represents the value being modified.

  We create:

  radius        -> +85
  bonus_radius  -> +85
*/
function addBonusMapping(map, parentKey, talentId, value) {
  const cleanedValue = cleanBonusValue(value);

  if (!cleanedValue) {
    return;
  }

  if (!map.has(talentId)) {
    map.set(talentId, new Map());
  }

  const aliases = [parentKey, `bonus_${parentKey}`];

  for (const alias of aliases) {
    map.get(talentId).set(alias, cleanedValue);
  }
}

/*
  Recursively walks the parsed Valve hero file.

  Whenever it sees a talent ID such as:

  special_bonus_unique_axe_2

  it records the value and the parent key.

  This is the important part that was missing
  from the previous generators.
*/
function collectTalentOverrides(
  node,
  talentIds,
  parentKey = '',
  result = new Map(),
) {
  if (node === null || node === undefined || typeof node !== 'object') {
    return result;
  }

  for (const [key, value] of Object.entries(node)) {
    if (talentIds.has(key)) {
      addBonusMapping(result, parentKey, key, value);
    }

    if (value !== null && typeof value === 'object') {
      collectTalentOverrides(value, talentIds, key, result);
    }
  }

  return result;
}

/*
  Downloads and parses one hero's Valve file.
*/
async function getHeroTalentOverrides(hero, talentIds) {
  if (heroFileCache.has(hero.name)) {
    return heroFileCache.get(hero.name);
  }

  const url = `${HERO_FILE_BASE_URL}${hero.name}.txt`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.log(
        `  Could not fetch ${hero.localized_name}: ${response.status}`,
      );

      const empty = new Map();

      heroFileCache.set(hero.name, empty);

      return empty;
    }

    const text = await response.text();

    const parsed = VDF.parse(text);

    /*
      The hero file is a DOTAAbilities VDF file.
      We can search the entire parsed tree; we don't
      need to know which ability contains the talent.
    */
    const overrides = collectTalentOverrides(parsed, talentIds);

    heroFileCache.set(hero.name, overrides);

    return overrides;
  } catch (error) {
    console.log(`  Could not parse ${hero.localized_name}: ${error.message}`);

    const empty = new Map();

    heroFileCache.set(hero.name, empty);

    return empty;
  }
}

/*
  If the source talent text is:

  +{s:bonus_radius} Berserker's Call AoE

  and the source value is:

  +85

  we want:

  +85 Berserker's Call AoE

  NOT:

  ++85 Berserker's Call AoE
*/
function applyReplacement(rawText, placeholder, value, matchStart) {
  const previousCharacter = rawText[matchStart - 1];

  const valueString = String(value);

  if (
    (previousCharacter === '+' || previousCharacter === '-') &&
    (valueString.startsWith('+') || valueString.startsWith('-'))
  ) {
    return valueString.slice(1);
  }

  return valueString;
}

/*
  Replaces every:

  {s:bonus_damage}
  {s:bonus_radius}
  {s:bonus_AbilityCooldown}

  with the value from the hero's actual VDF data.

  Unresolved values become X.
*/
function resolveTalentText(rawText, talentId, overrides) {
  if (!rawText) {
    return null;
  }

  const talentOverrides = overrides.get(talentId);

  return rawText.replace(/\{s:([a-zA-Z0-9_]+)\}/g, (match, token, offset) => {
    const value = talentOverrides?.get(token);

    if (value === undefined || value === null) {
      return 'X';
    }

    return applyReplacement(rawText, match, value, offset);
  });
}

/*
  Gets the human-readable talent text from
  dotaconstants.

  This part is still correct from your original
  generator.
*/
function getRawTalentText(talentName) {
  const talent = abilityData[talentName];

  return talent?.dname ?? null;
}

function addTalentToTier(heroTalents, tier, talentData) {
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

async function generateTalents() {
  console.log('Generating hero talents...\n');

  const result = {};

  for (const hero of Object.values(heroesData)) {
    console.log(`Processing ${hero.localized_name}...`);

    const heroAbilityData = hero_abilities[hero.name];

    if (!heroAbilityData || !Array.isArray(heroAbilityData.talents)) {
      console.log(`  No talent mapping found for ${hero.localized_name}`);

      continue;
    }

    const talentIds = new Set(
      heroAbilityData.talents.map((talent) => talent?.name).filter(Boolean),
    );

    /*
      Get ALL talent bonus overrides for this hero
      from the current Valve hero definition.
    */
    const talentOverrides = await getHeroTalentOverrides(hero, talentIds);

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

      const rawText = getRawTalentText(talentName);

      if (!rawText) {
        console.log(
          `  Missing talent text for ${hero.localized_name}: ${talentName}`,
        );

        continue;
      }

      const resolvedText = resolveTalentText(
        rawText,
        talentName,
        talentOverrides,
      );

      const talentData = {
        name: resolvedText,
        id: talentName,
        tier,
      };

      addTalentToTier(heroTalents, tier, talentData);
    }

    const talentCount = Object.values(heroTalents).reduce(
      (total, talents) => total + talents.length,
      0,
    );

    if (talentCount > 0) {
      result[hero.localized_name] = heroTalents;
    }

    console.log(`  ${hero.localized_name}: ${talentCount} talents`);
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
