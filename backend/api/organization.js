const express = require("express");
const orgs = require("../data/orgs");
const db = require("../models");

const Admin = db.Admin;
const Organization = db.Organization;

const router = express.Router();

//relations

router.post("/", async (req, res) => {
  const { name, email, phone, address } = req.body;
  try {
    const org = await Organization.create({
      name,
      email,
      phone,
      address,
    });
    return res.json(org);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
router.get("/", async (req, res) => {
  const organization = await Organization.findAll({
    include: [
      {
        model: Admin,
        as: "Admins",
      },
    ],
  });
  res.json(organization);
});

module.exports = router;
