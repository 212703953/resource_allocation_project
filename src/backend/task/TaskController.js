var fs = require("fs");
var path = require("path");
var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
var Task = require("./Task");

router.get("/", function(req, res) {
    Task.getTasks(function(err, rows) {
    if (err) {
      res.status(400).json(err);
    } else {
      for (const r of rows) {
        r["id"] = r.task_id;
        delete r.task_id;
      }
      res.json(rows);
    }
  });
});

router.post("/", function(req, res) {
    Task.createTask(req.body, function(err, count) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(req.body);
    }
  });
});

router.put("/", function(req, res) {
    Task.updateTask(req.body, function(err, count) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(req.body);
    }
  });
});

router.delete("/:id", function(req, res) {
    Task.deleteTask(req.params.id, function(err, count) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(req.params.id);
    }
  });


});

module.exports = router;
