import calculateScore from './calculateScore';

type Side = { home: boolean };

export default function getMatches(side: Side, data: any) {
  return data.map((match: any) => {
    let matchScore;
    (side.home) ? matchScore = calculateScore(match.homeTeamGoals, match.awayTeamGoals)
      : matchScore = calculateScore(match.awayTeamGoals, match.homeTeamGoals);
    return ({
      matchId: match.id,
      teamId: (side.home) ? match.homeTeamId : match.awayTeamId,
      team: (side.home) ? match.homeTeam.teamName : match.awayTeam.teamName,
      matchPoints: matchScore.point,
      victory: matchScore.victory,
      draw: matchScore.draw,
      loss: matchScore.loss,
      goalsFavor: (side.home) ? match.homeTeamGoals : match.awayTeamGoals,
      goalsOwn: (side.home) ? match.awayTeamGoals : match.homeTeamGoals,
      goalsBalance: (side.home) ? match.homeTeamGoals - match.awayTeamGoals : match.awayTeamGoals - match.homeTeamGoals,
    });
  });
}
