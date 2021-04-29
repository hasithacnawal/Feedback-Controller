const express = require("express");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
require("dotenv").config();
const db = require("../models");
const { register, login } = require("../sevice/adminService");
const Admin = db.Admin;
const Organization = db.Organization;
const router = express.Router();

//Register
router.post("/", register);

// Login API
router.post("/login", login);

router.get("/:id", async (req, res) => {
  let { id } = req.params;
  await Admin.findByPk(id, {
    include: [
      {
        model: Organization,
        as: "Organization",
        attributes: ["name", "email"],
      },
    ],
  })
    .then((value) => {
      if (value) {
        res.json(value);
      } else {
        res.status(500).json("Admin not found");
      }
    })
    .catch((err) => {
      res.status(404).send();
    });
});
router.get("/", async (req, res) => {
  const admins = await Admin.findAll({
    include: [
      {
        model: Organization,
        as: "Organization",
        attributes: ["name", "email"],
      },
    ],
  });
  res.json(admins);
});

router.get("/seed", async (req, res) => {
  const admin = await Admin.create({
    name: "shehani",
    email: "sheani@mail.com",
    password: "1234",
    phone: "07414551325",
    organizationId: "1",
  });
  return res.json(admin);
});
module.exports = router;
