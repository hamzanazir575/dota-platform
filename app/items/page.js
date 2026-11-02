import ItemList from '../_components/ItemList';

async function getItems() {
  try {
    const response = await fetch(
      'https://api.opendota.com/api/constants/items',
    );

    if (!response.ok) {
      throw new Error(`OpenDota returned status ${response.status}`);
    }

    const data = await response.json();

    if (data === null || typeof data !== 'object' || Array.isArray(data)) {
      throw new Error('Unexpected item data received from OpenDota');
    }

    if (
      !Object.values(data).every(
        (item) =>
          item !== null && typeof item === 'object' && !Array.isArray(item),
      )
    ) {
      throw new Error('Unexpected item entry received from OpenDota');
    }

    return data;
  } catch (error) {
    console.error('Failed to load items:', error);
    return {};
  }
}

export default async function ItemsPage() {
  const items = await getItems();
  const itemList = Object.entries(items);

  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-12 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
            Dota 2 Platform
          </p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Dota 2 Items</h1>
          <p className="mt-3 max-w-2xl text-neutral-400">
            Explore all Dota 2 items, their effects, costs, and mechanics.
          </p>
        </div>

        {itemList.length === 0 ? (
          <p className="mt-8 text-neutral-400">
            Item data is temporarily unavailable. Please try again later.
          </p>
        ) : (
          <ItemList items={itemList} />
        )}
      </div>
    </main>
  );
}
