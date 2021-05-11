const express = require("express");
const { postSurveyType, getAllSurveyTypes } = require("../sevice/surveyTypeService");
const router = express.Router();


router.post("/", postSurveyType);

router.get("/",getAllSurveyTypes);

module.exports = router;