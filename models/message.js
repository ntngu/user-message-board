const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  title: { type: String, required: true, minLength: 1 },
  time_stamp: { type: Date(), required: true },
  text: { type: String, required: true, minLength: 1 },
});

module.exports = mongoose.model("Message", MessageSchema);