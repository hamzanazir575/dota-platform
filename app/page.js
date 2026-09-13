export default function Home() {
  return (
    <div className="flex items-center justify-center text-center">
      <main className="min-h-screen">
        <h1 className="text-5xl font-bold">Dota 2 platform</h1>

        <p className="mt-4 text-lg">
          Explore Dota 2 heroes, matches, players, teams, statistics,
          tournaments, and more — all in one place.
        </p>

        <button className="mt-6 rounded-lg bg-red-600 px-6 py-3 text-white">
          Explore Heroes
        </button>
      </main>
    </div>
  );
}
