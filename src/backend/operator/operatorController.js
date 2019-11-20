var fs = require("fs");
var path = require("path");
var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
var Operator = require("./operator");


router.get("/", function(req, res) {
  Operator.getoperators(function(err, rows) {
    if (err) {
      res.status(400).json(err);
    } else {
       
        for (const r of rows) {
          r["id"]=r.operator_id;
          delete r.operator_id;
          //r["business"] = r.subbusiness;
          //delete r.subbusiness;
        }
        res.json(rows);
    }
  });
});

router.post("/", function(req, res) {
  Operator.createoperator(req.body, function(err, count) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(req.body);
    }
  });
});

router.put("/", function(req, res) {
  Operator.updateoperator(req.body, function(err, count) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(req.body);
    }
  });
});

router.delete("/:id", function(req, res) {
  Operator.deleteoperator(req.params.id, function(err, count) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(req.params.id);
    }
  });


});

module.exports = router;
