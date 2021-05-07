"use strict";
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    "roles",
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      modelName: "Role",
      sequelize,
      tableName: "roles",
      timestamps: false,
    }
  );
  return Role;
};
