const db = require("../models");

const Question = db.Question;

const getAllQuestions=async (req, res) => {
    await Question.findAll();
  }

  module.exports={getAllQuestions}