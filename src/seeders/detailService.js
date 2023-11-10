'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('detailServices', [
      {
      serviceId: '1',
      nameServiceDetail: 'Thay lốp',
      price: 123000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      serviceId: '1',
      nameServiceDetail: 'Cân bằng lốp',
      price: 200000,
      createdAt: new Date(),
      updatedAt: new Date()
    },    {
      serviceId: '1',
      nameServiceDetail: 'Thay mâm',
      price: 900000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      serviceId: '2',
      nameServiceDetail: 'Sửa bộ tăng áp',
      price: 600000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      serviceId: '2',
      nameServiceDetail: 'Buồng đốt',
      price: 400000,
      createdAt: new Date(),
      updatedAt: new Date()
    },    {
      serviceId: '2',
      nameServiceDetail: 'Nhiên liệu động cơ',
      price: 550000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      serviceId: '3',
      nameServiceDetail: 'Pin',
      price: 400000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      serviceId: '3',
      nameServiceDetail: 'Đánh lửa',
      price: 100000,
      createdAt: new Date(),
      updatedAt: new Date()
    },    {
      serviceId: '3',
      nameServiceDetail: 'Đèn chiếu sáng',
      price: 1200000,
      createdAt: new Date(),
      updatedAt: new Date()
    },    {
      serviceId: '3',
      nameServiceDetail: 'Điều khiển điện tử',
      price: 1000000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      serviceId: '4',
      nameServiceDetail: 'Giame sốc',
      price: 320000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      serviceId: '4',
      nameServiceDetail: 'Thanh cân bằng',
      price: 260000,
      createdAt: new Date(),
      updatedAt: new Date()
    },    {
      serviceId: '4',
      nameServiceDetail: 'Bánh răng lái',
      price: 480000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      serviceId: '5',
      nameServiceDetail: 'Bơm nhiêu liệu',
      price: 560000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      serviceId: '5',
      nameServiceDetail: 'Bộ lọc nhiên liệu',
      price: 480000,
      createdAt: new Date(),
      updatedAt: new Date()
    },    {
      serviceId: '5',
      nameServiceDetail: 'Bộ điều khiển nhiên liệu',
      price: 650000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      serviceId: '6',
      nameServiceDetail: 'Sửa chữa hộp số',
      price: 123000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      serviceId: '6',
      nameServiceDetail: 'Cầu sau, trước',
      price: 200000,
      createdAt: new Date(),
      updatedAt: new Date()
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
