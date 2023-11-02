const express = require("express");
const places = express.Router();
const db = require("../models");

places.get("/", async (req, res) => {
  const allPlaces = await db.find();

  res.render("index", {
    breads: allPlaces,
    title: "Places Page",
  });
});

places.post("/", (req, res) => {
  db.create(req.body);
  res.redirect("/places");
});

places.get("/:id", (req, res) => {
  db.findById(req.params.id)
    .then((foundPlace) => {
      res.render("show", { place: foundPlace });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

//Everything below is not being used rn
places.get("/new", (req, res) => {
  res.render("places/new");
});

places.put("/:id", (req, res) => {
  res.send("PUT /places/:id stub");
});

places.delete("/:id", (req, res) => {
  res.send("DELETE /places/:id stub");
});

places.get("/:id/edit", (req, res) => {
  res.send("GET edit form stub");
});

places.post("/:id/rant", (req, res) => {
  res.send("GET /places/:id/rant stub");
});

places.delete("/:id/rant/:rantId", (req, res) => {
  res.send("GET /places/:id/rant/:rantId stub");
});

module.exports = places;
