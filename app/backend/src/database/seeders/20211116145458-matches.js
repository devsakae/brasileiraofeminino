module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'matches',
      [
        {
          home_team_id: 15,
          home_team_goals: 3,
          away_team_id: 9,
          away_team_goals: 0,
          in_progress: false,
        },
        {
          home_team_id: 6,
          home_team_goals: 14,
          away_team_id: 5,
          away_team_goals: 0,
          in_progress: false,
        },
        {
          home_team_id: 11,
          home_team_goals: 2,
          away_team_id: 2,
          away_team_goals: 1,
          in_progress: false,
        },
        {
          home_team_id: 16,
          home_team_goals: 1,
          away_team_id: 4,
          away_team_goals: 1,
          in_progress: false,
        },
        {
          home_team_id: 7,
          home_team_goals: 1,
          away_team_id: 10,
          away_team_goals: 1,
          in_progress: false,
        },
        {
          home_team_id: 12,
          home_team_goals: 9,
          away_team_id: 13,
          away_team_goals: 0,
          in_progress: false,
        },
        {
          home_team_id: 1,
          home_team_goals: 2,
          away_team_id: 14,
          away_team_goals: 5,
          in_progress: false,
        },
        {
          home_team_id: 3,
          home_team_goals: 2,
          away_team_id: 8,
          away_team_goals: 4,
          in_progress: false,
        },
        {
          home_team_id: 5,
          home_team_goals: 0,
          away_team_id: 16,
          away_team_goals: 2,
          in_progress: false,
        },
        {
          home_team_id: 2,
          home_team_goals: 1,
          away_team_id: 15,
          away_team_goals: 1,
          in_progress: false,
        },
        {
          home_team_id: 4,
          home_team_goals: 2,
          away_team_id: 7,
          away_team_goals: 3,
          in_progress: false,
        },
        {
          home_team_id: 8,
          home_team_goals: 2,
          away_team_id: 11,
          away_team_goals: 1,
          in_progress: false,
        },
        {
          home_team_id: 13,
          home_team_goals: 0,
          away_team_id: 6,
          away_team_goals: 6,
          in_progress: false,
        },
        {
          home_team_id: 14,
          home_team_goals: 0,
          away_team_id: 12,
          away_team_goals: 3,
          in_progress: false,
        },
        {
          home_team_id: 9,
          home_team_goals: 3,
          away_team_id: 1,
          away_team_goals: 0,
          in_progress: false,
        },
        {
          home_team_id: 10,
          home_team_goals: 2,
          away_team_id: 3,
          away_team_goals: 1,
          in_progress: false,
        }
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('matches', null, {});
  },
};
