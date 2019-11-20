var express = require('express');
var app = express();
var cors = require('cors');

// ADD THESE TWO LINES

app.use(cors());

var FactoryController = require('./factory/FactoryController');
var Sub_BusinessController = require('./sub_business/Sub_businessController');
var OperationController = require('./operation/OperationController');
var TaskController = require('./task/TaskController');
var RequirementController = require('./requirement/RequirementController');

var Production_lineController = require('./production-line/production-lineController');
var OperatorController = require('./operator/operatorController')
app.use('/factory', FactoryController);
app.use('/operator', OperatorController);
app.use('/subbusiness',Sub_BusinessController);
app.use('/operation',OperationController);
app.use('/task',TaskController);
app.use('/requirement',RequirementController);


module.exports = app;
app.use('/productionline',Production_lineController);
module.exports = app;
