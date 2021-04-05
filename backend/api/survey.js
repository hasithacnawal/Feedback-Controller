const express = require("express");
const db = require("../models");

const router = express.Router();

const Survey = db.Survey;

router.post("/", async (req, res) => {
  const { title, type, organizationId, createrId, questions } = req.body;
  const survey = await Survey.create(
    {
      title,
      type,
      organizationId,
      createrId,
      questions,
    },
    {
      include: [
        {
          association: db.Survey.hasMany(db.Question),
          as: "questions",
          include: [db.Question.hasMany(db.MultipleOption)],
        },
      ],
    }
  );
  return res.json(survey);
});

router.get("/", async (req, res) => {
  await Survey.findAll({
    attributes: ["uuid", "title", "anonymous", "type"],
    include: [
      { model: db.Admin },
      {
        model: db.Organization,
      },
    ],
  })
    .then((value) => {
      res.send(value);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
