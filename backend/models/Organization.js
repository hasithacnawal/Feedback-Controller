module.exports = (sequelize, DataTypes) => {
  const Organization = sequelize.define(
    "organizations",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        primartKey: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
      },
    },
    {
      modelName: "Organization",
      sequelize,
      tableName: "organizations",
      timestamps: true,
    }
  );
  return Organization;
};

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
