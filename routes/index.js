var express = require("express");
var router = express.Router();
var messageController = require("../controllers/messageController");

/* GET home page. */
router.get("/", messageController.index);

/* GET and POST signup */
/* router.get("/sign-up", userController) */

/* GET and POST message */
router.get("/post", messageController.message_create_get);
router.post("/post", messageController.message_create_post);

module.exports = router;
