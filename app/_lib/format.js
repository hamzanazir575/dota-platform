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

export function formatGoldLead(radiantLead) {
  if (radiantLead === 0) return 'Even gold';

  const leadingTeam = radiantLead > 0 ? 'Radiant:' : 'Dire:';
  const amount = Math.abs(radiantLead);
  const formatted = amount >= 1000 ? `${(amount / 1000).toFixed(1)}k` : amount;

  return `${leadingTeam} +${formatted} gold`;
}
