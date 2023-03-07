module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'teams',
      [
        {
          team_name: 'Avaí/Kindermann',
        },
        {
          team_name: 'Athletico-PR',
        },
        {
          team_name: 'Atlético-MG',
        },
        {
          team_name: 'Bahia',
        },
        {
          team_name: 'Ceará',
        },
        {
          team_name: 'Corinthians',
        },
        {
          team_name: 'Cruzeiro',
        },
        {
          team_name: 'Ferroviária',
        },
        {
          team_name: 'Flamengo',
        },
        {
          team_name: 'Grêmio',
        },
        {
          team_name: 'Interncional',
        },
        {
          team_name: 'Palmeiras',
        },
        {
          team_name: 'Real Ariquemes',
        },
        {
          team_name: 'Real Brasília',
        },
        {
          team_name: 'Santos',
        },
        {
          team_name: 'São Paulo',
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('teams', null, {});
  },
};
