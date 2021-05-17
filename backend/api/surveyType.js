const express = require("express");
const { postSurveyType, getAllSurveyTypes, putSurveyType } = require("../sevice/surveyTypeService");
const router = express.Router();


router.post("/", postSurveyType);

router.get("/",getAllSurveyTypes);

router.get("/:id",putSurveyType);

module.exports = router; 