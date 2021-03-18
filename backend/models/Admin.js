const db = require("../connect/db");

const Sequelize = require("sequelize");

const Admin = db.define(
  "admins",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    modelName: "Admin",
    db,
    tableName: "admins",
    timestamps: true,
  }
);

module.exports = Admin;
