export function formatDuration(seconds) {
  if (!seconds) {
    return 'Unknown';
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes}:${String(remainingSeconds).padStart(2, '0')}`;
}

export function formatDate(timestamp) {
  if (!timestamp) {
    return 'Unknown date';
  }

  return new Date(timestamp * 1000).toLocaleDateString();
}
