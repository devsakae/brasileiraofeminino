const oneUser = {
  id: 1,
  username: 'Admin',
  email: 'admin@admin.com',
  role: 'admin',
  password: 'nothashedpassword',
};

const oneMatch = {
  id: 1,
  homeTeamId: 1,
  awayTeamId: 2,
  homeTeamGoals: 0,
  awayTeamGoals: 0,
  inProgress: true
};

export { oneUser, oneMatch };
