var fs = require("fs");
var path = require("path");
var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
var Sub_business = require("./Sub_business");

router.get("/", function(req, res) {
  Sub_business.getsub_businesses(function(err, rows) {
    if (err) {
      res.status(400).json(err);
    } else {
      for (const r of rows) {
        r["id"] = r.sub_business_id;
        delete r.sub_business_id;
      }
      res.json(rows);
    }
  });
});

router.post("/", function(req, res) {
  Sub_business.createsub_business(req.body, function(err, count) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(req.body);
    }
  });
});

router.put("/", function(req, res) {
  Sub_business.updatesub_business(req.body, function(err, count) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(req.body);
    }
  });
});

router.delete("/:id", function(req, res) {
  Sub_business.deletesub_business(req.params.id, function(err, count) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(req.params.id);
    }
  });


});

module.exports = router;