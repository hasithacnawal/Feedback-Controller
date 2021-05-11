const db = require("../models");

const Survey = db.Survey;

const postSurvey = async (req, res) => {
    const {
      title,
      type,
      organizationId,
      createrId,
      surveyTypeId,
  
      questions,
    } = req.body;
    const survey = await Survey.create(
      {
        title,
        type,
        organizationId,
        createrId,
        surveyTypeId,
  
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
  };

  const getSurveyById = async (req, res) => {
    const { id } = req.params;
    await Survey.findByPk(id, {
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
  };

  const getAllSurveys = async (req, res) => {
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
  };

  const getSurveysByCreatorId = async (req, res) => {
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
  };

  const getSurveysByOrgId = async (req, res) => {
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
  }

  module.exports={postSurvey,getSurveyById,getAllSurveys, getSurveysByCreatorId,getSurveysByOrgId}