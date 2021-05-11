const express = require("express");
const db = require("../models");
const { postRole, getAllRoles } = require("../sevice/roleService");
const router = express.Router();

const Role = db.Role;

router.post("/",postRole )

router.get("/",getAllRoles);

module.exports = router;
