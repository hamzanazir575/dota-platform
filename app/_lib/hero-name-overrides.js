export const HERO_NAME_OVERRIDES = {
  'Outworld Devourer': 'Outworld Destroyer',
  'Ring Master': 'Ringmaster',
};

export function normalizeHeroName(name) {
  return HERO_NAME_OVERRIDES[name] ?? name;
}
