const express = require("express");
const db = require("../models");
const router = express.Router();

const Question = db.Question;

router.get("/", async (req, res) => {
  await Question.findAll();
});
