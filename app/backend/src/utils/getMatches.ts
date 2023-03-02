// import MatchesModel from '../database/models/Matches.model';
import calculatePoints from './calculatePoints';

export default function getMatches(data: any) {
  return data.map((match: any) => {
    const matchScore = calculatePoints(match.homeTeamGoals, match.awayTeamGoals);
    return ({
      matchId: match.id,
      teamId: match.homeTeamId,
      team: match.homeTeam.teamName,
      // Typescript não permitiu fazer isso, vou ter que fazer um getbyId depois de tudo
      // team: match.hometeam.teamName,
      matchPoints: matchScore.points,
      victory: matchScore.v,
      draw: matchScore.d,
      loss: matchScore.l,
      goalsFavor: match.homeTeamGoals,
      goalsOwn: match.awayTeamGoals,
      goalsBalance: match.homeTeamGoals - match.awayTeamGoals,
    });
  });
}
