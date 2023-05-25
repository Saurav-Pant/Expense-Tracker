require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
require("./passport");
const expenseRouter = require("./router/routers");
const createRoute = require("./router/createRoute");
const editRoute = require("./router/editRoute");

const app = express();
app.use(express.json()); // For parsing application/json (middleware)

const MONGO_URI = process.env.MONGO_URI;

// Session middleware

app.use(
  session({
    secret: "sauravpant",
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
