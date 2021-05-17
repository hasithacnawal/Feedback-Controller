const express = require("express");

const {
  register,
  login,
  findAdminById,
  findAllAdmins,
  findByOrgId,
  putAdmin,
  changePassword,
} = require("../sevice/adminService");

const router = express.Router();

//Register
router.post("/", register);

// Login API
router.post("/login", login);

router.get("/:id", findAdminById);
router.get("/findByOrgId/:orgId", findByOrgId);
router.get("/", findAllAdmins);
router.put("/updateAdmin/:id", putAdmin);
router.put("/changePassword/:id", changePassword);

module.exports = router;
