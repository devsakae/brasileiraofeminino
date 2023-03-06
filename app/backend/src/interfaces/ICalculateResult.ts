export default interface ICalculateResult {
  matchId?: number;
  match?: number;
  team: string;
  teamId?: number;
  totalGames?: number;
  matchPoints: number;
  victory: number;
  draw: number;
  loss: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency?: string;
}
