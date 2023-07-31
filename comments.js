// Create web server
var express = require("express");
var router = express.Router();
var db = require("../models");

// Get route for retrieving all comments
router.get("/api/comments", function(req, res) {
  db.Comment.findAll({}).then(function(dbComment) {
    res.json(dbComment);
  });
});

// POST route for saving a new comment
router.post("/api/comments", function(req, res) {
  console.log(req.body);
  db.Comment.create({
    name: req.body.name,
    comment: req.body.comment
  }).then(function(dbComment) {
    res.json(dbComment);
  });
});

// DELETE route for deleting comments
router.delete("/api/comments/:id", function(req, res) {
  db.Comment.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbComment) {
    res.json(dbComment);
  });
});

// PUT route for updating comments
router.put("/api/comments", function(req, res) {
  db.Comment.update(
    {
      name: req.body.name,
      comment: req.body.comment
    },
    {
      where: {
        id: req.body.id
      }
    }
  ).then(function(dbComment) {
    res.json(dbComment);
  });
});

module.exports = router;