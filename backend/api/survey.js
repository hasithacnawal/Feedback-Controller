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
router.get("/findByCreater/:createrId", async (req, res) => {
  const { createrId } = req.params;
  await Survey.findAll({
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
    where: {
      createrId: createrId,
    },
  })
    .then((value) => {
      res.send(value);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
router.get("/findByOrg/:orgId", async (req, res) => {
  const { orgId } = req.params;
  await Survey.findAll({
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
    where: {
      organizationId: orgId,
    },
  })
    .then((value) => {
      res.send(value);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
