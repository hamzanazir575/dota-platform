import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputDirectory = path.join(
  __dirname,
  '..',
  'public',
  'images',
  'attributes',
);

const CDN_BASE_URL =
  'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/';

const icons = [
  'hero_strength.png',
  'hero_agility.png',
  'hero_intelligence.png',
  'hero_universal.png',
];

async function downloadAttributeIcons() {
  await fs.mkdir(outputDirectory, { recursive: true });

  for (const fileName of icons) {
    const url = `${CDN_BASE_URL}${fileName}`;
    const filePath = path.join(outputDirectory, fileName);

    console.log(`Downloading ${fileName}...`);

    const response = await fetch(url);

    if (!response.ok) {
      console.log(`Could not download ${fileName}: ${response.status}`);
      continue;
    }

    const buffer = Buffer.from(await response.arrayBuffer());

    await fs.writeFile(filePath, buffer);

    console.log(`Saved ${fileName}`);
  }

  console.log('\nAttribute icons downloaded successfully.');
}

downloadAttributeIcons().catch((error) => {
  console.error('Something went wrong:');
  console.error(error);
  process.exit(1);
});
