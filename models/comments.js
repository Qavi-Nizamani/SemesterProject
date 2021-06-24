const mongoose = require("mongoose");
const messagesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

module.exports = mongoose.model("Message", messagesSchema);
