require("dotenv").config();
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const createRoute = require("./router/createRoute");
const editRoute = require("./router/editRoute");
const SignupRoute = require("./router/SignUp");
const LoginRoute = require("./router/Login");

const app = express();

const corsOpts = {
  origin: "*",
  methods: ["GET", "POST", "HEAD", "PUT", "PATCH", "DELETE"],
  credentials: true,
};

app.use(cors(corsOpts));

app.use(express.json({ limit: "10mb" }));

app.use(
  session({
    secret: "sauravpant123",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());

app.use("/", (req, res) => {
  res.status(200).json("Working Fine");
});

app.use("/api/records", createRoute); // Route for expense records
app.use("/edit", editRoute); // Route for edit
app.use("/signup", SignupRoute); // Route for Signup
app.use("/login", LoginRoute); // Route for Login

module.exports = app;
