'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cars', [
      {
      customerId: '1',
      brand: 'Toyota',
      types: 'SUV',
      color: 'Red',
      numberPlate: '47A1-45679',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      customerId: '2',
      brand: 'BMW',
      types: 'luxury',
      color: 'White',
      numberPlate: '92A1-45259',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      customerId: '3',
      brand: 'Suzuki',
      types: 'CUV',
      color: 'red',
      numberPlate: '73A1-48889',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      customerId: '4',
      brand: 'Lambogini',
      types: 'Coupe',
      color: 'Green',
      numberPlate: '74A1-35689',
      createdAt: new Date(),
      updatedAt: new Date()
    }
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
