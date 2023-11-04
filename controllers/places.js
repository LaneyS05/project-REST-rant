const express = require("express");
const places = express.Router();
const db = require("../models");

places.get("/", async (req, res) => {
  const allPlaces = await db.find();

  res.render("places/index", {
    places: allPlaces,
    title: "Places Page",
  });
});

places.post("/", (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = "http://placekitten.com/400/400";
  }
  db.create(req.body).then(() => {
    res.redirect("/places");
  });
});

places.get("/new", (req, res) => {
  res.render("places/new");
});

places.delete("/:id/rant/:rantId", (req, res) => {
  res.send("GET /places/:id/rant/:rantId stub");
});

places.get("/:id/edit", (req, res) => {
  res.send("GET edit form stub");
});

places.post("/:id/rant", (req, res) => {
  res.send("GET /places/:id/rant stub");
});

places.get("/:id", (req, res) => {
  db.findById(req.params.id)
    .then((foundPlace) => {
      res.render("places/show", { place: foundPlace });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

places.put("/:id", (req, res) => {
  res.send("PUT /places/:id stub");
});

places.delete("/:id", (req, res) => {
  res.send("DELETE /places/:id stub");
});

module.exports = places;
