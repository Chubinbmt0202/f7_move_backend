'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Requires', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      Address: {
        type: Sequelize.STRING
      },
      statusDescription: {
        type: Sequelize.STRING
      },
      licensePlate: {
        type: Sequelize.STRING
      },
      carBrand: {
        type: Sequelize.STRING
      },
      carColor: {
        type: Sequelize.STRING
      },
      carType: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Requires');
  }
};