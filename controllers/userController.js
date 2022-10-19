const User = require("../models/user");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

exports.user_create_get = (req, res, next) => {
  res.render("sign-up", {});
};

exports.user_login_get = (req, res, next) => {
  res.render("log-in", {});
};

exports.user_create_post = [
  body("first_name").trim().isLength({ min: 1 }).escape(),
  body("last_name").trim().isLength({ min: 1 }).escape(),
  body("username")
    .trim()
    .isLength({ min: 4 })
    .withMessage("Minimum username length is 4 characters.")
    .escape(),
  body("password")
    .trim()
    .isLength({ min: 6 })
    .withMessage("Minimum password length is 6 characters.")
    .escape(),
  body("confirm_password")
    .trim()
    .isLength({ min: 6 })
    .withMessage("Minimum password length is 6 characters.")
    .escape()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Password confirmation does not match password.");
      }
      return true;
    }),

  (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      res.render("sign-up", {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        errors: errors.array(),
      });
      return;
    }
    var date = new Date();
    bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
      const user = new User({
        name_first: req.body.first_name,
        name_last: req.body.last_name,
        username: req.body.username,
        password: hashedPassword,
        time_created: date.toString(),
      }).save((err) => {
        if (err) {
          return next(err);
        }
        res.redirect("log-in");
      });
    });
  },
];
