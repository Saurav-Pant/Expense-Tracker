require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
// require("./passport");
const expenseRouter = require("./router/routers");
const createRoute = require("./router/createRoute");
const editRoute = require("./router/editRoute");
const SignupRoute = require("./router/SignUp");
const LoginRoute = require("./router/Login");
const ProfileRoute = require("./router/profile");

const app = express();
const MONGO_URI = process.env.MONGO_URI;
app.use(express.json()); // For parsing application/json (middleware)

// Session middleware
app.use(
  session({
    secret: "sauravpant123",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(
  cors({
    origin: "https://expensetracker20.netlify.app",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
); // For CORS (middleware)

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", expenseRouter); // Route for authentication

// Create expense record route
app.use("/api/records", createRoute); // Route for expense records

app.use("/edit", editRoute); // Route for edit

app.use("/SignUp", SignupRoute); // Route for Signup

app.use("/Login", LoginRoute); // Route for Login

app.use("/profile", ProfileRoute); // Route for Profile

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

// Start the server
app.listen(process.env.PORT || 3001, () => {
  console.log("Server is running...");
});
