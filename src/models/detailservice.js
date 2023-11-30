"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class detailService extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            detailService.belongsTo(models.Service, {
                foreignKey: "serviceId",
            });
        }
    }
    detailService.init(
        {
            serviceId: DataTypes.INTEGER,
            nameServiceDetail: DataTypes.STRING,
            price: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "detailService",
        }
    );
    return detailService;
};
