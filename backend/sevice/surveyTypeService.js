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

  const putSurveyType = async(req, res) => {
    const id = req.params.id;
  
    SurveyType.update(req.body, {
      where: { id: id }
    }).then(() => {
      res.status(200).send("updated successfully a surveyType with id = " + id);
      });
      
  
  };

  module.exports={postSurveyType,getAllSurveyTypes,putSurveyType}