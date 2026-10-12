export default function StatCard({ label, value, detail }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5 shadow-lg">
      <p className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
        {label}
      </p>

      <p className="mt-3 text-2xl font-bold text-white">{value}</p>
      {detail && <span className="mt-2 text-sm text-green-400">{detail}</span>}
    </div>
  );
}
