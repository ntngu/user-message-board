var express = require("express");
var router = express.Router();
var passport = require("passport");
var messageController = require("../controllers/messageController");
var userController = require("../controllers/userController");

/* GET home page. */
router.get("/", (req, res) => {
  res.render("index", { user: req.user });
});

/* GET and POST signup */
router.get("/sign-up", userController.user_create_get);
router.post("/sign-up", userController.user_create_post);

/* GET and POST message */
router.get("/post", messageController.message_create_get);
router.post("/post", messageController.message_create_post);

router.get("/log-in", userController.user_login_get);
router.post("/log-in", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/",
}));

module.exports = router;
