var db = require("../db");


var Factory = {
  getfactories: function(callback) {
    return db.query("SELECT factory.factory_id, factory.sub_business_id, factory.name, factory.shift1, factory.shift2, factory.shift3, sub_business.name as business from factory LEFT JOIN sub_business USING (sub_business_id)", callback)
  },
  createfactory: function(factory, callback) {
    return db.query(
      "Insert into factory(factory_id, name, sub_business_id, shift1, shift2, shift3) SELECT ?, ?, sub_business_id, ?,?,? FROM sub_business where sub_business.name= ?",
      [factory.id, factory.name, factory.shift1, factory.shift2, factory.shift3, factory.business],
      callback,
    );
  },
  updatefactory: function(factory,callback){
    return db.query(
      "Update factory set name=?, subbusiness=?, shift1=?, shift2=?, shift3=? where id=?",   [factory.name, factory.business, factory.shift1, factory.shift2, factory.shift3, factory.id],
      callback,
    );
  },

  deletefactory: function(id,callback){
    return db.query(
      "Delete from factory where factory_id=?", [id],
      callback,
    );
  }
};

module.exports = Factory;
