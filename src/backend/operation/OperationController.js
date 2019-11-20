var fs = require("fs");
var path = require("path");
var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
var Operation = require("./Operation");

router.get("/", function(req, res) {
    Operation.getOperations(function(err, rows) {
    if (err) {
      res.status(400).json(err);
    } else {
      for (const r of rows) {
        r["id"] = r.operation_id;
        delete r.operation_id;
      }
      res.json(rows);
    }
  });
});

router.post("/", function(req, res) {
    Operation.createOperation(req.body, function(err, count) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(req.body);
    }
  });
});

router.put("/", function(req, res) {
    Operation.updateOperation(req.body, function(err, count) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(req.body);
    }
  });
});

router.delete("/:id", function(req, res) {
    Operation.deleteOperation(req.params.id, function(err, count) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(req.params.id);
    }
  });


});

module.exports = router;
