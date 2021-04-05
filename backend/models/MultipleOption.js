"use strict";
module.exports = (sequelize, DataTypes) => {
  const MultipleOption = sequelize.define(
    "multiOptions",
    {
      option: {
        type: DataTypes.STRING,
      },
      // questionId: {
      //   type: DataTypes.INTEGER,
      // },
    },
    {
      sequelize,
      modelName: "MultipleOption",
      tableName: "multiOptions",
      timestamps: true,
    }
  );
  return MultipleOption;
};
