const express = require("express");

const {
  register,
  login,
  findAdminById,
  findAllAdmins,
  findByOrgId,putAdmin
} = require("../sevice/adminService");

const router = express.Router();

//Register
router.post("/", register);

// Login API
router.post("/login", login);

router.get("/:id", findAdminById);
router.get("/findByOrgId/:orgId", findByOrgId);
router.get("/", findAllAdmins);
router.put("/:id",putAdmin);

module.exports = router;
