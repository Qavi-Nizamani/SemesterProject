const mongoose = require("mongoose");

//USER SCHEMA FOR STORING USERS
const usersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: Boolean,
});

module.exports = mongoose.model("User", usersSchema);
