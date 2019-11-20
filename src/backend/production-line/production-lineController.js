var fs = require("fs");
var path = require("path");
var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
var Production_line = require("./production-line");
//var Factory = require("./Factory");
//var Sub_business = require ("../sub_business/Sub_business");

router.get("/", function(req, res) {
  Production_line.getproduction_lines(function(err, rows) {
    if (err) {
      res.status(400).json(err);
    } else {
       
        for (const r of rows) {
          r["id"]=r.production_line_id;
          delete r.production_line_id;
          //r["business"] = r.subbusiness;
          //delete r.subbusiness;
        }
        res.json(rows);
    }
  });
});

router.post("/", function(req, res) {
  Production_line.createproduction_line(req.body, function(err, count) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(req.body);
    }
  });
});

router.put("/", function(req, res) {
  Production_line.updateproduction_line(req.body, function(err, count) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(req.body);
    }
  });
});

router.delete("/:id", function(req, res) {
  Production_line.deleteproduction_line(req.params.id, function(err, count) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(req.params.id);
    }
  });
});

module.exports = router;
