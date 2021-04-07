"use strict";

module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define(
    "answers",
    {
      text: {
        type: DataTypes.STRING,
      },
      rating: {
        type: DataTypes.DOUBLE,
      },
      userId: {
        type: DataTypes.INTEGER,
      },
      questionId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Answer",
      tableName: "answers",
      timestamps: true,
    }
  );
  return Answer;
};
