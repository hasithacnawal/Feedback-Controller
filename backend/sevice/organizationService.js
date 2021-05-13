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

  const deleteOrgByID=async(req, res)=> {
    Organization.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "organization deleted successfully",
                org: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
};

const putOrganization = async(req, res) => {
  const id = req.params.id;

  Organization.update(req.body, {
    where: { id: id }
  }).then(() => {
    res.status(200).send("updated successfully an organization with id = " + id);
    });
    

};

  module.exports={postOrgnization,getAllOrganizations,getOrganizationById,deleteOrgByID,putOrganization}