const levels = [
  { level: 10, key: 'level10' },
  { level: 15, key: 'level15' },
  { level: 20, key: 'level20' },
  { level: 25, key: 'level25' },
];

export default function TalentTree({ talents }) {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold">Talent Tree</h2>

      {levels.map(({ level, key }) => (
        <div key={key} className="mt-6">
          <h3 className="text-xl font-semibold text-center text-neutral-300">
            Level {level}
          </h3>

          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            {talents[key].map((talent) => (
              <div
                key={talent.id}
                className="rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm text-neutral-200"
              >
                {talent.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
