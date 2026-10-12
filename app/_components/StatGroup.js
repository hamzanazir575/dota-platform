import StatCard from './StatCard';

export default function StatGroup({ title, stats }) {
  return (
    <>
      <h3 className="mt-10 text-2xl font-bold">{title}</h3>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          return (
            <StatCard
              key={stat.name}
              label={stat.name}
              value={stat.value}
              detail={stat.detail}
            />
          );
        })}
      </div>
    </>
  );
}
