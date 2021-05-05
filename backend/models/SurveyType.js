"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const SurveyType = sequelize.define(
    "surveyTypes",
    {
      value: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "SurveyType",
      tableName: "surveyTypes",
    }
  );
  return SurveyType;
};
