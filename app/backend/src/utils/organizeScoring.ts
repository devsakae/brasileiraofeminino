function createResponseItem(data: any) {
  return ({
    name: data.team,
    totalPoints: data.tp,
    totalGames: data.j,
    totalVictories: data.v,
    totalDraws: data.e,
    totalLosses: data.d,
    goalsFavor: data.gp,
    goalsOwn: data.gc,
    goalsBalance: data.sg,
    efficiency: data.efficiency,
  });
}

export default async function organize(data: any) {
  const response: any[] = [];
  data.forEach((m: any) => {
    if (!response.some((r) => r.name === m.team)) {
      const efficiency = +((m.tp / (m.j * 3)) * 100).toFixed(2);
      const responseItem = createResponseItem({ ...m, efficiency });
      response.push(responseItem);
    }
  });
  return response;
}
