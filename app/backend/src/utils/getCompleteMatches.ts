// // import calculatePoints from './calculatePoints';
// import calculateScore from './calculateScore';

// function homeTeamScore(score: any) {
//   return ({
//     matchPoints: score.point,
//     victory: score.victory,
//     draw: score.draw,
//     loss: score.loss,
//     goalsFavor: score.homeTeamGoals,
//     goalsOwn: score.awayTeamGoals,
//     goalsBalance: score.homeTeamGoals - score.awayTeamGoals,
//   });
// }

// function awayTeamScore(score: any) {
//   return ({
//     matchPoints: score.point,
//     victory: score.victory,
//     draw: score.draw,
//     loss: score.loss,
//     goalsFavor: score.awayTeamGoals,
//     goalsOwn: score.homeTeamGoals,
//     goalsBalance: score.awayTeamGoals - score.homeTeamGoals,
//   });
// }

// export default function getCompleteMatches(data: any) {
//   return data.map((match: any) => {
//     const homeScore = calculateScore(match.homeTeamGoals, match.awayTeamGoals);
//     const awayScore = calculateScore(match.awayTeamGoals, match.homeTeamGoals);
//     const homeTeamName = match.homeTeam.teamName;
//     const awayTeamName = match.awayTeam.teamName;
//     return ({
//       matchId: match.id,
//       [homeTeamName]: homeTeamScore({ ...homeScore, ...match.dataValues }),
//       [awayTeamName]: awayTeamScore({ ...awayScore, ...match.dataValues }),
//     });
//   });
// }
