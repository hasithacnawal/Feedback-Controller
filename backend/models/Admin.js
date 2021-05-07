"use strict";

module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define(
    "admins",
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        PrimaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING,
        defaultValue: "assets/images/user/admin.jpg",
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      organizationId: {
        type: DataTypes.INTEGER,
      },
      roleId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      modelName: "Admin",
      sequelize,
      tableName: "admins",
      timestamps: true,
    }
  );
  return Admin;
};

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
