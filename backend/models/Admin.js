const db = require("../connect/db");

const Sequelize = require("sequelize");

const Admin = db.define(
  "admins",
  {
    uuid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
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
    organizationId: {
      type: Sequelize.INTEGER,
    },
    roleId: {
      type: Sequelize.INTEGER,
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

// ("use strict");
// const { Model } = require("sequelize");
// module.exports = (sequelize, DataTypes) => {
//   class Admin extends Model {
//     static associate(models) {}
//   }
//   Admin.init(
//     {
//       uuid: {
//         type: DataTypes.UUID,
//         default: DataTypes.UUIDV4,
//         PrimaryKey: true,
//       },
//       name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       password: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       phone: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//     },
//     {
//       sequelize,
//       modelName: "Admin",
//       tableName: "admins",
//       timestamps: true,
//     }
//   );
//   return Admin;
// };
