var express = require('express');
var app = express();
var cors = require('cors');

// ADD THESE TWO LINES

app.use(cors());

var FactoryController = require('./factory/FactoryController');
app.use('/factory', FactoryController);

module.exports = app;