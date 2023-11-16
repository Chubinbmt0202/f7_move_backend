'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Requires", [
      {
        fullName: "Trung Anh",
        phoneNumber: "0706051087",
        Address: "8 ha văn tinh",
        statusDescription: "Chết máy",
        licensePlate: "43A1-123654",
        carBrand: "BMW",
        carColor: "Red",
        carType: "SUV",
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
