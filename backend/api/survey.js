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
          include: [{ association: db.Question.hasMany(db.MultipleOption) }],
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
      {
        model: db.Question,
        as: "questions",
        include: [
          {
            model: db.MultipleOption,
            as: "multipleOptions",
            attributes: ["id", "option"],
          },
        ],
      },
      { model: db.Admin, attributes: ["id", "name", "email"] },
      {
        model: db.Organization,
        attributes: ["id", "name", "email"],
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
