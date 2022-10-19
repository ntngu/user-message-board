var express = require("express");
var router = express.Router();
var passport = require("passport");
var messageController = require("../controllers/messageController");
var userController = require("../controllers/userController");

/** GET home page. */
router.get("/", messageController.index);

/** GET and POST signup */
router.get("/sign-up", userController.user_create_get);
router.post("/sign-up", userController.user_create_post);

/** GET and POST message */
router.get("/post", messageController.message_create_get);
router.post("/post", messageController.message_create_post);

/** GET and POST log-in*/
router.get("/log-in", userController.user_login_get);
router.post(
  "/log-in",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
  })
);

/** GET log-out */
router.get("/log-out", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

module.exports = router;
