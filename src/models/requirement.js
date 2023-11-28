"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Requirement extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Requirement.belongsTo(models.Customer);
            Requirement.belongsTo(models.Car);
            Requirement.belongsTo(models.Partner, { foreignKey: "partnerId" });
            Requirement.hasOne(models.Invoice, { foreignKey: "requireId" });
        }
    }
    Requirement.init(
        {
            nameCustomer: DataTypes.STRING,
            namePartner: DataTypes.STRING,
            orderTime: DataTypes.DATE,
            reason: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Requirement",
        }
    );
    return Requirement;
};
