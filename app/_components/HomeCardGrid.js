export default function HomeCardGrid({
  items,
  renderItem,
  emptyMessage,
  getKey,
  limit,
}) {
  if (items.length === 0) {
    return <p className="mt-6 text-neutral-400">{emptyMessage}</p>;
  }

  return (
    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.slice(0, limit).map((item) => (
        <div key={getKey(item)} className="transition-all hover:-translate-y-1">
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
}
