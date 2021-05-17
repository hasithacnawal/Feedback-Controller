const express = require("express");
const db = require("../models");
const { postRole, getAllRoles, putRole } = require("../sevice/roleService");
const router = express.Router();

const Role = db.Role;

router.post("/",postRole )

router.get("/",getAllRoles);
router.put("/:id",putRole);

module.exports = router;
