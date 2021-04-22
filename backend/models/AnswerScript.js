"use strict";

module.exports = (sequelize, DataTypes) => {
  const AnswerScript = sequelize.define(
    "answerScripts",
    {
      userId: { type: DataTypes.INTEGER, allowNull: true },
      surveyId: { type: DataTypes.INTEGER },
    },
    {
      sequelize,
      modelName: "AnswerScript",
      tableName: "answerScripts",
      timestamps: true,
    }
  );
  return AnswerScript;
};
