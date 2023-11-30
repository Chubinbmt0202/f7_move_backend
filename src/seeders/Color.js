'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Colors', [
      {
      Name: 'Red',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Name: 'Black',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Name: 'White',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Name: 'Yellow',
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
