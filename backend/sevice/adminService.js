const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
require("dotenv").config();
const db = require("../models");
const Admin = db.Admin;
const Organization = db.Organization;

const register = function (req, res) {
  const { name, email, phone, password, organizationId, roleId } = req.body;
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
          name: value.getDataValue("username"),
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

module.exports = { register, login };