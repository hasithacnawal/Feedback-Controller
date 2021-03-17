const db = require("../connect/db");

const Sequelize = require("sequelize");

const User = db.define(
  "user_table",
  {
    id: {
      type: Sequelize.INTEGER,
      unique: true,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    user_name: { type: Sequelize.STRING, allowNull: false },
    password: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, unique: true, allowNull: false },
  },
  {
    modelName: "user_table",
    db,
    tableName: "user_table",
    timestamps: false,
  }
);

module.exports = User;
