import MatchesModel from '../database/models/Matches.model';

export default interface IMatchResult extends MatchesModel {
  id: number;
  homeTeamId: number;
  homeTeamGoals: number;
  awayTeamId: number;
  awayTeamGoals: number;
  inProgress: boolean
  homeTeam: {
    teamName: string,
  };
  awayTeam: {
    teamName: string,
  };
}
