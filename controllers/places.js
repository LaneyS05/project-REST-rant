const express = require("express");
const places = express.Router();
//const place = require("../models/places.js");
const Comment = require("../models/comment");
const db = require("../models");

places.get("/", async (req, res) => {
  const allPlaces = await db.Place.find();

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
  create(req.body).then(() => {
    res.redirect("/places");
  });
});

places.get("/new", (req, res) => {
  res.render("places/new");
});

places.delete("/:id/rant/:rantId", (req, res) => {
  res.send("GET /places/:id/rant/:rantId stub");
});

places.post("/:id/comment", (req, res) => {
  console.log("post comment", req.body);
  if (req.body.author === "") {
    req.body.author = undefined;
  }
  req.body.rant = req.body.rant ? true : false;
  db.Place.findById(req.params.id)
    .then((place) => {
      db.Comment.create(req.body)
        .then((comment) => {
          place.comments.push(comment.id);
          place
            .save()
            .then(() => {
              res.redirect(`/places/${req.params.id}`);
            })
            .catch((err) => {
              res.render("error404");
            });
        })
        .catch((err) => {
          res.render("error404");
        });
    })
    .catch((err) => {
      res.render("error404");
    });
});

places.get("/:id/edit", (req, res) => {
  res.send("GET edit form stub");
});

places.post("/:id/rant", (req, res) => {
  res.send("GET /places/:id/rant stub");
});

places.get("/:id", (req, res) => {
  db.Place.findById(req.params.id)
    .populate("comments")
    .then((place) => {
      //console.log(place.comments);
      res.render("places/show", { place });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

places.delete("/:id", (req, res) => {
  res.send("DELETE /places/:id stub");
});

places.put("/:id", (req, res) => {
  res.send("PUT /places/:id stub");
});

module.exports = places;
