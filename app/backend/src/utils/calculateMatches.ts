import ICalculateResult from '../interfaces/ICalculateResult';
import { objTemp } from '../interfaces/ObjTemp.interface';

export default function calculateMatches(data: ICalculateResult[]) {
  const result: objTemp[] = [];
  data.forEach((match) => {
    const obj: objTemp = { team: '', mp: 0, m: 0, v: 0, d: 0, l: 0, gp: 0, go: 0, gb: 0 };
    result.push(data.filter((item) => item.team === match.team)
      .reduce((acc, curr) => {
        acc.team = curr.team;
        acc.mp += curr.matchPoints;
        acc.m += 1;
        acc.v += curr.victory;
        acc.d += curr.draw;
        acc.l += curr.loss;
        acc.gp += curr.goalsFavor;
        acc.go += curr.goalsOwn;
        acc.gb += curr.goalsBalance;
        return acc;
      }, obj));
  });
  return result;
}
