"use strict";

module.exports = (sequelize, DataTypes) => {
  const Rating = sequelize.define(
    "ratings",
    {
      rating: {
        type: DataTypes.DOUBLE,
      },
    },
    {
      sequelize,
      modelName: "Rating",
      tableName: "ratings",
    }
  );
  return Rating;
};
