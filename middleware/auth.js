const joi = require("joi");
const User = require("../models/users");
const AppError = require("../middleware/AppError");
const wrapAsync = require("../util/wrapAsync");

const isLoggedIn = function (req, res, next) {
  if (!req.isAuthenticated()) {
    req.flash("error", "You must be logged in first.");
    return res.status(400).redirect("/login");
  }
  next();
};

//METHOD FOR AUTHENTICATION
const loginVerification = wrapAsync(async function (req, res, next) {
  //GETTING USER INFO FROM MONGODB
  const { email, password } = req.body;
  const user = await User.findAndValidate(email, password);
  if (user) {
    const token = await user.generateAuthToken();
    req.session.jwt = token;
    req.user = user;
    next();
  } else {
    res.status(203).send("Wrong Email or Password");
  }
});

//POST VALIDATION
const postValidate = async function (post) {
  const postSchema = joi
    .object({
      title: joi.string().required().min(3),
      postImg: joi.string().required().min(8),
      details: joi.string().required().min(8),
    })
    .required();
  const validation = await postSchema.validate(post, { abortEarly: false });
  return validation;
};

//COMMENT VALIDATION
const commentValidate = async function (comment) {
  const commentSchema = joi
    .object()
    .keys({
      comment: joi.string().empty().required().messages({
        "string.empty": `Empty 'Comment' is not allowed.`,
        "any.required": `Empty 'Comment' is not allowed.`,
      }),
    })
    .required();
  const validation = await commentSchema.validate(comment, {
    abortEarly: false,
  });
  return validation;
};
module.exports = {
  isLoggedIn,
  loginVerification,
  postValidate,
  commentValidate,
};
