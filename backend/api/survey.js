const express = require("express");
const db = require("../models");
const { postSurvey } = require("../sevice/surveyService");
const { getSurveyById } = require("../sevice/surveyService");
const { getAllSurveys } = require("../sevice/surveyService");
const { getSurveysByCreatorId } = require("../sevice/surveyService");
const { getSurveysByOrgId, putSurvey } = require("../sevice/surveyService");

const router = express.Router();

const Survey = db.Survey;

router.post("/",postSurvey);
router.get("/:id",getSurveyById );
router.get("/",getAllSurveys);
router.get("/findByCreater/:createrId",getSurveysByCreatorId );
router.get("/findByOrg/:orgId", getSurveysByOrgId);
router.put("/:id",putSurvey);

module.exports = router;
