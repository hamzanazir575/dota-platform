import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_URL = 'https://api.opendota.com/api/heroStats';
const CDN_BASE_URL = 'https://cdn.cloudflare.steamstatic.com';

const heroesDirectory = path.join(
  __dirname,
  '..',
  'public',
  'images',
  'heroes',
);

const imageMapPath = path.join(
  __dirname,
  '..',
  'app',
  '_lib',
  'hero-images.js',
);

async function downloadHeroImages() {
  console.log('Getting hero data from OpenDota...');

  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`OpenDota request failed: ${response.status}`);
  }

  const heroes = await response.json();

  await fs.mkdir(heroesDirectory, { recursive: true });

  const heroImages = {};

  for (const hero of heroes) {
    const imageUrl = new URL(hero.img, CDN_BASE_URL);
    const fileName = path.basename(imageUrl.pathname);
    const filePath = path.join(heroesDirectory, fileName);

    console.log(`Downloading ${hero.localized_name}...`);

    const imageResponse = await fetch(imageUrl);

    if (!imageResponse.ok) {
      console.log(`Could not download ${hero.localized_name}`);
      continue;
    }

    const imageBuffer = Buffer.from(await imageResponse.arrayBuffer());

    await fs.writeFile(filePath, imageBuffer);

    heroImages[hero.localized_name] = `/images/heroes/${fileName}`;
  }

  const fileContent = `export const heroImages = ${JSON.stringify(
    heroImages,
    null,
    2,
  )};\n`;

  await fs.writeFile(imageMapPath, fileContent);

  console.log('');
  console.log('Hero images downloaded successfully.');
  console.log(`Images saved to: ${heroesDirectory}`);
  console.log(`Image map saved to: ${imageMapPath}`);
}

downloadHeroImages().catch((error) => {
  console.error('Something went wrong:');
  console.error(error);
  process.exit(1);
});
