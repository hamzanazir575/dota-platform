export default function HeroCard({ name, role, description }) {
  return (
    <div className=" cursor-pointer overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 shadow-lg transition hover:-translate-y-1 hover:border-red-500">
      <div className="flex h-40 items-center justify-center bg-neutral-800 text-neutral-500">
        Hero Image
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="mt-2 text-sm text-red-400">{role}</p>
        <p className="mt-3 text-sm text-neutral-400">{description}</p>
      </div>
    </div>
  );
}
