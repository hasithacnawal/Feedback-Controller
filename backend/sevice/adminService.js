const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

require("dotenv").config();
const db = require("../models");
const Admin = db.Admin;
const Organization = db.Organization;
const Role = db.Role;

const register = function (req, res) {
  const { name, email, phone, password, organizationId, roleId, role } =
    req.body;
  if (
    name == undefined ||
    name == "" ||
    password == undefined ||
    password == "" ||
    email == undefined ||
    email == ""
  ) {
    res.status(401).json({
      message: "Fill Required Fields",
      status: res.statusCode,
    });
  } else {
    Admin.findOne({
      attributes: ["name"],
      where: {
        email,
      },
    }).then((value) => {
      if (value === null) {
        //HASH THE PASSWORD
        bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(password, salt, function (err, hash) {
            // CRETAE RECORD IN DB
            Admin.create({
              name,
              email,
              phone,
              organizationId,
              roleId,
              role,
              password: hash,
            })
              .then((value) =>
                res.status(201).json({
                  message: "Account Has Created Successfully",
                  status: res.statusCode,
                })
              )
              .catch((err) =>
                res.status(404).json({
                  message: "Something went wrong",
                  status: res.statusCode,
                })
              );
          });
        });
      } else {
        res.status(401).json({
          message: "Email already Taken",
          status: res.statusCode,
        });
      }
    });
  }
};

const changePassword = async (req, res) => {
  const { id } = req.params;
  const { oldPassword, password } = req.body;

  await Admin.findByPk(id)
    .then((value) => {
      const dbPassword = value.getDataValue("password");
      bcrypt.compare(oldPassword, dbPassword, function (err, result) {
        if (result) {
          bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, function (err, hash) {
              Admin.update(
                { password: hash },
                {
                  where: { id: value.id },
                }
              );
              res.status(200).json({
                message: "Password Changed",
              });
            });
          });
        } else {
          res.status(401).json({
            message: "Enter your correct current password",
            status: res.statusCode,
          });
        }
      });
    })
    .catch((err) => {
      res.status(404).send();
    });
};

const login = function (req, res) {
  const { email, password } = req.body;
  if (
    password == "" ||
    password == undefined ||
    email == "" ||
    email == undefined
  ) {
    res.status(401).json({
      message: "Fill All Fields",
      status: res.statusCode,
    });
  } else {
    // check mail in db or not

    Admin.findOne({
      include: [
        {
          model: Organization,
          as: "Organization",
          attributes: ["id", "name", "email"],
        },
        {
          model: Role,
          as: "Role",
          attributes: ["id", "name"],
        },
      ],
      where: {
        email,
      },
    }).then((value) => {
      if (value === null) {
        res.status(401).json({
          message: "Email is not Registered Please SignUp",
          status: res.statusCode,
          token: "",
        });
      } else {
        // if mail is there check the password is correct or wrong
        const dbPassword = value.getDataValue("password");

        const userDetail = {
          name: value.getDataValue("name"),
          id: value.getDataValue("id"),
        };

        bcrypt.compare(password, dbPassword, function (err, result) {
          if (result) {
            const token = JWT.sign(userDetail, process.env.JWTSecret, {
              expiresIn: "90s",
            });
            res.status(200).json({
              message: "Logged In successfully",
              status: res.statusCode,
              token,
              value,
            });
          } else {
            res.status(401).json({
              message: "Invalid Crendential given",
              status: res.statusCode,
              token: "",
            });
          }
        });
      }
    });
  }
};
const findAllAdmins = async (req, res) => {
  const admins = await Admin.findAll({
    include: [
      {
        model: Organization,
        as: "Organization",
        attributes: ["name", "email"],
      },
    ],
  });
  res.json(admins);
};

const findAdminById = async (req, res) => {
  let { id } = req.params;
  await Admin.findByPk(id, {
    include: [
      {
        model: Organization,
        as: "Organization",
        attributes: ["name", "email"],
      },
      {
        model: Role,
        as: "Role",
        attributes: ["id", "name"],
      },
    ],
  })
    .then((value) => {
      if (value) {
        res.json(value);
      } else {
        res.status(500).json("Admin not found");
      }
    })
    .catch((err) => {
      res.status(404).send();
    });
};
const findByOrgId = async (req, res) => {
  let { orgId } = req.params;
  await Admin.findAll({
    include: [
      {
        model: Organization,
        as: "Organization",
        attributes: ["name", "email"],
      },
    ],
    // where: {
    //   organizationId: orgId,
    //   role: ["OrgAdmin", "Editor", "Moderator"],
    // },
  })
    .then((value) => {
      if (value != []) {
        res.json(value);
      } else {
        res.status(500).json("Admins Not Available");
      }
    })
    .catch((err) => {
      res.status(404).send();
    });
};

const putAdmin = async (req, res) => {
  const id = req.params;

  Admin.update(req.body, {
    where: { id: id },
  }).then(() => {
    res.status(200).send("updated successfully an admin with id = " + id);
  });
};

module.exports = {
  register,
  login,
  findAdminById,
  findAllAdmins,
  findByOrgId,
  putAdmin,
  changePassword,
};
