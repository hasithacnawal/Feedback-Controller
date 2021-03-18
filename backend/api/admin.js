const express = require("express");
const Admin = require("../models/Admin");

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, phone, password } = req.body;
  try {
    const admin = await Admin.create({
      name,
      email,
      phone,
      password,
    });
    return res.json(admin);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
module.exports = router;
