const db = require("../models");

const SurveyType = db.SurveyType;

const postSurveyType= async (req, res) => {
    const {value } = req.body;
  
    try {
      const surveyType = await SurveyType.create({value});
      return res.json(surveyType);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  const getAllSurveyTypes = async (req, res) => {
    const surveyTypes = await SurveyType.findAll(
     
    );
    res.json(surveyTypes);
  };

  module.exports={postSurveyType,getAllSurveyTypes}