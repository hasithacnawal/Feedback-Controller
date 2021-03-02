const Sequelize = require("sequelize");

module.exports = new Sequelize("feedbackmodule", "root", "root1", {
  host: "127.0.0.1",
  dialect: "mysql",
});
