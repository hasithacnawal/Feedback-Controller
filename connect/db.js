const Sequelize = require("sequelize");

module.exports = new Sequelize("feedbackmodule", "root", "1234", {
  host: "127.0.0.1",
  dialect: "mysql",
});
