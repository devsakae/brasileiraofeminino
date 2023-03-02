import IMatchResult from '../interfaces/IMatchResult';
import calculateScore from './calculateScore';

type Side = { home: boolean };

export default function getMatches(side: Side, data: IMatchResult[]) {
  return data.map((match: IMatchResult) => {
    const matchScore = (side.home) ? calculateScore(match.homeTeamGoals, match.awayTeamGoals)
      : calculateScore(match.awayTeamGoals, match.homeTeamGoals);
    // const teamId = (side.home) ? match.homeTeamId : match.awayTeamId;
    return ({
      matchId: match.id,
      team: (side.home) ? match.homeTeam.teamName : match.awayTeam.teamName,
      matchPoints: matchScore.point,
      victory: matchScore.victory,
      draw: matchScore.draw,
      loss: matchScore.loss,
      goalsFavor: (side.home) ? match.homeTeamGoals : match.awayTeamGoals,
      goalsOwn: (side.home) ? match.awayTeamGoals : match.homeTeamGoals,
      goalsBalance: (side.home) ? match.homeTeamGoals - match.awayTeamGoals
        : match.awayTeamGoals - match.homeTeamGoals,
    });
  });
}
