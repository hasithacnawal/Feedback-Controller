module.exports = (sequelize, DataTypes) => {
  const Survey = sequelize.define(
    "surveys",
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      anonymous: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
      },
      organizationId: {
        type: DataTypes.INTEGER,
      },
      createrId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      modelName: "Survey",
      sequelize,
      tableName: "surveys",
      timestamps: true,
    }
  );
  return Survey;
};
