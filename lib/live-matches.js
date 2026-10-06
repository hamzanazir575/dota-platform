export function transformLiveMatches(liveMatches, leagues) {
  const leagueNames = new Map(
    leagues.map((league) => [league.leagueid, league.name]),
  );

  return liveMatches
    .filter((match) => match.league_id !== 0)
    .map((match) => ({
      ...match,
      leagueName: leagueNames.get(match.league_id) || 'Unknown League',
    }));
}
