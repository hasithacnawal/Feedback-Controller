const db = require("../connect/db");

const Sequelize = require("sequelize");

const Role = db.define(
  "roles",
  {
    uuid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    desc: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    modelName: "Role",
    db,
    tableName: "roles",
    timestamps: false,
  }
);
module.exports = Role;
