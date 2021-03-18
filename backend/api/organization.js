const express = require("express");
const Organization = require("../models/Organization");

const router = express.Router();

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
module.exports = router;
