"use strict";

module.exports = (sequelize, DataTypes) => {
  const MultipleOptionAnswer = sequelize.define(
    "multipleOptionAnswers",
    {
      multipleOptionId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "MultipleOptionAnswer",
      tableName: "multipleOptionAnswers",
    }
  );
  return MultipleOptionAnswer;
};
