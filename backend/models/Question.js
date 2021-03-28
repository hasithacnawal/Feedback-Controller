"use strict";
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define(
    "questions",
    {
      uuid: {
        type: DataTypes.UUID,
        default: DataTypes.UUIDV4,
        allowNull: false,
      },
      qName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      surveyId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      modelName: "Question",
      sequelize,
      tableName: "questions",
      timestamps: true,
    }
  );
  return Question;
};
