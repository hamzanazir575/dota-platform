export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-950 text-white">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-neutral-700 border-t-red-500" />

        <p className="text-sm font-medium text-neutral-400">
          Loading Dota 2...
        </p>
      </div>
    </main>
  );
}
