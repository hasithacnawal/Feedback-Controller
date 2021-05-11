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

  module.exports={postRole, getAllRoles}