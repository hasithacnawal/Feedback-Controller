const express = require("express");
const admin = require("../data/admin");
const orgs = require("../data/orgs");
const roles = require("../data/roles");
const db = require("../models");
const router = express.Router();

router.get("/", async (req, res) => {
  const organizations = await db.Organization.bulkCreate(orgs);
  const role = await db.Role.bulkCreate(roles);
  const admins = await db.Admin.bulkCreate(admin);
  res.send({ organizations, role, admins });
  console.log("oranization data inserted");

  //res.send({admins});
});

module.exports = router;
