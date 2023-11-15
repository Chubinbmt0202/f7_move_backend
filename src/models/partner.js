"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Partner extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Partner.hasMany(models.Requirement, { foreignKey: "partnerId" });
            Partner.hasMany(models.Service, { foreignKey: "partnerId" });
        }
    }
    Partner.init(
        {
            fullname: DataTypes.STRING,
            userName: DataTypes.STRING,
            password: DataTypes.STRING,
            phone: DataTypes.STRING,
            address: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Partner",
        }
    );
    return Partner;
};
