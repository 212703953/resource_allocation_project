var db = require("../db");

var operator = {
  getoperators: function(callback) {
    return db.query("SELECT * FROM operator", callback)
  },
  createoperator: function(operator, callback) {
    return db.query(
      "INSERT INTO operator(operator_id, sso, last_name, first_name, shift_id) VALUES (?,?,?,?,?)",
      [operator.id,  operator.sso, operator.last_name, operator.first_name, operator.shift_id],
      callback,
    );
  },
  updateoperators: function(operator,callback){
    return db.query(
      "UPDATE operator SET sso=?, first_name=?, last_name=? WHERE operator_id=?",   [operator.sso, operator.first_name, operator.last_name, operator.id],
      callback,
    );
  },

  deleteoperator: function(id,callback){
    return db.query(
      "DELETE FROM operator  where operator_id=?", [id],
      callback,
    );
  }
};

module.exports = operator;