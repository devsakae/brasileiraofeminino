// import calculatePoints from './calculatePoints';
import calculateScore from './calculateScore';

function teamScore({ match, score }: any) {
  return ({
    matchPoints: score.point,
    victory: score.victory,
    draw: score.draw,
    loss: score.loss,
  });
}

export default function getCompleteMatches(data: any) {
  return data.map((match: any) => {
    const homeScore = calculateScore(match.homeTeamGoals, match.awayTeamGoals);
    const awayScore = calculateScore(match.awayTeamGoals, match.homeTeamGoals);
    const homeTeamName = match.homeTeam.teamName;
    const awayTeamName = match.awayTeam.teamName;

    return ({
      matchId: match.id,
      [homeTeamName]: teamScore(homeScore),
      [awayTeamName]: teamScore(awayScore),
    });
  });
}
