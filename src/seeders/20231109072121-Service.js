"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Services", [
      {
        partnerId: "1",
        detailServiceId: "1",
        nameService: "Thay thế và sửa chữa lốp",
        createdAt: new Date(),
        updatedAt: new Date(),
      },      {
        partnerId: "1",
        detailServiceId: "2",
        nameService: "Sữa chữa động cơ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },      {
        partnerId: "1",
        detailServiceId: "3",
        nameService: "Dịch vụ hệ thống điện",
        createdAt: new Date(),
        updatedAt: new Date(),
      },      {
        partnerId: "1",
        detailServiceId: "4",
        nameService: "Hệ thống treo và lái",
        createdAt: new Date(),
        updatedAt: new Date(),
      },      {
        partnerId: "1",
        detailServiceId: "5",
        nameService: "Hệ thống nhiên liệu",
        createdAt: new Date(),
        updatedAt: new Date(),
      },      {
        partnerId: "1",
        detailServiceId: "6",
        nameService: "Hệ thống truyền động",
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
