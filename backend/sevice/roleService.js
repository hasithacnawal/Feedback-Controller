const db = require("../models");
const Role = db.Role;

const postRole= async (req, res) => {
    const { name } = req.body;
  
    try {
      const role = await Role.create({ name });
      return res.json(role);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  const getAllRoles = async (req, res) => {
    const roles = await Role.findAll(
     
    );
    res.json(roles);
  };

  const putRole = async(req, res) => {
    const id = req.params.id;
  
    Role.update(req.body, {
      where: { id: id }
    }).then(() => {
      res.status(200).send("updated successfully a role with id = " + id);
      });
      
  
  };

  module.exports={postRole, getAllRoles, putRole}