'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("ColorCars", [
      {
        Name: "Red",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Name: "Gray",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Name: "Blue",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Name: "White ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Name: "Black ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Name: "Green ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
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
