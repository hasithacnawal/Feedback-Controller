("use strict");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "users",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      organizationId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      modelName: "User",
      sequelize,
      tableName: "users",
      timestamps: true,
    }
  );
  return User;
};

// ("use strict");
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
//       modelName: "User",
//       tableName: "users",
//       timestamps: true,
//     }
//   );
//   return User;
// };
