var officegen = require('officegen');

var fs = require('fs');
var path = require('path');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
var Factory = require('./Factory');

router.get('/', function (req, res) {
    Factory.getfactories(function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

router.post('/', function (req, res) {
    Factory.createfactory(req.body,function(err,count){
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.json(req.body);
        }
    });
});

router.put('/', function (req, res) {
    Factory.updatefactory(req.body,function(err,count){
        if(err)
        {
        res.status(400).json(err);
        }
        else{
        res.json(req.body);
        }
        });        
});



module.exports = router;