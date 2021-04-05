"use strict";
module.exports = (sequelize, DataTypes) => {
  const MultipleOption = sequelize.define(
    "multipleOptions",
    {
      option: {
        type: DataTypes.STRING,
      },
      questionId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "MultipleOption",
      tableName: "multipleOptions",
      timestamps: true,
    }
  );
  return MultipleOption;
};
