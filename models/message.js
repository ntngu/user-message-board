const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  title: { type: String, required: true, minLength: 1 },
  text: { type: String, required: true, minLength: 1 },
  time_stamp: { type: String, required: true, minLength: 1 },
  user: { type: String, required: true },
});

module.exports = mongoose.model("Message", MessageSchema);
