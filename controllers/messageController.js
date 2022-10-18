const Message = require("../models/message");
const User = require("../models/user");
const async = require("async");
const { body, validationResult } = require("express-validator");

exports.index = (req, res) => {
  res.render("index", {
    title: "user-message-board",
  });
};

exports.message_create_get = (req, res, next) => {
  res.render("message_form", {
    title: "Post Message",
  });
};

exports.message_create_post = [
  body("msg_title").trim().isLength({ min: 1 }).escape(),
  body("msg_text").trim().isLength({ min: 1 }).escape(),
  (req, res, next) => {
    const errors = validationResult(req);
    var date = new Date();
    const msg = new Message({
      title: "Post Message",
      title: req.body.msg_title,
      text: req.body.msg_text,
      time_stamp: date.toString(),
    });

    if (!errors.isEmpty()) {
      async.parallel({}, (err, results) => {
        res.render("message_form", {
          title: "Post Message",
          msg_title: results.msg_title,
          msg_text: results.msg_text,
          errors: errors.array(),
        });
      });
      return;
    }

    msg.save((err) => {
      if (err) { 
        return next(err);
      }
      res.redirect("/");
    });
  },
];
