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
      primartKey: true,
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

// "use strict";
// const { Model } = require("sequelize");
// module.exports = (sequelize, DataTypes) => {
//   class Organization extends Model {
//     static associate(models) {}
//   }
//   Organization.init(
//     {
//       name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         primartKey: true,
//       },
//       phone: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       address: {
//         type: DataTypes.STRING,
//       },
//     },
//     {
//       sequelize,
//       modelName: "Organization",
//       tableName: "organizations",
//       timestamps: true,
//     }
//   );
//   return Organization;
// };
