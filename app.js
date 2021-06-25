const express = require("express");
const app = express();
const session = require("express-session");
const User = require("./models/users");
const Contact = require("./models/comments");
const path = require("path");
require("dotenv/config");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let PORT = process.env.PORT || 8000;
//SESSION CONFIGURATIONS
const sessionConfig = {
  secret: "thisismysecretkey",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};
app.use(session(sessionConfig));

//EXPRESS SPECIFIC
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// METHOD FOR CATCHING ASYNC ERRORS
const wrapAsync = function (fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((e) => next(e));
  };
};

// CHECKING WHETHER USER IS LOGGED IN OR NOT!
const isLoggedIn = function (req, res, next) {
  console.log("admin");
  let user = req.session.user;
  if (user && user.isAdmin) {
    return next();
  }
  return res.send("You must be logged in first!");
};

//USER LOGIN AUTHENTICATION
const loginVerification = wrapAsync(async function (req, res, next) {
  console.log("insideVerification");
  //GETTING USER INFO FROM MONGODB
  const { email, password } = req.body;
  console.log(req.body);
  const user = await User.findOne({ email });
  console.log(user);
  if (user && user.email == email && user.password == password) {
    req.session.user = user;
    next();
  } else {
    res.status(203).send("Wrong Email or Password");
  }
});


// END POINTS
app.get("/static/admin.html", isLoggedIn, (req, res) => {
  console.log("working");
  console.log(__dirname);
  res.sendFile(path.join(__dirname , "static", "Admin.html"));
});
app.get("/static/logout", isLoggedIn, (req, res) => {
  req.session.user = "";
  res.redirect("/static");
});

//RENDER STATIC PAGES AFTER ADMIN ROUTE VERIFICATION
app.use("/static", express.static("static"));
// app.use(express.static(path.join(__dirname, "static")));


app.post("/login", loginVerification, (req, res, next) => {
  console.log("verfied");
  res.redirect("/static/admin.html");
});

app.get("/api/contact", async (req, res) => {
  console.log("ok");
  const contacts = await Contact.find({});
  res.json(contacts);
});

//Storing contact form data into database
app.post("/contact", async (req, res) => {
  console.log(req.body);
  const { name, email, message } = req.body;
  const contact = new Contact({ name, email, message });
  await contact.save();
  // res.redirect("/static");
  res.json(contact);
});

//UNIVERSAL ERROR HANDLERs
app.use((err, req, res, next) => {
  const { message = "Something went wrong!", status = 500 } = err;
  res.redirect("/");
});

//LISTENING SERVER
app.listen(PORT, () => {
  console.log("listening");
});
