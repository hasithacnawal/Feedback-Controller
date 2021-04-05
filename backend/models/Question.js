"use strict";
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define(
    "questions",
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      questionTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      questionType: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Small Text",
      },
      required: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
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
