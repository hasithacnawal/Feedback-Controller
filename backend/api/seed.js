const express = require("express");
const orgs = require("../data/orgs");
const roles = require("../data/roles");
const Organization = require("../models/Organization");
const Role = require("../models/role");
const router = express.Router();

router.get("/", async (req, res) => {
  const organizations = await Organization.bulkCreate(orgs);
  const role = await Role.bulkCreate(roles);
  res.send({ organizations, role });
  console.log("oranization data inserted");
});

module.exports = router;
