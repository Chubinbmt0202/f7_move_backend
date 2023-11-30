"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Color extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */

    }
    Color.init(
        {
            Name: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Color",
        }
    );
    return Color;
};
