const mongoose = require("mongoose");
const joi = require("joi");
const AppError = require("../middleware/AppError");
const postsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  details: { type: String, required: true },
  img: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Post", postsSchema);
