import ILeaderboard from '../interfaces/ILeaderboard';
import { objTemp } from '../interfaces/ObjTemp.interface';

function createResponseItem(data: objTemp): ILeaderboard {
  return ({
    name: data.team,
    totalPoints: data.mp,
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

export default async function organize(data: objTemp[]) {
  const response: ILeaderboard[] = [];
  data.forEach((m: objTemp) => {
    if (!response.some((r) => r.name === m.team)) {
      const efficiency = ((m.mp / (m.m * 3)) * 100).toFixed(2);
      response.push(createResponseItem({ ...m, efficiency }));
    }
  });
  response.sort((a, b) => a.goalsOwn + b.goalsOwn)
    .sort((a, b) => b.goalsFavor - a.goalsFavor)
    .sort((a, b) => b.goalsBalance - a.goalsBalance)
    .sort((a, b) => b.totalVictories - a.totalVictories)
    .sort((a, b) => b.totalPoints - a.totalPoints);
  return response;
}
