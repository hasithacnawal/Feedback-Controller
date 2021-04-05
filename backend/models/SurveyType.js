"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const SurveyType = sequelize.define(
    "surveyTypes",
    {
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "SurveyType",
      tableName: "surveyTypes",
    }
  );
  return SurveyType;
};
