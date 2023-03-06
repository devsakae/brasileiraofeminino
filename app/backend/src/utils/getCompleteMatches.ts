import MatchesModel from '../database/models/Matches.model';
import ICalculateResult from '../interfaces/ICalculateResult';
import { ICompleteMatch } from '../interfaces/ICompleteMatch';
import calculateScore from './calculateScore';

function homeTeamScore(score: ICompleteMatch): ICalculateResult {
  return ({
    matchId: score.id,
    team: score.team,
    matchPoints: score.point,
    victory: score.victory,
    draw: score.draw,
    loss: score.loss,
    goalsFavor: score.homeTeamGoals,
    goalsOwn: score.awayTeamGoals,
    goalsBalance: score.homeTeamGoals - score.awayTeamGoals,
  });
}

function awayTeamScore(score: ICompleteMatch): ICalculateResult {
  return ({
    matchId: score.id,
    team: score.team,
    matchPoints: score.point,
    victory: score.victory,
    draw: score.draw,
    loss: score.loss,
    goalsFavor: score.awayTeamGoals,
    goalsOwn: score.homeTeamGoals,
    goalsBalance: score.awayTeamGoals - score.homeTeamGoals,
  });
}

export default function getCompleteMatches(data: MatchesModel[]) {
  const meuArrayDeRetorno: ICalculateResult[] = [];
  data.forEach((match: MatchesModel) => {
    meuArrayDeRetorno.push(homeTeamScore({
      team: match.dataValues.homeTeam.teamName,
      id: match.id,
      homeTeamGoals: match.homeTeamGoals,
      awayTeamGoals: match.awayTeamGoals,
      ...calculateScore(match.homeTeamGoals, match.awayTeamGoals),
    }));
    meuArrayDeRetorno.push(awayTeamScore({
      team: match.dataValues.awayTeam.teamName,
      id: match.id,
      homeTeamGoals: match.homeTeamGoals,
      awayTeamGoals: match.awayTeamGoals,
      ...calculateScore(match.awayTeamGoals, match.homeTeamGoals),
    }));
  });
  return meuArrayDeRetorno;
}
