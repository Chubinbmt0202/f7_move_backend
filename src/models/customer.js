"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Customer extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Customer.hasOne(models.Requirement, { foreignKey: "customerId" });
            Customer.hasMany(models.Car, { foreignKey: "customerId" });
        }
    }
    Customer.init(
        {
            email: DataTypes.STRING,
            userName: DataTypes.STRING,
            password: DataTypes.STRING,
            fullName: DataTypes.STRING,
            phone: DataTypes.STRING,
            DOB: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Customer",
        }
    );
    return Customer;
};
