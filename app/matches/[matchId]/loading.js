export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center gap-4 bg-neutral-950 text-white">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-neutral-700 border-t-red-500"></div>
      <p className="text-lg font-semibold text-neutral-300">
        Loading match data...
      </p>
    </div>
  );
}
