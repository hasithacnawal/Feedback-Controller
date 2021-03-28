const express = require("express");
const orgs = require("../data/orgs");
const roles = require("../data/roles");
const db = require("../models");
const router = express.Router();

router.get("/", async (req, res) => {
  const organizations = await db.Organization.bulkCreate(orgs);
  const role = await db.Role.bulkCreate(roles);
  res.send({ organizations, role });
  console.log("oranization data inserted");
});

module.exports = router;
