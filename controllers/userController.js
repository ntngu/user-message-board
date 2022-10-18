const User = require("../models/user");
const async = require("async");
const { body, validationResult } = require("express-valdiator");

exports.user_create_get = (req, res, next) => {
  res.render("sign-up", {});
};

exports.user_create_post = [
  body("first_name").trim().isLength({ min: 1 }).escape(),
  body("last_name").trim().isLength({ min: 1 }).escape(),
  body("username").trim().isLength({ min:  4}).withMessage("Minimum length is 4 characters.").escape(),
  body("password").trim().isLength({ min: 6 }).withMessage("Minimum length is 6 characters.").escape(),

  (req, res, next) => {
    const errors = validationResult(req);
    var date = new Date();
  },
];