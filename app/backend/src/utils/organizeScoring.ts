function createResponseItem(data: any) {
  return ({
    name: data.team,
    totalPoints: data.tp,
    totalGames: data.m,
    totalVictories: data.v,
    totalDraws: data.d,
    totalLosses: data.l,
    goalsFavor: data.gp,
    goalsOwn: data.go,
    goalsBalance: data.gb,
    efficiency: data.efficiency,
  });
}

export default async function organize(data: any) {
  const response: any[] = [];
  data.forEach((m: any) => {
    if (!response.some((r) => r.name === m.team)) {
      const efficiency = ((m.tp / (m.m * 3)) * 100).toFixed(2);
      const responseItem = createResponseItem({ ...m, efficiency });
      response.push(responseItem);
    }
  });
  response.sort((a, b) => a.goalsOwn + b.goalsOwn)
    .sort((a, b) => b.goalsFavor - a.goalsFavor)
    .sort((a, b) => b.goalsBalance - a.goalsBalance)
    .sort((a, b) => b.totalVictories - a.totalVictories)
    .sort((a, b) => b.totalPoints - a.totalPoints);
  return response;
}
