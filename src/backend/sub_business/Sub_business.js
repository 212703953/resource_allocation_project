var db = require("../db");

var Sub_business = {
  getsub_businesses: function(callback) {
    return db.query("SELECT * from sub_business", callback)
  },
  createsub_business: function(sub_business, callback) {
    return db.query(
      "Insert into sub_business(id, name) values(?, ?)",
      [sub_business.id, sub_business.name],
      callback,
    );
  },
  updatesub_business: function(sub_business,callback){
    return db.query(
      "Update sub_business set name=? where id=?",   [sub_business.name, sub_business.id],
      callback,
    );
  },

  deletesub_business: function(id,callback){
    return db.query(
      "Delete from sub_business where id=?", [id],
      callback,
    );
  }
};

module.exports = Sub_business;