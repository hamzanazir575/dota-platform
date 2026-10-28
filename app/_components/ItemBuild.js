import Image from 'next/image';

const IMAGE_BASE = 'https://cdn.cloudflare.steamstatic.com';

export default function ItemBuild({ items }) {
  const equippedItems = items.filter(Boolean);

  if (equippedItems.length === 0) return <p>No Items</p>;

  return (
    <div className="flex gap-1">
      {equippedItems.map((item, index) => (
        <Image
          key={index}
          src={`${IMAGE_BASE}${item.img}`}
          alt={item.dname}
          title={item.dname}
          width={88}
          height={64}
          className="h-8 w-auto rounded"
        />
      ))}
    </div>
  );
}
