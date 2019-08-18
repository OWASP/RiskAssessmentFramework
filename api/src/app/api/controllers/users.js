const userModel = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
module.exports = {
  create: function(req, res, next) {
    userModel.create(
      {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        isVerified: false,
        country: req.body.country,
        field: req.body.field
      },
      function(err, result) {
        if (err) next(err);
        else console.log("User successfully created");

        res.json({
          status: "success",
          message: "User added successfully!!!",
          data: result
        });
      }
    );
  },

  authenticate: function(req, res, next) {
    userModel.findOne({ email: req.body.email }, function(err, userInfo) {
      if (err) {
        next(err);
      } else {
        if (bcrypt.compareSync(req.body.password, userInfo.password)) {
          const token = jwt.sign(
            { id: userInfo._id },
            req.app.get("secretKey"),
            { expiresIn: "1h" }
          );
          res.json({
            status: "success",
            message: "user found!!!",
            data: { user: userInfo, token: token }
          });
        } else {
          res.json({
            status: "error",
            message: "Invalid email/password!!!",
            data: null
          });
        }
      }
    });
  },
  getUserById: function(req, res, next) {
    userModel.findOne({ _id: req.params.id }, function(err, userInfo) {
      if (err) {
        next(err);
      } else {
        res.json({
          status: "success",
          message: "user found!!!",
          data: { user: userInfo }
        });
      }
    });
  }
};
