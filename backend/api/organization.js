const express = require("express");

const db = require("../models");
const { postOrgnization, getAllOrganizations,getOrganizationById, deleteOrgByID,putOrganization } = require("../sevice/organizationService");


const router = express.Router();

//relations

router.post("/", postOrgnization);
router.get("/",getAllOrganizations) ;
router.get("/:id",getOrganizationById);
router.delete("/:id",deleteOrgByID);
router.put("/:id",putOrganization);

module.exports = router;
