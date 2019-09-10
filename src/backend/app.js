var express = require('express');
var app = express();
var cors = require('cors');

// ADD THESE TWO LINES

app.use(cors());

var FactoryController = require('./factory/FactoryController');
var Sub_BusinessController = require('./sub_business/Sub_businessController');
app.use('/factory', FactoryController);
app.use('/subbusiness',Sub_BusinessController);
module.exports = app;