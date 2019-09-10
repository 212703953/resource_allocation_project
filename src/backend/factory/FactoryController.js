var fs = require("fs");
var path = require("path");
var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
var Factory = require("./Factory");
var Sub_business = require ("../sub_business/Sub_business");

router.get("/", function(req, res) {
  Factory.getfactories(function(err, rows) {
    if (err) {
      res.status(400).json(err);
    } else {
       
        for (const r of rows) {
          r["id"]=r.factory_id;
          delete r.factory_id;
          //r["business"] = r.subbusiness;
          //delete r.subbusiness;
        }
        res.json(rows);
    }
  });
});

router.post("/", function(req, res) {
  Factory.createfactory(req.body, function(err, count) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(req.body);
    }
  });
});

router.put("/", function(req, res) {
  Factory.updatefactory(req.body, function(err, count) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(req.body);
    }
  });
});

router.delete("/:id", function(req, res) {
  Factory.deletefactory(req.params.id, function(err, count) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(req.params.id);
    }
  });


});

module.exports = router;
