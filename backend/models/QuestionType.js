"use strict";

module.exports = (sequelize, DataTypes) => {
  const QuestionType = sequelize.define(
    "questionTypes",
    {
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "QuestionType",
      tableName: "questionTypes",
    }
  );
  return QuestionType;
};
