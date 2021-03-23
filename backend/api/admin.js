const express = require("express");
const Admin = require("../models/Admin");

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, phone, password, organizationId, roleId } = req.body;
  try {
    const admin = await Admin.create({
      name,
      email,
      phone,
      password,
      organizationId,
      roleId,
    });
    return res.json(admin);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  let { id } = req.params;
  Admin.findByPk(id)
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
