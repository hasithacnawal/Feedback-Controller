const db = require("../connect/db");

const Sequelize = require("sequelize");

const User = db.define(
  "users",
  {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
  },
  {
    modelName: "User",
    db,
    tableName: "users",
    timestamps: true,
  }
);

module.exports = User;
// "use strict";
// const { Model } = require("sequelize");
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     static associate(models) {}
//   }
//   User.init(
//     {
//       username: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       password: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       email: {
//         type: DataTypes.STRING,
//         unique: true,
//         allowNull: false,
//       },
//     },
//     {
//       sequelize,
//       modelName: "user",
//       db,
//       tableName: "users",
//       timestamps: true,
//     }
//   );
// };
