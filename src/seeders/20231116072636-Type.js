"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Types", [
      {
        Name: "SUV",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Name: "Sedan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Name: "HatchBack",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Name: "Crossover ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Name: "Coupe ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Name: "Pickup ",
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
  },
};
