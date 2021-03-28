"use strict";

const fs = require("fs");
const path = require("path");
const { Sequelize, DataTypes } = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

db.User = require("./User")(sequelize, DataTypes);
db.Admin = require("./Admin")(sequelize, DataTypes);
db.Organization = require("./Organization")(sequelize, DataTypes);
db.Question = require("./Question")(sequelize, DataTypes);
db.Survey = require("./Survey")(sequelize, DataTypes);
db.Role = require("./role")(sequelize, DataTypes);

// Relationships
db.Organization.hasMany(db.Admin, {
  foreignKey: "organizationId",
  as: "Admins",
});
db.Admin.belongsTo(db.Organization, {
  foreignKey: "organizationId",
  as: "Organization",
});

db.Organization.hasMany(db.User);
db.User.belongsTo(db.Organization);

db.Role.hasMany(db.Admin);
db.Admin.belongsTo(db.Role);

db.Organization.hasMany(db.Survey);
db.Survey.belongsTo(db.Organization);

db.Admin.belongsToMany(db.Survey, {
  through: "admin_survey",
});
db.Survey.belongsToMany(db.Admin, {
  through: "admin_survey",
});

db.Survey.belongsTo(db.Admin, {
  foreignKey: "createrId",
});

db.Survey.hasMany(db.Question);
db.Question.belongsTo(db.Survey);

module.exports = db;
