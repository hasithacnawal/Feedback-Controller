const express = require("express");
const db = require("../models");
const router = express.Router();

const Role = db.Role;

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
