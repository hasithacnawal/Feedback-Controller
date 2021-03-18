const db = require("../connect/db");

const Sequelize = require("sequelize");

const Organization = db.define(
  "organizations",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,
    },
  },
  {
    modelName: "Organization",
    db,
    tableName: "organizations",
    timestamps: true,
  }
);

module.exports = Organization;
