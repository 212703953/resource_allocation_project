var db = require("../db");


var Requirement = {
  getRequirements: function(callback) {
    return db.query("Select requirement.requirement_id ,requirement.name,  requirement_type.requirement_type from requirement left join requirement_type on requirement.type_id = requirement_type.requirement_id", callback)
  },
  createRequirement: function(requirement, callback) {
    return db.query(
      "Insert into requirement  (requirement.requirement_id,  requirement.name, requirement.type_id) select ?, ? ,requirement_type.requirement_id    FROM requirement_type where requirement_type.requirement_type = ? ",
      [requirement.id ,requirement.name, requirement.requirement_type],
      callback,
    );
  },
  updateRequirement: function(requirement,callback){
    return db.query(
      "Update requirement set name=?, requirement_type.requirement_type=?  where requirement_id=?",   [requirement.requirement_id, requirement.type_id, requirement.name],
      callback,
    );
  },

  deleteRequirement: function(id,callback){
    return db.query(
      "Delete from Requirement where requirement_id=?", [id],
      callback,
    );
  }
};

module.exports = Requirement;
