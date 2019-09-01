var db = require("../db");

var Factory = {
  getfactories: function(callback) {
    return db.query("SELECT * from factory", callback)
  },
  createfactory: function(factory, callback) {
    return db.query(
      "Insert into factory(id, name, subbusiness, shift1, shift2, shift3) values(?, ?, ?, ?,?,?)",
      [factory.id, factory.name, factory.business, factory.shift1, factory.shift2, factory.shift3],
      callback,
    );
  },
  updatefactory: function(factory,callback){
    return db.query(
      "Update factory set name=?, subbusiness=?, shift1=?, shift2=?, shift3=? where id=?",   [factory.name, factory.business, factory.shift1, factory.shift2, factory.shift3, factory.id],
      callback,
    );
  }
};

module.exports = Factory;
