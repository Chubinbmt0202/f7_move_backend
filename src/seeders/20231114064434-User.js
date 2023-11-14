"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        username: "chubinbmt02",
        email: "chubinbmt@gmail.com",
        password: "123456",
        fullName: "Võ Trần Trung Anh",
        phone: "0154236547",
        role: "0",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "dgoon",
        email: "dgoon@gmail.com",
        password: "123456",
        fullName: "Phạm Dgoon",
        phone: "0154236547",
        role: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "hung",
        email: "hung@gmail.com",
        password: "123456",
        fullName: "Nông Quốc Hùng",
        phone: "0154236547",
        role: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "cong",
        email: "cong@gmail.com",
        password: "123456",
        fullName: "Trịnh Thế Công",
        phone: "0154236547",
        role: "1",
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
