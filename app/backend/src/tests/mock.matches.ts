const oneMatch = {
  id: 1,
  homeTeamId: 1,
  awayTeamId: 2,
  homeTeamGoals: 0,
  awayTeamGoals: 0,
  inProgress: true
};

const allMatches = [
  {
    id: 1,
    homeTeamId: 1,
    homeTeamGoals: 1,
    awayTeamId: 2,
    awayTeamGoals: 2,
    inProgress: true,
  },
  {
    id: 2,
    homeTeamId: 1,
    homeTeamGoals: 3,
    awayTeamId: 3,
    awayTeamGoals: 1,
    inProgress: false,
  },
];

const matchesInProgress = [
  {
    id: 1,
    homeTeamId: 1,
    homeTeamGoals: 1,
    awayTeamId: 2,
    awayTeamGoals: 2,
    inProgress: true,
  }
];

const matchesFinished = [
  {
    id: 2,
    homeTeamId: 1,
    homeTeamGoals: 3,
    awayTeamId: 3,
    awayTeamGoals: 1,
    inProgress: false,
  },
];

const newMatch = {
  homeTeamId: 5,
  awayTeamId: 1,
  homeTeamGoals: 1,
  awayTeamGoals: 0
}

const newMatchServiceResponse = {
  id: 20,
  ...newMatch,
  inProgress: true,
}

export { oneMatch, allMatches, matchesInProgress, matchesFinished, newMatch, newMatchServiceResponse };

