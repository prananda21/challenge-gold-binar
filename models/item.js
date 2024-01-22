"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.hasMany(models.Order, {
        foreignKey: "itemId",
        sourceKey: "id",
      });
    }
  }
  Item.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.NUMERIC,
      stock: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Item",
      tableName: "Items",
    }
  );
  return Item;
};
