const Sequelize = require("sequelize");
const db = require("../connect/db");

const Question = db.define(
  "questions",
  {
    uuid: {
      type: Sequelize.UUID,
      default: Sequelize.UUIDV4,
      allowNull: false,
    },
    text: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    modelName: "Question",
    db,
    tableName: "questions",
    timestamps: true,
  }
);

module.exports = Question;
