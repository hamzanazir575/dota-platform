import HeroMatchupCard from './HeroMatchupCard';

export default function HeroMatchups({ strongestMatchups, weakestMatchups }) {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold">Matchups</h2>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold text-green-400">
            Strong Against
          </h3>

          <div className="mt-4 space-y-2">
            {strongestMatchups.slice(0, 5).map((matchup) => (
              <HeroMatchupCard
                key={matchup.id}
                matchup={matchup}
                type="strong"
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-red-400">Weak Against</h3>

          <div className="mt-4 space-y-2">
            {weakestMatchups.slice(0, 5).map((matchup) => (
              <HeroMatchupCard key={matchup.id} matchup={matchup} type="weak" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
