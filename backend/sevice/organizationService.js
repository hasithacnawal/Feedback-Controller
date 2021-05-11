const db = require("../models");
const orgs = require("../data/orgs");

const Admin = db.Admin;
const Organization = db.Organization;

const postOrgnization= async (req, res) => {
    const { name, email, phone, address } = req.body;
    try {
      const org = await Organization.create({
        name,
        email,
        phone,
        address,
      });
      return res.json(org);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  };
  const getAllOrganizations=async (req, res) => {
    const organizations = await Organization.findAll({
      include: [
        {
          model: Admin,
          as: "Admins",
        },
      ],
    });
    res.json(organizations);
  };

  const getOrganizationById=async (req, res) => {
    const { id } = req.params;
    const organization = await Organization.findByPk(id, {
      include: [
        {
          model: Admin,
          as: "Admins",
        },
        {
          model: db.Survey,
          as: "Surveys",
        },
      ],
    });
    res.json(organization);
  }
  

  module.exports={postOrgnization,getAllOrganizations,getOrganizationById}