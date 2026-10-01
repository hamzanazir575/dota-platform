import Link from 'next/link';

const IMAGE_BASE = 'https://cdn.cloudflare.steamstatic.com';

export default function ItemCard({ item, itemKey }) {
  return (
    <Link
      href={`/items/${itemKey}`}
      className="block overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 shadow-lg transition hover:-translate-y-1 hover:border-red-500"
    >
      <div className="flex h-32 items-center justify-center bg-neutral-800">
        {item.img ? (
          <img
            src={`${IMAGE_BASE}${item.img}`}
            alt={item.dname}
            className="h-16 w-auto object-contain"
          />
        ) : (
          <span className="text-neutral-500">No image</span>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">{item.dname || 'Unknown Item'}</h3>

          {item.qual && (
            <span className="rounded-md bg-neutral-800 px-2 py-1 text-xs capitalize text-neutral-400">
              {item.qual}
            </span>
          )}
        </div>

        <p className="mt-2 text-sm text-neutral-400">
          {item.notes || 'No additional notes for this item.'}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
          <span className="font-semibold text-red-400">{item.cost ?? 0}g</span>

          {item.mc && <span className="text-blue-400">{item.mc} mana</span>}

          {item.cd && <span className="text-neutral-500">{item.cd}s CD</span>}
        </div>
      </div>
    </Link>
  );
}
