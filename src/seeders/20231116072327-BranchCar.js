"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("BranchCars", [
      {
        Name: "BMW",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Name: "Toyota",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Name: "Honda",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Name: "Huyndai",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Name: "Mitsubishi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Name: "Mazda",
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
