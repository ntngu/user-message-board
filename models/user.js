const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name_first: { type: String, required: true, minLength: 1 },
  name_last: { type: String, required: true, minLength: 1 },
  username: { type: String, required: true, minLength: 4},
  password: { type: String, required: true, minLength: 6 },
});

module.exports = mongoose.model("User", UserSchema);