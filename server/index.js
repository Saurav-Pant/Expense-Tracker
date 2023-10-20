const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const createRoute = require("./router/createRoute");
const editRoute = require("./router/editRoute");
const SignupRoute = require("./router/SignUp");
const LoginRoute = require("./router/Login");
const app = express();

app.use(express.json({ limit: "10mb" }));

app.use(
  session({
    secret: "sauravpant123",
    resave: false,
    saveUninitialized: false,
  })
);

const corsOpts = {
  origin: "*",
  credentials: true,
  methods: ["GET", "POST", "HEAD", "PUT", "PATCH", "DELETE"],
};
app.use(cors(corsOpts));
app.options("*", cors());

app.use(passport.initialize());
app.use(passport.session());

app.use("/", (req, res) => {
  res.send("Checking is working or not");
});

app.use("/api/records", createRoute); // Route for expense records
app.use("/edit", editRoute); // Route for edit
app.use("/SignUp", SignupRoute); // Route for Signup
app.use("/Login", LoginRoute); // Route for Login

module.exports = app;
