'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Types', [
      {
      Name: 'SUV',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Name: 'TRUCK',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Name: 'Copper',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
