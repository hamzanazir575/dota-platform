import ItemList from '../_components/ItemList';

async function getItems() {
  const response = await fetch('https://api.opendota.com/api/constants/items');

  if (!response.ok) {
    return {};
  }

  return response.json();
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

        <ItemList items={itemList} />
      </div>
    </main>
  );
}
