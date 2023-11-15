"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("Partners", [
            {
                fullname: "Thượng Hải auto",
                userName: "partner1",
                password: "123456",
                phone: "0123456789",
                address: "08 Hà Văn Tính, Hoà Khánh Nam, Liêu Chiểu, Đà Nẵng",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                fullname: "Suzuki Từ Hải",
                userName: "partner2",
                password: "123456",
                phone: "0123548796",
                address: "154 Lê Doãn Nhạ, Hoà Khánh Nam, Liêu Chiểu, Đà Nẵng",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                fullname: "Toyota Liên Chiểu",
                userName: "partner3",
                password: "123456",
                phone: "0123548796",
                address:
                    "456 Tôn Đức Thắng, Hoà Khánh Bắc, Liêu Chiểu, Đà Nẵng",
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
