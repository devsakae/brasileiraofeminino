import { ICalculateResult } from '../interfaces/ICalculateResult';

export default function calculateMatches(data: ICalculateResult[]) {
  const result: any[] = [];
  data.forEach((match) => {
    const objTemp = { team: '', tp: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0 };
    result.push(data.filter((item) => item.team === match.team)
      .reduce((acc: any, curr) => {
        acc.team = curr.team;
        acc.tp += curr.matchPoints;
        acc.j += 1;
        acc.v += curr.victory;
        acc.e += curr.draw;
        acc.d += curr.loss;
        acc.gp += curr.goalsFavor;
        acc.gc += curr.goalsOwn;
        acc.sg += curr.goalsBalance;
        return acc;
      }, objTemp));
  });
  return result;
}
