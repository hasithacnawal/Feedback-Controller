const express = require("express");

const {
  register,
  login,
  findAdminById,
  findAllAdmins,
} = require("../sevice/adminService");

const router = express.Router();

//Register
router.post("/", register);

// Login API
router.post("/login", login);

router.get("/:id", findAdminById);
router.get("/", findAllAdmins);

module.exports = router;
