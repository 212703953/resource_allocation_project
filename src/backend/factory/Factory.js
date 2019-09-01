var db = require("../db");

var Factory = {
  getfactories: function(callback) {
    return db.query("SELECT * from factory", callback);
  },
  createfactory: function(factory, callback) {
    return db.query(
      "Insert into factory(id, name, subbusiness, shift1, shift2, shift3) values(?, ?, ?, ?,?,?)",
      [factory.id, factory.name, factory.subbusiness, factory.shift1, factory.shift2, factory.shift3],
      callback,
    );
  },
};

module.exports = Factory;
