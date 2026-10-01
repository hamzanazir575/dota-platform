'use client';

import { useState } from 'react';
import ItemCard from './ItemCard';

export default function ItemList({ items }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = items.filter(([key, item]) => {
    return item.dname?.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mt-4 w-auto rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 focus:border-red-500 focus:outline-none"
      />

      <div className="mt-6 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map(([key, item]) => (
          <ItemCard key={key} item={item} itemKey={key} />
        ))}
      </div>
    </>
  );
}
