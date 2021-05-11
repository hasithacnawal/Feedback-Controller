const express = require("express");

const db = require("../models");
const { postOrgnization, getAllOrganizations,getOrganizationById } = require("../sevice/organizationService");


const router = express.Router();

//relations

router.post("/", postOrgnization);
router.get("/",getAllOrganizations) ;
router.get("/:id",getOrganizationById);

module.exports = router;
