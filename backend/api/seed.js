const express = require("express");
const admin = require("../data/admin");
const orgs = require("../data/orgs");
const roles = require("../data/roles");
const Admin = require("../models/Admin");
const Organization = require("../models/Organization");
const Role = require("../models/role");
const router = express.Router();

router.get("/", async (req, res) => {
  const organizations = await Organization.bulkCreate(orgs);
  const role = await Role.bulkCreate(roles);
  const admins =await Admin.bulkCreate(admin);
  res.json({ organizations, role,admins });
  console.log("oranization data inserted");
  
  //res.send({admins});
});

module.exports = router;
