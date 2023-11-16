'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Require extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Require.init({
    fullName: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    Address: DataTypes.STRING,
    statusDescription: DataTypes.STRING,
    licensePlate: DataTypes.STRING,
    carBrand: DataTypes.STRING,
    carColor: DataTypes.STRING,
    carType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Require',
  });
  return Require;
};