'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Brands', [
      {
      Name: 'Toyota',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Name: 'Mazda',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Name: 'Suzuki',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Name: 'Honda',
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
