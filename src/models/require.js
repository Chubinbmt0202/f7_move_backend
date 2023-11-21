"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Require extends Model {

    }
    Require.init(
        {
            fullName: DataTypes.STRING,
            phoneNumber: DataTypes.STRING,
            Address: DataTypes.STRING,
            statusDescription: DataTypes.STRING,
            licensePlate: DataTypes.STRING,
            carBrand: DataTypes.STRING,
            carColor: DataTypes.STRING,
            carType: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Require",
        }
    );
    return Require;
};
