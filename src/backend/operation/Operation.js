var db = require("../db");


var Operation = {
  getOperations: function(callback) {
    return db.query("Select operation.operation_id, operation.name from operation", callback)
  },
  createOperation: function(operation, callback) {
    return db.query(
      "Insert into operation(operation_id, name) values(?, ?)",
      [operation.operation_id, operation.name],
      callback,
    );
  },
  updateOperation: function(operation,callback){
    return db.query(
      "Update operation set name=?  where operation_id=?",   [operation.name],
      callback,
    );
  },

  deleteOperation: function(id,callback){
    return db.query(
      "Delete from Operation where operation_id=?", [id],
      callback,
    );
  }
};

module.exports = Operation;
