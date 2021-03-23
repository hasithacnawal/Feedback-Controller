const express = require("express");
const router = express.Router();
const Role = require("../models/Role");

router.post("/", async (req, res) => {
  const { name } = req.body;

  try {
    const role = await Role.create({ name });
    return res.json(role);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
