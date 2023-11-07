// DEPENDENCIES
const express = require("express");
const methodOverride = require("method-override");
const placesController = require("./controllers/places.js"); //<-- nodemon will not run if this is placed
const mongoose = require("mongoose");
const dbconnect = require("./models");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
const MONGO_URI = process.env.MONGO_URI;

// MIDDLEWARE
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//Places
app.use("/places", placesController);

// ROUTES
app.get("/", (req, res) => {
  res.render("Home");
});

app.get("*", (req, res) => {
  res.render("error404");
});

const start = async () => {
  try {
    await dbconnect();
  } catch (e) {
    console.log("error");
  }

  // LISTEN
  app.listen(PORT, () => {
    console.log("listening on port", PORT);
  });
};
start();

module.exports = app;
