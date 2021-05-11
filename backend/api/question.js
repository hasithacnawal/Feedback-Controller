const express = require("express");
const db = require("../models");
const router = express.Router();
const { getAllQuestions} = require("../sevice/questionService");



const Question = db.Question;

router.get("/",getAllQuestions);
