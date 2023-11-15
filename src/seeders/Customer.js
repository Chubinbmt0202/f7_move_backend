"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("Customers", [
            {
                email: "TrungAnh@gmail.com",
                userName: "trunganh",
                password: "123456",
                fullName: "Võ Trần Trung Anh",
                phone: "0706051087",
                DOB: "03/05/2002",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                email: "Cong27042002@gmail.com",
                userName: "congtrinh",
                password: "123456",
                fullName: "Trịnh Thế Công",
                phone: "0258963147",
                DOB: "27/04/2002",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                email: "DgoonPham2002@gmail.com",
                userName: "dgoon",
                password: "123456",
                fullName: "Phạm Dgoon",
                phone: "0144587235",
                DOB: "15/03/2002",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                email: "HungBoy2002@gmail.com",
                userName: "quochung",
                password: "123456",
                fullName: "Nông Quốc Hùng",
                phone: "0236987451",
                DOB: "20/10/2002",
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
