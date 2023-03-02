import MatchesModel from '../database/models/Matches.model';

export default interface IMatchesModelEnhanced extends MatchesModel {
  id: number;
  teamId?: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
  homeTeam: {
    teamName: string;
  };
  awayTeam: {
    teamName: string;
  }
}
