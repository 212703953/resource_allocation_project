var fs = require("fs");
var path = require("path");
var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
var Requirement = require("./Requirement");

router.get("/", function(req, res) {
    Requirement.getRequirements(function(err, rows) {
    if (err) {
      res.status(400).json(err);
    } else {
      for (const r of rows) {
        r["id"] = r.requirement_id;
        delete r.requirement_id;
      }
      res.json(rows);
    }
  });
});

router.post("/", function(req, res) {
    Requirement.createRequirement(req.body, function(err, count) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(req.body);
    }
  });
});

router.put("/", function(req, res) {
    Requirement.updateRequirement(req.body, function(err, count) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(req.body);
    }
  });
});

router.delete("/:id", function(req, res) {
    Requirement.deleteRequirement(req.params.id, function(err, count) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(req.params.id);
    }
  });


});

module.exports = router;
