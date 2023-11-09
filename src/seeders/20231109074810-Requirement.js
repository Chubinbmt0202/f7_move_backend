"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Requirements", [
      {
        customerId: "1",
        partnerId: "1",
        orderTime: "2023-11-09 12:57:34.823 +0700",
        status: "Đã xác nhận",
        reason: "Chết máy, nổ lốp",
        carId: "1",
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
