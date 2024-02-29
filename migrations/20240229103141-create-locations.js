module.exports = {
  up: async () => {
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('locations');
  },
};
