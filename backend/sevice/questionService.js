const db = require("../models");

const Question = db.Question;

const getAllQuestions=async (req, res) => {
    await Question.findAll();
  };


  const putquestions = async(req, res) => {
    const id = req.params.id;
  
    Question.update(req.body, {
      where: { id: id }
    }).then(() => {
      res.status(200).send("updated successfully a question with id = " + id);
      });
      
  
  };

  module.exports={getAllQuestions,putquestions}